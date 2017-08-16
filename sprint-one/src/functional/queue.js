var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var counter = 0;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[someInstance.size()] = value;
    counter++;
    //console.log('enqueue: ', storage);
  };

  someInstance.dequeue = function() {
    let popped = storage[0]; 
    delete storage[0];
    counter--;
    //console.log('after dequeue: ', storage);
    //Adjust keys based on new index.
    for (var key in storage) {
      //console.log(key, storage[key]);
      storage[parseInt(key) - 1] = storage[parseInt(key)]; 
      delete storage[parseInt(key)];
    }
    //console.log('after index adjust: ', storage);
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
