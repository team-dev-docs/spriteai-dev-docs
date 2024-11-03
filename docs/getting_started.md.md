

  # Getting Started with Ollama JavaScript Library

This guide will help you get up and running with the Ollama JavaScript library, enabling you to interact with Ollama models in both browser and Node.js environments.

## Installation

To install the Ollama JavaScript library, use npm:

```bash
npm install ollama
```

## Initializing the Ollama Client

### Browser Environment

For browser-based applications, import the Ollama client like this:

```javascript
import ollama from 'ollama/browser'
```

### Node.js Environment

For Node.js applications, import the Ollama client like this:

```javascript
import ollama from 'ollama'
```

## Basic Usage

Here are some basic examples of how to use the Ollama JavaScript library:

### Generating Text

```javascript
const response = await ollama.generate({
  model: 'llama2',
  prompt: 'Why is the sky blue?',
})
console.log(response.response)
```

### Chatting with a Model

```javascript
const response = await ollama.chat({
  model: 'llama2',
  messages: [
    {
      role: 'user',
      content: 'Hello, how are you?',
    },
  ],
})
console.log(response.message.content)
```

### Streaming Responses

To stream responses, set the `stream` option to `true`:

```javascript
const response = await ollama.generate({
  model: 'llama2',
  prompt: 'Write a short story about a robot learning to love.',
  stream: true,
})

for await (const part of response) {
  process.stdout.write(part.response)
}
```

### Working with Images (Multimodal Models)

For models that support image input:

```javascript
import ollama from 'ollama'

const imagePath = './path/to/your/image.jpg'
const response = await ollama.generate({
  model: 'llava',
  prompt: 'Describe this image:',
  images: [imagePath],
})
console.log(response.response)
```

### Embedding Text

To generate embeddings for text:

```javascript
const response = await ollama.embed({
  model: 'llama2',
  prompt: 'Hello world',
})
console.log(response.embedding)
```

## Advanced Configuration

You can configure the Ollama client with custom options:

```javascript
import { Ollama } from 'ollama'

const ollama = new Ollama({
  host: 'http://localhost:11434', // Custom host
  headers: { 'Custom-Header': 'value' }, // Custom headers
})
```

## Error Handling

It's good practice to wrap your Ollama API calls in try-catch blocks:

```javascript
try {
  const response = await ollama.generate({
    model: 'llama2',
    prompt: 'Hello, world!',
  })
  console.log(response.response)
} catch (error) {
  console.error('An error occurred:', error)
}
```

## Next Steps

- Explore the [Ollama API documentation](https://github.com/ollama/ollama/blob/main/docs/api.md) for more details on available endpoints and options.
- Check out the [Ollama JavaScript library source code](https://github.com/ollama/ollama-js) for advanced usage and implementation details.
- Join the [Ollama community](https://github.com/ollama/ollama/discussions) for support and discussions.

Remember to ensure that you have an Ollama server running and accessible before using the library. Happy coding with Ollama!

  