---
slug: /
sidebar_position: 1
---
# generateSprite Documentation

## Brief Description
`generateSprite` is a rather smashing function that generates a sprite sheet image based on a given description, using AI-powered image generation and analysis. Quite brilliant, innit?

## Usage
To use `generateSprite`, import it from the sprite module and give it a jolly good call with a description of the character you fancy generating.

```javascript
import { sprite } from './path/to/sprite/module';

const result = await sprite.generateSprite(description, options);
```

## Parameters
- `description` (string, required): A spiffing text description of the character to generate.
- `options` (object, optional):
  - `iterations` (number): Number of sprite variations to generate, for when you're feeling a bit cheeky.
  - `size` (string): Size of the generated image (default: "1024x1024").
  - `save` (boolean): Whether to save the generated image to disk, rather handy indeed.

## Return Value
Returns an object or array of objects containing these splendid bits:
- `messages`: JSON object with frameHeight and frameWidth information.
- `image`: Base64-encoded image data URL of the generated sprite sheet, proper fancy that.

## Examples

1. Generate a single sprite sheet, easy peasy:
```javascript
const result = await sprite.generateSprite("A pixelated robot");
console.log(result.messages);
console.log(result.image);
```

2. Generate multiple variations, for the indecisive chaps:
```javascript
const variations = await sprite.generateSprite("A cartoon cat", { iterations: 3 });
variations.forEach((variation, index) => {
  console.log(`Variation ${index + 1}:`, variation.messages);
});
```

## Notes or Considerations
- The function uses AI models (DALL-E 3 and GPT) to generate and analyse images, which may result in varying outputs for the same input. Bit dodgy sometimes, but that's AI for you!
- Generated sprites are optimised for walking animations and follow a specific layout (6 frames in a 2x3 grid). Jolly good show!
- The function converts images to grayscale, which may affect the final output. Chin up, it's all part of the charm.
- When saving images, they're stored in an 'assets' folder with a filename based on the description. Rather tidy, what?
- The function may take some time to complete due to API calls and image processing. Might be time for a cuppa while you wait!
