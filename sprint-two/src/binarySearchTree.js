var BinarySearchTree = function(value) {
  var newTree = {};
  newTree.value = value;
  newTree.left = null;
  newTree.right = null;
  
  _.extend(newTree, BinarySearchTreeMethods);
  return newTree;
};

var BinarySearchTreeMethods = {};


BinarySearchTreeMethods.insert = function(value) {
    //Compare value to newTree.value;
    //If value is greater than newTree.value, check to see if newTree.right is undefined.
    //if newTree.right is defined, recurse.
    //if newTree.right is undefined, set newTree.right to new node.
  
  var nodeInserter = function(node) {
    if (value > node.value) {
      if (node.right === null) {
        return node.right = new Leaf(value);
      } else {
        nodeInserter(node.right);
      }
    } else {
      if (node.left === null) {
        return node.left = new Leaf(value);
      } else {
        nodeInserter(node.left);
      }
    }  
  };
  //console.log(this); 
  nodeInserter(this);
};

BinarySearchTreeMethods.contains = function(value) {
  
  var exists = false;
  
  var doesExist = function(node) {
    
    if (value === node.value) {
      return exists = true;
    } else if (value > node.value) {
      if (node.right === null) {
        return exists = false;
      } else {
        doesExist(node.right);
      }
    } else {
      if (node.left === null) {
        return exists = false;
      } else {
        doesExist(node.left);
      }
    } 
  };
  
  doesExist(this);
  return exists;
};

BinarySearchTreeMethods.depthFirstLog = function(callback) {
  //call callback on node.value
  //check to see if node.left = null, if so return
  //if not, call
  var recurser = function(node) {
    callback(node.value);
    if (node.left !== null) {
      recurser(node.left);
    } 
    if (node.right !== null) {
      recurser(node.right);
    }
  };
  
  recurser(this);
  
};


var Leaf = function(value) {
  var node = {};

  node.value = value;
  node.right = null;
  node.left = null;

  return node;
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
// A .left property, a binary search tree (BST) where all values are lower than than it the current value.
// A .right property, a BST where all values are higher than than it the current value.   
// A .insert() method, which accepts a value and places in the tree in the correct position.
// A .contains() method, which accepts a value and returns a boolean reflecting whether or not the value is contained in the tree.
// A .depthFirstLog() method, which accepts a callback and executes it on every value contained in the tree.