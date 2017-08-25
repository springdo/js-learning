// using an self executing function you can limit access to variables and
// functions within your closure, essentially making them private and
// only choosing to expose an API of your choice to the global scope.

var NAMESPACE = {};

(function(){
  var foo = 'Hello';
  var bar = 'World!'

  function baz(){
      return foo + ' ' + bar;
  }
  NAMESPACE.baz = baz
})();

 //These all throw exceptions as not in scope:
// console.log(foo);
// console.log(bar);
// console.log(baz());

// this doesn't error
console.log(NAMESPACE.baz())
