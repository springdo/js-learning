# Some notes on VUE js learning from Udemy

#### Common directives
-  `v-once` to make a directive only load the item in `{{ }}` once and not bind to updates in the changes. Eg:
```
JS
const title = "<p> biscuits</p>"

HTML
<div v-once>{{ title }}</div>
```

- `v-html` tells vue js to render html and not escape it  `{{ <p> hello</p> }}` changes. Eg:
```
JS
const hello = "<p> hello</p>"

HTML
<div v-html>{{ hello }}</div>
```

- `v-html` tells vue js to bind vars in the vue to item in the html attr. ie `{{ thing }}` cannot be used inside a html Attribute. Instead use `v-bind`. Eg:
```
<a href="{{ url }}">WILL NOT WORK</a>
<a v-bind:href="url"> WILL WORK</a>
```

#### Common events
- `v-on:click` - click handler
- `v-on:mousemove` - mouse movement
- `v-on:` -  handler

- short hand for `v-on:click` is `@` eg `@click`
- short hand for `v-bind:class` is `:` eg `:class` or

#### Event & Key modifiers
- `v-on:keyup.enter` - react then enter is pressed
- `v-on:keyup.enter.space` - modifiers can be chained together for example


#### Template Expressions
 - This can be used to run JS expressions inside the template. example
```
  <button v-on:click="counter++">click</a>
  <p> {{ counter }} </p>
```

#### Two way binding
- Two way binding can be achieved using the `v-model` attr on a property from the Vue file


#### Computed and Watched properties
 - Call computed properties of the vuejs instance by calling the method name as an expression in the Template. Computed process run synchronously. Useful for managing changes in data

```
<p> {{ message }} </p>
<p> {{ swap }} </p>

data: {
   message = 'biscuits'
},
computed: {
   swap() {
     return this.message.split('').reverse().join('')
   }
}
```

Why use this over the `methods` property? In comparison, a method invocation will always run the function whenever a re-render happens. The computed  property uses a caching of the var to save compute cycles.

- use the `watch` property for async behaviour. Watch for changes

- [docs - Computed-vs-Watched](https://vuejs.org/v2/guide/computed.html#Computed-vs-Watched-Property)

#### CSS class manipulation
- use
```
<div :class="my-color"> </div>

...

.my-color {
  background-color: grey;
  width: 1000px
  height: 1000px
}

<!--  can use strings to call a class directly, no curlys for a model value or curlys for an expression ie class on or off -->
<div :class="['red-class', myRedDiv, {classOn : booleanOn}]"> STUFF HERE </div>


```
fn : function(){}
fn() {}



- Can use CSS manipulation as `style`, could be useful for creating a progress bar etc. Autoprefixer done by default when using `style` in this way.
```
<div :style="{ backgoundColor: color }"> </div>
<div :style="myStyle"> </div>
<div :style="[myStyle, {height: width + 'px'}]"> </div>

<input type="text" v-model="color">
<input type="text" v-model="width">

data: {
  color: 'grey',
  width: 100
},
computed:{
  myStyle() {
    return {
      backgoundColor: this.color,
      width: this.width + 'px'
    }
  }
}
```



### Useful links from VueJS course
JSFiddle Links:
[Getting Started](https://jsfiddle.net/smax/pcjtcmdm/)
[Template Syntax](https://jsfiddle.net/smax/bkk97b7g/)
[Events](https://jsfiddle.net/smax/7zdak05g/)
[Two-Way-Binding](https://jsfiddle.net/smax/ut0tsbcu/)
[Computed Properties & Watch](https://jsfiddle.net/smax/yLjqxmw0/)
[Dynamic Classes](https://jsfiddle.net/smax/gowg40ym/)
[Dynamic Styles](https://jsfiddle.net/smax/3rvdLq5y/)