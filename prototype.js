let car = function (model) {
    this.model = model;
}

car.prototype.getModel = function () {
   return this.model;
}


var nissan = new car('nissan')
var toyota = new car('toyota')
console.log(nissan.getModel());
console.log(toyota.getModel());

// Q - why do this above and not just do this below?
function car2(model){
    this.model = model;
    this.getModel = function(){
         return this.model;
    }
}
var nissan = new car2('nissan')
var toyota = new car2('toyota')
console.log(nissan.getModel());
console.log(toyota.getModel());
// A - cuz each time you new the function; another getModel is defined.
// Whereas with prototyehte getModel is shared
