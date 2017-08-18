var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = {}; // fix me
  set.counter = 0;
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  if (this.contains(item) === false) {
    this._storage[this.counter] = item;
    this.counter++;
  }
};

setPrototype.contains = function(item) {
  var exists = false;
  for (var key in this._storage) {
    if (this._storage[key] === item) {
      exists = true;
    }
  }
  return exists;
};

setPrototype.remove = function(item) {
  for (var key in this._storage) {
    if (this._storage[key] === item) {
      delete this._storage[key];
    }
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
