# Generate Ninja Sprite

## Overview

The `generateNinja` function is a convenient method for creating a ninja character spritesheet using the SpriteAI library. This function simplifies the process of generating a ninja character with predefined animation states, style, and frame count.

## Function Signature

```javascript
export const generateNinja = async function(options = {}) {
  // ... implementation
}
```

## Parameters

The `generateNinja` function accepts an optional `options` object with the following properties:

- `states` (array of strings): Animation states for the ninja character. Default: `['idle', 'walk', 'run', 'attack', 'sneak']`
- `style` (string): The art style of the sprite. Default: `'pixel-art'`
- `framesPerState` (number): Number of frames for each animation state. Default: `6`

Any additional options will be passed to the underlying `generateCharacterSpritesheet` function.

## Default Options

```javascript
const defaultOptions = {
  states: ['idle', 'walk', 'run', 'attack', 'sneak'],
  style: 'pixel-art',
  framesPerState: 6
};
```

## Usage

To generate a ninja character spritesheet with default options:

```javascript
import { generateNinja } from 'spriteAI';

const ninjaSprite = await generateNinja();
```

To customize the ninja character generation:

```javascript
const customNinja = await generateNinja({
  states: ['idle', 'walk', 'attack', 'disappear'],
  style: 'hand-drawn',
  framesPerState: 8
});
```

## Return Value

The function returns a Promise that resolves to an object containing:

- `original`: URL of the original generated image
- `spritesheet`: Base64-encoded string of the processed spritesheet
- `metadata`: Object containing information about the generated spritesheet

## Implementation Details

The `generateNinja` function internally calls the `generateCharacterSpritesheet` function with a predefined description and merged options. The description used is 'ninja character with black outfit and mask'.

## Note

This function is part of a set of convenience functions for generating specific character types. Similar functions exist for generating spaceman and robot characters.

## See Also

- `generateCharacterSpritesheet`: The underlying function used to generate character spritesheets
- `generateSpaceman`: Function for generating spaceman character spritesheets
- `generateRobot`: Function for generating robot character spritesheets