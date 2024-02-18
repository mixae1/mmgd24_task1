const colors = ["black", "red", "blue", "green"]

export default class RightFig {

    constructor(x, y, vx, vy, n, r, angle) {
        this.type = "RightFig"
        this.x = x
        this.y = y
        this.angle = angle
        this.vx = vx
        this.vy = vy
        this.N = n
        this.r = r
        this.lives = 3
        this.color = 'green'
        this.points = []
        for (let i = 0; i < this.N; i++)
            this.points.push({x: (Math.cos(i * (2 * Math.PI / this.N) + this.angle) * this.r), y: (Math.sin(i * (2 * Math.PI / this.N) + this.angle) * this.r)})           
    }

    point(i){
        return {x: this.points[i].x + this.x, 
            y: this.points[i].y + this.y}
    }

    contains(v) {
        for (let i = 0; i < this.N; i++){
            const a = this.point(i)
            const b = this.point((i + 1) % this.N)
            const n = {x: b.y - a.y , y: a.x - b.x }
            const v_a = {x: v.x - a.x, y: v.y - a.y}
            const dot = v_a.x * n.x + v_a.y * n.y
            if(dot > 0) return false
        }
        return true
    }

    intersects(fig) {
        // smart line intersections through dot products of verticies
        if(fig.type == "RightFig"){

            for (let i = 0; i < this.N; i++){
                const a = this.point(i)
                const b = this.point((i + 1) % this.N)
                const n = {x: b.y - a.y , y: a.x - b.x }

                let flag = -1
                let only_pos_dot_fl = true
                for(let j = 0; j < fig.N; j++){
                    const v = fig.point(j)
                    const dot = (v.x - a.x) * n.x + (v.y - a.y) * n.y
                    const t = dot > 0 ? 1 : 0
                    if(flag == -1){
                        flag = t
                        if(flag == 0) only_pos_dot_fl = false
                        continue;
                    }

                    if(flag != t){
                        flag = t
                        if(flag == 0) only_pos_dot_fl = false
                        // check b[j-1, j] and a[i], a[i + 1 % N]
                        const ja = fig.point(j)
                        const jb = fig.point(j - 1)
                        const jn = {x: jb.y - ja.y , y: ja.x - jb.x }
                        const jdota = (a.x - ja.x) * jn.x + (a.y - ja.y) * jn.y
                        const jdotb = (b.x - ja.x) * jn.x + (b.y - ja.y) * jn.y
                        if((jdota > 0) != (jdotb > 0)){
                            fig.lives -= 1
                            this.lives -= 1
                            fig.color = colors[Math.max(fig.lives, 0)]
                            this.color = colors[Math.max(this.lives, 0)]
                            return true
                        }
                    }
                }
                if(only_pos_dot_fl) return false
            }
            return false
        }

        if(fig.type == "Circle"){
            return fig.intersects(this)
        }
    }

}