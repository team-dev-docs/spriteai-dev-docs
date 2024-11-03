

  <response>
{
  "contributors_internal_engineers": [
    {
      "file_name": "ollama_sdk_architecture.md",
      "generation_prompt": "Create a comprehensive overview of the Ollama SDK architecture, including the main classes, their relationships, and key design patterns used. Focus on the Ollama and OllamaBrowser classes, and explain how they interact with the various interfaces and utility functions.",
      "context_files": ["/src/index.ts", "/src/browser.ts", "/src/interfaces.ts", "/src/utils.ts"]
    },
    {
      "file_name": "image_processing_internals.md",
      "generation_prompt": "Provide a detailed explanation of the image processing capabilities within the Ollama SDK, including the encodeImage function, background removal, and color manipulation. Discuss how these features are implemented across different environments (Node.js vs browser).",
      "context_files": ["/src/index.ts", "/src/browser.ts", "/src/utils.ts"]
    },
    {
      "file_name": "ai_model_integration.md",
      "generation_prompt": "Explain how the Ollama SDK integrates with AI models, particularly focusing on the generate, chat, and embeddings functions. Describe the request/response flow and how the SDK handles streaming responses.",
      "context_files": ["/src/browser.ts", "/src/interfaces.ts"]
    },
    {
      "file_name": "error_handling_and_logging.md",
      "generation_prompt": "Detail the error handling and logging mechanisms used throughout the Ollama SDK. Include information on custom error types, how errors are propagated, and best practices for error handling when using the SDK.",
      "context_files": ["/src/utils.ts", "/src/browser.ts"]
    },
    {
      "file_name": "testing_strategy.md",
      "generation_prompt": "Outline the testing strategy for the Ollama SDK, including unit tests, integration tests, and any specific test utilities or mocks used. Provide guidelines for writing effective tests for new features or bug fixes.",
      "context_files": ["/package.json", "/tsconfig.json"]
    }
  ],
  "external_users_customers": [
    {
      "file_name": "getting_started_with_ollama.md",
      "generation_prompt": "Create a comprehensive getting started guide for new users of the Ollama SDK. Include installation instructions, basic setup, and simple examples of generating text, chatting, and working with images.",
      "context_files": ["/package.json", "/src/index.ts", "/src/browser.ts", "/examples/multimodal/multimodal.ts"]
    },
    {
      "file_name": "ollama_api_reference.md",
      "generation_prompt": "Generate a complete API reference for the Ollama SDK, including all public methods, their parameters, return types, and example usage. Organize the reference by main functionality areas such as text generation, chat, image processing, and model management.",
      "context_files": ["/src/browser.ts", "/src/interfaces.ts"]
    },
    {
      "file_name": "working_with_ai_models.md",
      "generation_prompt": "Provide a guide on how to work with AI models using the Ollama SDK. Include information on selecting models, fine-tuning options, and best practices for prompting and generating responses.",
      "context_files": ["/src/browser.ts", "/src/interfaces.ts", "/examples/tools/tools.ts"]
    },
    {
      "file_name": "image_processing_guide.md",
      "generation_prompt": "Create a comprehensive guide on image processing capabilities in the Ollama SDK. Cover topics such as encoding images, removing backgrounds, and extracting color palettes. Provide practical examples and use cases for each feature.",
      "context_files": ["/src/index.ts", "/src/browser.ts", "/src/interfaces.ts"]
    },
    {
      "file_name": "advanced_usage_and_customization.md",
      "generation_prompt": "Develop an advanced usage guide for the Ollama SDK, covering topics such as custom configurations, working with streams, and integrating the SDK into larger applications. Include best practices and performance optimization tips.",
      "context_files": ["/src/browser.ts", "/src/interfaces.ts", "/src/utils.ts"]
    },
    {
      "file_name": "troubleshooting_and_faq.md",
      "generation_prompt": "Compile a troubleshooting guide and FAQ for common issues users might encounter when working with the Ollama SDK. Include solutions for connectivity problems, error handling, and platform-specific considerations.",
      "context_files": ["/src/utils.ts", "/src/browser.ts", "/src/interfaces.ts"]
    }
  ]
}
</response>

  