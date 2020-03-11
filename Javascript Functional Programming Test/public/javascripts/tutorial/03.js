var LinkedList = function() {
  //链表头
  var head = null; //Object null
  //链表长度
  var length = 0;

  var Node = function(element) {
    this.element = element;
    this.next = null;
  };

  //链表尾添加元素
  this.append = function(element) {
    var node = new Node(element);
    // node = {
    // element : element
    // next : null
    if (head == null) {
      head = node;
    } else {
      var current = head;
      while (current.next) {
        current = current.next;
      }
      //当while循环执行完之后, current已经是链表最后一项了
      current.next = node;
    }
    length++;
  };
  //链表某一个位置添加元素

  //显示链表头元素
  this.getHead = function() {
    return head;
  };
};
