---
slug: /
sidebar_position: 1
---
```markdown
---
slug: /
sidebar_position: 1
---

# generateSprite Documentation

## Brief Description
The `generateSprite` module provides functions for generating character spritesheets and environment sprites using AI-powered image generation. It also includes utility functions for fetching available animation states and sprite styles.

## Functions

### generateCharacterSpritesheet

Generates a character spritesheet based on a given description.

#### Usage
```javascript
import { generateCharacterSpritesheet } from './path/to/sprite/module';

const result = await generateCharacterSpritesheet(description, options);
```

#### Parameters
- `description` (string, required): A text description of the character to generate.
- `options` (object, optional):
  - `states` (array of strings): Animation states to include (default: ['idle', 'walk', 'run', 'attack'])
  - `framesPerState` (number): Number of frames per animation state (default: 6)
  - `size` (string): Size of the generated image (default: "1024x1024")
  - `style` (string): Style of the sprite (default: "pixel-art")
  - `padding` (number): Padding between frames (default: 1)
  - `direction` (string): Direction the character should face (default: "right")
  - `save` (boolean): Whether to save the generated image to disk

#### Return Value
Returns an object containing:
- `original`: URL of the original generated image
- `spritesheet`: Base64-encoded image data URL of the processed spritesheet
- `metadata`: Object containing information about the spritesheet, including states, dimensions, and frame data

### fetchAvailableAnimationStates

Retrieves a list of available animation states for character spritesheets.

#### Usage
```javascript
import { fetchAvailableAnimationStates } from './path/to/sprite/module';

const states = await fetchAvailableAnimationStates();
```

#### Return Value
Returns an array of strings representing available animation states.

### fetchAvailableSpriteStyles

Retrieves a list of available sprite styles for character and environment generation.

#### Usage
```javascript
import { fetchAvailableSpriteStyles } from './path/to/sprite/module';

const styles = await fetchAvailableSpriteStyles();
```

#### Return Value
Returns an array of strings representing available sprite styles.

### generateEnvironmentSprites

Generates environment sprites based on a given description.

#### Usage
```javascript
import { generateEnvironmentSprites } from './path/to/sprite/module';

const result = await generateEnvironmentSprites(description, options);
```

#### Parameters
- `description` (string, required): A text description of the environment to generate.
- `options` (object, optional):
  - `elements` (number): Number of distinct environment elements to generate (default: 4)
  - `size` (string): Size of the generated image (default: "1024x1024")
  - `style` (string): Style of the sprites (default: "pixel-art")
  - `padding` (number): Padding between elements (default: 1)
  - `theme` (string): Theme of the environment (default: "fantasy")
  - `save` (boolean): Whether to save the generated image to disk

#### Return Value
Returns an object containing:
- `original`: URL of the original generated image
- `tileset`: Base64-encoded image data URL of the processed environment tileset
- `metadata`: Object containing information about the tileset, including number of elements, theme, and dimensions

## Examples

1. Generate a character spritesheet:
```javascript
const result = await generateCharacterSpritesheet("A pixelated robot", {
  states: ['idle', 'walk', 'attack'],
  framesPerState: 8,
  style: 'pixel-art'
});
console.log(result.metadata);
console.log(result.spritesheet);
```

2. Fetch available animation states:
```javascript
const states = await fetchAvailableAnimationStates();
console.log("Available animation states:", states);
```

3. Fetch available sprite styles:
```javascript
const styles = await fetchAvailableSpriteStyles();
console.log("Available sprite styles:", styles);
```

4. Generate environment sprites:
```javascript
const result = await generateEnvironmentSprites("A lush forest", {
  elements: 6,
  style: 'hand-drawn',
  theme: 'fantasy'
});
console.log(result.metadata);
console.log(result.tileset);
```

## Notes or Considerations
- The functions use AI models (DALL-E 3) to generate images, which may result in varying outputs for the same input.
- Generated sprites are optimized for the specified animation states and follow a grid layout.
- When saving images, they are stored in an 'assets' folder with a filename based on the description.
- The functions may take some time to complete due to API calls and image processing.
- Ensure you have the necessary dependencies (OpenAI, axios, sharp, Jimp) installed and properly configured.
```
