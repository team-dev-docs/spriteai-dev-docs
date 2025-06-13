---
slug: /generateRobot
sidebar_position: 2
---
# generateRobot

## Brief Description
`generateRobot` is a convenient function in the spriteAI library for generating pixel-art robot character spritesheets with predefined states and mechanical styling.

## Usage
Import and use `generateRobot` from the sprite module to create robot character spritesheets:

```javascript
import { generateRobot } from 'spriteai';

const robotSprite = await generateRobot(options);
```

## Parameters
- `options` (object, optional): Configuration object for robot sprite generation
  - `states` (array, default: `['idle', 'walk', 'run', 'attack', 'power-up']`): Animation states for the robot
  - `style` (string, default: `'pixel-art'`): Visual style of the spritesheet
  - `framesPerState` (number, default: `6`): Number of frames for each animation state

## Return Value
Returns an object containing:
- `original`: URL of the original AI-generated image
- `spritesheet`: Base64-encoded spritesheet image
- `metadata`: Detailed information about the generated spritesheet

## Examples

1. Generate a basic robot sprite:
```javascript
const robotSprite = await generateRobot();
console.log(robotSprite.spritesheet); // Base64 encoded sprite image
```

2. Customize robot sprite states:
```javascript
const customRobot = await generateRobot({
  states: ['idle', 'walk', 'power-up'],
  framesPerState: 4
});
```

## How It Works
`generateRobot` leverages AI image generation to create pixel-art robot characters with:
- Predefined mechanical character description
- Flexible animation state configuration
- Consistent pixel-art styling

## Notes and Considerations
- Default robot description includes 'robot character with mechanical limbs and glowing eyes'
- Supports easy customization of sprite generation
- Generates a spritesheet with multiple animation states
- Uses DALL-E 3 for high-quality pixel art generation

## Related Functions
- `generateNinja()`: Generate ninja character spritesheets
- `generateSpaceman()`: Generate astronaut character spritesheets
- `generateCharacterSpritesheet()`: Generic character spritesheet generation
