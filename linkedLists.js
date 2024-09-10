class Node {
    constructor(value){
        this.value = value,
        this.next = null
    }
}

class LinkedList {
    constructor(){
        this.head = null
    }

    get_head(){
        console.log(this.head);
    }

    append(node){
        if(this.head == null){
            this.head = node;
            return;
        }

        let pointer = this.head;
        while(pointer.next != null){
            pointer = pointer.next;
        }
        pointer.next = node;
    }   

    prepend(node){
        node.next = this.head;
        this.head = node;
    }

    delete(node){
        if(node.value == this.head.value){
            this.head = this.head.next;
            return;
        }

        let pointer = this.head;
        while(pointer.next !=null){
            if(pointer.next.value == node.value){
                pointer.next = pointer.next.next;
                return;
            }
            pointer = pointer.next;
        }
    }

    traverse(){
        let pointer = this.head;
        while(pointer != null){
            console.log(pointer.value);
            pointer = pointer.next;
        }
    }
}

export{Node, LinkedList}