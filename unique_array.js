Array.prototype.unique = function() {
				    var arr = [];
				    for(var i = 0; i < this.length; i++) {
				        if(!arr.includes(this[i])) {
				            arr.push(this[i]);
				        }
				    }
				    return arr;
				}
