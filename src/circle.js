const colors = ["black", "red", "blue", "green"]

export default class Circle {

    constructor(x, y, vx, vy) {
        this.type = "Circle"
        this.x = x
        this.y = y
        this.vx = vx
        this.vy = vy
        this.r = 20
        this.lives = 3
        this.color = 'green'
        this.points = []        
    }

    contains(v) {
        const dist = Math.sqrt(Math.pow(v.x - this.x, 2) + Math.pow(v.y - this.y, 2))
        if(dist > this.r) return false
        return true
    }

    intersects(fig) {
        if(fig.type == "RightFig"){
            for (let i = 0; i < fig.N; i++) {
                if(this.contains(fig.point(i))) {
                    fig.lives -= 1
                    this.lives -= 1
                    fig.color = colors[Math.max(fig.lives, 0)]
                    this.color = colors[Math.max(this.lives, 0)]
                    return true
                }
            }
            return false
        }

        if(fig.type == "Circle"){
            const dist = Math.sqrt(Math.pow(fig.x - this.x, 2) + Math.pow(fig.y - this.y, 2))
            if(dist > this.r + fig.r) return false

            fig.lives -= 1
            this.lives -= 1
            fig.color = colors[Math.max(fig.lives, 0)]
            this.color = colors[Math.max(this.lives, 0)]
            return true
        }
    }

}