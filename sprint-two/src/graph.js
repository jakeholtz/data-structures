var Graph = function() {
    this.nodes = [];
};

Graph.prototype.addNode = function(value) {
	var a = Node(value);
    this.nodes.push(a);
};

Graph.prototype.contains = function(node) {
	for (var i = 0; i < this.nodes.length; i++) {
		if (this.nodes[i].value === node) return true;
	}
	return false;
};

Graph.prototype.removeNode = function(node) {
	var toBeDeleted;
	var index;
	for (var i = 0; i < this.nodes.length; i++) {
		if (node === this.nodes[i].value) {
			toBeDeleted = this.nodes[i];
			index = i;
		}
	}
    for (var j = 0; j < this.nodes[index].edges; j++) {
    	this.removeEdge(this.nodes[index].edges[j], this.nodes[index].value);
    }
	this.nodes.splice(index);
};

Graph.prototype.hasEdge = function(fromNode, toNode) {
	var from;
	var to;
	for (var i = 0; i < this.nodes.length; i++) {
		fromNode === this.nodes[i].value ? from = this.nodes[i] : null;
		toNode === this.nodes[i].value ? to = this.nodes[i] : null;
	}
	return _.contains(from.edges, toNode);
};

Graph.prototype.addEdge = function(fromNode, toNode) {
	var from;
	var to;
	for (var i = 0; i < this.nodes.length; i++) {
		fromNode === this.nodes[i].value ? from = this.nodes[i] : null;
		toNode === this.nodes[i].value ? to = this.nodes[i] : null;
	}
	from.edges.push(to.value);
    to.edges.push(from.value);
};

Graph.prototype.removeEdge = function(fromNode, toNode) {
	var from;
	var to;
	for (var i = 0; i < this.nodes.length; i++) {
		fromNode === this.nodes[i].value ? from = this.nodes[i] : null;
		toNode === this.nodes[i].value ? to = this.nodes[i] : null;
	}
	var index = from.edges.indexOf(toNode);
	to.edges.splice(index);
	var index2 = to.edges.indexOf(fromNode);
	from.edges.splice(index2);
};

Graph.prototype.forEachNode = function(cb) {
	for (var i = 0; i < this.nodes.length; i++) {
		cb(this.nodes[i].value);
	}
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.edges = [];
  return node;
};


