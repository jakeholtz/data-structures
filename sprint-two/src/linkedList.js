var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;
  

  list.addToTail = function(value) {
    var node = Node(value);
    if (list.head === null) {
      list.head = node;
      list.tail = node;
      
    }
    else {
      list.tail = node;
      list.tail.next = node;
      
    }
  };

  list.removeHead = function() {
    var removed = list.head.value;
    list.head = list.tail;
    list.tail = list.tail.next;
    return removed;
  };

  list.contains = function(target) {
    var doesContain = false;
    _.each(list, function(item) {
      for (var prop in item) {
        if (item[prop] === target) {
          doesContain = true;
        }
      }
    });
    return doesContain; 
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;
  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
