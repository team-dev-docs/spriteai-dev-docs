---
slug: /generateAnimatedEmoji
sidebar_position: 5
---

# generateAnimatedEmoji Documentation

## Brief Description
`generateAnimatedEmoji` is a function that generates an animated emoji as a 2x2 grid of sequential frames using AI-powered image generation.

## Usage
To use `generateAnimatedEmoji`, import it from the sprite module and call it with a description of the emoji animation you want to create.

```javascript
import { sprite } from './path/to/sprite/module';

const result = await sprite.generateAnimatedEmoji(description, options);
```

## Parameters
- `description` (string, required): A text description of the animated emoji to generate.
- `options` (object, optional):
  - `size` (string): Size of the generated image (default: "1024x1024").
  - `save` (boolean): Whether to save the generated image to disk.

## Return Value
Returns an object containing:
- `image`: Base64-encoded image data URL of the generated emoji animation frames.
- `url`: The original URL of the generated image (before processing).

## Examples

1. Generate an animated emoji:
```javascript
const result = await sprite.generateAnimatedEmoji("A smiling face that winks");
console.log(result.image); // Base64 data URL that can be used in an img tag
```

2. Generate and save an animated emoji:
```javascript
const result = await sprite.generateAnimatedEmoji("A heart that beats", { save: true });
// The emoji will be saved to the assets folder
```

## Notes or Considerations
- The function uses OpenAI's DALL-E 3 model to generate a 2x2 grid of animation frames.
- The prompt is specifically engineered to create a smooth, looping animation sequence.
- The generated image contains 4 frames arranged in a 2x2 grid.
- When saving images, they are stored in an 'assets' folder with a timestamp-based filename.
- The function may take some time to complete due to API calls and image processing.
- The emoji is designed to be simple and expressive, suitable for use in messaging applications or user interfaces.
