slack-jsx
===============

> Nested JSON is hard to grasp on first sight. Use familiar JSX component syntax to compose Slack messages instead.

[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)

## Install

```js
npm install slack-jsx
```

## Usage
```js
/** @jsx Slack */

import Slack from 'slack-jsx'
import { Message, Attachment } from 'slack-jsx/components'

<Message text='I am a test message' />

<Message>
  <Attachment pretext='Above the attachment' />
</Message
```

## API

### `pragma(node, props, ...children)`

Compiles a Slack message from `slack-jsx` components.
- **returns**: Slack JSON message string
- `node` - a `slack-jsx` compatible component
- `props` - any valid combination of Slack message props
- `children` - an Array of sub-components with following behavior:
  - *first child* - if Array, it gets flattened into children
  - *rest* - not flattened in any case


## Contributing

Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](https://github.com/zcei/slack-jsx/issues/new).
But before doing anything, please read the [CONTRIBUTING.md](./CONTRIBUTING.md) guidelines.
