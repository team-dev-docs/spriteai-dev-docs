# generateNinja

## Overview

The `generateNinja` function is a convenience method provided by the SpriteAI library for generating a ninja character spritesheet. This function simplifies the process of creating a pixel-art style ninja character with predefined animation states.

## Syntax

```javascript
generateNinja(options = {})
```

## Parameters

- `options` (optional): An object containing configuration options for the ninja sprite generation.
  - `states` (array of strings): Animation states for the ninja. Default: `['idle', 'walk', 'run', 'attack', 'sneak']`
  - `style` (string): The art style for the sprite. Default: `'pixel-art'`
  - `framesPerState` (number): Number of frames for each animation state. Default: `6`

## Returns

- A Promise that resolves to an object containing:
  - `original`: URL of the original generated image
  - `spritesheet`: Base64-encoded PNG data of the processed spritesheet
  - `metadata`: Object containing information about the generated spritesheet

## Description

The `generateNinja` function is built on top of the `generateCharacterSpritesheet` function, providing a simplified interface for creating ninja character sprites. It uses predefined settings tailored for ninja characters, including specific animation states and a default description.

By default, the function generates a pixel art ninja character with a black outfit and mask. The spritesheet includes five animation states: idle, walk, run, attack, and sneak.

## Example Usage

```javascript
import { generateNinja } from 'spriteAI';

async function createNinjaSprite() {
  try {
    const ninjaSprite = await generateNinja({
      framesPerState: 8
    });
    console.log('Ninja sprite generated:', ninjaSprite);
    // Use the ninjaSprite.spritesheet data in your game or application
  } catch (error) {
    console.error('Error generating ninja sprite:', error);
  }
}

createNinjaSprite();
```

## Customization

You can customize the ninja sprite generation by passing options to the `generateNinja` function. For example, you can change the number of frames per state or add additional animation states:

```javascript
const customNinja = await generateNinja({
  states: ['idle', 'walk', 'run', 'attack', 'sneak', 'climb'],
  framesPerState: 4,
  style: 'hand-drawn'
});
```

## Notes

- The function uses AI-powered image generation, so results may vary slightly between calls.
- The generated spritesheet is optimized for game development and can be easily integrated into game engines or frameworks that support spritesheets.
- For more complex customizations, consider using the `generateCharacterSpritesheet` function directly.

## See Also

- [generateCharacterSpritesheet](./generateCharacterSpritesheet.md)
- [generateSpaceman](./generateSpaceman.md)
- [generateRobot](./generateRobot.md)