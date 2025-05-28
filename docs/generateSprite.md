---
slug: /
sidebar_position: 1
---

# Character Spritesheet Generation Documentation

## Brief Description
The spriteAI module provides AI-powered sprite generation functions for game development. The primary function `generateCharacterSpritesheet` creates animated character spritesheets with multiple animation states, while additional functions support environment and item sprite generation.

## Usage
To use the character spritesheet generation, import the function from the spriteAI module and call it with a description of the character you want to generate.

```javascript
import { generateCharacterSpritesheet } from './spriteAI';

const result = await generateCharacterSpritesheet(description, options);
```

## Parameters
- `description` (string, required): A text description of the character to generate.
- `options` (object, optional):
  - `states` (array): Animation states to include (default: ['idle', 'walk', 'run', 'attack'])
  - `framesPerState` (number): Number of frames per animation state (default: 6)
  - `size` (string): Size of the generated image (default: "1024x1024")
  - `style` (string): Art style for the sprite (default: 'pixel-art')
  - `padding` (number): Padding between frames (default: 1)
  - `direction` (string): Direction the character faces (default: 'right')
  - `save` (boolean): Whether to save the generated image to disk

## Return Value
Returns an object containing:
- `original`: URL of the original AI-generated image
- `spritesheet`: Base64-encoded processed spritesheet data URL
- `metadata`: Object with detailed information about the spritesheet:
  - `states`: Array of animation states included
  - `framesPerState`: Number of frames per animation
  - `totalFrames`: Total number of frames in the spritesheet
  - `dimensions`: Width and height of the generated image
  - `frameData`: Detailed information about each animation state including row, frame count, and frame indices

## Examples

### Generate a Basic Character Spritesheet
```javascript
const result = await generateCharacterSpritesheet("A pixelated robot warrior");
console.log(result.metadata.states); // ['idle', 'walk', 'run', 'attack']
console.log(result.metadata.totalFrames); // 24
```

### Generate with Custom Animation States
```javascript
const customOptions = {
  states: ['idle', 'walk', 'jump', 'attack', 'hurt'],
  framesPerState: 4,
  style: 'anime',
  direction: 'left',
  save: true
};

const result = await generateCharacterSpritesheet("A magical elf archer", customOptions);
console.log(result.metadata.frameData);
// Output: Detailed frame data for each animation state
```

### Generate and Save to File
```javascript
const result = await generateCharacterSpritesheet("A cartoon cat", { 
  save: true,
  style: 'hand-drawn'
});
// File will be saved as 'A_cartoon_cat_spritesheet.png' in assets folder
```

## Related Functions

The spriteAI module also includes additional utility functions:

### Available Animation States
```javascript
import { fetchAvailableAnimationStates } from './spriteAI';

const states = await fetchAvailableAnimationStates();
console.log(states); // ['idle', 'walk', 'run', 'attack', 'jump', 'fall', 'hurt', 'die']
```

### Available Sprite Styles
```javascript
import { fetchAvailableSpriteStyles } from './spriteAI';

const styles = await fetchAvailableSpriteStyles();
console.log(styles); // ['pixel-art', 'vector', '3d', 'hand-drawn', 'anime']
```

### Environment Sprite Generation
```javascript
import { generateEnvironmentSprites } from './spriteAI';

const environmentResult = await generateEnvironmentSprites("forest tileset", {
  elements: 6,
  theme: 'fantasy',
  save: true
});
```

### Item Sprite Generation
```javascript
import { generateItemSprites } from './spriteAI';

const itemResult = await generateItemSprites("magical weapons", {
  itemCount: 8,
  itemType: 'equipment',
  save: true
});
```

## Notes or Considerations
- The function uses AI models (DALL-E 3) to generate images, which may result in varying outputs for the same input.
- Generated character spritesheets are organized with each row representing a different animation state and each column representing a frame in that animation.
- The function processes the AI-generated image to create a properly formatted spritesheet with consistent frame spacing.
- When saving images, they are stored in an 'assets' folder with filenames based on the description.
- The function may take some time to complete due to API calls and image processing.
- Ensure you have the necessary API keys configured for OpenAI services.
- The metadata returned includes detailed frame information that can be used directly in game engines for animation setup.
