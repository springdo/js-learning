function makeSoup(base){
  var ingredients = {
    base: base
  };

  return {
    withMushrooms: function(){
      ingredients.mushrooms = true;
      return this;
    },
    withOnions: function(){
      ingredients.onions = true;
      return this;
    },
    withBeans: function(){
      ingredients.beans = true;
      return this;
    },

    //
    build: function(){
      var extras = [];
      if (ingredients.mushrooms) extras.push('mushrooms');
      if (ingredients.onions) extras.push('onions');
      if (ingredients.beans) extras.push('beans');

      return {
        base: base,
        extras: extras,
        taste: extras.length
      };
    }
  }
}

console.log(makeSoup('chicken').withMushrooms().withOnions().build());
console.log(makeSoup('vegetables').build());
