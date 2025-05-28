---
slug: /
sidebar_position: 1
---

# generateCharacterSpritesheet Documentation

## Brief Description
`generateCharacterSpritesheet` is a function that generates a sprite sheet image based on a given description, using AI-powered image generation and analysis. It now includes options for different animation states and sprite styles.

## Usage
To use `generateCharacterSpritesheet`, import it from the sprite module and call it with a description of the character you want to generate.

```javascript
import { generateCharacterSpritesheet } from './path/to/sprite/module';

const result = await generateCharacterSpritesheet(description, options);
```

## Parameters
- `description` (string, required): A text description of the character to generate.
- `options` (object, optional):
  - `states` (array of strings): Animation states to generate (default: ['idle', 'walk', 'run', 'attack']).
  - `framesPerState` (number): Number of frames per animation state (default: 6).
  - `size` (string): Size of the generated image (default: "1024x1024").
  - `style` (string): Style of the sprite (default: "pixel-art").
  - `padding` (number): Padding between frames (default: 1).
  - `direction` (string): Direction the character faces (default: "right").
  - `save` (boolean): Whether to save the generated image to disk.

## Return Value
Returns an object containing:
- `original`: URL of the original generated image.
- `spritesheet`: Base64-encoded image data URL of the generated sprite sheet.
- `metadata`: Object containing information about the sprite sheet, including:
  - `states`: Array of animation states.
  - `framesPerState`: Number of frames per state.
  - `totalFrames`: Total number of frames in the sprite sheet.
  - `dimensions`: Object with width and height of the sprite sheet.
  - `frameData`: Object with information about each animation state's frames.

## Examples

1. Generate a basic character sprite sheet:
```javascript
const result = await generateCharacterSpritesheet("A pixelated robot");
console.log(result.metadata);
console.log(result.spritesheet);
```

2. Generate a sprite sheet with custom options:
```javascript
const options = {
  states: ['idle', 'walk', 'jump'],
  framesPerState: 8,
  style: 'vector',
  direction: 'left'
};
const result = await generateCharacterSpritesheet("A cartoon cat", options);
console.log(result.metadata.frameData);
```

## Notes or Considerations
- The function uses AI models (DALL-E 3) to generate images, which may result in varying outputs for the same input.
- Generated sprites follow a specific layout based on the number of states and frames per state.
- When saving images, they are stored in an 'assets' folder with a filename based on the description.
- The function may take some time to complete due to API calls and image processing.
- The style option allows for different art styles, such as "pixel-art", "vector", "3d", "hand-drawn", or "anime".

## Related Functions

### fetchAvailableSpriteStyles

This function returns an array of available sprite styles that can be used with the `generateCharacterSpritesheet` function.

#### Usage

```javascript
import { fetchAvailableSpriteStyles } from './path/to/sprite/module';

const styles = await fetchAvailableSpriteStyles();
console.log(styles);
```

#### Return Value
Returns a Promise that resolves to an array of strings representing available sprite styles.

#### Example
```javascript
const styles = await fetchAvailableSpriteStyles();
// Output: ['pixel-art', 'vector', '3d', 'hand-drawn', 'anime']
```

### fetchAvailableAnimationStates

This function returns an array of available animation states that can be used with the `generateCharacterSpritesheet` function.

#### Usage

```javascript
import { fetchAvailableAnimationStates } from './path/to/sprite/module';

const states = await fetchAvailableAnimationStates();
console.log(states);
```

#### Return Value
Returns a Promise that resolves to an array of strings representing available animation states.

#### Example
```javascript
const states = await fetchAvailableAnimationStates();
// Output: ['idle', 'walk', 'run', 'attack', 'jump', 'fall', 'hurt', 'die']
```

These functions can be used to dynamically populate options for sprite generation or to validate user inputs when using the `generateCharacterSpritesheet` function.
