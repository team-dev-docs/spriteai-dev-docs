# generateSpaceman

## Overview

The `generateSpaceman` function is a convenience method provided by the SpriteAI library for generating a spritesheet of an astronaut character. This function is built on top of the more general `generateCharacterSpritesheet` function, with pre-configured options tailored for creating a spaceman character.

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

The `generateSpaceman` function simplifies the process of creating an astronaut character sprite for use in games or applications. By default, it generates a pixel-art style astronaut character with a space suit and helmet, featuring four animation states: idle, walk, run, and float.

The function uses predefined settings optimized for spaceman characters, including specific animation states that are relevant to space-themed games or applications. The 'float' state, in particular, is unique to the spaceman character, simulating low-gravity or zero-gravity movement.

## Example Usage

```javascript
import { generateSpaceman } from 'spriteAI';

async function createSpacemanSprite() {
  try {
    const spacemanSprite = await generateSpaceman();
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
  states: ['idle', 'walk', 'run', 'float', 'jump', 'shoot'],
  framesPerState: 8,
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
- [generateRobot](./generateRobot.md)