const Node = require("./doubly-linked-list/node");
const Insert = require('./doubly-linked-list/insert-node');
const Reverse = require('./doubly-linked-list/reverse');

var n1 = new Node(2);
var n2 = new Node(4);
var n3 = new Node(6);

n1.next = n2;
n2.prev = n1;
n2.next = n3;
n3.prev = n2;

var head = n1;

var ret = Reverse(head);

// var ret = Insert(head, 7);

while(ret) {
  console.log(ret.data);

  ret = ret.next;
}