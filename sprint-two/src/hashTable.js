

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var tuple = [k, v];
  var bucket = [];
  var oldBucket = this._storage.get(index);
  if (oldBucket === undefined) {
    bucket.push(tuple);
    this._storage.set(index, bucket);
  } else if (this.retrieve(k) === undefined) {
    oldBucket.push(tuple);
  } else {
  	this.remove(k);
  	oldBucket.push(tuple);
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  for (var i = 0; i < bucket.length; i++) {
    if (bucket[i][0] === k) {
    	return bucket[i][1];
    }
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  for (var i = 0; i < bucket.length; i++) {
    if (bucket[i][0] === k) {
    	bucket.splice(i);
    }
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


