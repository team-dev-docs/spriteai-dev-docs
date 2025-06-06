# generateSpaceman

## Overview

The `generateSpaceman` function is a specialized convenience method provided by the SpriteAI library for generating a sprite sheet of an astronaut character. This function leverages the more general `generateCharacterSpritesheet` function, offering pre-configured options tailored specifically for a spaceman character.

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

While the function comes with default options, you can customize various aspects of the sprite generation by passing an `options` object. This allows you to:

- Add or remove animation states
- Change the number of frames per state
- Alter the art style (though 'pixel-art' is recommended for consistency)

## Technical Considerations

- The generated sprite sheet is optimized for use in 2D games or applications requiring animated astronaut characters.
- The 'float' state is unique to the spaceman character, simulating low-gravity or zero-gravity movement.
- For more granular control over the sprite generation process, consider using the `generateCharacterSpritesheet` function directly.

## Performance Impact

The `generateSpaceman` function utilizes AI-powered image generation, which may have performance implications:

- Generation time may vary depending on the complexity of the requested sprite and the current load on the AI system.
- Consider implementing caching mechanisms for frequently used sprite configurations to improve response times in your application.

## Best Practices

1. Stick to the default 'pixel-art' style for consistent visual aesthetics across your project.
2. When customizing states, ensure they align with the spaceman theme (e.g., 'float', 'moonwalk') for coherent character behavior.
3. Implement error handling to manage potential network issues or AI generation failures gracefully.

## See Also

- [generateCharacterSpritesheet](./generateCharacterSpritesheet.md)
- [generateNinja](./generateNinja.md)
- [generateRobot](./generateRobot.md)
