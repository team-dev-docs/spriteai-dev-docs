# Generate Spaceman Sprite

## Overview

The `generateSpaceman` function is a convenience method for creating a pixel-art spritesheet of an astronaut character. This function is part of the SpriteAI library and utilizes the more general `generateCharacterSpritesheet` function with pre-configured options tailored for a spaceman character.

## Function Signature

```javascript
export const generateSpaceman = async function(options = {}) {
  // Function implementation
}
```

## Default Options

The `generateSpaceman` function comes with the following default options:

- `states`: ['idle', 'walk', 'run', 'float']
- `style`: 'pixel-art'
- `framesPerState`: 6

These defaults can be overridden by passing custom options when calling the function.

## Usage

Here's a basic example of how to use the `generateSpaceman` function:

```javascript
import { generateSpaceman } from 'spriteAI';

async function createSpacemanSprite() {
  try {
    const result = await generateSpaceman();
    console.log('Spaceman sprite generated:', result);
  } catch (error) {
    console.error('Error generating spaceman sprite:', error);
  }
}

createSpacemanSprite();
```

## Customization

You can customize the spaceman sprite by passing an options object:

```javascript
const customOptions = {
  states: ['idle', 'walk', 'run', 'float', 'jump'],
  framesPerState: 8,
  style: 'vector'
};

const customSpaceman = await generateSpaceman(customOptions);
```

## Return Value

The function returns a promise that resolves to an object containing:

- `original`: URL of the original generated image
- `spritesheet`: Base64-encoded string of the processed spritesheet
- `metadata`: Object containing information about the generated sprite, including states, dimensions, and frame data

## Notes

- The spaceman character is described as an "astronaut character with space suit and helmet" in the underlying `generateCharacterSpritesheet` call.
- This function is particularly useful for quickly generating consistent spaceman or astronaut character sprites for games or animations.

For more detailed information on the underlying sprite generation process, refer to the documentation for `generateCharacterSpritesheet`.
