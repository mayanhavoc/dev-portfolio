# Full stack dev style guide

Hi, my name is Roberto, I am a professional full stack developer. 


## Approach and design system
This is portfolio version 1,002 I think. So I thought I'd take a step back and do some prep before jumping in to yet another version of a not so satisfying portfolio. 

Sources: 
- [Ara Abcarians post on CSS-tricks](https://css-tricks.com/design-systems-building-future/)
- [Nicolas Gallagher's post on HTML semantics and front-end architecture](https://nicolasgallagher.com/about-html-semantics-front-end-architecture/)


### Top level goals
1. Organization - a well thought out structure
2. Maintainability - establish guidelines and conventions
3. Responsiveness - platform agnostic
4. Scalability - creating new pages should be easy


### HTML Semantics considerations
1. Not all semantics need to be content-derived (the HTML5 spec does encourage it to be so), they can be different than those of HTML5 elements.
2. Content-layer semantics are already served by HTML elements (section, paragraph, body, main, article).
3. Class names provide no useful infomation to the machine.
4. The primary purpose of the class name is to provide a hook for CSS and JavaScript. This means that if the class does not add **presentation** or **behaviour**, then it's probably not needed.
5. Class names should communicate useful information (important to understand what a specific class name does when reading the DOM snippet)

#### Take aways
The most reusable componets are those with class names that are **independent** from the content. Derive class name semantics from repeating structural and functional patterns in the design. 

### The aim
To develop reusable components that can contain a range of different content types. To that end, class name semantics should provide *meaningful, flexible and reusable presentational/behavioural hooks*.

### Table of contents
An up to date table of contents provides a canonical catalogue of what is in the CSS project, e.g.:
```CSS
/**
 * CONTENTS
 *
 * SETTINGS
 * Global...............Globally-available variables and config.
 *
 * TOOLS
 * Mixins...............Useful mixins.
 *
 * GENERIC
 * Normalize.css........A level playing field.
 * Box-sizing...........Better default `box-sizing`.
 *
 * BASE
 * Headings.............H1–H6 styles.
 *
 * OBJECTS
 * Wrappers.............Wrapping and constraining elements.
 *
 * COMPONENTS
 * Page-head............The main page header.
 * Page-foot............The main page footer.
 * Buttons..............Button elements.
 *
 * TRUMPS
 * Text.................Text helpers.
 */
```
Each item maps to a section and/or include.

#### Reusable and combinable components
Scalable CSS/HTML must rely on classess within the HTML to allow for the creation of reusable components. 

A flexible and reusable components is one which:
- Does not rely on existing within a certain part of the DOM tree
- Does not require the use of specific element types
It should be able to adapt to different containers and be easily themed. 

An approach that improves the ease of combining components is to use classes to style the child DOM elements. This helps to reduce the specificity of the rule and gives the option to apply the structural styles to any type of child node. E.g., 
```CSS
.btn { /* styles */ }
.uilist { /* styles */ }
.uilist-item { /* styles */ }
```
```HTML
<nav class="uilist">
  <a class="uilist-item" href="#">Home</a>
  <a class="uilist-item" href="#">About</a>
  <span class="uilist-item">
      <a class="btn" href="#">Login</a>
  </span>
</nav>
```
Instead of using `.uilist-item a` to refer to the links inside the list.

#### JavaScipt-specific classes
Using JavaScript specific classes can reduce the risk of breaking thematic or structural changes to components. 
A useful approach is to use certain classes only for JavaScript hooks, e.g., `-js-*` , and not add any presentation on them. 

#### Component modifiers
Two main patterns used to create component variants:
1. The "single-class" pattern
   ```CSS
    .btn, .btn-primary { /* button template styles */ }
    .btn-primary { /* styles specific to save button */ }
   ```
   ```HTML
    <button class="btn">Default</button>
    <button class="btn-primary">Login</button>      
   ```

2. The "multi-class" pattern (preferred)
   ```CSS
    .btn { /* button template styles */ }
    .btn-primary { /* styles specific to primary button */ }
   ```
   ```HTML
    <button class="btn">Default</button>
    <button class="btn btn-primary">Login</button>
   ```

#### Structured class names
"When creating components – and “themes” that build upon them – some classes are used as component boundaries, some are used as component modifiers, and others are used to associate a collection of DOM nodes into a larger abstract presentational component."
```CSS
.u-utilityName {}

/* Component */
.ComponentName {}

/* Component modifier */
.ComponentName--modifierName {}

/* Component descendant */
.ComponentName-descendant {}

/* Component descendant modifier */
.ComponentName-descendant--modifierName {}

/* Component state (scoped to component) */
.ComponentName.is-stateOfComponent {}
```

## Coding conventions and guidelines
Source [Scalable and Modular Architecture for CSS](http://smacss.com/book/categorizing)

### Categorizing CSS Rules
1. Base
2. Layout
3. Module
4. State
5. Theme

Much of the purpose of categorizing things is to codify patterns - things that repeat themselves within our design.

1. Base rules - defaults. Almost exclusively single element selectors (could also include attribute selectors, pseudo-class selectors, child selectors or sibling selectors). A base style says that wherever this element is on the page, it should look like this.
For example: 
```CSS
html, body, form { margin: 0; padding: 0; }
input[type=text] { border: 1px solid #999; }
a { color: #039; }
a:hover { color: #03C; }
```

2. Layout rules - Divide the page into sections, holds one or more modules together.

3. Modules - reusable, modular parts of the design (callouts, sidebar sections, product lists, etc).

4. State rules - describe how modules or layouts will look when in a particular state, e.g., active/inactive, hidden/expanded, etc.

5. Theme rules - describe how modules or layouts might look




### Resources
- [Idiomatic HTML - a reasonable styling guide for HTML development](https://github.com/necolas/idiomatic-html)
- [CSS guidelines](https://cssguidelin.es/)
- [Idiomatic JavaScript](https://github.com/rwaldron/idiomatic.js/)
- [The BEM naming convention (Block, Element, Modifier)](https://yandex.com/dev/bem/)

1. Convention No.1 - BEM naming convention
   - `.block {}` - main component
   - `.block-elementName {}` - A child element that helps make up the component as a whole
   - `.block--modifier {}` - A modifier class that is used to alter the state or appearance of the component
    Example - Alert box:
    ```CSS
    /* Main 'alert' component */
    .alert {}

    /* Sub-components that make up the 'alert' */
    .alert-text {}
    .alert-close {}

    /* Modifiers for various styles of the 'alert' */
    .alert--warning {}
    .alert--error {}
    .alert--success {}
    .alert--info {}
    ```

## Developing Base Styles
Folder structure
- src
  | - modules
  | - components
  | - css
    | - core (custom variables and mixins)
    | - vendor (vendor utilities )
    | - base (base styles, i.e., typography, colors and structure)
  | App.js
  | app-global.css
  | index.js
  | gitignore
  | package.json
  | README.md

## Identify and build components
Take a look at the website as a whole and identify individual components.
Abstract common styles into reusable objects. 

### The media object
Sources: 
- [Nicole Sullivan's post on media objects](http://www.stubbornella.org/content/2010/06/25/the-media-object-saves-hundreds-of-lines-of-code/)
- [inuit css objects](https://github.com/csswizardry/inuit.css/tree/master/objects)

A UI layer is mostly composed of 'media blocks'.

When building a new object: 
1. Figure out which parts are reusable components
2. Define what you know and don't know about them

## Identify and Build Modules
Source
- [Responsive Deliverables](https://daverupert.com/2013/04/responsive-deliverables/)

| Components |  | | 
| --- | --- | --- |
| Flexible grid | Tabbed navigation | Pagination | 
| Typography | Responsive tables | Data tables |
| Navigation | Accordions | Buttons | 
| Accessible form controls | Media lists | Icon fonts | 
| Carousels | Dropdowns | | 

| Strategy |  |  |
| --- | --- | --- |
| Responsive images | Legacy browser support | Interactions/Animations |
| Responsive typography | i18n/l10n tolerance | Responsive advertising | 
| Accessibility architecture | Performance budget | | 

| Layouts |  |  | 
| --- | --- | --- |
| Homepage layout | Article layout | Sign up flow |
| Subpage layout | Product index layout | Checkout flow |
| Article index layout | Product detail layout |  | 




### Style guides
- [paulrobertlloyd](https://paulrobertlloyd.com/styleguide/)


