# Generate Spaceman Sprite

## Overview

The `generateSpaceman` function is a convenience method provided by the SpriteAI library to quickly generate a spritesheet for an astronaut character. This function simplifies the process of creating animated sprites for space-themed games or applications.

## Function Signature

```javascript
export const generateSpaceman = async function(options = {}) {
  // Function implementation
}
```

## Parameters

The function accepts an optional `options` object with the following properties:

- `states` (array of strings): Animation states for the character. Default: `['idle', 'walk', 'run', 'float']`
- `style` (string): The art style of the sprite. Default: `'pixel-art'`
- `framesPerState` (number): Number of frames for each animation state. Default: `6`

Any additional options will be passed to the underlying `generateCharacterSpritesheet` function.

## Default Options

If not specified, the function uses the following default options:

```javascript
const defaultOptions = {
  states: ['idle', 'walk', 'run', 'float'],
  style: 'pixel-art',
  framesPerState: 6
};
```

## Usage

To generate a spaceman sprite, you can call the function like this:

```javascript
import { generateSpaceman } from 'spriteAI';

const spaceman = await generateSpaceman();
```

You can also customize the options:

```javascript
const customSpaceman = await generateSpaceman({
  states: ['idle', 'walk', 'float', 'repair'],
  framesPerState: 8,
  style: 'vector'
});
```

## Return Value

The function returns a promise that resolves to an object containing:

- `original`: URL of the original generated image
- `spritesheet`: Base64-encoded PNG data of the processed spritesheet
- `metadata`: Object containing information about the generated spritesheet

## Internal Implementation

The `generateSpaceman` function uses the `generateCharacterSpritesheet` function internally, passing it a description of an astronaut character along with the merged options:

```javascript
return generateCharacterSpritesheet('astronaut character with space suit and helmet', mergedOptions);
```

## Notes

- The spaceman sprite is designed with a default set of animation states suitable for space-themed games, including a unique 'float' state.
- The function uses pixel art style by default, which is common in retro-style or indie games.
- You can easily extend the functionality by passing additional options supported by the `generateCharacterSpritesheet` function.

For more detailed information on the underlying sprite generation process, refer to the `generateCharacterSpritesheet` documentation.