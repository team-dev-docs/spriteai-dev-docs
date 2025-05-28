# generateRobot

## Overview

The `generateRobot` function is a convenience method provided by the SpriteAI library for generating a robot character spritesheet. This function simplifies the process of creating a pixel art robot character with predefined animation states.

## Syntax

```javascript
export const generateRobot = async function(options = {}) {
  // Function implementation
}
```

## Parameters

- `options` (optional): An object containing configuration options to customize the sprite generation. If not provided, default values will be used.

### Default Options

```javascript
{
  states: ['idle', 'walk', 'run', 'attack', 'power-up'],
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
import { generateRobot } from 'spriteAI';

// Generate a robot sprite with default options
const result = await generateRobot();

// Generate a robot sprite with custom options
const customResult = await generateRobot({
  states: ['idle', 'walk', 'run', 'attack', 'power-up', 'shutdown'],
  framesPerState: 8
});
```

## Description

The `generateRobot` function creates a pixel-art style sprite sheet of a robot character. By default, it includes five animation states: idle, walk, run, attack, and power-up. Each state is represented by 6 frames in the resulting sprite sheet.

Internally, this function calls `generateCharacterSpritesheet` with a pre-defined description: "robot character with mechanical limbs and glowing eyes". This ensures consistency in the generated robot character across different calls.

## Customization

While the function comes with default options, you can customize various aspects of the sprite generation by passing an `options` object. This allows you to:

- Add or remove animation states
- Change the number of frames per state
- Alter the art style (though 'pixel-art' is recommended for consistency)

## Notes

- The generated sprite sheet is optimized for use in 2D games or applications requiring animated robot characters.
- The 'power-up' state is unique to the robot character, simulating a robot powering up or activating special abilities.
- For more control over the sprite generation process, consider using the `generateCharacterSpritesheet` function directly.

## See Also

- [generateCharacterSpritesheet](./generateCharacterSpritesheet.md)
- [generateNinja](./generateNinja.md)
- [generateSpaceman](./generateSpaceman.md)