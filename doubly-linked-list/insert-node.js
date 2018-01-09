const Node = require("./node");


module.exports = function (head, data) {
    var node = new Node(data);
    var tmp = head;
    
    if (tmp == null) { return node; }
    if (head.next == null) {
        if (head.data <= node.data) {
            head.next = node;
            node.prev = head;
            return head;
        } else {
            node.next = head;
            head.prev = node;
            return node;
        }
    }
    
    while (true) {
        var current = tmp;
        var next = tmp.next;
        
        if (current.data > node.data) {
            node.next = current;
            current.prev = node;
            console.log("Case 1");
            return node;
        }
        
        if (current.data <= node.data && next != null && next.data >= node.data) {
            node.next = next;
            node.prev = current;
            next.prev = node;
            current.next = node;
            console.log("Case 2");
            return head;
        }
        
        if (current.data <= node.data && next == null) {
            node.prev = current;
            current.next = node;
            console.log("Case 3");
            return head;
        }
        
        tmp = tmp.next;
    }
};