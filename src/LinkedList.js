export class Node {
    constructor(data) {
       this.data = data;
       this.next = null;
       this.prev = null
    }
 }
 export default class LinkedList {
    constructor() {
       this.head = null;
       this.tail = null;
       this.length = 0;
    }
    
    // function to add data to linked list
    add(data) {
       const newNode = new Node(data);
       if (!this.head) {
          this.head = newNode;
          this.tail = newNode;
       } 
       else {
           newNode.prev = this.tail
           this.tail.next = newNode;
           this.tail = newNode;
       }
       this.length++;
       return this;
    }
    
    // function to remove data from linked list
    remove(node) {
       if(node.prev){
            node.prev.next = node.next
       }else{
            this.head = node.next
       }
       if(node.next){
            node.next.prev = node.prev
       }else{
            this.tail = node.prev
       }
            this.length--
       return this
    }
 }