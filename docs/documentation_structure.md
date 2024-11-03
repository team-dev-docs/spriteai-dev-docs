

  {
  "contributors_internal_engineers": [
    {
      "file_name": "architecture_overview.md",
      "generation_prompt": "Create a comprehensive overview of the Ollama.js architecture, including the main classes, their relationships, and how they interact to provide the core functionality. Focus on the Ollama and OllamaBrowser classes, explaining their roles and differences.",
      "context_files": ["/Users/andrewvanbeek/dev-docs-work/ollama-js/src/index.ts", "/Users/andrewvanbeek/dev-docs-work/ollama-js/src/browser.ts", "/Users/andrewvanbeek/dev-docs-work/ollama-js/src/interfaces.ts"]
    },
    {
      "file_name": "error_handling_guide.md",
      "generation_prompt": "Provide a detailed guide on error handling within the Ollama.js library. Explain the ResponseError class, how errors are thrown and caught, and best practices for handling errors in different scenarios. Include examples from the codebase.",
      "context_files": ["/Users/andrewvanbeek/dev-docs-work/ollama-js/src/utils.ts", "/Users/andrewvanbeek/dev-docs-work/ollama-js/src/browser.ts"]
    },
    {
      "file_name": "streaming_implementation.md",
      "generation_prompt": "Explain the implementation of streaming responses in Ollama.js. Detail how the AbortableAsyncIterator works, how it's used in the processStreamableRequest method, and best practices for working with streamed data in the library.",
      "context_files": ["/Users/andrewvanbeek/dev-docs-work/ollama-js/src/utils.ts", "/Users/andrewvanbeek/dev-docs-work/ollama-js/src/browser.ts"]
    },
    {
      "file_name": "multimodal_processing.md",
      "generation_prompt": "Describe the multimodal capabilities of Ollama.js, focusing on how image processing is handled. Explain the encodeImage function, its implementation differences between browser and Node.js environments, and how to use it effectively.",
      "context_files": ["/Users/andrewvanbeek/dev-docs-work/ollama-js/src/browser.ts", "/Users/andrewvanbeek/dev-docs-work/ollama-js/src/index.ts", "/Users/andrewvanbeek/dev-docs-work/ollama-js/examples/multimodal/multimodal.ts"]
    }
  ],
  "external_users_customers": [
    {
      "file_name": "getting_started_with_ollama_js.md",
      "generation_prompt": "Create a comprehensive getting started guide for Ollama.js. Include installation instructions, basic usage examples for key features like generate, chat, and embeddings. Provide code snippets demonstrating how to initialize the Ollama object and make basic API calls.",
      "context_files": ["/Users/andrewvanbeek/dev-docs-work/ollama-js/package.json", "/Users/andrewvanbeek/dev-docs-work/ollama-js/src/browser.ts", "/Users/andrewvanbeek/dev-docs-work/ollama-js/src/index.ts"]
    },
    {
      "file_name": "api_reference.md",
      "generation_prompt": "Generate a comprehensive API reference for Ollama.js. Include detailed descriptions of all public methods, their parameters, return types, and example usage. Organize the reference by main categories such as text generation, chat, embeddings, and model management.",
      "context_files": ["/Users/andrewvanbeek/dev-docs-work/ollama-js/src/browser.ts", "/Users/andrewvanbeek/dev-docs-work/ollama-js/src/interfaces.ts"]
    },
    {
      "file_name": "working_with_models.md",
      "generation_prompt": "Create a guide on working with models in Ollama.js. Explain how to list available models, create new models, pull models from a registry, push models, and delete models. Include code examples for each operation.",
      "context_files": ["/Users/andrewvanbeek/dev-docs-work/ollama-js/src/browser.ts", "/Users/andrewvanbeek/dev-docs-work/ollama-js/src/interfaces.ts"]
    },
    {
      "file_name": "chat_and_generate_guide.md",
      "generation_prompt": "Write a comprehensive guide on using the chat and generate functions in Ollama.js. Explain the differences between the two, how to structure requests, handle streaming responses, and process the results. Include examples of various use cases.",
      "context_files": ["/Users/andrewvanbeek/dev-docs-work/ollama-js/src/browser.ts", "/Users/andrewvanbeek/dev-docs-work/ollama-js/src/interfaces.ts", "/Users/andrewvanbeek/dev-docs-work/ollama-js/examples/tools/tools.ts"]
    },
    {
      "file_name": "advanced_features.md",
      "generation_prompt": "Create a guide on advanced features of Ollama.js, including multimodal capabilities, tool usage, and embeddings. Explain how to work with images, use function calling, and generate embeddings for text. Provide code examples for each feature.",
      "context_files": ["/Users/andrewvanbeek/dev-docs-work/ollama-js/src/browser.ts", "/Users/andrewvanbeek/dev-docs-work/ollama-js/examples/multimodal/multimodal.ts", "/Users/andrewvanbeek/dev-docs-work/ollama-js/examples/tools/tools.ts"]
    }
  ]
}

  