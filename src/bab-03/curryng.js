// Diambil dari:
// http://javascriptweblog.wordpress.com/2010/04/05/
// 		curry-cooking-up-tastier-functions/
// dengan sedikit perubahan

function toArray(fromEnum) {
    return Array.prototype.slice.call(fromEnum);
}

Function.prototype.curry = function() {
    if (arguments.length<1) {
        return this; //nothing to curry with - return function
    }
    var __method = this;
    var args = toArray(arguments);
    return function() {
        return __method.apply(this, args.concat(toArray(arguments)));
    }
}

var add = function(a,b) {
    return a + b;
}

//create function that returns 10 + argument
var addTen = add.curry(10); 
console.log(addTen(20)); //30
