export default class vec2{
    constructor(x = 0, y = 0){
        this.x = x
        this.y = y
    }

    add(v){
        this.x += v.x
        this.y += v.y
        return this
    }

    static add(v1, v2){
        return new vec2(v1.x + v2.x, v1.y + v2.y)
    }

    devide(t){
        this.x /= t
        this.y /= t
        return this
    }

    minus(v){
        this.x -= v.x
        this.y -= v.y
        return this
    }

    static minus(v1, v2){
        return new vec2(v1.x - v2.x, v1.y - v2.y)
    }

    norm(){
        const sum = Math.abs(this.x) + Math.abs(this.y)
        return sum ? this.devide(sum) : this
    }
}