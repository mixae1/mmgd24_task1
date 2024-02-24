import Common from "./common"
import vec2 from "./vec2"

export default class Circle extends Common {

    constructor(x, y, vx, vy, r) {
        super("Circle", x, y, 1, r)
        this.vx = vx
        this.vy = vy
        this.points = []        
    }

    contains(v) {
        const dist = Math.sqrt(Math.pow(v.x - this.x, 2) + Math.pow(v.y - this.y, 2))
        if(dist > this.r) return false
        return true
    }

    intersects(fig) {
        if(!this.possible_intersects(fig)) return false

        if(fig.type == "RightFig"){
            for (let i = 0; i < fig.N; i++) {
                if(this.contains(fig.point(i))) {
                    return this.decrement_live(fig)
                }                
            }

            //step 2
            // const add_verts = []
            // for (let i = 0; i < fig.N; i++) {
            //     const a = vec2.minus(fig.point(i), fig.center)
            //     const b = vec2.minus(fig.point((i + 1) % fig.N), fig.center)
            //     const n = vec2.add(a, b).norm()
            //     add_verts.push({x: this.x - this.r * n.x, y: this.y - this.r * n.y })
            // }

            // for(const v of add_verts)
            //     if(fig.contains(v)){
            //         return this.decrement_live(fig)
            //     }

            //step 3
            if(this.inner_intersects(fig)){
                return this.decrement_live(fig)
            }
        }

        if(fig.type == "Circle" && this.possible_intersects(fig)){
            return this.decrement_live(fig)
        }

        return false
    }

}