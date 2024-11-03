

  # Ollama-js Configuration Options

Ollama-js provides several configuration options to customize the behavior of the Ollama instance. This guide explains all available configuration options and how to set them up.

## Creating an Ollama Instance

To create a new Ollama instance with custom configuration, you can use the following syntax:

```javascript
import { Ollama } from 'ollama'

const ollama = new Ollama(config)
```

The `config` object can include the following properties:

## Configuration Options

### `host`

- Type: `string`
- Default: `'http://127.0.0.1:11434'`

The URL of the Ollama server. If not specified, it defaults to the local host on port 11434.

```javascript
const ollama = new Ollama({ host: 'https://my-ollama-server.com' })
```

### `fetch`

- Type: `Fetch`
- Default: `window.fetch` or `global.fetch`

A custom fetch function to use for making HTTP requests. This can be useful for environments where the standard `fetch` is not available or if you need to customize the fetch behavior.

```javascript
import nodeFetch from 'node-fetch'

const ollama = new Ollama({ fetch: nodeFetch })
```

### `proxy`

- Type: `boolean`
- Default: `false`

When set to `true`, it indicates that the Ollama instance is being used with a proxy server. This affects how the `host` is interpreted.

```javascript
const ollama = new Ollama({ proxy: true })
```

### `headers`

- Type: `Headers`
- Default: `undefined`

Custom headers to be sent with each request to the Ollama server. This can be useful for authentication or setting specific request headers.

```javascript
const ollama = new Ollama({
  headers: {
    'Authorization': 'Bearer your-token-here',
    'Custom-Header': 'Custom-Value'
  }
})
```

## Example: Full Configuration

Here's an example of creating an Ollama instance with all available configuration options:

```javascript
import { Ollama } from 'ollama'
import nodeFetch from 'node-fetch'

const ollama = new Ollama({
  host: 'https://my-ollama-server.com',
  fetch: nodeFetch,
  proxy: true,
  headers: {
    'Authorization': 'Bearer your-token-here',
    'Custom-Header': 'Custom-Value'
  }
})
```

## Notes

- The `host` option is ignored if `proxy` is set to `true`.
- If no configuration is provided, Ollama will use default values and attempt to connect to a local Ollama server.
- The `headers` option can be particularly useful for adding authentication or custom metadata to requests.
- The `fetch` option allows for greater flexibility in different JavaScript environments, such as Node.js or custom browser setups.

Remember to adjust these configuration options based on your specific setup and requirements when using Ollama-js in your project.

  