var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var obj = {};

  obj.storage = {};
  obj.count = 0;
  
  obj.push = stackMethods.push;
  obj.pop = stackMethods.pop;
  obj.size = stackMethods.size;

  return obj;
};

var stackMethods = {};

stackMethods.push = function(value) {
  // var count = this.count;
  // var storage = this.storage;
  this.count++;
  this.storage[this.count] = value;
}

stackMethods.pop = function() {
  this.count > 0 ? this.count-- : null;
  var popped = this.storage[this.count];
  delete this.storage[this.count];
  return popped;
}

stackMethods.size = function() {
  return this.count;
}


