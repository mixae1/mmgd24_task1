import Common from "./common"
import vec2 from "./vec2"

export default class RightFig extends Common{

    constructor(x, y, vx, vy, n, r, angle) {
        super("RightFig", x, y, n, r)
        this.angle = angle
        this.vx = vx
        this.vy = vy
        this.points = []
        for (let i = 0; i < this.N; i++)
            this.points.push({x: (Math.cos(i * (2 * Math.PI / this.N) + this.angle) * this.r), y: (Math.sin(i * (2 * Math.PI / this.N) + this.angle) * this.r)})           
    }

    point(i){
        return new vec2(this.points[i].x + this.x, this.points[i].y + this.y)
    }

    contains(v) {
        for (let i = 0; i < this.N; i++){
            const a = this.point((i + 1) % this.N)
            const b = this.point(i)
            const n = {x: b.y - a.y , y: a.x - b.x }
            const v_a = {x: v.x - a.x, y: v.y - a.y}
            const dot = v_a.x * n.x + v_a.y * n.y
            if(dot > 0) return false
        }
        return true
    }

    intersects(fig) {
        if(!this.possible_intersects(fig)) return false

        // smart line intersections through dot products of verticies
        if(fig.type == "RightFig"){

            for (let i = 0; i < this.N; i++){
                const a = this.point(i)
                const b = this.point((i + 1) % this.N)
                const n = {x: b.y - a.y , y: a.x - b.x }

                let flag = -1
                let only_pos_dot_fl = true
                let t, t0
                for(let j = 0; j < fig.N; j++){
                    const v = fig.point(j).minus(a)
                    const dot = v.x * n.x + v.y * n.y
                    t = dot > 0 ? 1 : 0
                    if(j == 0){
                        flag = t
                        if(flag == 0) only_pos_dot_fl = false
                        t0 = t
                    }

                    if(flag != t){
                        flag = t
                        if(flag == 0) only_pos_dot_fl = false
                        // check b[j-1, j] and a[i], a[i + 1 % N]
                        const ja = fig.point(j - 1)
                        const jb = fig.point(j)
                        const jn = {x: jb.y - ja.y , y: ja.x - jb.x }
                        const jdota = (a.x - ja.x) * jn.x + (a.y - ja.y) * jn.y
                        const jdotb = (b.x - ja.x) * jn.x + (b.y - ja.y) * jn.y
                        if((jdota > 0) != (jdotb > 0)){
                            return this.decrement_live(fig)
                        }
                    }
                }

                if(t0 != t){
                    // check b[j-1, j] and a[i], a[i + 1 % N]
                    const ja = fig.point(fig.N - 1)
                    const jb = fig.point(0)
                    const jn = {x: jb.y - ja.y , y: ja.x - jb.x }
                    const jdota = (a.x - ja.x) * jn.x + (a.y - ja.y) * jn.y
                    const jdotb = (b.x - ja.x) * jn.x + (b.y - ja.y) * jn.y
                    if((jdota > 0) != (jdotb > 0)){
                        return this.decrement_live(fig)
                    }
                }

                if(only_pos_dot_fl) return false
            }
            
        }

        if(fig.type == "Circle" && this.possible_intersects(fig)){
            return this.decrement_live(fig)
        }
        return false
    }

}