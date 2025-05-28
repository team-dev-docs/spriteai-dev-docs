---
slug: /
sidebar_position: 1
---

# generateSprite Documentation

## Brief Description
`generateSprite` is a function that generates a sprite sheet image based on a given description, using AI-powered image generation and analysis.

## Usage
To use `generateSprite`, import it from the sprite module and call it with a description of the character you want to generate.

```javascript
import { sprite } from './path/to/sprite/module';

const result = await sprite.generateCharacterSpritesheet(description, options);
```

## Parameters
- `description` (string, required): A text description of the character to generate.
- `options` (object, optional):
  - `states` (array of strings): Animation states to include (default: ['idle', 'walk', 'run', 'attack']).
  - `framesPerState` (number): Number of frames per animation state (default: 6).
  - `size` (string): Size of the generated image (default: "1024x1024").
  - `style` (string): Style of the sprite (default: "pixel-art").
  - `padding` (number): Padding between frames (default: 1).
  - `direction` (string): Direction the character faces (default: "right").
  - `save` (boolean): Whether to save the generated image to disk.

## Return Value
Returns an object containing:
- `original`: URL of the original AI-generated image.
- `spritesheet`: Base64-encoded image data URL of the generated sprite sheet.
- `metadata`: Object containing information about the spritesheet, including:
  - `states`: Array of animation states.
  - `framesPerState`: Number of frames per state.
  - `totalFrames`: Total number of frames in the spritesheet.
  - `dimensions`: Object with width and height of the spritesheet.
  - `frameData`: Object with information about each animation state's frames.

## Examples

1. Generate a character sprite sheet:
```javascript
const result = await sprite.generateCharacterSpritesheet("A pixelated robot");
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
const result = await sprite.generateCharacterSpritesheet("A cartoon cat", options);
console.log(result.metadata.frameData);
```

## Additional Functions

### fetchAvailableSpriteStyles

Retrieves a list of available sprite styles that can be used with the `generateCharacterSpritesheet` function.

```javascript
import { fetchAvailableSpriteStyles } from './path/to/sprite/module';

const styles = await fetchAvailableSpriteStyles();
console.log(styles); // ['pixel-art', 'vector', '3d', 'hand-drawn', 'anime']
```

## Notes or Considerations
- The function uses AI models (DALL-E 3) to generate images, which may result in varying outputs for the same input.
- Generated sprites follow the specified layout based on the `states` and `framesPerState` options.
- The function supports various sprite styles, including pixel-art, vector, 3D, hand-drawn, and anime.
- When saving images, they are stored in an 'assets' folder with a filename based on the description.
- The function may take some time to complete due to API calls and image processing.
- Consider using the `fetchAvailableSpriteStyles` function to get the most up-to-date list of supported styles.
