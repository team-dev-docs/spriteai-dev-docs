

  <response>
{
  "contributors_internal_engineers": [
    {
      "file_name": "architecture_overview.md",
      "generation_prompt": "Create a comprehensive overview of the Ollama.js library architecture, including the main classes, their relationships, and the core functionality of each component. Focus on the Ollama class, its methods, and how it interfaces with the Ollama API.",
      "context_files": ["/src/browser.ts", "/src/index.ts", "/src/interfaces.ts"]
    },
    {
      "file_name": "error_handling_guide.md",
      "generation_prompt": "Develop a guide on error handling within the Ollama.js library. Explain the ResponseError class, how errors are propagated, and best practices for handling errors in different scenarios.",
      "context_files": ["/src/utils.ts"]
    },
    {
      "file_name": "testing_strategy.md",
      "generation_prompt": "Outline the testing strategy for the Ollama.js library. Include information on the types of tests (unit, integration, etc.), test setup, and guidelines for writing effective tests for new features or bug fixes.",
      "context_files": ["/package.json", "/tsconfig.json"]
    },
    {
      "file_name": "browser_compatibility.md",
      "generation_prompt": "Create a document detailing the considerations and implementations for browser compatibility in the Ollama.js library. Explain the differences between the browser and Node.js versions, and how to ensure cross-browser functionality.",
      "context_files": ["/src/browser.ts", "/src/index.ts"]
    }
  ],
  "external_users_customers": [
    {
      "file_name": "installation_guide.md",
      "generation_prompt": "Write a step-by-step guide on how to install and set up the Ollama.js library in a project. Include information on prerequisites, npm installation, and initial configuration.",
      "context_files": ["/package.json", "/README.md"]
    },
    {
      "file_name": "chat_api_usage.md",
      "generation_prompt": "Create a comprehensive guide on using the chat API in Ollama.js. Include examples of how to initiate a chat, send messages, handle responses, and implement advanced features like streaming and tool calls.",
      "context_files": ["/src/browser.ts", "/src/interfaces.ts", "/examples/tools/tools.ts"]
    },
    {
      "file_name": "image_processing_guide.md",
      "generation_prompt": "Develop a guide on image processing capabilities in Ollama.js. Cover topics such as encoding images, generating sprites, and creating house assets. Provide code examples and explain the integration with AI models for image generation.",
      "context_files": ["/src/browser.ts", "/src/index.ts", "/examples/multimodal/multimodal.ts"]
    },
    {
      "file_name": "configuration_options.md",
      "generation_prompt": "Create a detailed reference of all configuration options available in Ollama.js. Explain each option, its purpose, default values, and how to set them. Include examples of common configuration scenarios.",
      "context_files": ["/src/interfaces.ts", "/src/browser.ts"]
    },
    {
      "file_name": "streaming_responses.md",
      "generation_prompt": "Write a guide on how to work with streaming responses in Ollama.js. Explain the concepts behind streaming, how to initiate a streaming request, and how to process the streamed data efficiently.",
      "context_files": ["/src/utils.ts", "/src/browser.ts"]
    },
    {
      "file_name": "model_management.md",
      "generation_prompt": "Create a comprehensive guide on model management using Ollama.js. Cover topics such as listing available models, pulling new models, pushing models, and managing model lifecycle. Include code examples for each operation.",
      "context_files": ["/src/browser.ts", "/src/interfaces.ts"]
    }
  ]
}
</response>

  