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
import { generateCharacterSpritesheet } from './spriteAI/index.js';

// Specific Character Type Generation Functions
const ninjaSprite = await generateNinja();
const spacemanSprite = await generateSpaceman();
const robotSprite = await generateRobot();
```

## New Convenience Functions

### `generateNinja(options)`
Generates a ninja-themed sprite sheet with predefined states and style.

```javascript
const ninja = await generateNinja({
  states: ['idle', 'walk', 'run', 'attack', 'sneak'],
  style: 'pixel-art',
  framesPerState: 6
});
```

### `generateSpaceman(options)`
Generates a spaceman/astronaut-themed sprite sheet with predefined states and style.

```javascript
const spaceman = await generateSpaceman({
  states: ['idle', 'walk', 'run', 'float'],
  style: 'pixel-art',
  framesPerState: 6
});
```

### `generateRobot(options)`
Generates a robot-themed sprite sheet with predefined states and style.

```javascript
const robot = await generateRobot({
  states: ['idle', 'walk', 'run', 'attack', 'power-up'],
  style: 'pixel-art',
  framesPerState: 6
});
```

## Parameters
- `description` (string, optional): A text description of the character to generate.
- `options` (object, optional):
  - `states` (array): List of character animation states.
  - `style` (string): Sprite art style (default: 'pixel-art').
  - `framesPerState` (number): Number of frames for each animation state.
  - `size` (string): Size of the generated image (default: "1024x1024").
  - `save` (boolean): Whether to save the generated image to disk.

## Return Value
Returns an object containing:
- `original`: Original image URL
- `spritesheet`: Base64-encoded sprite sheet image
- `metadata`: Detailed information about the generated sprite sheet

## Examples

1. Generate a custom sprite with specific options:
```javascript
const customSprite = await generateCharacterSpritesheet(
  "A medieval knight", 
  {
    states: ['idle', 'walk', 'attack'],
    style: 'pixel-art',
    framesPerState: 4,
    save: true
  }
);
```

## Notes or Considerations
- The function uses AI models (DALL-E 3 and GPT) to generate and analyze images, which may result in varying outputs.
- Generated sprites are optimized for game-like animations.
- The function converts images to a spritesheet format suitable for game development.
- Image generation may take some time due to API calls and image processing.
- Customize the options to get the desired sprite sheet for your specific use case.
