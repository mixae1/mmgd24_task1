import RightFig from './right_fig'
import vec2 from './vec2'

describe('Triangle defaults', () => {
    it('is not groovy :(', () => {
        const tr = new RightFig(0, 0, 0, 0, 3, 20, 0)
        expect(tr.lives == 3).toBeTruthy()
        expect(tr.points.length == 3).toBeTruthy()
        expect(tr.type == "RightFig").toBeTruthy()
    })
})

describe('Triangle contains', () => {
    it('should be java', () => {
        const tr = new RightFig(0, 0, 0, 0, 3, 20, 0)
        expect(tr.contains({x: 0, y: 0})).toBeTruthy()
        expect(tr.contains({x: 20, y: 0})).toBeTruthy()
        expect(tr.contains({x: -9.9, y: 0})).toBeTruthy()
        expect(tr.contains(tr.point(1))).toBeTruthy()
        expect(tr.contains({x: 20.01, y: 0})).toBeFalsy()
        expect(tr.contains({x: tr.point(1).x - 0.01, y: 0})).toBeFalsy()
    })
})

describe('Triangle intersects', () => {
    it('should be intersex..', () => {
        const tr1 = new RightFig(0, 0, 0, 0, 3, 20, 0)
        const tr2 = new RightFig(29.9, 0, 0, 0, 3, 10, Math.PI)
        expect(tr1.intersects(tr2)).toBeTruthy()
        const tr3 = new RightFig(-10 + tr1.point(1).x, 0, 0, 0, 3, 10, 0)
        expect(tr3.intersects(tr1)).toBeTruthy()
        expect(tr1.intersects(tr3)).toBeTruthy()
    })
})

describe('Triangle intersects inside', () => {
    it('should be intersecting inside..', () => {
        const tr1 = new RightFig(0, 0, 0, 0, 3, 20, 0)
        const tr2 = new RightFig(0, 0, 0, 0, 3, 10, 0)
        expect(tr1.intersects(tr2)).toBeTruthy()
    })
})