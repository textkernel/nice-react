# Nice! React Components

[![Build Status](https://travis-ci.com/textkernel/nice-react.svg?branch=master)](https://travis-ci.com/textkernel/nice-react)

Nice! React provides UI elements from the [Nice! UI library](https://nice.textkernel.nl) in the form of React components. It is maintained by the [Nice! circle](mailto:nice@textkernel.nl) within [Textkernel](http://textkernel.com).

To get started, check out https://nice.textkernel.nl/react.

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
    <Alert context="primary" heading="I'm a nice React component!">
        Some content
    </Alert>
    ```

Some components have sub-components of their own. These are defined as class properties of the main 
component, so no need to import them separately. For example, the `Pagination` component comes with
`Item` and `Gap` which can be used like this:

```js
import Pagination from 'nice-react';

<Pagination>
    <Pagination.Item disabled>
        &laquo; Previous
    </Pagination.Item>
    <Pagination.Item current>
        1
    </Pagination.Item>
    <Pagination.Gap />
    <Pagination.Item>
        3
    </Pagination.Item>
</Pagination>
```

## Examples & Testing

### Storybook
Nice! React supports [Storybook](https://storybook.js.org/).

1. Make sure you have Storybook installed (globally):
    ```bash
    $ npm i -g @storybook/cli
    ```

2. Run `npm run storybook`

3. Go to `http://localhost:9001` to check out examples of all components

...or check out https://nice.textkernel.nl/react

### Tests
* Run tests: `npm test`
* Run tests in watch mode: `npm run test:watch`
* Coverage report: `npm run test:coverage`

### Publishing on NPM

```bash
npm publish --access=public
```

## Bugs and feature requests
Found a bug or have a feature request? [Please open a new issue](https://github.com/textkernel/nice-react/issues/new).

## Versioning
Nice! React is maintained under [the Semantic Versioning guidelines](https://semver.org/).

## Copyright and license
Code and documentation :copyright: 2018 Textkernel B.V.