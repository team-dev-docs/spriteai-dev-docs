

  # Ollama Library API Reference

This document provides a comprehensive API reference for the Ollama library, organized by main categories.

## Table of Contents

1. [Initialization](#initialization)
2. [Text Generation](#text-generation)
3. [Chat](#chat)
4. [Image Processing](#image-processing)
5. [Model Management](#model-management)
6. [Embeddings](#embeddings)

## Initialization

### Creating an Ollama Instance

```typescript
const ollama = new Ollama(config?: Config)
```

Creates a new instance of the Ollama class.

Parameters:
- `config` (optional): Configuration object
  - `host`: string - The host URL
  - `fetch`: Fetch function (optional)
  - `proxy`: boolean (optional)
  - `headers`: Headers object (optional)

Example:

```typescript
import { Ollama } from 'ollama'

const ollama = new Ollama({
  host: 'http://localhost:11434',
})
```

## Text Generation

### Generate

```typescript
ollama.generate(request: GenerateRequest): Promise<GenerateResponse>
```

Generates text based on the provided prompt.

Parameters:
- `request`: GenerateRequest object
  - `model`: string - The model to use
  - `prompt`: string - The input prompt
  - `system`: string (optional) - System message
  - `template`: string (optional) - Custom prompt template
  - `context`: number[] (optional) - Context for continued conversations
  - `stream`: boolean (optional) - Whether to stream the response
  - `raw`: boolean (optional) - Whether to return raw output
  - `format`: string (optional) - Output format
  - `images`: Uint8Array[] | string[] (optional) - Images to include
  - `keep_alive`: string | number (optional) - Keep-alive duration
  - `options`: Partial<Options> (optional) - Additional options

Returns:
- Promise<GenerateResponse>

Example:

```typescript
const response = await ollama.generate({
  model: 'llama2',
  prompt: 'What is the capital of France?',
})
console.log(response.response)
```

## Chat

### Chat

```typescript
ollama.chat(request: ChatRequest): Promise<ChatResponse>
```

Initiates a chat conversation.

Parameters:
- `request`: ChatRequest object
  - `model`: string - The model to use
  - `messages`: Message[] (optional) - Previous messages in the conversation
  - `stream`: boolean (optional) - Whether to stream the response
  - `format`: string (optional) - Output format
  - `keep_alive`: string | number (optional) - Keep-alive duration
  - `tools`: Tool[] (optional) - Available tools for the model to use
  - `options`: Partial<Options> (optional) - Additional options

Returns:
- Promise<ChatResponse>

Example:

```typescript
const response = await ollama.chat({
  model: 'llama2',
  messages: [
    { role: 'user', content: 'Hello, how are you?' },
  ],
})
console.log(response.message.content)
```

## Image Processing

### Encode Image

```typescript
ollama.encodeImage(image: Uint8Array | Buffer | string): Promise<string>
```

Encodes an image to base64 format.

Parameters:
- `image`: Uint8Array | Buffer | string - The image data or file path

Returns:
- Promise<string> - Base64 encoded image

Example:

```typescript
const encodedImage = await ollama.encodeImage('path/to/image.jpg')
console.log(encodedImage)
```

## Model Management

### Create Model

```typescript
ollama.create(request: CreateRequest): Promise<ProgressResponse | AbortableAsyncIterator<ProgressResponse>>
```

Creates a new model.

Parameters:
- `request`: CreateRequest object
  - `model`: string - The name of the model to create
  - `path`: string (optional) - Path to the model file
  - `modelfile`: string (optional) - Content of the model file
  - `quantize`: string (optional) - Quantization level
  - `stream`: boolean (optional) - Whether to stream the progress

Returns:
- Promise<ProgressResponse> or AbortableAsyncIterator<ProgressResponse>

Example:

```typescript
const response = await ollama.create({
  model: 'my-custom-model',
  path: '/path/to/modelfile',
})
console.log(response.status)
```

### Pull Model

```typescript
ollama.pull(request: PullRequest): Promise<ProgressResponse>
```

Pulls a model from a remote source.

Parameters:
- `request`: PullRequest object
  - `model`: string - The name of the model to pull
  - `insecure`: boolean (optional) - Allow insecure connections
  - `stream`: boolean (optional) - Whether to stream the progress

Returns:
- Promise<ProgressResponse>

Example:

```typescript
const response = await ollama.pull({
  model: 'llama2',
})
console.log(response.status)
```

### Push Model

```typescript
ollama.push(request: PushRequest): Promise<ProgressResponse>
```

Pushes a model to a remote destination.

Parameters:
- `request`: PushRequest object
  - `model`: string - The name of the model to push
  - `insecure`: boolean (optional) - Allow insecure connections
  - `stream`: boolean (optional) - Whether to stream the progress

Returns:
- Promise<ProgressResponse>

Example:

```typescript
const response = await ollama.push({
  model: 'my-custom-model',
})
console.log(response.status)
```

### Delete Model

```typescript
ollama.delete(request: DeleteRequest): Promise<StatusResponse>
```

Deletes a model.

Parameters:
- `request`: DeleteRequest object
  - `model`: string - The name of the model to delete

Returns:
- Promise<StatusResponse>

Example:

```typescript
const response = await ollama.delete({
  model: 'my-custom-model',
})
console.log(response.status)
```

### Copy Model

```typescript
ollama.copy(request: CopyRequest): Promise<StatusResponse>
```

Copies a model.

Parameters:
- `request`: CopyRequest object
  - `source`: string - The name of the source model
  - `destination`: string - The name of the destination model

Returns:
- Promise<StatusResponse>

Example:

```typescript
const response = await ollama.copy({
  source: 'llama2',
  destination: 'my-llama2-copy',
})
console.log(response.status)
```

### Show Model

```typescript
ollama.show(request: ShowRequest): Promise<ShowResponse>
```

Shows details of a model.

Parameters:
- `request`: ShowRequest object
  - `model`: string - The name of the model
  - `system`: string (optional) - System message
  - `template`: string (optional) - Custom prompt template
  - `options`: Partial<Options> (optional) - Additional options

Returns:
- Promise<ShowResponse>

Example:

```typescript
const response = await ollama.show({
  model: 'llama2',
})
console.log(response.modelfile)
```

### List Models

```typescript
ollama.list(): Promise<ListResponse>
```

Lists all available models.

Returns:
- Promise<ListResponse>

Example:

```typescript
const response = await ollama.list()
console.log(response.models)
```

## Embeddings

### Embed

```typescript
ollama.embed(request: EmbedRequest): Promise<EmbedResponse>
```

Generates embeddings for the given input.

Parameters:
- `request`: EmbedRequest object
  - `model`: string - The model to use
  - `input`: string | string[] - The input text(s)
  - `truncate`: boolean (optional) - Whether to truncate the input
  - `keep_alive`: string | number (optional) - Keep-alive duration
  - `options`: Partial<Options> (optional) - Additional options

Returns:
- Promise<EmbedResponse>

Example:

```typescript
const response = await ollama.embed({
  model: 'llama2',
  input: 'Hello, world!',
})
console.log(response.embeddings)
```

### Embeddings (deprecated)

```typescript
ollama.embeddings(request: EmbeddingsRequest): Promise<EmbeddingsResponse>
```

Generates embeddings for the given prompt (deprecated, use `embed` instead).

Parameters:
- `request`: EmbeddingsRequest object
  - `model`: string - The model to use
  - `prompt`: string - The input prompt
  - `keep_alive`: string | number (optional) - Keep-alive duration
  - `options`: Partial<Options> (optional) - Additional options

Returns:
- Promise<EmbeddingsResponse>

Example:

```typescript
const response = await ollama.embeddings({
  model: 'llama2',
  prompt: 'Hello, world!',
})
console.log(response.embedding)
```

  