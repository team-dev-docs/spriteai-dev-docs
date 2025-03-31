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
import { generateCharacterSpritesheet, fetchAvailableAnimationStates, fetchAvailableSpriteStyles } from './path/to/sprite/module';

const result = await generateCharacterSpritesheet(description, options);
```

## Parameters
- `description` (string, required): A text description of the character to generate.
- `options` (object, optional):
  - `states` (string[]): Animation states to include in the spritesheet (default: `['idle', 'walk', 'run', 'attack']`).
  - `framesPerState` (number): Number of frames per animation state (default: `6`).
  - `size` (string): Size of the generated image (default: "1024x1024").
  - `style` (string): Art style of the character (default: "pixel-art").
  - `padding` (number): Padding between frames in the spritesheet (default: `1`).
  - `direction` (string): Direction the character should face (default: "right").
  - `save` (boolean): Whether to save the generated image to disk.

## Return Value
Returns an object containing:
- `original`: URL of the original DALL-E 3 generated image.
- `spritesheet`: Base64-encoded image data URL of the generated sprite sheet.
- `metadata`: Object with information about the spritesheet, including frame dimensions, animation states, and frame data.

## Available Animation States and Sprite Styles
You can fetch the available animation states and sprite styles using the following SDK functions:

```javascript
import { fetchAvailableAnimationStates, fetchAvailableSpriteStyles } from './path/to/sprite/module';

const availableStates = await fetchAvailableAnimationStates();
const availableStyles = await fetchAvailableSpriteStyles();
```

## Examples

1. Generate a single sprite sheet:
```javascript
const result = await generateCharacterSpritesheet("A pixelated robot");
console.log(result.metadata);
console.log(result.spritesheet);
```

2. Generate multiple variations:
```javascript
const result = await generateCharacterSpritesheet("A cartoon cat", { iterations: 3 });
variations.forEach((variation, index) => {
  console.log(`Variation ${index + 1}:`, variation.metadata);
});
```

## Notes or Considerations
- The function uses AI models (DALL-E 3 and GPT) to generate and analyze images, which may result in varying outputs for the same input.
- Generated sprites are optimized for walking animations and follow a specific layout (defined by the `framesPerState` and `states` options).
- The function converts images to grayscale, which may affect the final output.
- When saving images, they are stored in an 'assets' folder with a filename based on the description.
- The function may take some time to complete due to API calls and image processing.
