//Takes an array of values (string or numbers) and
//returns a new array with only the unique elements in the array.
//Usage:
//[1,2,3,4,4,5,5].unique()
//>[1,2,3,4,5]

Array.prototype.unique = function() {
				    var arr = [];
				    for(var i = 0; i < this.length; i++) {
				        if(!arr.includes(this[i])) {
				            arr.push(this[i]);
				        }
				    }
				    return arr;
				}
