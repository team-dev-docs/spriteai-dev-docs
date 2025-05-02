# API Reference

This document provides a comprehensive reference for the SpriteAI API, detailing the main functions and their usage.

## Table of Contents

1. [generateCharacterSpritesheet](#generatecharacterspritesheet)
2. [generateEnvironmentSprites](#generateenvironmentsprites)
3. [generateItemSprites](#generateitemsprites)
4. [removeBackgroundColor](#removebackgroundcolor)
5. [fetchAvailableAnimationStates](#fetchavailableanimationstates)
6. [fetchAvailableSpriteStyles](#fetchavailablespritestyles)
7. [generateLandscapeSprite](#generatelandscapesprite)

## generateCharacterSpritesheet

Generates a character spritesheet based on a given description and options.

### Parameters

- `description` (string): A text description of the character to generate.
- `options` (object, optional):
  - `states` (array of strings): Animation states to generate (default: ['idle', 'walk', 'run', 'attack']).
  - `framesPerState` (number): Number of frames per animation state (default: 6).
  - `size` (string): Output size of the spritesheet (default: '1024x1024').
  - `style` (string): Art style of the sprite (default: 'pixel-art').
  - `padding` (number): Padding between sprites (default: 1).
  - `direction` (string): Base direction of the character (default: 'right').
  - `save` (boolean): Whether to save the generated image to disk.

### Returns

An object containing:
- `original` (string): URL of the original generated image.
- `spritesheet` (string): Base64-encoded image data URL of the processed spritesheet.
- `metadata` (object): Metadata about the generated spritesheet, including states, dimensions, and frame data.

### Example

```javascript
import { generateCharacterSpritesheet } from 'spriteai';

const description = 'A cute dragon';
const options = {
  states: ['idle', 'walk', 'fly'],
  framesPerState: 4,
  size: '512x512',
  style: 'pixel-art',
  save: true
};

const result = await generateCharacterSpritesheet(description, options);
console.log(result.spritesheet);
console.log(result.metadata);
```

## generateEnvironmentSprites

Generates environment sprites based on a given description and options.

### Parameters

- `description` (string): A text description of the environment to generate.
- `options` (object, optional):
  - `elements` (number): Number of different elements to generate (default: 4).
  - `size` (string): Output size of the spritesheet (default: '1024x1024').
  - `style` (string): Art style of the sprites (default: 'pixel-art').
  - `padding` (number): Padding between sprites (default: 1).
  - `theme` (string): Theme of the environment (default: 'fantasy').
  - `save` (boolean): Whether to save the generated image to disk.

### Returns

An object containing:
- `original` (string): URL of the original generated image.
- `tileset` (string): Base64-encoded image data URL of the processed tileset.
- `metadata` (object): Metadata about the generated tileset, including elements, theme, and dimensions.

### Example

```javascript
import { generateEnvironmentSprites } from 'spriteai';

const description = 'A forest clearing';
const options = {
  elements: 6,
  theme: 'magical forest',
  save: true
};

const result = await generateEnvironmentSprites(description, options);
console.log(result.tileset);
console.log(result.metadata);
```

## generateItemSprites

Generates item sprites based on a given description and options.

### Parameters

- `description` (string): A text description of the items to generate.
- `options` (object, optional):
  - `itemCount` (number): Number of different items to generate (default: 4).
  - `size` (string): Output size of the spritesheet (default: '1024x1024').
  - `style` (string): Art style of the sprites (default: 'pixel-art').
  - `padding` (number): Padding between sprites (default: 1).
  - `itemType` (string): Type of items to generate (default: 'equipment').
  - `background` (string): Background color (default: 'white').
  - `save` (boolean): Whether to save the generated image to disk.

### Returns

An object containing:
- `original` (string): URL of the original generated image.
- `itemSheet` (string): Base64-encoded image data URL of the processed item sheet.
- `metadata` (object): Metadata about the generated items, including count, type, and dimensions.

### Example

```javascript
import { generateItemSprites } from 'spriteai';

const description = 'Medieval weapons';
const options = {
  itemCount: 8,
  itemType: 'weapons',
  style: 'hand-drawn',
  save: true
};

const result = await generateItemSprites(description, options);
console.log(result.itemSheet);
console.log(result.metadata);
```

## removeBackgroundColor

Removes a specified background color from an image, making it transparent.

### Parameters

- `inputPath` (string): File path of the input image.
- `outputPath` (string): File path for the output image.
- `targetColor` (string): CSS color string of the color to remove.
- `colorThreshold` (number, optional): Threshold for color matching (default: 0).
- `options` (object, optional): Additional options (currently unused).

### Returns

A Promise that resolves when the operation is complete.

### Example

```javascript
import { removeBackgroundColor } from 'spriteai';

const inputPath = './input.png';
const outputPath = './output.png';
const targetColor = '#FFFFFF';
const colorThreshold = 10;

await removeBackgroundColor(inputPath, outputPath, targetColor, colorThreshold);
console.log('Background removed successfully');
```

## fetchAvailableAnimationStates

Fetches a list of available animation states for character sprites.

### Returns

An array of strings representing available animation states.

### Example

```javascript
import { fetchAvailableAnimationStates } from 'spriteai';

const states = await fetchAvailableAnimationStates();
console.log('Available animation states:', states);
```

## fetchAvailableSpriteStyles

Fetches a list of available sprite styles.

### Returns

An array of strings representing available sprite styles.

### Example

```javascript
import { fetchAvailableSpriteStyles } from 'spriteai';

const styles = await fetchAvailableSpriteStyles();
console.log('Available sprite styles:', styles);
```

## generateLandscapeSprite

Generates a landscape sprite based on a given description and options.

### Parameters

- `description` (string): A text description of the landscape to generate.
- `options` (object, optional):
  - `size` (string): Output size of the image (default: '1024x1024').
  - `style` (string): Art style of the sprite (default: 'pixel-art').
  - `timeOfDay` (string): Time of day setting (default: 'day').
  - `weather` (string): Weather conditions (default: 'clear').
  - `perspective` (string): Perspective of the landscape (default: 'side-scrolling').
  - `save` (boolean): Whether to save the generated image to disk.
  - `removeBackground` (boolean): Whether to remove the background (makes it transparent).
  - `backgroundColor` (string): Background color to remove if removeBackground is true.
  - `colorThreshold` (number): Threshold for background color removal.

### Returns

An object containing:
- `original` (string): URL of the original generated image.
- `landscape` (string): Base64-encoded image data URL of the processed landscape sprite.
- `metadata` (object): Metadata about the generated landscape, including description, style, and dimensions.

### Example

```javascript
import { generateLandscapeSprite } from 'spriteai';

const description = 'A serene mountain valley';
const options = {
  style: 'pixel-art',
  timeOfDay: 'sunset',
  weather: 'clear',
  perspective: 'side-scrolling',
  save: true,
  removeBackground: true,
  backgroundColor: '#FFFFFF',
  colorThreshold: 0.1
};

const result = await generateLandscapeSprite(description, options);
console.log(result.landscape);
console.log(result.metadata);
```

This API reference provides a comprehensive overview of the main functions available in the SpriteAI library. Each function is documented with its parameters, return values, and usage examples to help developers integrate SpriteAI into their projects effectively.