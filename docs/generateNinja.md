---
slug: /generateNinja
sidebar_position: 5
---

# generateNinja Function

## Brief Description
`generateNinja` is a convenience function that generates a ninja character spritesheet with predefined settings using the AI-powered image generation engine.

## Usage
To use `generateNinja`, import it from the spriteAI module and call it with optional options.

```javascript
import { generateNinja } from 'spriteAI';

const ninjaSprite = await generateNinja(options);
```

## Parameters
- `options` (object, optional): Configuration options that override the defaults
  - `states` (array): Animation states to generate (default: `['idle', 'walk', 'run', 'attack', 'sneak']`)
  - `style` (string): Art style to use (default: `'pixel-art'`)
  - `framesPerState` (number): Number of frames per animation state (default: `6`)
  - `size` (string): Size of the generated image (default: `'1024x1024'`)
  - `padding` (number): Padding between sprite frames (default: `1`)
  - `direction` (string): Direction the character faces (default: `'right'`)
  - `save` (boolean): Whether to save the generated image to disk

## Return Value
Returns an object containing:
- `original`: URL of the original generated image
- `spritesheet`: Base64-encoded image data URL of the processed spritesheet
- `metadata`: JSON object with detailed information about the spritesheet
  - `states`: Array of animation states
  - `framesPerState`: Number of frames per state
  - `totalFrames`: Total number of frames in the spritesheet
  - `dimensions`: Width and height of the image
  - `frameData`: Detailed frame information for each animation state

## Examples

1. Generate a ninja spritesheet with default settings:
```javascript
const result = await generateNinja();
console.log(result.metadata);
```

2. Generate a ninja spritesheet with custom settings:
```javascript
const result = await generateNinja({
  states: ['idle', 'attack', 'sneak'],
  framesPerState: 8,
  style: 'hand-drawn',
  save: true
});
```

## Description
The `generateNinja` function is a specialized wrapper around `generateCharacterSpritesheet` that comes with pre-configured options to create a ninja character. It generates a ninja character with a black outfit and mask in the specified art style with the requested animation states.

This convenience function saves you from having to specify the character description each time while still allowing full customization of the spritesheet generation parameters.

## Related Functions
- `generateCharacterSpritesheet`: The base function for generating character spritesheets
- `generateSpaceman`: Convenience function for generating astronaut character spritesheets
- `generateRobot`: Convenience function for generating robot character spritesheets