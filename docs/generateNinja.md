# generateNinja Function

## Overview

The `generateNinja` function is a convenience function for generating a ninja character sprite sheet using the SpriteAI library. This function simplifies the process of creating a ninja character with predefined animation states and options.

## Usage

To use the `generateNinja` function, import it from the SpriteAI module and call it with optional parameters:

```javascript
import { generateNinja } from 'spriteai';

const ninjaSprite = await generateNinja(options);
```

## Parameters

The `generateNinja` function accepts an optional `options` object with the following properties:

- `states` (array): An array of animation states for the ninja character. Default: `['idle', 'walk', 'run', 'attack', 'sneak']`
- `style` (string): The art style for the sprite. Default: `'pixel-art'`
- `framesPerState` (number): The number of frames for each animation state. Default: `6`

Any additional options supported by the `generateCharacterSpritesheet` function can also be passed in the `options` object.

## Default Options

If no options are provided, the function uses the following default settings:

```javascript
const defaultOptions = {
  states: ['idle', 'walk', 'run', 'attack', 'sneak'],
  style: 'pixel-art',
  framesPerState: 6
};
```

## Return Value

The function returns a Promise that resolves to the result of the `generateCharacterSpritesheet` function call. This typically includes:

- `original`: The URL of the original generated image
- `spritesheet`: A base64-encoded string of the processed sprite sheet
- `metadata`: An object containing information about the generated sprite sheet

## Example

```javascript
import { generateNinja } from 'spriteai';

async function createNinjaSprite() {
  try {
    const ninjaSprite = await generateNinja({
      states: ['idle', 'walk', 'run', 'attack', 'sneak', 'climb'],
      framesPerState: 8
    });
    console.log('Ninja sprite generated:', ninjaSprite);
    // Use the generated sprite in your game or application
  } catch (error) {
    console.error('Error generating ninja sprite:', error);
  }
}

createNinjaSprite();
```

## Notes

- The function uses a predefined description "ninja character with black outfit and mask" to generate the sprite.
- The generated sprite sheet is optimized for pixel art style games but can be customized using the `style` option.
- This function is part of a set of convenience functions including `generateSpaceman` and `generateRobot`, which offer similar functionality for different character types.

For more detailed information on sprite generation options and advanced usage, refer to the `generateCharacterSpritesheet` documentation.