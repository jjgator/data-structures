var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {

    var newNode = new Node(value);

    if (this.head === null) {      
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;      
    }

  };

  list.removeHead = function() {
    // console.log('head: ', this.head, 'next: ', this.head.next);
    var oldHead = this.head.value;
    this.head = this.head.next;
    return oldHead;
  };

  list.contains = function(target) {

    var exists = false;
    
    var targetFinder = function(currentNode) {
      if (currentNode.value === target) {
        //console.log('This is the correct node and node.value: ', currentNode, currentNode.value);
        exists = true;
      } else if (currentNode.next !== null) { 
        //console.log('This is the new node and new node.value: ', nextNode, nextNode.value);
        targetFinder(currentNode.next);
      }
       
    };
    
    targetFinder(this.head);
    return exists;

    //0 - establish current node variable
    //1 - check to see if currentNode.value = target.  return true if true.
    //2 - WHILE currentNode does not equal target && currentNode.next does not equal null, change the value to currentNode.next
    //3 - repeat 1-3.
    //4 - return false
    

  };


  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

// list.contains = function(target) {

//     var exists = false;
    
//     var targetFinder = function(currentNode) {
//       if (currentNode.value === target) {
//         //console.log('This is the correct node and node.value: ', currentNode, currentNode.value);
//         exists = true;
//       } else if (currentNode.next !== null) { 
//         //console.log('This is the new node and new node.value: ', nextNode, nextNode.value);
//         targetFinder(currentNode.next);
//       }
       
//     };
    
//     targetFinder(this.head);
//     return exists;

//     //0 - establish current node variable
//     //1 - check to see if currentNode.value = target.  return true if true.
//     //2 - WHILE currentNode does not equal target && currentNode.next does not equal null, change the value to currentNode.next
//     //3 - repeat 1-3.
//     //4 - return false
    
  
//   };
