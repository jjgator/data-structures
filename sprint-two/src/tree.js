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

treeMethods.contains = function(target) {
  //check to see if the current object value equals target
  //if value equals target, return true
  //if value doesn't equal target, check for children
  //if no children, return false
  //if children, recurse 1-4
  var exists = false;
  
  var targetFinder = function(obj) {
    if (obj.value === target) {
      return exists = true;
    } else {
      obj.children.forEach(function(child) {
        targetFinder(child);
      });
    }
  };

  targetFinder(this);
  return exists;
  
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
