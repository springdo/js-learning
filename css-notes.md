# Some notes on CSS from Udemy

##### Random bullets

```
width: 1000px
box-sizing: border-box
```
- will box size width is calculated by subtracting the padding and the border from the value specified (works with height too)

```
img, iframe, video, object {
  max-width: 100%
}
```
- Good to set these in base to ensure your media are responsive

- Have a collection of reusable classes stored that can make your css modular. See example `modular-styles.css`. Remember if your using `float-right` or `float-left` set the `grouping` class on the section / container class

##### Common HTML elements that are naturally block-display include:
```
<div>
<h1> … <h6>
<p>
<ul>, <ol>, <dl>
Lists (unordered, ordered and definition)
<li>, <dt>, <dd>
List items, definition list terms, and definition list definitions
<table>
<blockquote>
Like an indented paragraph, meant for quoting passages of text
<pre>
Indicates a block of preformatted code
<form>
An input form
```

##### More elements are naturally inline-style, including:
```
<span>
Your all-purpose inline element
<a>
Anchor, used for links (and also to mark specific targets on a page for direct linking)
<strong>
Used to make your content strong, displayed as bold in most browsers, replaces the narrower <b> (bold) tag
<em>
Adds emphasis, but less strong than <strong>. Usually displayed as italic text, and replaces the old <i> (italic) tag
<img />
Image
<br>
The line-break is an odd case, as it’s an inline element that forces a new line. However, as the text carries on on the next line, it’s not a block-level element.
<input>
Form input fields like

Text fields
 and
 Buttons
<abbr>
Indicates an abbr. (hover to see how it works)
<acronym>
Working much like the abbreviation, but used for things like this TLA.
```

##### CSS Reset
Use a css reset to remove browser specific css styling. Handy for backwards compatibility and good to include as a base layer in a style sheet
[CSS reset](https://meyerweb.com/eric/tools/css/reset/)

##### CSS specificity
```
universal (*)= 0 point
element      = 1 point
class        = 10 points
id           = 100 points
inline style = 1000 points
!important   = 10000 points
```

##### CSS Pseudo elements
[atoz-css-pseudo-elements](https://www.sitepoint.com/atoz-css-pseudo-elements/)

#### CSS Floats and how to FIX them!!
Floats were intially created to allow text wrap around images
`float: left | right`
floats can be cleared with `clear: left | right | both`

to create a classic three column layout using floats::
```
<section class="secondary-section">
  <div class="wrapper">
    <div class="column">
        STUFF HERE eg <h1>, <p>
    </div>
    <div class="column">
        STUFF HERE eg <h1>, <p>
    </div>
    <div class="column">
        STUFF HERE eg <h1>, <p>
    </div>
  </div>
</section>

.secondary-section {
  background-color: blue;
  margin-bottom: 50px
}
.wrapper {
  margin: 0 auto;
  width: 960px;
}
.column {
  float: left;
  width: 300px
  margin: left 30px
}
/* remove the first columns margin */
.column:first-child {
  margin: 0;
}
```

But wait! then we cannot add any padding or anything underneath the floats... a few ways to fix this

+ Use a clear float class and apply it to a div after the columns

```
....
  <div class="clear"></div>
</section>

.clear {
  clear: both;
}
```

+ Use overflow hidden (not it's intended purpose!). Originally used to hide content that spills out of it's container div / element

```
.secondary-section {
  background-color: blue;
  margin-bottom: 50px;
  overflow: hidden;
}
```

+ Use the micro clear-fix hack! (probs best solution). Often class is called clear-fix. Just add it to the `section` element after the `secondary-section` class.

```
.grouping:before,
.grouping:after {
  content: " ";
  display: table
}
.grouping:after {
  clear: both;
}
```

#### CSS Buttons
Classic button stylings ...
```
<a href="" class="button">Click me!</a>
.button {
  border: 2px solid #333;
  color: #333
  padding: 10px 0;
  display: block;
  font-family: Arial, Helvetica, sans-serif;
  text-align: center;
  font-weight: bold;
  letter-spacing: 1.5px;
  transition: 0.25s all ease-in-out;
}

/* use hover and focus for both mouse in and key tab */
.button:focus,
.button:hover {
  background-color: #333
  color: #FFF
}

<a href="" class="button button-narrow">Click me!</a>
.button-narrow {
  width: 25%;
}

.button-alt {
  border: 2px solid #FFF;
  color: #FFF
}
```

#### Transform, Translate & Gradient
- `transform: scale(x, y)` to make boxes grow bigger / smaller depending on (x, y). Can also `transform: rotate(15deg)` and chain them too!

```
.button {
  transform: scale(0.9, 0.9);
}

.button:hover {
  transform: scale(1.1, 1.1);
}
```

- `translate: scale(x, y)` to make the box move to the left / right or top / bottom

```
.button {
  transform: scale(0.9, 0.9);
}

.button:hover {
  transform: scale(1.1, 1.1) translate: scale(0, -5px)
}
```

- graient generator
[colorzilla](www.colorzilla.com/gradient-editor/);
