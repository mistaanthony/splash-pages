Splash Pages for gocardless.com
===============================

See [How we built the new gocardless.com](https://gocardless.com/blog/how-we-built-the-new-gocardless.com/).

### Install & run

##### Prerequisites:

- Node.js (or io.js): `brew install node`

##### Dependencies

```
npm install
```

##### Running

```
npm start
```

Visit:

```
http://localhost:4402
```

##### Testing

```
npm test
```

This will run ESLint, Unit Tests and E2E tests.

__Note__: the first time you run the tests, they will be slow. This is because of the transpilation that Babel has to do. Every subsequent run should be much quicker, as Babel caches aggresively.

### What is JSX?

JSX looks a bit like HTML but it's just a shorthand for writing JavaScript functions that turn into HTML.

##### Syntax highlighting `jsx`

- Sublime Text: https://github.com/babel/babel-sublime (make the it default for `.js` and `.json` and disable the `JavaScript` package by adding it in `ignored_packages`)

##### Transform process

To see HTML turn into JSX, write some HTML and see it turn into JSX: https://facebook.github.io/react/html-jsx.html

To see JSX turn into JavaScript, write some JSX in the render function: https://facebook.github.io/react/jsx-compiler.html

##### Learn more

- JSX syntax: https://facebook.github.io/react/docs/displaying-data.html#jsx-syntax

- JSX in depth: https://facebook.github.io/react/docs/jsx-in-depth.html

- JSX Gotchas: https://facebook.github.io/react/docs/jsx-gotchas.html

##### HTML to JSX

https://facebook.github.io/react/html-jsx.html

### Content

##### Imports

Import paths are relative from the file you are in and exclude `.js`.

For example, importing the `Message` component from `app/pages/home/home.js`:

```js
import Message from '../../components/message/message';
```

##### Routes

Routes are defined in `app/router/routes.js`.

To add a new page import the page component and add it to the config:

```js
import Home from '../pages/home/home';

var config = Immutable.fromJS([
  [Home, { name: 'home' }, {
    'en-GB': {
      path: '/'
    }
  }]
]);
```

##### Path prefixed with locale

All paths are prefixed with a lowercase locale except for the default locale (en-GB).

##### Route options

Routes are constructed with an array: `[PageComponent, { route options }, { .. locale options .. }, [optional nested routes]]`

Import the `PageComponent` from pages, this is the component that gets rendered when the page is visited.

Route options require `name`, use when linking to pages `<Link to="page_name" />.

To add a page for `en-GB`, `en-IE`, and `fr-FR`:

```js
import Pricing from '../pages/pricing/pricing';

var config = Immutable.fromJS([
  [Pricing, { name: 'pricing' }, {
    'en-GB': {
      path: '/pricing'
    },
    'en-IE': {
      path: '/pricing'
    },
    'fr-FR': {
      path: '/tarifs'
    },
  }]
]);
```

Resulting paths for `Pricing`: `/pricing`, `/en-ie/pricing`, `/fr-fr/tarifs`.

The `Pricing` component is then responsible for rendering the right content for each locale (see Translation).

##### Links

Links can be generated given the page `name` value from the route config with the `Link` component.

```jsx
import Link from '../../components/link/link';

export default class Home extends React.Component {
  displayName = 'Home'

  render() {
    return (
      {/* Turns into a <a href="/">Home</a> */}
      <Link to='home'>Home</Link>
    );
  }
}
```

### Translations

##### Strings

String translations are defined in `app/messages/{language-[region]}.js`.

If a string is defined in a language only file (`en.js`) it will be available
for all regions with that lang (e.g. (`en-GB.js`).

Re-defining the string in the region specific file will override the language only string.

For example, given the following strucutre in `en.js`, and visiting a url for any english language locale:

```js
export default {
  features: {
    explainer: 'Simple recurring payments',
  },
}
```

Render the string using the `Message` component:

```jsx
import Message from '../../components/message/message';

export default class Home extends React.Component {
  displayName = 'Home'

  render() {
    return (
      {/* Renders `Simple recurring payments` */}
      <Message pointer='features.explainer' />
    );
  }
}
```

Define an override for Ireland in `en-IE.js`:

```js
export default {
  features: {
    explainer: 'Recurring payments',
  },
}
```

##### Blocks of HTML

When you need to swap out larget pieces of content you can use the `Translation` component.

```jsx
import Translation from '../../components/translation/translation';

export default class Home extends React.Component {
  displayName = 'Home'

  render() {
    return (
      <Translation locales='en'>
        Shown when visiting urls with `en-GB` locale or any `en-` locale (e.g. /pricing)
      </Translation>

      <Translation locales='fr'>
        Shown when visiting urls with `fr-FR` or `fr-BE` locale (e.g. /fr-fr/tarifs or /fr-be/tarifs)
      </Translation>
    );
  }
}
```

### SVG icons

SVGs are generated React Components, use them like any other component.

```jsx
import CheckmarkIcon from '../../icons/svg/checkmark';

class Header extends React.Component {
  displayName = 'Header'

  render() {
    return (
      <CheckmarkIcon className='u-fill-dark-green u-margin-Ls u-pull-end u-inline' alt='✓' />
    );
  }
}
```

##### Generating SVG components

If you're adding or editing an svg, edit the file in `public/` and run the generate script.

`./script/generators/render-icons`

### Assets

CSS: `app/css/`
Images: `public/images/`
Static app: `app/public/`

### Troubleshooting

1. `npm start` fails
    Try running `npm install`. Packages might be out of date.

2. Changes are not happening
   There might be an exception in your code, check the running terminal or your chrome inspector console.

3. Prospect forms are broken
   You need to run the gocardless app at: `gocardless.dev:3000`

## Adding a job ad

1. Add content (e.g. `app/pages/jobs/positions/hiring-assistant.js`)

2. Import and add file to routes (`app/router/routes.js`)

```js
import HiringAssistant from '../pages/about/jobs/positions/hiring-assistant';

[HiringAssistant, { name: 'jobs_hiring_assistant', category: 'jobs.operations' }, {
    en: {
      path: '/about/jobs/hiring-assistant',
    },
  },
],
```

3. Add title/description to messages (e.g. `app/messages/en.js`)

```js
jobs_hiring_assistant: {
  title: 'Hiring Assistant',
  description: '',
},
```