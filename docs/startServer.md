---
title: startServer Documentation
description: Learn how to use the startServer function to run a local server for serving static files and image data.
sidebar_position: 2
---

# startServer Documentation

## Introduction

The `startServer` function is a utility that allows you to quickly set up a local server for serving static files and image data. This is particularly useful for testing and development purposes, especially when working with sprite sheets or other image-based assets.

## Usage

To use the `startServer` function, you need to import it from the module where it's defined and call it with the appropriate parameters.

```javascript
import { startServer } from './path/to/module';

startServer(port, imageFile, frameCount);
```

## Parameters

- `port` (number, optional): The port number on which to start the server. Default is 3000.
- `imageFile` (string, optional): The name of the image file to serve. Default is 'sprite.png'.
- `frameCount` (number, optional): The number of frames in the sprite sheet. Default is 12.

## Example

Here's a basic example of how to use the `startServer` function:

```javascript
import { startServer } from './index.js';

await startServer(3000, "sprite.png", 12);
```

This will start a server on port 3000, serving a file named "sprite.png" with 12 frames.

## How It Works

1. The server creates an HTTP server using Node.js's built-in `http` module.
2. It serves static files from the current directory and its subdirectories.
3. When a request is made to '/imageFile', it returns a JSON object containing the `imageFile` name and `frameCount`.
4. For other routes, it attempts to serve the corresponding file from the filesystem.

## Supported File Types

The server supports various file types, including:

- HTML (.html)
- JavaScript (.js)
- CSS (.css)
- Images (.png, .jpg, .gif, .svg)
- JSON (.json)

## Error Handling

- If a requested file is not found, the server returns a 404 Not Found error.
- For other server errors, it returns a 500 Internal Server Error with the error code.

## Notes and Considerations

- This server is intended for development and testing purposes. It's not optimized for production use.
- Make sure to handle any errors that may occur when starting the server.
- The server uses synchronous file reading, which may not be ideal for large files or high-traffic scenarios.
- Always ensure you have the necessary permissions to read the files you're trying to serve.

## Next Steps

- Learn how to [generate sprites](./generateSprite.md) to use with this server.
- Explore how to [integrate this server with your development workflow](./integrationGuide.md).