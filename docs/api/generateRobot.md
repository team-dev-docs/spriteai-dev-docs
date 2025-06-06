# generateRobot

## Overview

The `generateRobot` function is a convenience method provided by the SpriteAI library for generating a robot character spritesheet. This function simplifies the process of creating a pixel art robot character with predefined animation states.

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

The `generateRobot` function is built on top of the `generateCharacterSpritesheet` function, providing a simplified interface for creating robot character sprites. It uses predefined settings tailored for robot characters, including specific animation states and a default description.

By default, the function generates a pixel art robot character with mechanical limbs and glowing eyes. The spritesheet includes five animation states: idle, walk, run, attack, and power-up.

## Example Usage

```javascript
import { generateRobot } from 'spriteAI';

async function createRobotSprite() {
  try {
    const robotSprite = await generateRobot({
      framesPerState: 8,
      style: 'pixel-art'
    });
    console.log('Robot sprite generated:', robotSprite);
    // Use the robotSprite.spritesheet data in your game or application
  } catch (error) {
    console.error('Error generating robot sprite:', error);
  }
}

createRobotSprite();
```

## Customization

You can customize the robot sprite generation by passing options to the `generateRobot` function. For example, you can change the number of frames per state or add additional animation states:

```javascript
const customRobot = await generateRobot({
  states: ['idle', 'walk', 'run', 'attack', 'power-up', 'shutdown'],
  framesPerState: 4,
  style: 'vector'
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