var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  var newQueue = Object.create(queueMethods);

  newQueue.counter = 0;

  return newQueue;

};

var queueMethods = {};

queueMethods.size = function() {
  if (this.counter >= 0) {
    return this.counter;
  } else {
    return this.counter = 0;
  }
};

queueMethods.enqueue = function(val) {
  var count = this.size();
  this[count] = val;
  this.counter++;
};

queueMethods.dequeue = function() {
  let popped = this[0];
  delete this[0];
  this.counter--;
  
  for (var key in this) {
    this[parseInt(key) - 1] = this[parseInt(key)]; 
    delete this[parseInt(key)];
  }

  return popped;
};


