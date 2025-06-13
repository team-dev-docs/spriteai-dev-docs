---
slug: /generateninja
sidebar_position: 5
---
# Generate Ninja

## Brief Description
`generateNinja` is a function that generates a ninja sprite sheet image with predefined and customizable options, leveraging AI-powered image generation.

## Usage
To use `generateNinja`, import it from the sprite module and call it with optional customization parameters.

```javascript
import { generateNinja } from './spriteAI/index.js';

const result = await generateNinja(options);
```

## Parameters
`options` (object, optional):
- `states` (array): Animation states for the ninja (default: `['idle', 'walk', 'run', 'attack', 'sneak']`)
- `style` (string): Visual style of the sprite (default: `'pixel-art'`)
- `framesPerState` (number): Number of frames per animation state (default: `6`)

## Return Value
Returns an object containing:
- `original`: Original AI-generated image URL
- `spritesheet`: Base64-encoded sprite sheet image
- `metadata`: Detailed information about sprite sheet dimensions and frame data

## Examples

1. Generate a default ninja sprite sheet:
```javascript
const ninja = await generateNinja();
console.log(ninja.metadata); // Sprite sheet metadata
```

2. Generate a custom ninja with specific options:
```javascript
const customNinja = await generateNinja({
  states: ['idle', 'walk', 'attack'],
  style: 'pixel-art',
  framesPerState: 4
});
```

## Notes and Considerations
- The function uses AI models to generate character sprite sheets
- Generated ninja sprites are optimized for various animation states
- The appearance will vary based on the provided options
- Image generation may take some time due to AI processing
