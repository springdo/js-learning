// closure will preserve a property / data inside a function

// simple closure - variable defined outside the scope avail inside
var passed =  3;
var addTo = function () {
  var inner = 2;
  return passed + inner;
}

console.log(addTo) // 3 + 2
var passed = 4

console.log(addTo) // 4 + 2


// complex closure with fn() inside fn().

var addOtherTo = function (passed) {

  var add = function (inner) {
    return passed + inner;
  };
  return add;
}

// returns function with with passed var stored already in its closure!
console.log(addOtherTo(3))

var addThree = addOtherTo(3)
var addFour = addOtherTo(4)

console.log(addThree(10)); // 13
console.log(addThree(10)); // 14
