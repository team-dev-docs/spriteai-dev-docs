# generateRobot

## Brief Description
`generateRobot` is a function that creates a robot character with various animation states using AI-powered image generation.

## Usage
To use the `generateRobot` function, import it directly from the sprite module:

```javascript
import { generateRobot } from './spriteAI/index.js';

// Basic usage
const robotSprites = await generateRobot();

// Usage with custom options
const customRobotSprites = await generateRobot({
  states: ['idle', 'walk', 'run', 'attack', 'power-up'],
  framesPerState: 8,
  style: 'pixel-art'
});
```

## Parameters
- `options` (object, optional):
  - `states` (array of strings): Animation states to include in the spritesheet. Default: `['idle', 'walk', 'run', 'attack', 'power-up']`
  - `framesPerState` (number): Number of frames for each animation state. Default: `6`
  - `style` (string): Art style for the generated robot. Default: `'pixel-art'`

## Features
- Generates a robot character with default states
- Customizable animation states and sprite style
- Uses AI-powered image generation
- Generates a spritesheet with predefined states

## Examples

1. Generate a basic robot character with default settings:
```javascript
const basicRobot = await generateRobot();
console.log(basicRobot.spritesheet); // Base64-encoded spritesheet image
```

2. Generate a robot character with custom options:
```javascript
const customRobot = await generateRobot({
  states: ['idle', 'walk', 'power-up'],
  framesPerState: 4,
  style: 'pixel-art'
});
console.log(customRobot.metadata); // Detailed metadata about the spritesheet
```

## Notes and Considerations
- The function uses AI image generation, so results may vary
- Spritesheets are organized with each row representing a different animation state
- Ensure you have the necessary API credentials for image generation
- Generation may take some time due to API calls and image processing

## Related Functions
- `generateNinja()`: Generate ninja character spritesheets
- `generateSpaceman()`: Generate spaceman character spritesheets
- `generateCharacterSpritesheet()`: Advanced character sprite generation
