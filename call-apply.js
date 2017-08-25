// WRITE COMMON METHODS FOR DIFFERENT OBJECTS
// EG IMAGINE YOU HAD OBJ 1 AND OBJ 2 WHICH EACH HAVE PROPERTIES
// define a function that `returns this.thing` and you can apply / call it on
// an object with that property


// call
var obj1 = {
  num : 1
}

var obj2 = {
  num : 2
}

function addToNum(param) {
  return this.num + param
}
console.log(addToNum.call(obj1, 5)) // 6
console.log(addToNum.call(obj2, 5)) // 7


// apply args to a fn();
var args = [1,2,4];
function addAllNum(a, b, c) {
  return this.num + a + b + c;
}
console.log(addAllNum.apply(obj1, args)) // 8
