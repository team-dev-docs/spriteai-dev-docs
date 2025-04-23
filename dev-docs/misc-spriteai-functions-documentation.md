# Miscellaneous SpriteAI Functions Documentation

This documentation covers additional functions provided by the SpriteAI module that complement the main sprite generation functionality.

## fetchAvailableAnimationStates

### Description
The `fetchAvailableAnimationStates` function retrieves a list of available animation states that can be used when generating character spritesheets.

### Usage
```javascript
import { fetchAvailableAnimationStates } from 'spriteAI';

const states = await fetchAvailableAnimationStates();
```

### Return Value
Returns a Promise that resolves to an array of strings, each representing an available animation state.

### Example
```javascript
const availableStates = await fetchAvailableAnimationStates();
console.log(availableStates);
// Output: ['idle', 'walk', 'run', 'attack', 'jump', 'fall', 'hurt', 'die']
```

## fetchAvailableSpriteStyles

### Description
The `fetchAvailableSpriteStyles` function retrieves a list of available sprite styles that can be used when generating sprites.

### Usage
```javascript
import { fetchAvailableSpriteStyles } from 'spriteAI';

const styles = await fetchAvailableSpriteStyles();
```

### Return Value
Returns a Promise that resolves to an array of strings, each representing an available sprite style.

### Example
```javascript
const availableStyles = await fetchAvailableSpriteStyles();
console.log(availableStyles);
// Output: ['pixel-art', 'vector', '3d', 'hand-drawn', 'anime']
```

## generateEnvironmentSprites

### Description
The `generateEnvironmentSprites` function generates a tileset of environment sprites based on a given description.

### Usage
```javascript
import { generateEnvironmentSprites } from 'spriteAI';

const result = await generateEnvironmentSprites(description, options);
```

### Parameters
- `description` (string, required): A text description of the environment to generate.
- `options` (object, optional):
  - `elements` (number): Number of distinct environment pieces to generate (default: 4).
  - `size` (string): Size of the generated image (default: "1024x1024").
  - `style` (string): Style of the generated sprites (default: "pixel-art").
  - `padding` (number): Padding between sprite elements (default: 1).
  - `theme` (string): Theme of the environment (default: "fantasy").
  - `save` (boolean): Whether to save the generated image to disk.

### Return Value
Returns an object containing:
- `original` (string): URL of the original generated image.
- `tileset` (string): Base64-encoded image data URL of the processed tileset.
- `metadata` (object): Information about the generated tileset, including dimensions and tile data.

### Example
```javascript
const result = await generateEnvironmentSprites("forest with trees and rocks", {
  elements: 6,
  theme: "medieval"
});
console.log(result.metadata);
console.log(result.tileset);
```

## generateItemSprites

### Description
The `generateItemSprites` function generates a collection of item sprites based on a given description.

### Usage
```javascript
import { generateItemSprites } from 'spriteAI';

const result = await generateItemSprites(description, options);
```

### Parameters
- `description` (string, required): A text description of the items to generate.
- `options` (object, optional):
  - `itemCount` (number): Number of distinct items to generate (default: 4).
  - `size` (string): Size of the generated image (default: "1024x1024").
  - `style` (string): Style of the generated sprites (default: "pixel-art").
  - `padding` (number): Padding between sprite elements (default: 1).
  - `itemType` (string): Type of items to generate (default: "equipment").
  - `background` (string): Background color of the sprite sheet (default: "white").
  - `save` (boolean): Whether to save the generated image to disk.

### Return Value
Returns an object containing:
- `original` (string): URL of the original generated image.
- `itemSheet` (string): Base64-encoded image data URL of the processed item sheet.
- `metadata` (object): Information about the generated item sheet, including dimensions and item data.

### Example
```javascript
const result = await generateItemSprites("medieval weapons and armor", {
  itemCount: 8,
  itemType: "weapons"
});
console.log(result.metadata);
console.log(result.itemSheet);
```

These functions provide additional flexibility and options for generating various game assets using the SpriteAI module. They complement the main character sprite generation functionality and allow for the creation of diverse game environments and item collections.