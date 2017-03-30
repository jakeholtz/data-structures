var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.count = 0;
  this.dequeued = 0;
  this.alreadyQueued = 0;
};

Queue.prototype.enqueue = function(value) {
  this.count++;
  this.alreadyQueued++;
  this.storage[this.alreadyQueued] = value;
}

Queue.prototype.dequeue = function() {
  this.count > 0 ? this.count-- : null;
  this.dequeued++;
  var output = this.storage[this.dequeued];
  delete this.storage[this.dequeued];
  return output;
}

Queue.prototype.size = function() {
  return this.count;	
}

