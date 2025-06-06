# generateRobot

## Overview

The `generateRobot` function is a specialized method provided by the SpriteAI library for generating a robot character spritesheet. This function streamlines the process of creating a pixel art robot character with predefined animation states, offering developers a quick and efficient way to incorporate robotic characters into their projects.

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

The function returns a Promise that resolves to an object containing:

- `original`: URL of the original generated image
- `spritesheet`: Base64-encoded PNG data of the processed spritesheet
- `metadata`: Object containing information about the generated spritesheet

## Description

The `generateRobot` function is built upon the more generic `generateCharacterSpritesheet` function, providing a tailored interface for creating robot character sprites. It employs predefined settings optimized for robot characters, including specific animation states and a default description.

By default, the function generates a pixel art robot character featuring mechanical limbs and glowing eyes. The resulting spritesheet encompasses five distinct animation states: idle, walk, run, attack, and power-up.

## Usage Example

```javascript
import { generateRobot } from 'spriteAI';

async function createRobotSprite() {
  try {
    const robotSprite = await generateRobot({
      framesPerState: 8,
      style: 'pixel-art'
    });
    console.log('Robot sprite generated:', robotSprite);
    // Utilize the robotSprite.spritesheet data in your game or application
  } catch (error) {
    console.error('Error generating robot sprite:', error);
  }
}

createRobotSprite();
```

## Customization

The `generateRobot` function allows for customization through the `options` parameter. Developers can modify various aspects of the sprite generation process, such as adjusting the number of frames per state or introducing additional animation states:

```javascript
const customRobot = await generateRobot({
  states: ['idle', 'walk', 'run', 'attack', 'power-up', 'shutdown'],
  framesPerState: 4,
  style: 'vector'
});
```

## Notes

- The function utilizes AI-powered image generation, which may result in slight variations between calls.
- The generated spritesheet is optimized for game development and can be seamlessly integrated into game engines or frameworks that support spritesheets.
- For more advanced customizations, consider using the `generateCharacterSpritesheet` function directly.

## See Also

- [generateCharacterSpritesheet](./generateCharacterSpritesheet.md)
- [generateNinja](./generateNinja.md)
- [generateSpaceman](./generateSpaceman.md)
