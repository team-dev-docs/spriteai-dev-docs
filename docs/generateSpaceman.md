---
slug: /generateSpaceman
sidebar_position: 5
---
# generateSpaceman

## Brief Description
`generateSpaceman` is a specialized function that creates a space-themed character sprite using AI-powered image generation and analysis. It is a convenient method to quickly generate spaceman-themed character spritesheets with predefined animation states.

## Usage
To use `generateSpaceman`, import it from the sprite module and call it with optional configuration parameters.

```javascript
import { generateSpaceman } from './spriteAI/index.js';

const result = await generateSpaceman(options);
```

## Parameters
- `options` (object, optional):
  - `states` (array): Animation states for the spaceman sprite. Defaults to `['idle', 'walk', 'run', 'float']`.
  - `style` (string): Sprite art style. Defaults to `'pixel-art'`.
  - `framesPerState` (number): Number of frames per animation state. Defaults to `6`.

## Return Value
Returns an object containing:
- `original`: URL of the original generated image
- `spritesheet`: Base64-encoded spritesheet image
- `metadata`: Detailed sprite generation information including states, frame count, and dimensions

## Examples

1. Generate a default spaceman sprite sheet:
```javascript
const spacemanSprite = await generateSpaceman();
console.log(spacemanSprite.metadata);
```

2. Generate a spaceman sprite with custom options:
```javascript
const customSpaceman = await generateSpaceman({
  states: ['idle', 'walk', 'float'],
  framesPerState: 4
});
console.log(customSpaceman.spritesheet);
```

## Notes and Considerations
- Uses AI models (DALL-E 3) to generate space-themed character spritesheets
- Automatically generates pixel-art style sprites
- Predefined with spaceman-specific animation states
- Generates sprites optimized for game development
- Supports customization of animation states, style, and frame count
- Default description is an 'astronaut character with space suit and helmet'
- Provides comprehensive metadata about the generated sprite

## Related Functions
- `generateCharacterSpritesheet`: Base function for character sprite generation
- `generateNinja`: Similar convenience function for ninja-themed sprites
- `generateRobot`: Similar convenience function for robot-themed sprites
