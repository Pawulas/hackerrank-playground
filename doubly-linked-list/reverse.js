const Node = require("./node");

module.exports = function (head) {
  if (head == null) { return null; }
  if (head.next == null) { return head; }

  var res = null

  while(head) {
    var node = new Node(head.data);

    node.next = head.prev;
    node.prev = head.next;

    if (!res) {
      // ustawiam pierszy element
      res = node;
    } else {
      // przypisuje ostatni element to zmiennej tymczasowej
      var tmp = res;

      // ustawiam dla elementu odwołanie do jego następnego elementu
      node.next = tmp

      // ustawiam ostatniemu elementowi odwołanie do poprzednika
      tmp.prev = node;

      // naspisuje wynikową listę elementem, który ma ustawione swoje następniki
      res = node;
    }

    head = head.next;
  }

  // zwracam wynikową listę
   return res;
}