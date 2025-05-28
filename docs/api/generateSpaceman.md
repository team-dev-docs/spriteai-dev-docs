# generateSpaceman

## Overview

The `generateSpaceman` function is a convenience method provided by the SpriteAI library for generating a spaceman (astronaut) character spritesheet. This function simplifies the process of creating a pixel art astronaut character with predefined animation states.

## Syntax

```javascript
generateSpaceman(options = {})
```

## Parameters

- `options` (optional): An object containing configuration options for the spaceman sprite generation.
  - `states` (array of strings): Animation states for the spaceman. Default: `['idle', 'walk', 'run', 'float']`
  - `style` (string): The art style for the sprite. Default: `'pixel-art'`
  - `framesPerState` (number): Number of frames for each animation state. Default: `6`

## Returns

- A Promise that resolves to an object containing:
  - `original`: URL of the original generated image
  - `spritesheet`: Base64-encoded PNG data of the processed spritesheet
  - `metadata`: Object containing information about the generated spritesheet

## Description

The `generateSpaceman` function is built on top of the `generateCharacterSpritesheet` function, providing a simplified interface for creating spaceman character sprites. It uses predefined settings tailored for astronaut characters, including specific animation states and a default description.

By default, the function generates a pixel art astronaut character with a space suit and helmet. The spritesheet includes four animation states: idle, walk, run, and float.

## Example Usage

```javascript
import { generateSpaceman } from 'spriteAI';

async function createSpacemanSprite() {
  try {
    const spacemanSprite = await generateSpaceman({
      framesPerState: 8,
      style: 'pixel-art'
    });
    console.log('Spaceman sprite generated:', spacemanSprite);
    // Use the spacemanSprite.spritesheet data in your game or application
  } catch (error) {
    console.error('Error generating spaceman sprite:', error);
  }
}

createSpacemanSprite();
```

## Customization

You can customize the spaceman sprite generation by passing options to the `generateSpaceman` function. For example, you can change the number of frames per state or add additional animation states:

```javascript
const customSpaceman = await generateSpaceman({
  states: ['idle', 'walk', 'run', 'float', 'jump'],
  framesPerState: 4,
  style: 'vector'
});
```

## Notes

- The function uses AI-powered image generation, so results may vary slightly between calls.
- The generated spritesheet is optimized for game development and can be easily integrated into game engines or frameworks that support spritesheets.
- The 'float' state is unique to the spaceman character, simulating low-gravity or zero-gravity movement.
- For more complex customizations, consider using the `generateCharacterSpritesheet` function directly.

## See Also

- [generateCharacterSpritesheet](./generateCharacterSpritesheet.md)
- [generateNinja](./generateNinja.md)
- [generateRobot](./generateRobot.md)