var Queue = function() {
  var items = [];
  //入队
  this.enqueue = function(element) {
    items.push(element);
  };
  //出队
  this.dequeue = function() {
    return items.shift();
  };
  //检查首项
  this.front = function() {
    return items[0];
  };
  //检查是否为空
  this.isEmpty = function() {
    return items.length === 0;
  };
  //长度
  this.size = function() {
    return items.length;
  };
};

var chuanhua = function(names, number) {
  var q = new Queue();
  //添加所有玩家列表
  for (var i = 0; i < names.length; i++) {
    q.enqueue(names[i]);
  }
  //淘汰规则
  var taotai;
  while (q.size() > 1) {
    for (var i = 0; i < number - 1; i++) {
      q.enqueue(q.dequeue());
    }
    taotai = q.dequeue();
    console.log('淘汰的玩家是-' + taotai);
  }
  return q.dequeue();
};
//玩家列表
var playerlist = ['a', 'b', 'c', 'd', 'e', 'f'];
//游戏规则
var delete_number = 3;

var PriorityQueue = function() {
  var items = [];
  var QueueItem = function(element, priority) {
    this.element = element;
    this.priority = priority;
  };
  this.enqueue = function(element, priority) {
    var queueItem = new QueueItem(element, priority);
    var added = false;
    for (var i = 0; i < items.length; i++) {
      if (queueItem.priority > items[i].priority) {
        //arr指定位置插入，（从那个位置开始，代替几个，代替物品）
        items.splice(i, 0, queueItem);
        added = true;
        break;
      }
    }
    if (!added) {
      items.push(queueItem);
    }
  };
  this.getItems = function() {
    return items;
  };
};

//新建测试目标
var pq = new PriorityQueue();
//创建连个测试目标
pq.enqueue('小黑', 10);
pq.enqueue('小明', 12);
