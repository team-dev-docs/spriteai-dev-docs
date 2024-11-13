

  # Using Ollama JavaScript Library in Node.js

This guide demonstrates how to use the Ollama JavaScript library in Node.js environments, highlighting Node.js-specific features and file system interactions.

## Installation

First, install the Ollama library using npm:

```bash
npm install ollama
```

## Basic Usage

Here's a simple example of using Ollama in a Node.js application:

```javascript
import ollama from 'ollama';

async function main() {
  const response = await ollama.chat({
    model: 'mistral',
    messages: [{ role: 'user', content: 'Hello, how are you?' }]
  });

  console.log(response.message.content);
}

main().catch(console.error);
```

## Node.js-Specific Features

### File System Interactions

The Ollama library provides Node.js-specific functionality for working with the file system. This is particularly useful when dealing with image inputs or custom model files.

#### Reading Image Files

You can use the `encodeImage` method to read image files from the local file system:

```javascript
import ollama from 'ollama';
import { resolve } from 'path';

async function main() {
  const imagePath = resolve('./path/to/image.jpg');
  const encodedImage = await ollama.encodeImage(imagePath);

  const response = await ollama.chat({
    model: 'llava',
    messages: [
      {
        role: 'user',
        content: 'Describe this image',
        images: [encodedImage]
      }
    ]
  });

  console.log(response.message.content);
}

main().catch(console.error);
```

#### Working with Model Files

When creating custom models, you can use file paths to specify the model file:

```javascript
import ollama from 'ollama';
import { resolve } from 'path';

async function main() {
  const modelfilePath = resolve('./path/to/modelfile');

  const response = await ollama.create({
    model: 'my-custom-model',
    path: modelfilePath
  });

  console.log(response);
}

main().catch(console.error);
```

### Streaming Responses

Node.js allows for efficient handling of streaming responses. Here's an example of using streaming with Ollama:

```javascript
import ollama from 'ollama';

async function main() {
  const stream = await ollama.chat({
    model: 'mistral',
    messages: [{ role: 'user', content: 'Write a short story' }],
    stream: true
  });

  for await (const chunk of stream) {
    process.stdout.write(chunk.message.content);
  }
}

main().catch(console.error);
```

## Server-Side Integration

Here's an example of integrating Ollama with an Express.js server:

```javascript
import express from 'express';
import ollama from 'ollama';

const app = express();
app.use(express.json());

app.post('/chat', async (req, res) => {
  try {
    const { model, messages } = req.body;
    const response = await ollama.chat({ model, messages });
    res.json(response);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
```

## Advanced Features

### Function Calling

Ollama supports function calling, which allows the model to use external tools or APIs. Here's an example:

```javascript
import ollama from 'ollama';

function getFlightTimes(args) {
  // Simulated flight data
  const flights = {
    "NYC-LAX": { departure: "08:00 AM", arrival: "11:30 AM", duration: "5h 30m" },
    // ... more flight data
  };

  const key = `${args.departure}-${args.arrival}`.toUpperCase();
  return JSON.stringify(flights[key] || { error: "Flight not found" });
}

async function main() {
  const response = await ollama.chat({
    model: 'mistral',
    messages: [{ role: 'user', content: 'What is the flight time from New York to Los Angeles?' }],
    tools: [
      {
        type: 'function',
        function: {
          name: 'get_flight_times',
          description: 'Get the flight times between two cities',
          parameters: {
            type: 'object',
            properties: {
              departure: { type: 'string', description: 'The departure city (airport code)' },
              arrival: { type: 'string', description: 'The arrival city (airport code)' },
            },
            required: ['departure', 'arrival'],
          },
        },
      },
    ],
  });

  if (response.message.tool_calls) {
    for (const tool of response.message.tool_calls) {
      const functionResponse = getFlightTimes(JSON.parse(tool.function.arguments));
      console.log('Function response:', functionResponse);
    }
  }

  console.log('Model response:', response.message.content);
}

main().catch(console.error);
```

This example demonstrates how to use function calling to provide the model with external data, which can be particularly useful for creating more dynamic and context-aware applications.

## Conclusion

The Ollama JavaScript library provides powerful capabilities for integrating large language models into Node.js applications. By leveraging Node.js-specific features like file system access and streaming, you can create sophisticated AI-powered applications with ease.

Remember to handle errors appropriately and consider performance implications when working with large models or processing large amounts of data. Always refer to the official Ollama documentation for the most up-to-date information on available features and best practices.

  