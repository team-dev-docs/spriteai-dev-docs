---
slug: /generateAnimatedEmoji
sidebar_position: 4
---

# Generate Animated Emoji

## Brief Description
The `generateAnimatedEmoji` functionality allows you to create animated character spritesheets specifically designed for emoji-like animations. This is part of the spriteAI library which leverages AI image generation to create game assets and animations.

## Available Functions

### generateCharacterSpritesheet

```javascript
generateCharacterSpritesheet(description, options)
```

This function generates a character spritesheet with multiple animation states based on a text description.

#### Parameters
- `description` (string, required): A text description of the character to generate.
- `options` (object, optional):
  - `states` (array): Animation states to include (default: ['idle', 'walk', 'run', 'attack'])
  - `framesPerState` (number): Number of frames per animation state (default: 6)
  - `size` (string): Size of the generated image (default: "1024x1024")
  - `style` (string): Art style to use (default: "pixel-art")
  - `padding` (number): Padding between frames (default: 1)
  - `direction` (string): Direction the character faces (default: "right")
  - `save` (boolean): Whether to save the generated image to disk

#### Return Value
Returns an object containing:
- `original`: URL of the original AI-generated image
- `spritesheet`: Base64-encoded image data URL of the processed spritesheet
- `metadata`: Detailed information about the spritesheet including:
  - `states`: Array of animation states
  - `framesPerState`: Number of frames per state
  - `totalFrames`: Total number of frames in the spritesheet
  - `dimensions`: Width and height of the spritesheet
  - `frameData`: Detailed information about each animation state's frames

### Helper Functions

#### fetchAvailableAnimationStates

```javascript
fetchAvailableAnimationStates()
```

Returns an array of all available animation states that can be used when generating character spritesheets.

#### fetchAvailableSpriteStyles

```javascript
fetchAvailableSpriteStyles()
```

Returns an array of all available art styles that can be used when generating sprites.

### Convenience Functions

These functions are pre-configured to generate specific character types with appropriate animation states.

#### generateNinja

```javascript
generateNinja(options)
```

Generates a ninja character with predefined states including 'idle', 'walk', 'run', 'attack', and 'sneak'.

#### generateSpaceman

```javascript
generateSpaceman(options)
```

Generates an astronaut character with predefined states including 'idle', 'walk', 'run', and 'float'.

#### generateRobot

```javascript
generateRobot(options)
```

Generates a robot character with predefined states including 'idle', 'walk', 'run', 'attack', and 'power-up'.

## Examples

### Generate a basic character spritesheet
```javascript
import { generateCharacterSpritesheet } from 'spriteAI';

const result = await generateCharacterSpritesheet('happy cat emoji with expressive face');
console.log(result.metadata.states); // Shows animation states
```

### Generate a ninja character with custom options
```javascript
import { generateNinja } from 'spriteAI';

const ninja = await generateNinja({
  framesPerState: 8,
  style: 'anime',
  save: true
});

// Use the resulting spritesheet
const spriteImage = ninja.spritesheet;
```

### Get available animation states
```javascript
import { fetchAvailableAnimationStates } from 'spriteAI';

const states = await fetchAvailableAnimationStates();
console.log(states); // ['idle', 'walk', 'run', 'attack', 'jump', 'fall', 'hurt', 'die']
```

## Notes and Considerations
- The generated spritesheets use AI image generation which may result in variations with each call.
- The default style is pixel-art which works well for smaller emoji-like animations.
- When saving images, they are stored in an 'assets' folder with a filename based on the description.
- The function may take some time to complete due to AI generation API calls and image processing.
- For best results, provide clear and specific descriptions of the character you want to generate.
