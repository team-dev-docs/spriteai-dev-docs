# generateNinja

## Overview

The `generateNinja` function is a convenience method provided by the SpriteAI library for generating a ninja character spritesheet. This function simplifies the process of creating a pixel-art style ninja character with predefined animation states.

## Syntax

```javascript
export const generateNinja = async function(options = {}) {
  // Function implementation
}
```

## Parameters

- `options` (optional): An object containing configuration options to customize the sprite generation. If not provided, default values will be used.

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

- `original`: The URL of the original generated image.
- `spritesheet`: A base64-encoded string of the processed sprite sheet.
- `metadata`: An object containing information about the generated sprite sheet.

## Usage

```javascript
import { generateNinja } from 'spriteAI';

// Generate a ninja sprite with default options
const result = await generateNinja();

// Generate a ninja sprite with custom options
const customResult = await generateNinja({
  states: ['idle', 'walk', 'run', 'attack', 'sneak', 'jump'],
  framesPerState: 8
});
```

## Description

The `generateNinja` function creates a pixel-art style sprite sheet of a ninja character with a black outfit and mask. By default, it includes five animation states: idle, walk, run, attack, and sneak. Each state is represented by 6 frames in the resulting sprite sheet.

Internally, this function calls `generateCharacterSpritesheet` with a pre-defined description: "ninja character with black outfit and mask". This ensures consistency in the generated ninja character across different calls.

## Customization

While the function comes with default options, you can customize various aspects of the sprite generation by passing an `options` object. This allows you to:

- Add or remove animation states
- Change the number of frames per state
- Alter the art style (though 'pixel-art' is recommended for consistency)

## Notes

- The generated sprite sheet is optimized for use in 2D games or applications requiring animated ninja characters.
- The 'sneak' state is unique to the ninja character, simulating stealthy movement.
- For more control over the sprite generation process, consider using the `generateCharacterSpritesheet` function directly.

## See Also

- [generateCharacterSpritesheet](./generateCharacterSpritesheet.md)
- [generateSpaceman](./generateSpaceman.md)
- [generateRobot](./generateRobot.md)