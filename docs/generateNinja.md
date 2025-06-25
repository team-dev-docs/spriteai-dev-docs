# generateNinja

## Brief Description
`generateNinja` is a function that generates ninja-themed sprites with predefined states and customizable options.

## Usage
To use `generateNinja`, import it from the sprite module and call it with optional configuration parameters.

```javascript
import { generateNinja } from './spriteAI/index.js';

const result = await generateNinja(options);
```

## Parameters
- `options` (object, optional): Configuration for ninja sprite generation
  - `states` (array): Animation states to generate. Default: `['idle', 'walk', 'run', 'attack', 'sneak']`
  - `framesPerState` (number): Number of frames for each animation state. Default: `6`
  - `style` (string): Art style for the sprite. Default: `'pixel-art'`

## Return Value
Returns an object containing:
- `original`: Direct URL to the original generated image.
- `spritesheet`: Base64-encoded image data URL of the processed spritesheet.
- `metadata`: Object containing details about the spritesheet.

## Examples

1. Generate a default ninja spritesheet:
```javascript
const result = await generateNinja();
console.log(result.spritesheet); // Base64-encoded spritesheet
```

2. Generate a ninja with custom options:
```javascript
const options = {
  states: ['idle', 'run', 'attack'],
  framesPerState: 8,
  style: 'anime'
};
const result = await generateNinja(options);
console.log(result.metadata);
```

## Notes
- Uses DALL-E 3 AI model for image generation
- Generates spritesheets with predefined ninja character animations
- Supports customization of animation states and sprite style
- Image generation may vary between calls due to AI model characteristics
