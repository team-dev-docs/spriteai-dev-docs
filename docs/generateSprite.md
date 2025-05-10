# generateSprite Documentation

## Brief Description
`generateSprite` is a function that generates a sprite sheet image based on a given description, using AI-powered image generation and analysis. It now includes additional functionality for applying visual effects to sprites.

## Usage
To use `generateSprite`, import it from the sprite module and call it with a description of the character you want to generate.

```javascript
import { sprite } from './path/to/sprite/module';

const result = await sprite.generateSprite(description, options);
```

## Parameters
- `description` (string, required): A text description of the character to generate.
- `options` (object, optional):
  - `iterations` (number): Number of sprite variations to generate.
  - `size` (string): Size of the generated image (default: "1024x1024").
  - `save` (boolean): Whether to save the generated image to disk.
  - `effects` (object): Visual effects to apply to the generated sprite (see `applyEffects` function).

## Return Value
Returns an object or array of objects containing:
- `messages`: JSON object with frameHeight and frameWidth information.
- `image`: Base64-encoded image data URL of the generated sprite sheet.

## Examples

1. Generate a single sprite sheet:
```javascript
const result = await sprite.generateSprite("A pixelated robot");
console.log(result.messages);
console.log(result.image);
```

2. Generate multiple variations with effects:
```javascript
const variations = await sprite.generateSprite("A cartoon cat", { 
  iterations: 3,
  effects: {
    outline: { width: 2, color: { r: 0, g: 0, b: 0, alpha: 1 } },
    glow: { radius: 5, color: { r: 255, g: 255, b: 0, alpha: 0.5 } }
  }
});
variations.forEach((variation, index) => {
  console.log(`Variation ${index + 1}:`, variation.messages);
});
```

## applyEffects Function

The `applyEffects` function allows you to add visual effects to your sprites, such as outlines, drop shadows, and glows.

### Parameters
- `input` (Buffer|string): Input sprite as buffer or file path.
- `options` (object): Effect options
  - `outline` (object, optional): Outline effect `{ width?: number, color?: {r, g, b, alpha?} }`
  - `shadow` (object, optional): Drop shadow effect `{ blur?: number, offset?: {x, y}, color?: {r, g, b, alpha?} }`
  - `glow` (object, optional): Glow effect `{ radius?: number, color?: {r, g, b, alpha?} }`
  - `preserveOriginal` (boolean, optional): Whether to composite the effect with the original sprite (default: true)
  - `output` (object, optional): Output options `{ format?: string, quality?: number }`

### Return Value
Returns a Promise that resolves to an object containing:
- `buffer`: Processed image buffer
- `metadata`: Object with format, width, height, channels, and size information

### Example
```javascript
const fs = require('fs');
const { applyEffects } = require('./path/to/sprite/module');

const inputBuffer = fs.readFileSync('input-sprite.png');
const result = await applyEffects(inputBuffer, {
  outline: { width: 2, color: { r: 255, g: 0, b: 0, alpha: 1 } },
  glow: { radius: 10, color: { r: 255, g: 255, b: 0, alpha: 0.7 } },
  output: { format: 'png', quality: 90 }
});

fs.writeFileSync('output-sprite.png', result.buffer);
console.log('Effect applied:', result.metadata);
```

## Notes or Considerations
- The function uses AI models (DALL-E 3 and GPT) to generate and analyze images, which may result in varying outputs for the same input.
- Generated sprites are optimized for walking animations and follow a specific layout (6 frames in a 2x3 grid).
- The function converts images to grayscale, which may affect the final output.
- When saving images, they are stored in an 'assets' folder with a filename based on the description.
- The function may take some time to complete due to API calls and image processing.
- The `applyEffects` function can be used independently or as part of the `generateSprite` process.
- When applying effects, consider the performance impact on larger sprite sheets or when processing multiple sprites.