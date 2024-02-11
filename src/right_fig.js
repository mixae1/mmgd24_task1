export default class RightFig {

    constructor(x, y, angle, n, vx, vy) {
        this.x = x
        this.y = y
        this.angle = angle
        this.vx = vx
        this.vy = vy
        this.N = n
        this.r = 20
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
        for (let i = 0; i < fig.N; i++) {
            if(this.contains(fig.point(i))) return true
        }
        return false
    }

}