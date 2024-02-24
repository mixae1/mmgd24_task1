import Common from "./common"
import LinkedList from "./LinkedList"
import Rectangle from "./rectangle"
import RightFig from "./right_fig"
import Circle from "./circle"
import vec2 from "./vec2"

export default class QuadTree {
    constructor(boundary, parent = null, depth = 8) {
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
        if(!this._boundary.r_contains_(child)){
            this._parent._updateChild(child)
            return
        }

        this.insert(child)
    }

    updateTree(){
        let current = this._children.head
        while (current) {
            const child = current.data

            // if(r.x < 0 || r.x > canvas.width) r.vx = -r.vx;
            // if(r.y < 0 || r.y > canvas.height) r.vy = -r.vy;

            child.x += child.vx
            child.y += child.vy

            if(!this._boundary.r_contains_(child)){
                this._children.remove(current)
                this._parent._updateChild(child)
                return
            }
            
            let i
            if(this._depth <= 0 || (i = this._boundary.getQuadrant(rect)) == -1){
                return 
            }
            
            this._children.remove(current)
            if(this._quads.length == 0){
                this._subdivide()
            }
            this._quads[i].insert(rect)
            
            current = current.next;
        }

        if(this._quads.length > 0){
            for(const quad of this._quads){
                quad.updateTree()
            }
        }
    }

    processCollisions(){
        this._processCollisions1()

        let current = this._children.head
        while (current) {
            for(const quad of this._quads){
                quad._processCollisions2(current.data)
            }
        }

        this.updateTree()        
    }

    _processCollisions1(){
        let current = this._children.head;
        while (current) {
            const r = current.data
            let current2 = this._children.head.next;
            while (current2){
                const r2 = current2.data
                if(r.intersects(r2)){
                    v = new vec2(r.x - r2.x, r.y - r2.y).norm()
                    r.vx = v.x
                    r.vy = v.y
                    r2.vx = -v.x
                    r2.vy = -v.y
                }
                current2 = current2.next
            }

            if(r.lives <= 0) this._children.remove(current)
            
            current = current.next
        }

        for(const quad of this._quads){
            quad._processCollisions1()
        }
    }

    _processCollisions2(r){
        for(const quad of this._quads){
            quad._processCollisions2(r)
        }

        let current2 = this._children.head
        while (current2){
            const r2 = current2.data
            if(r.intersects(r2)){
                v = new vec2(r.x - r2.x, r.y - r2.y).norm()
                r.vx = v.x
                r.vy = v.y
                r2.vx = -v.x
                r2.vy = -v.y
            }
            for(const quad of this._quads){
                quad._processCollisions2(r2)
            }

            current2 = current2.next
        }
    }

    _subdivide() {
        for(const boundary of this._boundary.computeQuads()){
            this._quads.push(new QuadTree(boundary, this, this._depth - 1))
        }         
    }

    clear() {
        this._points = []
        this._children = new LinkedList()
        this._hasChildren = false
    }
}
