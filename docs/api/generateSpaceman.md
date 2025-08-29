# generateSpaceman

## Overview

The `generateSpaceman` function is a convenience method provided by the SpriteAI library for generating a sprite sheet of an astronaut character. This function utilizes the more general `generateCharacterSpritesheet` function with pre-configured options suitable for a spaceman character.

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

The `generateSpaceman` function creates a pixel-art style sprite sheet of an astronaut character. By default, it includes four animation states: idle, walk, run, and float. Each state is represented by 6 frames in the resulting sprite sheet.

Internally, this function calls `generateCharacterSpritesheet` with a pre-defined description: "astronaut character with space suit and helmet". This ensures consistency in the generated spaceman character across different calls.

## Customization

The `generateSpaceman` function provides flexibility through its `options` parameter. Developers can customize various aspects of the sprite generation:

- **Animation States**: Add or remove states to suit specific game requirements.
- **Frame Count**: Adjust the number of frames per state for smoother or more detailed animations.
- **Art Style**: While 'pixel-art' is the default and recommended style for consistency, other styles can be explored for unique visual effects.

Example of customization:

```javascript
const customSpaceman = await generateSpaceman({
  states: ['idle', 'walk', 'run', 'float', 'moonwalk'],
  framesPerState: 8,
  style: 'pixel-art'
});
```

## Performance Considerations

When using the `generateSpaceman` function, consider the following performance aspects:

1. **Sprite Sheet Size**: Increasing the number of states or frames per state will result in larger sprite sheets, which may impact load times and memory usage.
2. **Generation Time**: Complex customizations might increase the time required to generate the sprite sheet.
3. **Caching**: For frequently used spaceman configurations, consider caching the generated sprite sheets to improve performance in subsequent uses.

## Best Practices

1. **Consistent Style**: Maintain a consistent art style across all character types in your game for a cohesive visual experience.
2. **Optimize Animation States**: Include only the necessary animation states to keep the sprite sheet size manageable.
3. **Test Performance**: If using multiple custom spaceman characters, test the performance impact, especially on lower-end devices.

## Notes

- The generated sprite sheet is optimized for use in 2D games or applications requiring animated astronaut characters.
- The 'float' state is unique to the spaceman character, simulating low-gravity or zero-gravity movement.
- For more granular control over the sprite generation process, consider using the `generateCharacterSpritesheet` function directly.

## See Also

- [generateCharacterSpritesheet](./generateCharacterSpritesheet.md)
- [generateNinja](./generateNinja.md)
- [generateRobot](./generateRobot.md)
