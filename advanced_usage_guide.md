

  # Advanced Usage Guide for Ollama Library

## Introduction

This guide covers advanced topics for using the Ollama library, including streaming responses, error handling, working with tools and function calling, and performance optimization. We'll provide real-world examples and best practices for each topic.

## Streaming Responses

Ollama supports streaming responses, which is particularly useful for handling large outputs or providing real-time feedback to users.

### Example: Streaming Chat Responses

```javascript
import ollama from 'ollama';

async function streamChatResponse() {
  const messages = [{ role: 'user', content: 'Tell me a long story about space exploration.' }];
  
  const stream = await ollama.chat({
    model: 'mistral',
    messages: messages,
    stream: true
  });

  for await (const chunk of stream) {
    process.stdout.write(chunk.message.content);
  }
}

streamChatResponse();
```

Best Practices:
- Use streaming for long-running tasks or large outputs.
- Process chunks as they arrive to provide real-time feedback.
- Consider implementing a timeout mechanism for long-running streams.

## Error Handling

Proper error handling is crucial for building robust applications with Ollama.

### Example: Handling Errors in API Calls

```javascript
import ollama from 'ollama';

async function handleErrors() {
  try {
    const response = await ollama.chat({
      model: 'non-existent-model',
      messages: [{ role: 'user', content: 'Hello' }]
    });
    console.log(response);
  } catch (error) {
    if (error instanceof ollama.ResponseError) {
      console.error(`API Error: ${error.error}, Status Code: ${error.status_code}`);
    } else {
      console.error('An unexpected error occurred:', error);
    }
  }
}

handleErrors();
```

Best Practices:
- Always wrap Ollama API calls in try-catch blocks.
- Check for specific error types (e.g., `ResponseError`) to handle API-specific errors.
- Implement appropriate fallback mechanisms or retry logic for recoverable errors.

## Working with Tools and Function Calling

Ollama supports function calling, allowing the model to use external tools or APIs.

### Example: Flight Time Lookup Tool

```javascript
import ollama from 'ollama';

function getFlightTimes(args) {
    const { departure, arrival } = args;
    // Simulated flight database
    const flights = {
        "NYC-LAX": { departure: "08:00 AM", arrival: "11:30 AM", duration: "5h 30m" },
        // ... more flights ...
    };
    const key = `${departure}-${arrival}`.toUpperCase();
    return JSON.stringify(flights[key] || { error: "Flight not found" });
}

async function useFlightTool() {
    const messages = [{ role: 'user', content: 'What is the flight time from New York to Los Angeles?' }];

    const response = await ollama.chat({
        model: 'mistral',
        messages: messages,
        tools: [{
            type: 'function',
            function: {
                name: 'get_flight_times',
                description: 'Get flight times between two cities',
                parameters: {
                    type: 'object',
                    properties: {
                        departure: { type: 'string', description: 'Departure city code' },
                        arrival: { type: 'string', description: 'Arrival city code' },
                    },
                    required: ['departure', 'arrival'],
                },
            },
        }],
    });

    if (response.message.tool_calls) {
        for (const tool of response.message.tool_calls) {
            if (tool.function.name === 'get_flight_times') {
                const functionResponse = getFlightTimes(JSON.parse(tool.function.arguments));
                messages.push({ role: 'tool', content: functionResponse });
            }
        }
    }

    const finalResponse = await ollama.chat({
        model: 'mistral',
        messages: messages,
    });

    console.log(finalResponse.message.content);
}

useFlightTool();
```

Best Practices:
- Define clear and specific function descriptions and parameters.
- Handle potential errors in function execution and provide informative error messages.
- Use type checking and validation for function arguments.

## Optimizing Performance

To get the best performance out of Ollama, consider the following techniques:

### 1. Model Selection and Fine-tuning

Choose the appropriate model size for your task. Smaller models are faster but may be less capable.

```javascript
const response = await ollama.chat({
  model: 'mistral:7b-instruct', // A smaller, faster model
  messages: [{ role: 'user', content: 'Summarize this paragraph.' }]
});
```

### 2. Batching Requests

For multiple similar requests, consider batching them to reduce overhead.

```javascript
async function batchRequests(prompts) {
  const batchSize = 5;
  const results = [];

  for (let i = 0; i < prompts.length; i += batchSize) {
    const batch = prompts.slice(i, i + batchSize);
    const batchPromises = batch.map(prompt => 
      ollama.chat({
        model: 'mistral',
        messages: [{ role: 'user', content: prompt }]
      })
    );
    const batchResults = await Promise.all(batchPromises);
    results.push(...batchResults);
  }

  return results;
}
```

### 3. Caching

Implement caching for frequently requested information to reduce API calls.

```javascript
const cache = new Map();

async function cachedChat(message) {
  const cacheKey = JSON.stringify(message);
  if (cache.has(cacheKey)) {
    return cache.get(cacheKey);
  }

  const response = await ollama.chat({
    model: 'mistral',
    messages: [message]
  });

  cache.set(cacheKey, response);
  return response;
}
```

### 4. Prompt Engineering

Craft efficient prompts to get more accurate responses with fewer tokens.

```javascript
const efficientPrompt = {
  role: 'user',
  content: 'Summarize the following text in 3 bullet points:\n\n' + longText
};
```

Best Practices for Performance:
- Monitor and log response times to identify performance bottlenecks.
- Use streaming for long responses to improve perceived performance.
- Implement rate limiting to avoid overloading the API.
- Consider running Ollama locally for reduced latency in high-volume scenarios.

## Conclusion

By leveraging these advanced techniques - streaming responses, robust error handling, tool integration, and performance optimization - you can build more sophisticated and efficient applications with the Ollama library. Remember to always test thoroughly and monitor your application's performance in real-world scenarios.

  