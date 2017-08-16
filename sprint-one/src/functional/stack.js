var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var counter = 0;
  // Implement the methods below
  someInstance.push = function(value) {
    //console.log('before push: ', storage, value);
    storage[someInstance.size()] = value;
    counter++;
    //console.log('after push: ', storage, value);
  };
  
  someInstance.pop = function() {
    let popped = storage[someInstance.size() - 1]; 
    //console.log('Before pop: ', popped, storage);
    delete storage[someInstance.size() - 1];
    counter--;
    //console.log('After pop: ', popped, storage);
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
