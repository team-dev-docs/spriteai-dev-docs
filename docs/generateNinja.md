# generateNinja Function

## Overview

Unleash your inner shinobi with the `generateNinja` function! This stealthy convenience function from the SpriteAI library conjures up a ninja character sprite sheet faster than you can say "ninjutsu". It's the perfect shortcut for creating a shadow warrior with predefined animation states and options.

## Usage

Summon the `generateNinja` function from the SpriteAI module and call upon its mystic powers with optional parameters:

```javascript
import { generateNinja } from 'spriteai';

const ninjaSprite = await generateNinja(options);
```

## Parameters

The `generateNinja` function accepts an optional `options` object with the following ninja-approved properties:

- `states` (array): An array of animation states for your ninja character. Default: `['idle', 'walk', 'run', 'attack', 'sneak']` (because ninjas never rest!)
- `style` (string): The art style for your sprite. Default: `'pixel-art'` (for that classic ninja game feel)
- `framesPerState` (number): The number of frames for each animation state. Default: `6` (smooth like a ninja's moves)

Any additional options supported by the `generateCharacterSpritesheet` function can also be sneaked into the `options` object.

## Default Options

If you prefer to stick to the shadows and provide no options, the function uses these default settings:

```javascript
const defaultOptions = {
  states: ['idle', 'walk', 'run', 'attack', 'sneak'],
  style: 'pixel-art',
  framesPerState: 6
};
```

## Return Value

The function returns a Promise that resolves faster than a ninja's reflexes, providing the result of the `generateCharacterSpritesheet` function call. This ninja pack typically includes:

- `original`: The URL of the original generated image (your ninja's first appearance)
- `spritesheet`: A base64-encoded string of the processed sprite sheet (your ninja's disguise kit)
- `metadata`: An object containing information about the generated sprite sheet (your ninja's secret dossier)

## Example

Watch as we summon a ninja sprite with the stealth of a shadow:

```javascript
import { generateNinja } from 'spriteai';

async function createNinjaSprite() {
  try {
    const ninjaSprite = await generateNinja({
      states: ['idle', 'walk', 'run', 'attack', 'sneak', 'climb'],
      framesPerState: 8
    });
    console.log('Ninja sprite materialized:', ninjaSprite);
    // Use the generated sprite to infiltrate your game or application
  } catch (error) {
    console.error('Ninja vanished in smoke:', error);
  }
}

createNinjaSprite();
```

## Notes

- The function uses a predefined description "ninja character with black outfit and mask" to generate the sprite. (Because ninjas are nothing if not stylish)
- The generated sprite sheet is optimized for pixel art style games but can be customized using the `style` option. (Your ninja, your rules)
- This function is part of a set of convenience functions including `generateSpaceman` and `generateRobot`, which offer similar functionality for different character types. (Create your own league of extraordinary sprites!)

For more detailed information on sprite generation options and advanced usage, sneak a peek at the `generateCharacterSpritesheet` documentation. Remember, a true ninja leaves no trace... except for perfectly documented code!
