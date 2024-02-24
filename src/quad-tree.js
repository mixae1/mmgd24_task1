import LinkedList from "./LinkedList"
import Rectangle from "./rectangle"
import vec2 from "./vec2"

export default class QuadTree {
    constructor(boundary, parent = null, depth = 4) {
        if (!boundary) {
            throw TypeError('boundary is null or undefined')
        }

        if (!(boundary instanceof Rectangle)) {
            throw TypeError('boundary should be a Rectangle')
        }

        this._parent = parent
        this._boundary = boundary
        this._quads = [] // quads
        this._children = new LinkedList() // objects
        this._depth = depth
    }

    insert(rect) {
        let i
        if(this._depth <= 0 || (i = this._boundary.getQuadrant(rect)) == -1){
            this._children.add(rect)
            return 
        }

        if(this._quads.length == 0){
            this._subdivide()
        }

        this._quads[i].insert(rect)
    }

    get length() {
        return this._children.length
    }

    get hasChildren(){
        return this._children.length > 0
    }

    _updateChild(child){
        if(!this._boundary.contains_(child)){
            this._parent._updateChild(child)
            return
        }

        this.insert(child)
    }

    updateTree(sz){
        for (let curr = this._children.head; curr; curr = curr.next) {
            const child = curr.data

            if(!this._boundary.contains_(child)){
                this._children.remove(curr)
                this._parent._updateChild(child)
                continue
            }
            
            let i
            if(this._depth <= 0 || (i = this._boundary.getQuadrant(child)) == -1){
                continue 
            }
            
            this._children.remove(curr)
            if(this._quads.length == 0){
                this._subdivide()
            }
            this._quads[i].insert(child)
        }

        for(const quad of this._quads){
            quad.updateTree(sz)
        }
    }

    processCollisions(){
        this._processCollisions1(this._boundary.size)

        for(const quad of this._quads){
            quad._processCollisions2([this._children.head])
        }

        this.updateTree(this._boundary.size)        
    }

    _processCollisions1(sz){
        let current = this._children.head;
        while (current) {
            const r = current.data
            let current2 = current.next;
            while (current2){
                const r2 = current2.data
                if(r.intersects(r2)){
                    const v = new vec2(r.x - r2.x, r.y - r2.y).norm()
                    r.vx = v.x
                    r.vy = v.y
                    r2.vx = -v.x
                    r2.vy = -v.y
                }
                current2 = current2.next
            }


            if(r.left < 2 || r.right + 2 > sz.x) r.vx = -r.vx;
            if(r.top < 2 || r.bottom + 2 > sz.y) r.vy = -r.vy;

            r.x += r.vx
            r.y += r.vy

            if(r.lives <= 0) this._children.remove(current)
            
            current = current.next
        }

        for(const quad of this._quads){
            quad._processCollisions1(sz)
        }
    }

    _processCollisions2(heads){
        for(let curr of heads){
            for (; curr; curr = curr.next) {
                const r = curr.data
                for(let curr2 = this._children.head; curr2; curr2 = curr2.next){
                    const r2 = curr2.data
                    if(r.intersects(r2)){
                        const v = new vec2(r.x - r2.x, r.y - r2.y).norm()
                        r.vx = v.x
                        r.vy = v.y
                        r2.vx = -v.x
                        r2.vy = -v.y
                    }
                }
            }
        }

        heads.push(this._children.head)

        for(const quad of this._quads){
            quad._processCollisions2(heads)
        }
    }

    _subdivide() {
        for(const boundary of this._boundary.computeQuads()){
            this._quads.push(new QuadTree(boundary, this, this._depth - 1))
        }         
    }

    clear() {
        this._children = new LinkedList()
    }

    draw(context){

        if(false && this.hasChildren){
            context.beginPath()
            const t = this._boundary.topLeft
            context.moveTo(t.x, t.y)
            context.lineTo(this._boundary.right, this._boundary.top)
            context.lineTo(this._boundary.right, this._boundary.bottom)
            context.lineTo(this._boundary.left, this._boundary.bottom)
            context.lineTo(this._boundary.left, this._boundary.top)
            context.stroke()

            context.fillStyle = "black"
            context.fillText(this.length, t.x, t.y)
        }
        
        for (let curr = this._children.head; curr; curr = curr.next) {
            const r = curr.data
            context.beginPath()
            if(r.type == "RightFig"){
                context.moveTo(r.point(0).x, r.point(0).y)
                for (let i = 1; i < r.N; i++) {
                    const p = r.point(i)
                    context.lineTo(p.x, p.y)
                }
            }
            if(r.type == "Circle"){
                context.arc(r.x, r.y, r.r, 0, Math.PI * 2)
            }
            context.fillStyle = r.color
            context.fill()
        }

        for(const quad of this._quads){
            quad.draw(context)
        }
    }
}
