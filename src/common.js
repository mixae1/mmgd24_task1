import vec2 from "./vec2"

export default class Common{
    static colors = ["black", "red", "blue", "green"]
    constructor(type, x, y, n, r){
        this.type = type
        this.x = x
        this.y = y
        this.N = n
        this.r = r
        this.inner_r = Math.cos(Math.PI / this.N) * this.r
        this.lives = 3000000
        this.color = 'green'
    }

    possible_intersects(fig){
        const dist = Math.sqrt(Math.pow(fig.x - this.x, 2) + Math.pow(fig.y - this.y, 2))
        if(dist > this.r + fig.r) return false
        return true
    }

    inner_intersects(fig){
        const dist = Math.sqrt(Math.pow(fig.x - this.x, 2) + Math.pow(fig.y - this.y, 2))
        if(dist > this.inner_r + fig.inner_r) return false
        return true
    }

    decrement_live(fig){
        fig.lives -= 1
        this.lives -= 1
        fig.color = Common.colors[Math.max(fig.lives, 0)]
        this.color = Common.colors[Math.max(this.lives, 0)]
        return true
    }

    get center(){
        return new vec2(this.x, this.y)
    }

    get left() {
        return this.x - this.r
    }

    get right() {
        return this.x + this.r
    }

    get top() {
        return this.y - this.r
    }

    get bottom() {
        return this.y + this.r
    }

    get topLeft(){
        return new vec2(this.left, this.top)
    }

    get size(){
        return new vec2(this.right - this.left, this.bottom - this.top)
    }

    r_contains(point) {
        return (point.x >= this.x &&
            point.x < this.x + this.w &&
            point.y >= this.y &&
            point.y < this.y + this.h)
    }

    r_intersects_(rect) {
        return (this.x < rect.x + rect.w)
            && (rect.x < this.x + this.w)
            && (this.y < rect.y + rect.h)
            && (rect.y < this.y + this.w)
    }

    r_contains_(rect) {
        return this.r_contains(rect.center) && !this.intersects(rect)
    }

    computeQuads(){
        const w2 = this.w / 2
        const h2 = this.h / 2
        return [new Rectangle(this.x, this.y, w2, h2),
            new Rectangle(this.x + w2, this.y, w2, h2),
            new Rectangle(this.x, this.y + h2, w2, h2),
            new Rectangle(this.x + w2, this.y + h2, w2, h2)]
    }

    getQuadrant(rect){
        center = new vec2(this.x + this.w / 2, this.y + this.h / 2)
        if (rect.right < center.x)
        {
            if (rect.bottom < center.y)
                return 0;
            else if (rect.top >= center.y)
                return 2;
            else
                return -1;
        }
        else if (rect.left >= center.x)
        {
            if (rect.bottom < center.y)
                return 1;
            else if (rect.top >= center.y)
                return 3;
            else
                return -1;
        }
        else
            return -1;
    }
}