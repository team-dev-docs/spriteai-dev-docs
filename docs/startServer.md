---
title: startServer Function
description: Documentation for the startServer function in the Dev-Docs project.
---

# startServer Function

## Introduction

The `startServer` function is a core component of the Dev-Docs project, responsible for initializing and running a simple HTTP server. This server is designed to serve static files and handle specific routes for displaying generated sprites.

## Usage

To use the `startServer` function, import it from the module where it's defined and call it with optional parameters:

```javascript
import { startServer } from './path/to/module';

startServer(port, imageFile, frameCount);
```

## Parameters

- `port` (optional, default: 3000): The port number on which the server will listen.
- `imageFile` (optional, default: 'sprite.png'): The filename of the sprite image to be served.
- `frameCount` (optional, default: 12): The number of frames in the sprite animation.

## Functionality

The `startServer` function performs the following tasks:

1. Creates an HTTP server using Node.js `http` module.
2. Handles requests for the root path ('/') by serving an `index.html` file.
3. Provides a route ('/imageFile') that returns JSON data about the sprite image and frame count.
4. Serves static files based on the requested URL.
5. Handles various MIME types for different file extensions.
6. Manages error cases, such as file not found (404) and server errors (500).

## Example

```javascript
import { startServer } from './server';

// Start the server with default settings
startServer();

// Start the server with custom settings
startServer(8080, 'custom-sprite.png', 8);
```

## Server Behavior

- The server listens on the specified port (default: 3000).
- When accessing the root path ('/'), it serves the `index.html` file.
- The '/imageFile' route returns a JSON object with `imageFile` and `frameCount` properties.
- Static files are served based on their file extensions and corresponding MIME types.
- If a requested file is not found, a 404 error is returned.
- Server errors result in a 500 status code response.

## Notes

- The server uses the current directory (`__dirname`) as the base path for serving files.
- The `index.html` file should be present in the same directory as the server script.
- Make sure to handle CORS (Cross-Origin Resource Sharing) if you plan to access this server from different origins.
- For production use, consider using a more robust server solution with additional security features.

## Related

- [generateSprite Function](./generateSprite.md): Documentation for the function that generates sprite images.
- [convertSpritesheetToDataUrl Function](./convertSpritesheetToDataUrl.md): Documentation for the function that converts spritesheets to data URLs.