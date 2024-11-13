

  # Ollama Client Configuration Options

The Ollama client can be configured with various options to customize its behavior. This page explains all available configuration options and provides examples of how to use them when initializing the client.

## Configuration Object

When initializing the Ollama client, you can pass a configuration object with the following properties:

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `host` | string | `'http://127.0.0.1:11434'` | The host URL of the Ollama server |
| `fetch` | Function | `fetch` | Custom fetch function for making HTTP requests |
| `proxy` | boolean | `false` | Enable proxy support |
| `headers` | Headers | `undefined` | Custom headers to be sent with each request |

## Host Setting

The `host` option allows you to specify the URL of the Ollama server. By default, it connects to `http://127.0.0.1:11434`.

Example:

```javascript
import { Ollama } from 'ollama'

const ollama = new Ollama({
  host: 'http://custom-ollama-server.com:11434'
})
```

## Custom Fetch Function

You can provide a custom `fetch` function if you need to modify the way HTTP requests are made. This can be useful for adding custom logic, logging, or using a different HTTP client.

Example:

```javascript
import { Ollama } from 'ollama'
import nodeFetch from 'node-fetch'

const ollama = new Ollama({
  fetch: nodeFetch
})
```

## Proxy Support

Enable the `proxy` option if you're using the client behind a proxy server.

Example:

```javascript
import { Ollama } from 'ollama'

const ollama = new Ollama({
  proxy: true
})
```

## Custom Headers

You can set custom headers to be sent with each request using the `headers` option.

Example:

```javascript
import { Ollama } from 'ollama'

const ollama = new Ollama({
  headers: new Headers({
    'Authorization': 'Bearer your-token-here',
    'Custom-Header': 'Custom-Value'
  })
})
```

## Environment-Specific Options

### Browser Environment

In a browser environment, the Ollama client uses the global `fetch` function by default. No additional configuration is typically needed.

### Node.js Environment

When using Ollama in a Node.js environment, you may need to provide a custom `fetch` implementation, as `fetch` is not globally available in older Node.js versions.

Example using `node-fetch`:

```javascript
import { Ollama } from 'ollama'
import nodeFetch from 'node-fetch'

const ollama = new Ollama({
  fetch: nodeFetch
})
```

## Full Configuration Example

Here's an example that combines multiple configuration options:

```javascript
import { Ollama } from 'ollama'
import nodeFetch from 'node-fetch'

const ollama = new Ollama({
  host: 'https://custom-ollama-server.com:11434',
  fetch: nodeFetch,
  proxy: true,
  headers: new Headers({
    'Authorization': 'Bearer your-token-here',
    'Custom-Header': 'Custom-Value'
  })
})
```

This configuration sets a custom host, uses `node-fetch` for HTTP requests, enables proxy support, and adds custom headers to each request.

Remember to adjust these settings based on your specific requirements and environment.

  