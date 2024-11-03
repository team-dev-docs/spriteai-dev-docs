

  # Working with Language Models using Ollama JavaScript

This guide covers how to use the Ollama JavaScript library to interact with language models. We'll look at generating responses, having chat conversations, and handling streaming outputs.

## Installation

First, install the Ollama library:

```bash
npm install ollama
```

## Importing Ollama

```javascript
import ollama from 'ollama'
```

## Generating Responses

To generate a response from a model:

```javascript
const response = await ollama.generate({
  model: 'llama2',
  prompt: 'Why is the sky blue?'
})

console.log(response.response)
```

### Streaming Responses

For longer outputs, you can stream the response:

```javascript
const response = await ollama.generate({
  model: 'llama2',
  prompt: 'Write a short story about a robot learning to love.',
  stream: true
})

for await (const part of response) {
  process.stdout.write(part.response)
}
```

## Chat Interactions

For back-and-forth conversations:

```javascript
const messages = [
  {
    role: 'user',
    content: 'Hello! Can you help me with some math?'
  }
]

const response = await ollama.chat({
  model: 'llama2',
  messages: messages
})

console.log(response.message.content)

// Continue the conversation
messages.push(response.message)
messages.push({
  role: 'user', 
  content: 'Great! What's 15 x 7?'
})

const nextResponse = await ollama.chat({
  model: 'llama2',
  messages: messages
})

console.log(nextResponse.message.content)
```

### Streaming Chat Responses

Similar to generate, you can stream chat responses:

```javascript
const response = await ollama.chat({
  model: 'llama2',
  messages: [{ role: 'user', content: 'Tell me a long story about space exploration.' }],
  stream: true
})

for await (const part of response) {
  process.stdout.write(part.message.content)
}
```

## Working with Images

Ollama supports multimodal models that can process both text and images:

```javascript
import ollama from 'ollama'

const imagePath = './cat.jpg'
const response = await ollama.generate({
  model: 'llava',
  prompt: 'Describe this image:',
  images: [imagePath],
  stream: true,
})

for await (const part of response) {
  process.stdout.write(part.response)
}
```

## Using Function Calling

Some models support function calling, which allows the model to request external data:

```javascript
import ollama from 'ollama';

const messages = [{ role: 'user', content: 'What is the flight time from New York (NYC) to Los Angeles (LAX)?' }];

const response = await ollama.chat({
    model: 'mistral',
    messages: messages,
    tools: [
        {
            type: 'function',
            function: {
                name: 'get_flight_times',
                description: 'Get the flight times between two cities',
                parameters: {
                    type: 'object',
                    properties: {
                        departure: {
                            type: 'string',
                            description: 'The departure city (airport code)',
                        },
                        arrival: {
                            type: 'string',
                            description: 'The arrival city (airport code)',
                        },
                    },
                    required: ['departure', 'arrival'],
                },
            },
        },
    ],
})

// Process the response and handle any function calls as needed
```

## Error Handling

Always wrap your Ollama calls in try-catch blocks to handle potential errors:

```javascript
try {
  const response = await ollama.generate({
    model: 'llama2',
    prompt: 'Hello, world!'
  })
  console.log(response.response)
} catch (error) {
  console.error('An error occurred:', error)
}
```

This guide covers the basics of working with Ollama's JavaScript library. For more advanced usage and full API documentation, refer to the [official Ollama documentation](https://github.com/jmorganca/ollama/tree/main/docs).

  