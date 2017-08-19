var Tree = function(value) {
  
  var newTree = {};
  newTree.value = value;
  newTree.children = [];
  _.extend(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  
  this.children.push(Tree(value));
  
  
};

treeMethods.contains = function(value) {
  
  var exists = false;
  
  var valueFinder = function (node) {
    
    if (node.value === value) {
      return exists = true;
    } else if (node.children.length > 0) {
      node.children.forEach(function(child) {
        valueFinder(child);
      });
    }
  };
  
  valueFinder(this);
  
  return exists;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
