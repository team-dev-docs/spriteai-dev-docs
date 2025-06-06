# generateRobot

## Overview

The `generateRobot` function is a specialized method within the SpriteAI library designed for generating robot character spritesheets. This function streamlines the process of creating pixel art robot characters with predefined animation states, offering developers a convenient and efficient solution for game development and interactive applications.

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

The `generateRobot` function is built upon the `generateCharacterSpritesheet` function, providing a simplified interface for creating robot character sprites. It utilizes predefined settings tailored for robot characters, including specific animation states and a default description.

By default, the function generates a pixel art robot character featuring mechanical limbs and glowing eyes. The resulting spritesheet encompasses five animation states: idle, walk, run, attack, and power-up.

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

The `generateRobot` function allows for customization through the `options` parameter. Developers can modify various aspects of the sprite generation process, such as changing the number of frames per state or adding additional animation states:

```javascript
const customRobot = await generateRobot({
  states: ['idle', 'walk', 'run', 'attack', 'power-up', 'shutdown'],
  framesPerState: 4,
  style: 'vector'
});
```

## Technical Considerations

- The function leverages AI-powered image generation technology, which may result in slight variations between calls.
- The generated spritesheet is optimized for game development and can be seamlessly integrated into game engines or frameworks that support spritesheets.
- For more advanced customization requirements, consider utilizing the `generateCharacterSpritesheet` function directly.

## See Also

- [generateCharacterSpritesheet](./generateCharacterSpritesheet.md)
- [generateNinja](./generateNinja.md)
- [generateSpaceman](./generateSpaceman.md)
