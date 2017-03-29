var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var count = 0;
  var totalPassedIn = 0;
  var deleted = 0;

  // Implement the methods below
  //debugger;
  someInstance.enqueue = function(value) {
    count++;
    totalPassedIn++;
    storage[totalPassedIn] = value;
  };

  someInstance.dequeue = function() {
    count > 0 ? count-- : null;
    deleted++;
    var first = Object.keys(storage)
    var dequeued = storage[deleted];
    delete storage[deleted];
    return dequeued;
  };

  someInstance.size = function() {
    return count;
  };

  return someInstance;
};