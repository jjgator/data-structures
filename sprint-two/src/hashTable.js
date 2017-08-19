

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  //this.counter = 0;
  
};

// HashTable.prototype.resize = function() {
  
//   var tempStorage = [];
  
//   this._storage.each(function(bucket) {
//     if (bucket !== undefined) {
//       bucket.forEach(function(tuple) {
//         tempStorage.push(tuple);
//       });  
//     } 
//   });
  
//   this._limit *= 2;
//   tempStorage.forEach(function(pair) {
//     HashTable.prototype.insert(pair[0], pair[1]);
//   });
//   console.log(this._storage);
// };


HashTable.prototype.insert = function(k, v) {

  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);

  var keyFinder = function(array) {
    var index = undefined;

    array.forEach(function(ele, i) {
      if (ele[0] === k) {
        index = i;
      }
    });
    return index;
  };
      
  if (bucket === undefined) {
    this._storage.set(index, [[k, v]]);
    // this.counter++;
    // if ((this.counter) / (this._limit) >= 0.75) {
    //   this.resize();
    // }
  } else if (keyFinder(bucket) !== undefined) {
    bucket[keyFinder(bucket)][1] = v;
    this._storage.set(index, bucket);
  } else {
    bucket.push([k, v]);
    this._storage.set(index, bucket);
    // this.counter++;
    // if ((this.counter) / (this._limit) >= 0.75) {
    //   this.resize();  
    // }
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
    
  var bucket = this._storage.get(index);

  var value = undefined;
  
  bucket.forEach(function(element) {
    if (element[0] === k) {
      //console.log('element[1]: ', element[1]);
      value = element[1];
    }
  });
  return value;
};

HashTable.prototype.remove = function(k) {
  
  var index = getIndexBelowMaxForKey(k, this._limit);
    
  var bucket = this._storage.get(index);
  
  bucket.forEach(function(element) {
    if (element[0] === k) {
      element[1] = undefined;
      //this.counter--;
    }
  });
  
  this._storage.set(index, bucket);
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


