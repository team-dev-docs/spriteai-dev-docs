---
slug: /generateSpaceman
sidebar_position: 4
---

# generateSpaceman

## Brief Description
`generateSpaceman` is a convenience function that generates a spritesheet of an astronaut character with a space suit and helmet, using AI-powered image generation.

## Usage
To use `generateSpaceman`, import it from the spriteAI module and call it with optional configuration options.

```javascript
import { generateSpaceman } from 'spriteAI';

const result = await generateSpaceman(options);
```

## Parameters
- `options` (object, optional): Configuration options for the spritesheet generation
  - `states` (array): Animation states to include (defaults to `['idle', 'walk', 'run', 'float']`)
  - `style` (string): Art style to use (defaults to `'pixel-art'`)
  - `framesPerState` (number): Number of frames per animation state (defaults to 6)
  - `size` (string): Size of the generated image (defaults to "1024x1024")
  - `padding` (number): Padding between frames (defaults to 1)
  - `direction` (string): Direction the character faces (defaults to "right")
  - `save` (boolean): Whether to save the generated image to disk

## Return Value
Returns an object containing:
- `original`: URL of the original AI-generated image
- `spritesheet`: Base64-encoded data URL of the processed spritesheet
- `metadata`: Object containing detailed information about the spritesheet
  - `states`: Array of animation states
  - `framesPerState`: Number of frames per state
  - `totalFrames`: Total number of frames in the spritesheet
  - `dimensions`: Object with width and height of the spritesheet
  - `frameData`: Object with details about each animation state's frames

## Examples

1. Generate a spaceman sprite with default settings:
```javascript
const result = await generateSpaceman();
console.log(result.metadata);
```

2. Generate a spaceman sprite with custom options:
```javascript
const result = await generateSpaceman({
  states: ['idle', 'walk', 'float', 'attack'],
  framesPerState: 8,
  style: 'hand-drawn',
  save: true
});
```

## Notes
- This is a convenience wrapper around `generateCharacterSpritesheet` with preset parameters for an astronaut character
- The default animation states include 'float' which is specific to the space theme
- When saving images, they are stored in an 'assets' folder with a filename based on the description
- You can customize all aspects of the generated spritesheet by passing appropriate options