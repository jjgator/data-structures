var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.counter = 1;
};

Queue.prototype.size = function() {
  if (this.counter <= 1) {
    return 0;
  } else {
    return this.counter - 1;
  }
};

Queue.prototype.enqueue = function(val) {
  var count = this.size();
  this[count] = val;
  this.counter++;
};

Queue.prototype.dequeue = function() {
  var count = this.size();
  let popped = this[0];
  delete this[0];
  for (var key in this) {
    if (key !== 'counter') {
      this[parseInt(key) - 1] = this[parseInt(key)];
      delete this[parseInt(key)];
    }
  }
  this.counter--;
  return popped;
};

//first key index to be 0, but equals 1
//transform key to number, decrement by 1
//set transformed key equal to original value
