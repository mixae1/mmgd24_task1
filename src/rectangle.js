import vec2 from "./vec2"

export default class Rectangle {
    constructor(x, y, w, h) {
        this.x = x
        this.y = y
        this.w = w
        this.h = h 
    }

    get left() {
        return this.x
    }

    get right() {
        return this.x + this.w
    }

    get top() {
        return this.y
    }

    get bottom() {
        return this.y + this.h
    }

    get topLeft(){
        return vec2(this.x, this.y)
    }

    get size(){
        return vec2(w, h)
    }

    contains(point) {
        return (point.x >= this.x &&
            point.x < this.x + this.w &&
            point.y >= this.y &&
            point.y < this.y + this.h)
    }

    contains_(rect) {
        return this.contains(rect.topLeft) || this.intersects(rect)
    }

    intersects(rect) {
        return (this.x < rect.x + rect.w)
            && (rect.x < this.x + this.w)
            && (this.y < rect.y + rect.h)
            && (rect.y < this.y + this.w)
    }

    computeBox(i){
        switch (i) {
            case 0:
                return new Rectangle(this.x, this.y, this.w / 2, this.h / 2)
            case 1:
                return new Rectangle(this.x + this.w / 2, this.y, this.w / 2, this.h / 2)
            case 2:
                return new Rectangle(this.x, this.y + this.h / 2, this.w / 2, this.h / 2)
            case 3:
                return new Rectangle(this.x + this.w / 2, this.y + this.h / 2, this.w / 2, this.h / 2)
            default:
                return undefined
                break;
        }
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
        const center = new vec2(this.x + this.w / 2, this.y + this.h / 2)
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