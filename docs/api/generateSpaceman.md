# generateSpaceman

## Overview

The `generateSpaceman` function is a specialized utility provided by the SpriteAI library for creating sprite sheets of astronaut characters. This function builds upon the more versatile `generateCharacterSpritesheet` function, offering pre-configured options tailored specifically for spaceman characters.

## Syntax

```javascript
export const generateSpaceman = async function(options = {}) {
  // Function implementation
}
```

## Parameters

- `options` (optional): An object containing configuration options to customize the sprite generation. If not provided, default values will be used.

### Default Options

```javascript
{
  states: ['idle', 'walk', 'run', 'float'],
  style: 'pixel-art',
  framesPerState: 6
}
```

## Return Value

The function returns a Promise that resolves to an object containing:

- `original`: The URL of the original generated image.
- `spritesheet`: A base64-encoded string of the processed sprite sheet.
- `metadata`: An object containing information about the generated sprite sheet.

## Usage

```javascript
import { generateSpaceman } from 'spriteAI';

// Generate a spaceman sprite with default options
const result = await generateSpaceman();

// Generate a spaceman sprite with custom options
const customResult = await generateSpaceman({
  states: ['idle', 'walk', 'run', 'float', 'jump'],
  framesPerState: 8
});
```

## Description

The `generateSpaceman` function produces a pixel-art style sprite sheet depicting an astronaut character. By default, it incorporates four distinct animation states: idle, walk, run, and float. Each state is represented by 6 frames in the resulting sprite sheet.

Internally, this function invokes `generateCharacterSpritesheet` with a pre-defined description: "astronaut character with space suit and helmet". This approach ensures consistency in the generated spaceman character across multiple function calls.

## Customization

While the function comes with default options, developers can customize various aspects of the sprite generation by passing an `options` object. This flexibility allows for:

- Addition or removal of animation states
- Adjustment of the number of frames per state
- Modification of the art style (although 'pixel-art' is recommended for consistency)

## Notes

- The generated sprite sheet is optimized for integration into 2D games or applications requiring animated astronaut characters.
- The 'float' state is unique to the spaceman character, simulating low-gravity or zero-gravity movement.
- For more granular control over the sprite generation process, developers may consider using the `generateCharacterSpritesheet` function directly.

## See Also

- [generateCharacterSpritesheet](./generateCharacterSpritesheet.md)
- [generateNinja](./generateNinja.md)
- [generateRobot](./generateRobot.md)
