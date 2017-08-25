app.service('myService', function() {

  // service is just a constructor function
  // that will be called with 'new'

  this.sayHello = function(name) {
     return "Hi " + name + "!";
  };
});

app.factory('myFactory', function() {

  // factory returns an object
  // you can run some code before

  return {
    sayHello : function(name) {
      return "Hi " + name + "!";
    }
  }
});


// $digest() or $apply()
$scope.$apply() will call the $rootScope and appy the digest cycle across ALL scopes
$scope.$digest() will call the digest cycle across THIS scope

// digest cycle is the process that is responsible for watching eaching
// the variables in the scope and when they change call it's watch methods

1. dirty checking of vars if they have changed if not; tries again 
2. if modifications have been found then fire off watch listeners
3. Keep note of modifications and call angular to update the DOM
