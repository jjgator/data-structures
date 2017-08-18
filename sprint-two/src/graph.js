

// Instantiate a new graph
var Graph = function() {
  this.nodes = {};
  this.edges = [];
  
  this.counter = 0;
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.nodes[this.counter] = node;

  this.counter++;
  //console.log(this.counter); 
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  var exists = false;

  for (var key in this.nodes) {
    if (this.nodes[key] === node) {
      exists = true;
    } 
  }
  
  return exists;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  
  var edgesArray = this.edges;
  
  for (var key in this.nodes) {
    if (this.nodes[key] === node) {
      delete this.nodes[key];
    } 
  }

  this.edges.forEach(function(edge, i) {
    if (edge[0] === node || edge[1] === node) {
      edgesArray.splice(i, 1);
    }
  });
    
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  //Iterate through this.edges.
  //Does fromNode exist at the zeroith index.
  //If so, is the following value equal to toNode.
  //return true.
  var exists = false;
  
  this.edges.forEach(function(edge) {
    if ((edge[0] === fromNode && edge[1] === toNode) || (edge[0] === toNode && edge[1] === fromNode)) {
      exists = true;
    } 
  });
  return exists;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  //1. Establish relationship with inputs in a new array.
  //2. Push new array into edges array.
  this.edges.push([fromNode, toNode]);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  
  var edgesArray = this.edges;
  
  this.edges.forEach(function(edge, i) {
    if ((edge[0] === fromNode && edge[1] === toNode) || (edge[0] === toNode && edge[1] === fromNode)) {
      edgesArray.splice(i, 1);  
    } 
  });
  
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {

  //1 - iterate through this.nodes.
  //2 - call cb function on each node.
  //console.log(this.nodes);
  for (var key in this.nodes) {
    //console.log(this.nodes[key]);
    cb(this.nodes[key]);
  }

};

/*
 * Complexity: What is the time complexity of the above functions?
 */


