

  # Ollama-js API Reference

This page provides a comprehensive API reference for the `ollama-js` library, including the `Ollama` class and its methods.

## Ollama Class

The `Ollama` class is the main entry point for interacting with the Ollama API.

### Constructor

```typescript
constructor(config?: Partial<Config>)
```

Creates a new instance of the Ollama class.

- `config`: Optional configuration object
  - `host`: The host URL for the Ollama server (default: 'http://127.0.0.1:11434')
  - `fetch`: Custom fetch function (optional)
  - `proxy`: Boolean indicating if a proxy is used (optional)
  - `headers`: Custom headers to be sent with requests (optional)

### Methods

#### abort()

Aborts any ongoing streamed requests to Ollama.

```typescript
public abort(): void
```

#### generate(request: GenerateRequest)

Generates a response from a text prompt.

```typescript
generate(request: GenerateRequest & { stream: true }): Promise<AbortableAsyncIterator<GenerateResponse>>
generate(request: GenerateRequest & { stream?: false }): Promise<GenerateResponse>
```

- `request`: The generate request object
  - `model`: The name of the model to use
  - `prompt`: The input prompt
  - `stream`: Whether to stream the response (default: false)
  - `images`: Optional array of images (Uint8Array or base64 encoded string)
  - (Other options as specified in the `GenerateRequest` interface)

Returns a `GenerateResponse` or an `AbortableAsyncIterator<GenerateResponse>` if streaming.

Example:
```typescript
const response = await ollama.generate({
  model: 'llama2',
  prompt: 'Why is the sky blue?'
});
console.log(response.response);
```

#### chat(request: ChatRequest)

Chats with the model using a series of messages.

```typescript
chat(request: ChatRequest & { stream: true }): Promise<AbortableAsyncIterator<ChatResponse>>
chat(request: ChatRequest & { stream?: false }): Promise<ChatResponse>
```

- `request`: The chat request object
  - `model`: The name of the model to use
  - `messages`: Array of message objects
  - `stream`: Whether to stream the response (default: false)
  - (Other options as specified in the `ChatRequest` interface)

Returns a `ChatResponse` or an `AbortableAsyncIterator<ChatResponse>` if streaming.

Example:
```typescript
const response = await ollama.chat({
  model: 'llama2',
  messages: [
    { role: 'user', content: 'Hello, how are you?' }
  ]
});
console.log(response.message.content);
```

#### create(request: CreateRequest)

Creates a new model from a Modelfile.

```typescript
create(request: CreateRequest & { stream: true }): Promise<AbortableAsyncIterator<ProgressResponse>>
create(request: CreateRequest & { stream?: false }): Promise<ProgressResponse>
```

- `request`: The create request object
  - `model`: The name of the new model
  - `path`: Path to the Modelfile (optional)
  - `modelfile`: Content of the Modelfile (optional)
  - `stream`: Whether to stream the response (default: false)

Returns a `ProgressResponse` or an `AbortableAsyncIterator<ProgressResponse>` if streaming.

Example:
```typescript
const response = await ollama.create({
  model: 'my-model',
  path: './path/to/Modelfile'
});
console.log(response.status);
```

#### pull(request: PullRequest)

Pulls a model from the Ollama library.

```typescript
pull(request: PullRequest & { stream: true }): Promise<AbortableAsyncIterator<ProgressResponse>>
pull(request: PullRequest & { stream?: false }): Promise<ProgressResponse>
```

- `request`: The pull request object
  - `model`: The name of the model to pull
  - `stream`: Whether to stream the response (default: false)

Returns a `ProgressResponse` or an `AbortableAsyncIterator<ProgressResponse>` if streaming.

Example:
```typescript
const response = await ollama.pull({
  model: 'llama2'
});
console.log(response.status);
```

#### push(request: PushRequest)

Pushes a model to a remote repository.

```typescript
push(request: PushRequest & { stream: true }): Promise<AbortableAsyncIterator<ProgressResponse>>
push(request: PushRequest & { stream?: false }): Promise<ProgressResponse>
```

- `request`: The push request object
  - `model`: The name of the model to push
  - `stream`: Whether to stream the response (default: false)

Returns a `ProgressResponse` or an `AbortableAsyncIterator<ProgressResponse>` if streaming.

Example:
```typescript
const response = await ollama.push({
  model: 'my-model'
});
console.log(response.status);
```

#### delete(request: DeleteRequest)

Deletes a model from the server.

```typescript
delete(request: DeleteRequest): Promise<StatusResponse>
```

- `request`: The delete request object
  - `model`: The name of the model to delete

Returns a `StatusResponse`.

Example:
```typescript
const response = await ollama.delete({
  model: 'my-model'
});
console.log(response.status);
```

#### copy(request: CopyRequest)

Copies a model.

```typescript
copy(request: CopyRequest): Promise<StatusResponse>
```

- `request`: The copy request object
  - `source`: The name of the source model
  - `destination`: The name of the destination model

Returns a `StatusResponse`.

Example:
```typescript
const response = await ollama.copy({
  source: 'original-model',
  destination: 'copy-model'
});
console.log(response.status);
```

#### list()

Lists the available models.

```typescript
list(): Promise<ListResponse>
```

Returns a `ListResponse` containing an array of `ModelResponse` objects.

Example:
```typescript
const response = await ollama.list();
console.log(response.models);
```

#### show(request: ShowRequest)

Shows information about a model.

```typescript
show(request: ShowRequest): Promise<ShowResponse>
```

- `request`: The show request object
  - `model`: The name of the model to show information for

Returns a `ShowResponse`.

Example:
```typescript
const response = await ollama.show({
  model: 'llama2'
});
console.log(response.modelfile);
```

#### embed(request: EmbedRequest)

Generates embeddings for given input.

```typescript
embed(request: EmbedRequest): Promise<EmbedResponse>
```

- `request`: The embed request object
  - `model`: The name of the model to use
  - `input`: The input text or array of texts
  - `options`: Additional options (optional)

Returns an `EmbedResponse`.

Example:
```typescript
const response = await ollama.embed({
  model: 'llama2',
  input: 'Hello, world!'
});
console.log(response.embeddings);
```

#### embeddings(request: EmbeddingsRequest)

Generates embeddings for a given prompt (deprecated, use `embed` instead).

```typescript
embeddings(request: EmbeddingsRequest): Promise<EmbeddingsResponse>
```

- `request`: The embeddings request object
  - `model`: The name of the model to use
  - `prompt`: The input prompt
  - `options`: Additional options (optional)

Returns an `EmbeddingsResponse`.

Example:
```typescript
const response = await ollama.embeddings({
  model: 'llama2',
  prompt: 'Hello, world!'
});
console.log(response.embedding);
```

#### ps()

Lists the running models on the server.

```typescript
ps(): Promise<ListResponse>
```

Returns a `ListResponse`.

Example:
```typescript
const response = await ollama.ps();
console.log(response.models);
```

## Utility Methods

### encodeImage(image: Uint8Array | Buffer | string)

Encodes an image to base64.

```typescript
async encodeImage(image: Uint8Array | Buffer | string): Promise<string>
```

- `image`: The image to encode (Uint8Array, Buffer, or file path)

Returns a Promise that resolves to the base64 encoded image string.

Example:
```typescript
const base64Image = await ollama.encodeImage('./path/to/image.jpg');
console.log(base64Image);
```

This API reference covers the main functionality of the `ollama-js` library. For more detailed information on the request and response types, refer to the type definitions in the source code.

  