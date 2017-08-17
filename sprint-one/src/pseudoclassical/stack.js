var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.counter = 0;

};

Stack.prototype.size = function() {
  if (this.counter >= 0) {
    return this.counter;
  } else {
    return this.counter = 0;
  }
};

Stack.prototype.push = function(val) {
  var count = this.size();
  this[count] = val;
  this.counter++;
};

Stack.prototype.pop = function() {
  var count = this.size();
  let popped = this[count - 1];
  delete this[count - 1];
  this.counter--;
  return popped;
};
