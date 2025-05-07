# Model Context Protocol (MCP) Overview

The Model Context Protocol (MCP) is an open protocol that standardizes how applications provide context to Large Language Models (LLMs). It creates a flexible and extensible architecture for seamless communication between LLM applications and integrations.

## What is MCP?

MCP can be thought of as a USB-C port for AI applications. Just as USB-C provides a standardized way to connect devices to various peripherals and accessories, MCP provides a standardized way to connect AI models to different data sources and tools.

## Key Benefits

- A growing list of pre-built integrations that your LLM can directly plug into
- Flexibility to switch between LLM providers and vendors
- Best practices for securing your data within your infrastructure

## Core Architecture

MCP follows a client-server architecture:

- **Hosts**: LLM applications (like Claude Desktop or IDEs) that initiate connections
- **Clients**: Maintain 1:1 connections with servers, inside the host application
- **Servers**: Provide context, tools, and prompts to clients

```mermaid
flowchart LR
    subgraph "Your Computer"
        Host["Host with MCP Client\n(Claude, IDEs, Tools)"]
        S1["MCP Server A"]
        S2["MCP Server B"]
        S3["MCP Server C"]
        Host |"MCP Protocol"| S1
        Host |"MCP Protocol"| S2
        Host |"MCP Protocol"| S3
        S1  D1[("Local\nData Source A")]
        S2  D2[("Local\nData Source B")]
    end
    subgraph "Internet"
        S3 |"Web APIs"| D3[("Remote\nService C")]
    end
```

## Key Concepts

1. **Resources**: Allow servers to expose data and content that can be read by clients and used as context for LLM interactions.

2. **Tools**: Enable servers to expose executable functionality to clients, allowing LLMs to interact with external systems and perform actions.

3. **Prompts**: Define reusable prompt templates and workflows that clients can easily surface to users and LLMs.

4. **Sampling**: Allows servers to request LLM completions through the client, enabling sophisticated agentic behaviors.

5. **Transports**: Handle the underlying mechanics of how messages are sent and received between clients and servers.

## Getting Started

Choose the path that best fits your needs:

1. **For Server Developers**: Build your own server to use in Claude for Desktop and other clients
2. **For Client Developers**: Build your own client that can integrate with all MCP servers
3. **For Claude Desktop Users**: Start using pre-built servers in Claude for Desktop

## Core Components

### Protocol Layer

Handles message framing, request/response linking, and high-level communication patterns.

### Transport Layer

Manages actual communication between clients and servers. MCP supports:

1. **Stdio transport**: Uses standard input/output for communication
2. **HTTP with SSE transport**: Uses Server-Sent Events for server-to-client messages and HTTP POST for client-to-server communication

## Best Practices

1. Handle connection lifecycle properly
2. Implement robust error handling
3. Use appropriate timeouts
4. Validate all inputs thoroughly
5. Implement proper security measures
6. Log events for debugging and monitoring

## Security Considerations

- Use TLS for remote connections
- Implement authentication when needed
- Validate and sanitize all inputs
- Implement access controls
- Monitor resource usage and implement rate limiting

## Contributing

Check out our Contributing Guide to learn how you can help improve MCP.

For more detailed information on specific concepts and implementations, refer to the individual documentation pages for Resources, Tools, Prompts, Sampling, and Transports.