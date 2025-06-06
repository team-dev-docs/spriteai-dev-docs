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

The `generateSpaceman` function allows for customization through the `options` parameter. Developers can modify various aspects of the sprite generation:

- Add or remove animation states
- Adjust the number of frames per state
- Modify the art style (although 'pixel-art' is recommended for consistency)

Example of customization:

```javascript
const customSpaceman = await generateSpaceman({
  states: ['idle', 'walk', 'run', 'float', 'moonwalk'],
  framesPerState: 8,
  style: 'pixel-art'
});
```

## Performance Considerations

When generating multiple spaceman sprites, consider caching the results to improve performance and reduce unnecessary API calls.

## Notes

- The generated sprite sheet is optimized for use in 2D games or applications requiring animated astronaut characters.
- The 'float' state is unique to the spaceman character, simulating low-gravity or zero-gravity movement.
- For more granular control over the sprite generation process, consider using the `generateCharacterSpritesheet` function directly.

## See Also

- [generateCharacterSpritesheet](./generateCharacterSpritesheet.md)
- [generateNinja](./generateNinja.md)
- [generateRobot](./generateRobot.md)

## Error Handling

The `generateSpaceman` function may throw errors in case of network issues or invalid options. It's recommended to implement proper error handling:

```javascript
try {
  const spaceman = await generateSpaceman(options);
  // Use the generated spaceman sprite
} catch (error) {
  console.error('Error generating spaceman:', error);
  // Handle the error appropriately
}
```

## Best Practices

1. Always provide fallback options in case the sprite generation fails.
2. Test the generated sprites in various game engines to ensure compatibility.
3. Consider implementing a caching mechanism for frequently used spaceman configurations to improve performance.
