var BinarySearchTree = function(value) {
  this.value = value;
  this.left = undefined;
  this.right = undefined;
};

BinarySearchTree.prototype.insert = function(value) {
  if (value < this.value) {
  	if (this.left === undefined) {
  	  this.left = new BinarySearchTree(value);
  	} else { // is defined
  	  this.left.insert(value);
  	}
  } else if (value > this.value) {
  	if (this.right === undefined) {
  	  this.right = new BinarySearchTree(value);
  	} else { // is defined
  	  this.right.insert(value);
  	}
  }
}

BinarySearchTree.prototype.contains = function(value) {
  var doesContain = false;
  if (value === this.value) {
  	doesContain = true;
  } else if (value < this.value && this.left !== undefined) {
    return this.left.contains(value);
  } else if (value > this.value && this.right !== undefined) {
    return this.right.contains(value);
  }
  return doesContain;
}

BinarySearchTree.prototype.depthFirstLog = function(cb) {
  // callback on every value
  cb(this.value);
  if (this.left !== undefined) {
  	this.left.depthFirstLog(cb);
  }
  if (this.right !== undefined) {
  	this.right.depthFirstLog(cb);
  }
}






/*
 * Complexity: What is the time complexity of the above functions?
 */
