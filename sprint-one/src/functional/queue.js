var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var counter = 0;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[someInstance.size()] = value;
    counter++;
  };

  someInstance.dequeue = function() {
    let popped = storage[0]; 
    delete storage[0];
    counter--;
    //Adjust keys based on new index.
    for (var key in storage) {
      key = parseInt(key) - 1;
    }
    return popped;
  };

  someInstance.size = function() {
    if (counter >= 0) {
      return counter;
    } else {
      return counter = 0;
    }
  };

  return someInstance;
};
