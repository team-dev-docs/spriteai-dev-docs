# Changelog 2025-05-27

## New Features

### Convenience Functions for Specific Character Types

We're excited to announce the addition of three new convenience functions to our spriteAI library. These functions provide an easy way to generate specific character types with predefined animation states and styles.

1. **generateNinja**
   - Default states: idle, walk, run, attack, sneak
   - Style: pixel-art
   - Frames per state: 6

2. **generateSpaceman**
   - Default states: idle, walk, run, float
   - Style: pixel-art
   - Frames per state: 6

3. **generateRobot**
   - Default states: idle, walk, run, attack, power-up
   - Style: pixel-art
   - Frames per state: 6

Each of these functions accepts an optional `options` parameter, allowing you to customize the default settings as needed.

## Usage Examples

```javascript
import { generateNinja, generateSpaceman, generateRobot } from 'spriteAI';

// Generate a ninja character
const ninjaSprite = await generateNinja();

// Generate a spaceman character with custom options
const spacemanSprite = await generateSpaceman({
  framesPerState: 8,
  style: 'vector'
});

// Generate a robot character
const robotSprite = await generateRobot();
```

## Benefits

These new functions offer several advantages:

1. **Simplified API**: Developers can now generate specific character types with a single function call, reducing the need for complex configurations.
2. **Consistency**: Each character type comes with predefined states that are appropriate for its theme, ensuring consistent and thematic sprite generation.
3. **Flexibility**: While providing sensible defaults, all functions still allow for customization through the `options` parameter.

## Implementation Details

Each new function is built on top of the existing `generateCharacterSpritesheet` function, providing a more specific and tailored interface for common character types. The functions use carefully crafted descriptions and default options to ensure high-quality, thematic sprite generation.

We hope these new additions will streamline your sprite creation process and look forward to seeing the creative ways you'll use them in your projects!

Happy sprite generating!