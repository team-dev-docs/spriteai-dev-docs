

  # Getting Started with ollama-js

This guide will help you quickly set up and start using ollama-js in your projects. Follow these steps to get up and running with ollama-js.

## Prerequisites

Before you begin, make sure you have the following installed:
- Node.js (version 12 or later)
- npm (usually comes with Node.js)

## Step 1: Install ollama-js

To install ollama-js in your project, run the following command in your terminal:

```bash
npm install ollama
```

## Step 2: Import ollama-js in your project

After installation, you can import ollama-js in your JavaScript or TypeScript file:

```javascript
import ollama from 'ollama'
```

## Step 3: Basic Usage

Here's a simple example of how to use ollama-js to generate text:

```javascript
import ollama from 'ollama'

async function generateText() {
  const response = await ollama.generate({
    model: 'llama2',
    prompt: 'Tell me a short joke',
  })
  
  console.log(response.response)
}

generateText()
```

## Step 4: Streaming Responses

ollama-js supports streaming responses. Here's how you can use it:

```javascript
import ollama from 'ollama'

async function streamResponse() {
  const stream = await ollama.generate({
    model: 'llama2',
    prompt: 'Write a short story about a robot',
    stream: true,
  })

  for await (const part of stream) {
    process.stdout.write(part.response)
  }
}

streamResponse()
```

## Step 5: Working with Images (Multimodal)

ollama-js also supports multimodal models. Here's an example of how to use it with images:

```javascript
import ollama from 'ollama'

async function describeImage() {
  const imagePath = './path/to/your/image.jpg'
  const response = await ollama.generate({
    model: 'llava',
    prompt: 'Describe this image:',
    images: [imagePath],
    stream: true,
  })

  for await (const part of response) {
    process.stdout.write(part.response)
  }
}

describeImage()
```

## Additional Configuration

You can configure ollama-js by setting the host. By default, it uses `http://localhost:11434`. To change this:

```javascript
import { Ollama } from 'ollama'

const customOllama = new Ollama({
  host: 'http://your-custom-host:port'
})
```

## Conclusion

You've now set up ollama-js and learned the basics of generating text, streaming responses, and working with images. Explore the [ollama-js documentation](https://github.com/ollama/ollama-js) for more advanced features and options.

Remember to handle errors and implement proper error handling in your production code. Happy coding with ollama-js!

  