

  # Advanced Features of Ollama JavaScript Library

The Ollama JavaScript library offers several advanced features that allow developers to work with embeddings, manage models, and use tools. This guide will explore these features in detail, providing code examples and explanations for their effective use.

## Working with Embeddings

Embeddings are vector representations of text that capture semantic meaning. Ollama provides two methods for working with embeddings: `embed` and `embeddings`.

### Using the `embed` Method

The `embed` method allows you to convert text input into vector embeddings.

```javascript
import ollama from 'ollama'

async function getEmbeddings() {
  const response = await ollama.embed({
    model: 'llama2',
    input: ['Hello, world!', 'How are you?']
  })

  console.log(response.embeddings)
}

getEmbeddings()
```

This method is useful when you need to process multiple text inputs at once and obtain their vector representations.

### Using the `embeddings` Method

The `embeddings` method is similar but works with a single text prompt.

```javascript
import ollama from 'ollama'

async function getSingleEmbedding() {
  const response = await ollama.embeddings({
    model: 'llama2',
    prompt: 'Hello, world!'
  })

  console.log(response.embedding)
}

getSingleEmbedding()
```

Use this method when you need to get the embedding for a single piece of text.

## Managing Models

Ollama provides several methods for managing models, including creating, copying, and deleting models.

### Creating a Model

To create a new model, use the `create` method:

```javascript
import ollama from 'ollama'

async function createModel() {
  const response = await ollama.create({
    model: 'my-custom-model',
    modelfile: `
FROM llama2
SYSTEM You are a helpful assistant named Claude.
    `
  })

  console.log(response)
}

createModel()
```

This is useful when you want to create a custom model based on an existing one, with specific instructions or system prompts.

### Copying a Model

To create a copy of an existing model, use the `copy` method:

```javascript
import ollama from 'ollama'

async function copyModel() {
  const response = await ollama.copy({
    source: 'llama2',
    destination: 'my-llama2-copy'
  })

  console.log(response)
}

copyModel()
```

This is helpful when you want to create a duplicate of a model, perhaps for experimentation or backup purposes.

### Deleting a Model

To remove a model from the server, use the `delete` method:

```javascript
import ollama from 'ollama'

async function deleteModel() {
  const response = await ollama.delete({
    model: 'my-custom-model'
  })

  console.log(response)
}

deleteModel()
```

Use this method when you no longer need a specific model and want to free up space on your server.

## Using Tools

Ollama supports the use of tools, which are functions that the model can call to perform specific tasks. Here's an example of how to use tools:

```javascript
import ollama from 'ollama'

function getFlightTimes(args) {
  // Simulated flight data
  const flights = {
    "NYC-LAX": { departure: "08:00 AM", arrival: "11:30 AM", duration: "5h 30m" },
    "LAX-NYC": { departure: "02:00 PM", arrival: "10:30 PM", duration: "5h 30m" }
  }

  const key = `${args.departure}-${args.arrival}`.toUpperCase()
  return JSON.stringify(flights[key] || { error: "Flight not found" })
}

async function chatWithTools() {
  const messages = [{ role: 'user', content: 'What is the flight time from New York to Los Angeles?' }]

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

  if (response.message.tool_calls) {
    for (const tool of response.message.tool_calls) {
      const functionResponse = getFlightTimes(tool.function.arguments)
      messages.push({
        role: 'tool',
        content: functionResponse,
      })
    }
  }

  const finalResponse = await ollama.chat({
    model: 'mistral',
    messages: messages,
  })

  console.log(finalResponse.message.content)
}

chatWithTools()
```

This example demonstrates how to define a tool (the `get_flight_times` function) and use it in a chat context. The model can decide to call this function when it needs specific information about flight times.

Using tools is particularly effective when you want to augment the model's capabilities with external data or functionalities. It allows the model to access real-time information or perform calculations that it might not be able to do on its own.

## Conclusion

These advanced features of the Ollama JavaScript library provide powerful capabilities for working with language models. By leveraging embeddings, you can perform semantic analysis and comparison of text. The model management features allow you to customize and organize your models efficiently. Finally, the tools functionality enables you to extend the model's capabilities with custom functions, making it possible to create more dynamic and interactive AI applications.

  