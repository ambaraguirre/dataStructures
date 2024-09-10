import { Node, LinkedList } from "./linkedLists.js";

let list = new LinkedList();
let node1 = new Node(1);
let node2 = new Node(2);
let node3 = new Node(3);
let node4 = new Node(4);


list.append(node1);
list.append(node2);
list.append(node3);
list.prepend(node4);
list.delete(node3);
list.traverse();