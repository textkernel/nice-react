# Nice! React Components

Nice! React provides UI elements from the [Nice! UI library](https://nice.textkernel.nl) in the form of React components. It is maintained by the [Nice! circle](mailto:nice@textkernel.nl) within [Textkernel](http://textkernel.com).

## Quick start
Several quick start options are available:

* Clone the repo:
    ```bash
    $ git clone https://github.com/textkernel/nice-react.git
    ```

* Install with [npm](https://www.npmjs.com/package/@textkernel/nice-react): 
    ```bash
    $ npm install --save @textkernel/nice-react
    ```

## Usage
1. Import the desired UI component from the library, e.g.:
    ```js
    const { Alert } = require('nice-react');
    ````
    ...or using ES6 import:


    ```js
    import Alert from 'nice-react';
    ```

2. Include the component in your page
    ```jsx
    <Alert context="primary" heading="I'm a nice React component!"  />
    ```

## Testing

### Storybook
Nice! React supports [Storybook](https://storybook.js.org/).

1. Make sure you have Storybook installed (globally):
    ```bash
    $ npm i -g @storybook/cli
    ```
2. Run `npm run storybook`
3. Go to `http://localhost:9001` to check out examples of all components

### Tests
* Run tests: `npm test`
* Run tests in watch mode: `npm test:watch`
* Coverage report: `npm test:coverage`

## Versioning
Nice! React is maintained under [the Semantic Versioning guidelines](https://semver.org/).

## Copyright and license
Code and documentation :copyright: 2018 Textkernel B.V.