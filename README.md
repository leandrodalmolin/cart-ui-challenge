# Cart UI Challenge

Author: Leandro Piovezan Dal Molin

## About the project

To leverage the component-based nature of modern JS frameworks, I've chosen VueJS for this project.

This project was built using the webpack-based Vue CLI, in order to quickly scaffold the project.
It was installed Babel for transpiling modern JS, ESLint for ensuring code quality and Sass-loader as
CSS pre-processor. Vue CLI also uses PostCSS internally and autoprefixer is enabled by default.
On top of that I've installed "style-resources-loader" to automatically import scss files for variables, mixins
and global styles like typography and normalize.

And finally, the build produces a production-ready bundle in the dist/ directory, with minification
for JS/CSS/HTML and auto vendor chunk splitting for better caching.

## Notes

#### Responsiveness

The component is completely responsive. Its size and how it behaves can be controlled by a wrapper.

#### Accessibility

Users can select colour and submit form via keyboard. Focus styles set to both elements. 

#### Radio Buttons (Colour Selection)

If no colour is selected, a validation message tagged with aria attributes is displayed when the form is submitted.
Label is visually hidden but kept in the DOM for screen readers.

#### Submit Button (Buy)

I've used "aria-disabled" instead of default "disabled" making it accessible via keyboard and spinner replaces text 
when form is submitted (simulate async function).

For more info about inclusive button: https://css-tricks.com/making-disabled-buttons-more-inclusive/

#### Assets

Using a small version of rangerover.jpg on mobile and I've also cropped the png for submit button decreasing its 
file size.


## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

##### Previewing production build locally

The dist directory is meant to be served by an HTTP server (unless you've configured publicPath to be a relative value),
so it will not work if you open dist/index.html directly over file:// protocol. The easiest way to preview your
production build locally is using a Node.js static file server, for example serve:

```
npm install -g serve
# -s flag means serve it in Single-Page Application mode
# which deals with the routing problem below
serve -s dist
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).