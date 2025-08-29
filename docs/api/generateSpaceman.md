# generateSpaceman

## Overview

The `generateSpaceman` function is a specialized utility within the SpriteAI library designed for efficient generation of astronaut character spritesheets. This function builds upon the more comprehensive `generateCharacterSpritesheet` function, offering pre-configured options optimized for spaceman character creation.

## Syntax

```javascript
export const generateSpaceman = async function(options = {}) {
  // Function implementation
}
```

## Parameters

- `options` (optional): An object containing configuration parameters to customize the sprite generation process. If omitted, default values will be applied.

### Default Options

```javascript
{
  states: ['idle', 'walk', 'run', 'float'],
  style: 'pixel-art',
  framesPerState: 6
}
```

## Return Value

The function returns a Promise that resolves to an object with the following properties:

- `original`: URL of the originally generated image.
- `spritesheet`: Base64-encoded string representation of the processed sprite sheet.
- `metadata`: Object containing detailed information about the generated sprite sheet.

## Usage

```javascript
import { generateSpaceman } from 'spriteAI';

// Generate a spaceman sprite using default options
const result = await generateSpaceman();

// Generate a spaceman sprite with custom options
const customResult = await generateSpaceman({
  states: ['idle', 'walk', 'run', 'float', 'jump'],
  framesPerState: 8
});
```

## Description

The `generateSpaceman` function produces a pixel-art style sprite sheet depicting an astronaut character. By default, it generates four animation states: idle, walk, run, and float. Each state is represented by 6 frames in the resulting sprite sheet.

Internally, the function invokes `generateCharacterSpritesheet` with a predefined description: "astronaut character with space suit and helmet". This approach ensures consistency in the generated spaceman character across multiple function calls.

## Customization

While the function provides default options, developers can customize various aspects of the sprite generation by passing an `options` object. This flexibility allows for:

- Addition or removal of animation states
- Modification of the number of frames per state
- Alteration of the art style (although 'pixel-art' is recommended for consistency)

## Notes

- The generated sprite sheet is optimized for integration into 2D games or applications requiring animated astronaut characters.
- The 'float' state is unique to the spaceman character, simulating low-gravity or zero-gravity movement scenarios.
- For more granular control over the sprite generation process, consider utilizing the `generateCharacterSpritesheet` function directly.

## See Also

- [generateCharacterSpritesheet](./generateCharacterSpritesheet.md)
- [generateNinja](./generateNinja.md)
- [generateRobot](./generateRobot.md)
