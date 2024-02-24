import LinkedList from "./LinkedList";
import { Node } from "./LinkedList";

describe('', () => {
    it('', () => {
        const ll = new LinkedList()
        expect(ll.length == 0).toBeTruthy()
        ll.add(1)
        expect(ll.length).toBe(1)
        expect(ll.head.data).toBe(1)
        expect(ll.tail.data).toBe(1)
        ll.add(2)
        expect(ll.length).toBe(2)
        expect(ll.head.data).toBe(1)
        expect(ll.tail.data).toBe(2)
    })
})

describe('', () => {
    it('', () => {
        const ll = new LinkedList()
        expect(ll.length == 0).toBeTruthy()
        ll.add(1)
        expect(ll.length).toBe(1)
        expect(ll.head.data).toBe(1)
        expect(ll.tail.data).toBe(1)
        ll.remove(ll.head)
        expect(ll.length).toBe(0)
        expect(ll.head).toBe(null)
        expect(ll.tail).toBe(null)
    })
})

describe('', () => {
    it('', () => {
        const ll = new LinkedList()
        expect(ll.length == 0).toBeTruthy()
        ll.add(1)
        ll.add(2)
        ll.remove(ll.head)
        expect(ll.length).toBe(1)
        expect(ll.head.data).toBe(2)
        expect(ll.tail.data).toBe(2)
    })
})

describe('', () => {
    it('', () => {
        const ll = new LinkedList()
        expect(ll.length == 0).toBeTruthy()
        ll.add(1)
        ll.add(2)
        ll.remove(ll.tail)
        expect(ll.length).toBe(1)
        expect(ll.head.data).toBe(1)
        expect(ll.tail.data).toBe(1)
    })
})

describe('', () => {
    it('', () => {
        const ll = new LinkedList()
        expect(ll.length == 0).toBeTruthy()
        ll.add(1)
        ll.add(2)
        ll.add(3)
        ll.remove(ll.head.next)
        expect(ll.length).toBe(2)
        expect(ll.head.data).toBe(1)
        expect(ll.tail.data).toBe(3)
    })
})