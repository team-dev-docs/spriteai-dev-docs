# generateNinja

`generateNinja` is a convenience function provided by the SpriteAI library to generate a ninja character spritesheet with predefined animation states.

## Overview

The `generateNinja` function creates a pixel-art style spritesheet for a ninja character with black outfit and mask. It utilizes the more general `generateCharacterSpritesheet` function with preset options tailored for a ninja character.

## Syntax

```javascript
export const generateNinja = async function(options = {}) {
  // ... implementation details
}
```

## Parameters

- `options` (optional): An object containing custom options to override the default settings.

### Default Options

```javascript
{
  states: ['idle', 'walk', 'run', 'attack', 'sneak'],
  style: 'pixel-art',
  framesPerState: 6
}
```

## Return Value

The function returns a Promise that resolves to an object containing:

- `original`: URL of the original generated image
- `spritesheet`: Base64-encoded string of the processed spritesheet
- `metadata`: Object containing information about the generated spritesheet

## Usage Example

```javascript
import { generateNinja } from 'spriteAI';

async function createNinjaSprite() {
  try {
    const ninjaSprite = await generateNinja();
    console.log('Ninja sprite generated:', ninjaSprite);
    // Use the generated sprite in your game or application
  } catch (error) {
    console.error('Error generating ninja sprite:', error);
  }
}

createNinjaSprite();
```

## Customization

You can customize the ninja sprite generation by passing options:

```javascript
const customNinja = await generateNinja({
  framesPerState: 8,
  style: 'hand-drawn'
});
```

This will generate a ninja sprite with 8 frames per animation state in a hand-drawn style instead of pixel-art.

## Notes

- The function uses AI-powered image generation, so results may vary slightly between calls.
- The generated spritesheet is optimized for game development use, with clear separation between animation states.
- For more control over the sprite generation process, consider using the `generateCharacterSpritesheet` function directly.

## See Also

- [generateCharacterSpritesheet](./generateCharacterSpritesheet.md)
- [generateSpaceman](./generateSpaceman.md)
- [generateRobot](./generateRobot.md)