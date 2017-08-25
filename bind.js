// bind makes a method call part of the object and returns the ammended
// object/function without executing the function


var obj1 = {
  num : 1
}

function addToNum(a, b, c) {
  return this.num + a + b + c;
}

var args = [1,2,4];

var bound = addToNum.bind(obj1)

console.log(bound(1,2,4)) // 8
console.log(bound(1,2,4)) // 8
