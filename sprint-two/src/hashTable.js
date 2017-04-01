

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this.size = 0;
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
  this.size++;
  if (this.size / this._limit >= 0.75) {
    this.doubleInSize();
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
  this.size--;
  if (this.size / this._limit <= 0.25 && this._limit > 8) {
    this.halveInSize();
  }
};

HashTable.prototype.doubleInSize = function() {
  var oldStorage = this._storage;
  this._limit *= 2;
  this.size = 0;
  this._storage = LimitedArray(this._limit);
  
  oldStorage.each(function(bucket) {
    if (bucket !== undefined) {
      for (var i = 0; i < bucket.length; i++) {
        this.insert(bucket[i][0], bucket[i][1]);
      }
    }
  }.bind(this));
}

HashTable.prototype.halveInSize = function() {
  var oldStorage = this._storage;
  this._limit /= 2;
  this.size = 0;
  this._storage = LimitedArray(this._limit);
  
  oldStorage.each(function(bucket) {
    if (bucket !== undefined) {
      for (var i = 0; i < bucket.length; i++) {
        this.insert(bucket[i][0], bucket[i][1]);
      }
    }
  }.bind(this));
}



/*
 * Complexity: What is the time complexity of the above functions?
 */


