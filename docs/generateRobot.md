# Generate Robot Documentation

This documentation covers the new functions added to the SpriteAI package for generating character spritesheets, environment sprites, and item sprites.

## generateCharacterSpritesheet

The `generateCharacterSpritesheet` function creates a character spritesheet based on a given description using AI-powered image generation.

### Usage

```javascript
import { generateCharacterSpritesheet } from 'spriteai';

const result = await generateCharacterSpritesheet(description, options);
```

### Parameters

- `description` (string, required): A text description of the character to generate.
- `options` (object, optional):
  - `states` (array of strings): Animation states to include (default: ['idle', 'walk', 'run', 'attack'])
  - `framesPerState` (number): Number of frames for each animation state (default: 6)
  - `size` (string): Size of the generated image (default: '1024x1024')
  - `style` (string): Art style of the spritesheet (default: 'pixel-art')
  - `padding` (number): Padding between frames (default: 1)
  - `direction` (string): Direction the character should face (default: 'right')
  - `save` (boolean): Whether to save the generated image to disk

### Return Value

Returns an object containing:
- `original`: URL of the original generated image
- `spritesheet`: Base64-encoded image data URL of the processed spritesheet
- `metadata`: Object containing information about the spritesheet, including states, framesPerState, totalFrames, dimensions, and frameData

### Example

```javascript
const result = await generateCharacterSpritesheet('A brave knight in armor', {
  states: ['idle', 'walk', 'attack'],
  framesPerState: 4,
  style: 'pixel-art',
  save: true
});

console.log(result.metadata);
console.log(result.spritesheet);
```

## fetchAvailableAnimationStates

This function returns an array of available animation states that can be used with the `generateCharacterSpritesheet` function.

### Usage

```javascript
import { fetchAvailableAnimationStates } from 'spriteai';

const states = await fetchAvailableAnimationStates();
```

### Return Value

Returns an array of strings representing available animation states.

### Example

```javascript
const availableStates = await fetchAvailableAnimationStates();
console.log(availableStates);
// Output: ['idle', 'walk', 'run', 'attack', 'jump', 'fall', 'hurt', 'die']
```

## fetchAvailableSpriteStyles

This function returns an array of available sprite styles that can be used with the `generateCharacterSpritesheet` function.

### Usage

```javascript
import { fetchAvailableSpriteStyles } from 'spriteai';

const styles = await fetchAvailableSpriteStyles();
```

### Return Value

Returns an array of strings representing available sprite styles.

### Example

```javascript
const availableStyles = await fetchAvailableSpriteStyles();
console.log(availableStyles);
// Output: ['pixel-art', 'vector', '3d', 'hand-drawn', 'anime']
```

## generateEnvironmentSprites

The `generateEnvironmentSprites` function creates a tileset of environment sprites based on a given description using AI-powered image generation.

### Usage

```javascript
import { generateEnvironmentSprites } from 'spriteai';

const result = await generateEnvironmentSprites(description, options);
```

### Parameters

- `description` (string, required): A text description of the environment to generate.
- `options` (object, optional):
  - `elements` (number): Number of different elements to generate (default: 4)
  - `size` (string): Size of the generated image (default: '1024x1024')
  - `style` (string): Art style of the tileset (default: 'pixel-art')
  - `padding` (number): Padding between elements (default: 1)
  - `theme` (string): Theme of the environment (default: 'fantasy')
  - `save` (boolean): Whether to save the generated image to disk

### Return Value

Returns an object containing:
- `original`: URL of the original generated image
- `tileset`: Base64-encoded image data URL of the processed tileset
- `metadata`: Object containing information about the tileset, including elements, theme, dimensions, and tileData

### Example

```javascript
const result = await generateEnvironmentSprites('A lush forest with ancient ruins', {
  elements: 6,
  style: 'pixel-art',
  theme: 'fantasy',
  save: true
});

console.log(result.metadata);
console.log(result.tileset);
```

## generateItemSprites

The `generateItemSprites` function creates a collection of item sprites based on a given description using AI-powered image generation.

### Usage

```javascript
import { generateItemSprites } from 'spriteai';

const result = await generateItemSprites(description, options);
```

### Parameters

- `description` (string, required): A text description of the items to generate.
- `options` (object, optional):
  - `itemCount` (number): Number of different items to generate (default: 4)
  - `size` (string): Size of the generated image (default: '1024x1024')
  - `style` (string): Art style of the items (default: 'pixel-art')
  - `padding` (number): Padding between items (default: 1)
  - `itemType` (string): Type of items to generate (default: 'equipment')
  - `background` (string): Background color of the item sheet (default: 'white')
  - `save` (boolean): Whether to save the generated image to disk

### Return Value

Returns an object containing:
- `original`: URL of the original generated image
- `itemSheet`: Base64-encoded image data URL of the processed item sheet
- `metadata`: Object containing information about the item sheet, including itemCount, itemType, dimensions, and itemData

### Example

```javascript
const result = await generateItemSprites('Medieval weapons and armor', {
  itemCount: 8,
  style: 'pixel-art',
  itemType: 'equipment',
  save: true
});

console.log(result.metadata);
console.log(result.itemSheet);
```

## Notes and Considerations

- All functions use AI models (DALL-E 3) to generate images, which may result in varying outputs for the same input.
- Generated images are optimized for game development use, with consistent sizes and clear separations between elements.
- When saving images, they are stored in an 'assets' folder with filenames based on the description.
- These functions may take some time to complete due to API calls and image processing.
- Ensure you have the necessary API keys and permissions set up to use the OpenAI API for image generation.