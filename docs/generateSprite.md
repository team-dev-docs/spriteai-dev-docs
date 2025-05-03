---
slug: /
sidebar_position: 1
---

# generateSprite Documentation

## Brief Description
`generateSprite` is a function that generates a sprite sheet image based on a given description, using AI-powered image generation and analysis.

## Usage
To use `generateSprite`, import it from the sprite module and call it with a description of the character you want to generate.

```javascript
import { generateSprite } from './path/to/sprite/module';

const result = await generateSprite({subject, action, frameNumber});
```

## Parameters
- `subject` (string, required): The subject of the sprite (e.g., "ninja").
- `action` (string, required): The action the subject is performing (e.g., "walking").
- `frameNumber` (number, required): The number of frames in the sprite sheet.

## Return Value
Returns a Promise that resolves to an object containing:
- `data`: An array with a single object containing:
  - `b64_json`: Base64-encoded image data of the generated sprite sheet.

## Examples

1. Generate a single sprite sheet:
```javascript
const result = await generateSprite({
  subject: "ninja",
  action: "walking",
  frameNumber: 12
});
console.log(result.data[0].b64_json);
```

## Notes or Considerations
- The function uses the OpenAI API (GPT-4 Vision) to generate images, which may result in varying outputs for the same input.
- Generated sprites are optimized for the specified action and frame count.
- The function generates a 64x64 pixel spritesheet with a transparent background.
- The spritesheet is designed for use in classic side-scrolling platformer games.
- The function may take some time to complete due to API calls and image processing.

## New Feature: startServer

The `startServer` function has been added to serve the generated sprite sheet and provide a simple web interface for viewing it.

### Usage

```javascript
import { startServer } from './path/to/sprite/module';

await startServer(port, imageFile, frameCount);
```

### Parameters
- `port` (number, optional): The port number to run the server on. Default is 3000.
- `imageFile` (string, optional): The name of the sprite sheet image file. Default is 'sprite.png'.
- `frameCount` (number, optional): The number of frames in the sprite sheet. Default is 12.

### Example

```javascript
await startServer(3000, "sprite.png", 12);
```

This will start a server on `http://localhost:3000/` that serves the sprite sheet and provides a simple HTML interface for viewing the animated sprite.

### Notes
- The server uses Node.js `http` module to create a basic HTTP server.
- It serves static files (HTML, CSS, JavaScript, and images) from the current directory.
- The server provides a JSON endpoint at `/imageFile` that returns the image file name and frame count.
- Make sure to have the necessary HTML, CSS, and JavaScript files in place for the web interface to work correctly.
