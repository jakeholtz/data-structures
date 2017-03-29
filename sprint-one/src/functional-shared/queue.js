var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var obj = {};

  obj.storage = {};
  obj.count = 0;
  obj.dequeued = 0;
  obj.alreadyQueued = 0;

  obj.enqueue = queueMethods.enqueue;
  obj.dequeue = queueMethods.dequeue;
  obj.size = queueMethods.size;

  return obj;
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  this.count++;
  this.alreadyQueued++;
  this.storage[this.alreadyQueued] = value;
}

queueMethods.dequeue = function() {
  this.count > 0 ? this.count-- : null;
  this.dequeued++;
  var output = this.storage[this.dequeued];
  delete this.storage[this.dequeued];
  return output;
}

queueMethods.size = function() {
  return this.count;	
}



