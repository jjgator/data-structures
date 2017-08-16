var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  
  var newStack = {
    counter: 0
  };

  _.extend(newStack, stackMethods);

  return newStack;

};

var stackMethods = {};

stackMethods.size = function() {
  if (this.counter >= 0) {
    return this.counter;
  } else {
    return this.counter = 0;
  }
};

stackMethods.push = function(val) {
  var count = this.size();
  this[count] = val;
  this.counter++;
};

stackMethods.pop = function() {
  var count = this.size();
  let popped = this[count - 1];
  delete this[count - 1];
  this.counter--;
  return popped;
};

