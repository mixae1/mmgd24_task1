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
        return vec2(this.x + v.x, this.y + v.y)
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
        return vec2(this.x - v.x, this.y - v.y)
    }

    norm(){
        const sum = Math.abs(this.x) + Math.abs(this.y)
        return sum ? this.devide(sum) : this
    }
}