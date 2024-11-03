

  # Ollama JavaScript Library API Reference

This document provides a detailed API reference for the Ollama JavaScript library, covering both the `Ollama` and `OllamaBrowser` classes.

## OllamaBrowser Class

The `OllamaBrowser` class is the base class for interacting with the Ollama API in browser environments.

### Constructor

```typescript
constructor(config?: Partial<Config>)
```

Creates a new instance of the OllamaBrowser class.

- `config`: An optional configuration object with the following properties:
  - `host`: The Ollama API host (default: 'http://127.0.0.1:11434')
  - `fetch`: A custom fetch function (optional)
  - `proxy`: Whether to use a proxy (optional)
  - `headers`: Custom headers to include in requests (optional)

### Methods

#### abort()

Aborts any ongoing streamed requests to Ollama.

#### generate(request: GenerateRequest): Promise<GenerateResponse | AbortableAsyncIterator<GenerateResponse>>

Generates a response from a text prompt.

- `request`: An object containing the following properties:
  - `model`: The name of the model to use
  - `prompt`: The text prompt
  - `stream`: Whether to stream the response (optional, default: false)
  - `images`: An array of images as Uint8Array or base64 encoded strings (optional)
  - Other optional parameters as defined in the `GenerateRequest` interface

Returns a Promise that resolves to a `GenerateResponse` or an `AbortableAsyncIterator<GenerateResponse>` if streaming is enabled.

Example usage:

```javascript
const response = await ollama.generate({
  model: 'llama2',
  prompt: 'Tell me a joke',
});
console.log(response.response);
```

#### chat(request: ChatRequest): Promise<ChatResponse | AbortableAsyncIterator<ChatResponse>>

Chats with the model.

- `request`: An object containing the following properties:
  - `model`: The name of the model to use
  - `messages`: An array of message objects
  - `stream`: Whether to stream the response (optional, default: false)
  - Other optional parameters as defined in the `ChatRequest` interface

Returns a Promise that resolves to a `ChatResponse` or an `AbortableAsyncIterator<ChatResponse>` if streaming is enabled.

Example usage:

```javascript
const response = await ollama.chat({
  model: 'llama2',
  messages: [
    { role: 'user', content: 'Hello, how are you?' }
  ],
});
console.log(response.message.content);
```

#### create(request: CreateRequest): Promise<ProgressResponse | AbortableAsyncIterator<ProgressResponse>>

Creates a new model from a stream of data.

- `request`: An object containing the following properties:
  - `model`: The name of the model to create
  - `modelfile`: The modelfile content (optional)
  - `stream`: Whether to stream the response (optional, default: false)
  - Other optional parameters as defined in the `CreateRequest` interface

Returns a Promise that resolves to a `ProgressResponse` or an `AbortableAsyncIterator<ProgressResponse>` if streaming is enabled.

#### pull(request: PullRequest): Promise<ProgressResponse | AbortableAsyncIterator<ProgressResponse>>

Pulls a model from the Ollama registry.

- `request`: An object containing the following properties:
  - `model`: The name of the model to pull
  - `stream`: Whether to stream the response (optional, default: false)
  - `insecure`: Whether to allow insecure connections (optional)

Returns a Promise that resolves to a `ProgressResponse` or an `AbortableAsyncIterator<ProgressResponse>` if streaming is enabled.

#### push(request: PushRequest): Promise<ProgressResponse | AbortableAsyncIterator<ProgressResponse>>

Pushes a model to the Ollama registry.

- `request`: An object containing the following properties:
  - `model`: The name of the model to push
  - `stream`: Whether to stream the response (optional, default: false)
  - `insecure`: Whether to allow insecure connections (optional)

Returns a Promise that resolves to a `ProgressResponse` or an `AbortableAsyncIterator<ProgressResponse>` if streaming is enabled.

#### delete(request: DeleteRequest): Promise<StatusResponse>

Deletes a model from the server.

- `request`: An object containing the following property:
  - `model`: The name of the model to delete

Returns a Promise that resolves to a `StatusResponse`.

#### copy(request: CopyRequest): Promise<StatusResponse>

Copies a model from one name to another.

- `request`: An object containing the following properties:
  - `source`: The name of the model to copy
  - `destination`: The new name for the copied model

Returns a Promise that resolves to a `StatusResponse`.

#### list(): Promise<ListResponse>

Lists the models on the server.

Returns a Promise that resolves to a `ListResponse`.

#### show(request: ShowRequest): Promise<ShowResponse>

Shows the metadata of a model.

- `request`: An object containing the following property:
  - `model`: The name of the model to show

Returns a Promise that resolves to a `ShowResponse`.

#### embed(request: EmbedRequest): Promise<EmbedResponse>

Embeds text input into vectors.

- `request`: An object containing the following properties:
  - `model`: The name of the model to use
  - `input`: The text input to embed (string or array of strings)
  - Other optional parameters as defined in the `EmbedRequest` interface

Returns a Promise that resolves to an `EmbedResponse`.

#### embeddings(request: EmbeddingsRequest): Promise<EmbeddingsResponse>

Embeds a text prompt into a vector.

- `request`: An object containing the following properties:
  - `model`: The name of the model to use
  - `prompt`: The text prompt to embed
  - Other optional parameters as defined in the `EmbeddingsRequest` interface

Returns a Promise that resolves to an `EmbeddingsResponse`.

#### ps(): Promise<ListResponse>

Lists the running models on the server.

Returns a Promise that resolves to a `ListResponse`.

## Ollama Class

The `Ollama` class extends the `OllamaBrowser` class and provides additional functionality for Node.js environments.

### Additional Methods

#### create(request: CreateRequest): Promise<ProgressResponse | AbortableAsyncIterator<ProgressResponse>>

This method overrides the `create` method from `OllamaBrowser` and adds support for creating models from local files.

- `request`: An object containing the following properties:
  - `model`: The name of the model to create
  - `path`: The path to the modelfile (optional)
  - `modelfile`: The modelfile content (optional)
  - `stream`: Whether to stream the response (optional, default: false)
  - Other optional parameters as defined in the `CreateRequest` interface

Returns a Promise that resolves to a `ProgressResponse` or an `AbortableAsyncIterator<ProgressResponse>` if streaming is enabled.

Example usage:

```javascript
const response = await ollama.create({
  model: 'my-custom-model',
  path: './path/to/modelfile',
});
console.log(response.status);
```

Note: The `Ollama` class automatically handles file paths and blob creation when creating models from local files.

  