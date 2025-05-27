---
slug: /
sidebar_position: 1
---

# generateSprite Documentation

## Brief Description
`generateSprite` is a function that generates a sprite sheet image based on given parameters, using AI-powered image generation.

## Usage
To use `generateSprite`, import it from the module and call it with the required parameters.

```javascript
import { generateSprite } from './path/to/module';

const result = await generateSprite({subject, action, frameNumber});
```

## Parameters
- `subject` (string, required): A description of the character or object to generate.
- `action` (string, required): The action the character or object should be performing.
- `frameNumber` (number, required): The number of frames to generate in the sprite sheet.

## Return Value
Returns a Promise that resolves to an object containing:
- `data`: An array with a single object containing:
  - `b64_json`: Base64-encoded image data of the generated sprite sheet.

## Examples

1. Generate a walking ninja sprite sheet:
```javascript
const result = await generateSprite({
  subject: "ninja",
  action: "walking",
  frameNumber: 12
});
console.log(result.data[0].b64_json);
```

## Notes or Considerations
- The function uses OpenAI's image generation model (gpt-image-1) to create the sprite sheet.
- The generated sprite sheet is designed for a classic side-scrolling platformer game.
- The sprite sheet is 64x64 pixels per frame, with a transparent background.
- The function may take some time to complete due to API calls for image generation.
- Make sure you have the necessary API credentials and environment variables set up for OpenAI.

## Server Functionality
The module also includes a `startServer` function that can be used to serve the generated sprite sheet and provide a simple web interface for viewing the animation.

### Usage
```javascript
import { startServer } from './path/to/module';

await startServer(3000, "sprite.png", 12);
```

### Parameters
- `port` (number, optional): The port number to run the server on. Defaults to 3000.
- `imageFile` (string, optional): The filename of the sprite sheet to serve. Defaults to 'sprite.png'.
- `frameCount` (number, optional): The number of frames in the sprite sheet. Defaults to 12.

This server functionality allows you to easily view and test your generated sprite sheets in a web browser.
