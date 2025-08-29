# generateRobot

## Overview

The `generateRobot` function is a convenience method provided by the SpriteAI library for generating a pixel-art robot character spritesheet. This function simplifies the process of creating animated robot sprites with predefined states, leveraging the more general `generateCharacterSpritesheet` function.

## Syntax

```javascript
generateRobot(options = {})
```

## Parameters

- `options` (optional): An object containing configuration options for the robot sprite generation.
  - `states` (array of strings): Animation states for the robot. Default: `['idle', 'walk', 'run', 'attack', 'power-up']`
  - `style` (string): The art style for the sprite. Default: `'pixel-art'`
  - `framesPerState` (number): Number of frames for each animation state. Default: `6`

## Return Value

Returns a Promise that resolves to an object containing:
- `original`: URL of the original generated image
- `spritesheet`: Base64-encoded PNG data of the processed spritesheet
- `metadata`: Object containing information about the generated spritesheet

## Description

The `generateRobot` function creates a pixel-art style spritesheet for a robot character with mechanical limbs and glowing eyes. It uses predefined settings tailored for robot characters, including specific animation states.

By default, the function generates a robot character with five animation states: idle, walk, run, attack, and power-up. Each state is represented by 6 frames in the resulting sprite sheet.

## Usage Example

```javascript
import { generateRobot } from 'spriteAI';

async function createRobotSprite() {
  try {
    const robotSprite = await generateRobot();
    console.log('Robot sprite generated:', robotSprite);
    // Use the robotSprite.spritesheet data in your game or application
  } catch (error) {
    console.error('Error generating robot sprite:', error);
  }
}

createRobotSprite();
```

## Customization

You can customize the robot sprite generation by passing options to the `generateRobot` function:

```javascript
const customRobot = await generateRobot({
  states: ['idle', 'walk', 'run', 'attack', 'power-up', 'shutdown'],
  framesPerState: 8,
  style: 'pixel-art'
});
```

## Notes

- The function uses AI-powered image generation, so results may vary slightly between calls.
- The generated spritesheet is optimized for game development and can be easily integrated into game engines or frameworks that support spritesheets.
- For more complex customizations, consider using the `generateCharacterSpritesheet` function directly.

## See Also

- [generateCharacterSpritesheet](./generateCharacterSpritesheet.md)
- [generateNinja](./generateNinja.md)
- [generateSpaceman](./generateSpaceman.md)