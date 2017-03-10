// Allows you to grab the very last element of an array.
// Trivial but I've found it useful.
// Usage: [1,4,3,5].last() // > 5
Array.prototype.last = function() {
      return this[this.length-1];
    }
