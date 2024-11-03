

  {
  "contributors_internal_engineers": [
    {
      "file_name": "project_architecture.md",
      "generation_prompt": "Create a comprehensive overview of the Ollama.js project architecture, including the main components (Ollama class, utility functions), their interactions, and the overall design philosophy. Explain how the browser and Node.js versions differ and how they share code.",
      "context_files": ["/src/browser.ts", "/src/index.ts", "/src/utils.ts", "/src/interfaces.ts"]
    },
    {
      "file_name": "code_style_guide.md",
      "generation_prompt": "Develop a code style guide for the Ollama.js project, detailing naming conventions, file structure, commenting practices, and TypeScript usage. Use existing files as examples of best practices.",
      "context_files": ["/src/browser.ts", "/src/index.ts", "/src/utils.ts", "/src/interfaces.ts"]
    },
    {
      "file_name": "testing_strategy.md",
      "generation_prompt": "Outline the testing strategy for Ollama.js, including unit testing, integration testing, and end-to-end testing approaches. Provide guidelines for writing effective tests and maintaining test coverage.",
      "context_files": ["/package.json", "/src/utils.ts"]
    },
    {
      "file_name": "error_handling_guide.md",
      "generation_prompt": "Create a guide on error handling practices in Ollama.js, explaining the custom ResponseError class, how errors are propagated, and best practices for error management throughout the codebase.",
      "context_files": ["/src/utils.ts", "/src/browser.ts", "/src/index.ts"]
    },
    {
      "file_name": "streaming_implementation.md",
      "generation_prompt": "Provide a detailed explanation of how streaming is implemented in Ollama.js, including the use of AbortableAsyncIterator, the parseJSON function, and how these components work together to handle streamed responses.",
      "context_files": ["/src/utils.ts", "/src/browser.ts"]
    }
  ],
  "external_users_customers": [
    {
      "file_name": "getting_started_with_ollama_js.md",
      "generation_prompt": "Create a comprehensive getting started guide for Ollama.js, including installation, basic setup, and simple examples of using the main features like generating text, chat, and creating models.",
      "context_files": ["/package.json", "/src/browser.ts", "/src/index.ts", "/examples/multimodal/multimodal.ts", "/examples/tools/tools.ts"]
    },
    {
      "file_name": "api_reference.md",
      "generation_prompt": "Generate a complete API reference for Ollama.js, detailing all public methods, their parameters, return types, and usage examples. Include information on both browser and Node.js versions.",
      "context_files": ["/src/browser.ts", "/src/index.ts", "/src/interfaces.ts"]
    },
    {
      "file_name": "configuration_options.md",
      "generation_prompt": "Create a guide explaining all configuration options available in Ollama.js, including how to set up the client, customize requests, and handle different environments (browser vs Node.js).",
      "context_files": ["/src/browser.ts", "/src/index.ts", "/src/interfaces.ts"]
    },
    {
      "file_name": "working_with_models.md",
      "generation_prompt": "Develop a guide on working with models in Ollama.js, including how to create, pull, push, and delete models. Explain the modelfile concept and how to use it effectively.",
      "context_files": ["/src/browser.ts", "/src/index.ts", "/src/interfaces.ts"]
    },
    {
      "file_name": "multimodal_inputs.md",
      "generation_prompt": "Create a tutorial on using multimodal inputs with Ollama.js, explaining how to work with text and image inputs, including code examples and best practices.",
      "context_files": ["/src/browser.ts", "/src/index.ts", "/examples/multimodal/multimodal.ts"]
    },
    {
      "file_name": "streaming_responses.md",
      "generation_prompt": "Write a guide on how to work with streaming responses in Ollama.js, including examples of how to use the stream option and process the streamed data efficiently.",
      "context_files": ["/src/browser.ts", "/src/index.ts", "/src/utils.ts"]
    },
    {
      "file_name": "error_handling.md",
      "generation_prompt": "Provide a guide on error handling for users of Ollama.js, explaining common error types, how to catch and handle them, and best practices for robust application development.",
      "context_files": ["/src/utils.ts", "/src/browser.ts", "/src/index.ts"]
    },
    {
      "file_name": "browser_vs_node.md",
      "generation_prompt": "Create a comparison guide explaining the differences between using Ollama.js in a browser environment versus a Node.js environment, including limitations, specific features, and best practices for each.",
      "context_files": ["/src/browser.ts", "/src/index.ts"]
    },
    {
      "file_name": "performance_optimization.md",
      "generation_prompt": "Develop a guide on optimizing performance when using Ollama.js, including tips on efficient use of streaming, handling large requests, and managing resources effectively.",
      "context_files": ["/src/browser.ts", "/src/index.ts", "/src/utils.ts"]
    },
    {
      "file_name": "advanced_usage_tools.md",
      "generation_prompt": "Create an advanced usage guide focusing on the tools feature in Ollama.js, explaining how to define and use custom tools, with examples based on the provided tools.ts file.",
      "context_files": ["/examples/tools/tools.ts", "/src/interfaces.ts"]
    }
  ]
}

  