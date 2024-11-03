

  # Getting Started with ollama-js

This guide will help you get up and running with ollama-js, a JavaScript library for interacting with Ollama models. We'll cover installation, basic setup, and provide a simple example of generating text using the library.

## Installation

To install ollama-js, you can use npm (Node Package Manager). Run the following command in your terminal:

```bash
npm install ollama
```

## Basic Setup

After installation, you can import and use ollama-js in your JavaScript or TypeScript project. Here's how to set it up:

1. First, make sure you have Ollama running on your machine. If you haven't installed Ollama yet, follow the instructions on the [Ollama website](https://ollama.ai/).

2. In your JavaScript/TypeScript file, import the ollama library:

```javascript
import ollama from 'ollama'
```

## Simple Text Generation Example

Let's create a simple example that generates text using an Ollama model. We'll use the 'llama2' model for this example, but you can replace it with any other model you have installed.

```javascript
import ollama from 'ollama'

async function generateText() {
  try {
    const response = await ollama.generate({
      model: 'llama2',
      prompt: 'Write a short poem about coding.',
      stream: false
    })

    console.log('Generated text:', response.response)
  } catch (error) {
    console.error('Error generating text:', error)
  }
}

generateText()
```

This script does the following:

1. We import the ollama library.
2. We define an asynchronous function called `generateText()`.
3. Inside the function, we use `ollama.generate()` to create text based on the given prompt.
4. We specify the model to use ('llama2'), provide a prompt, and set `stream` to `false` to get the full response at once.
5. The generated text is then logged to the console.
6. We wrap the code in a try-catch block to handle any potential errors.

## Running the Example

To run this example:

1. Save the code in a file, e.g., `example.js`.
2. Make sure you have Node.js installed on your system.
3. Open a terminal, navigate to the directory containing your file, and run:

```bash
node example.js
```

You should see the generated text printed in your console.

## Advanced Usage: Streaming Responses

ollama-js also supports streaming responses, which is useful for real-time text generation. Here's how you can modify the example to use streaming:

```javascript
import ollama from 'ollama'

async function streamGeneratedText() {
  try {
    const stream = await ollama.generate({
      model: 'llama2',
      prompt: 'Write a short story about AI.',
      stream: true
    })

    for await (const part of stream) {
      process.stdout.write(part.response)
    }
  } catch (error) {
    console.error('Error generating text:', error)
  }
}

streamGeneratedText()
```

In this streaming example:

1. We set `stream: true` in the options.
2. We use a `for await...of` loop to iterate over the stream of responses.
3. Each part of the response is written to the console as it's generated.

## Conclusion

This guide has covered the basics of getting started with ollama-js, including installation, setup, and simple text generation examples. As you become more familiar with the library, you can explore more advanced features like multimodal inputs, custom model creation, and integration with other JavaScript frameworks.

For more detailed information and advanced usage, refer to the [ollama-js documentation](https://github.com/ollama/ollama-js) and the [Ollama API documentation](https://github.com/ollama/ollama/blob/main/docs/api.md).

  