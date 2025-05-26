# New SpriteAI Functions

This document provides an overview of the new functions added to the SpriteAI SDK in the recent update.

## Table of Contents
1. [generateEnvironmentSprites](#generateenvironmentsprites)
2. [generateItemSprites](#generateitemsprites)
3. [fetchAvailableAnimationStates](#fetchavailableanimationstates)
4. [fetchAvailableSpriteStyles](#fetchavailablespritestyles)

## generateEnvironmentSprites

This function generates environment tilesets based on a given description.

### Usage

```javascript
import { generateEnvironmentSprites } from './spriteAI/index.js';

const description = 'a fantasy forest';
const options = {
  elements: 6,
  size: '1024x1024',
  style: 'pixel-art',
  padding: 2,
  theme: 'fantasy',
  save: true
};

generateEnvironmentSprites(description, options)
  .then(result => {
    console.log('Environment sprites generated:', result.tileset);
  })
  .catch(error => {
    console.error('Error generating environment sprites:', error);
  });
```

### Parameters

- `description` (string): Description of the environment to generate.
- `options` (object): Configuration options for the tileset generation.

### Options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| elements | number | 4 | Number of different elements in the tileset |
| size | string | '1024x1024' | Output image size |
| style | string | 'pixel-art' | Art style to use |
| padding | number | 1 | Padding between tiles |
| theme | string | 'fantasy' | Theme of the environment |
| save | boolean | false | Whether to save the generated tileset to a file |

### Return Value

The function returns an object with the following properties:

- `original`: URL of the original generated image.
- `tileset`: Base64-encoded PNG data of the processed tileset.
- `metadata`: Object containing information about the generated tileset.

## generateItemSprites

This function generates item collections based on a given description.

### Usage

```javascript
import { generateItemSprites } from './spriteAI/index.js';

const description = 'medieval weapons';
const options = {
  itemCount: 8,
  size: '1024x1024',
  style: 'pixel-art',
  padding: 2,
  itemType: 'weapon',
  background: 'transparent',
  save: true
};

generateItemSprites(description, options)
  .then(result => {
    console.log('Item sprites generated:', result.itemSheet);
  })
  .catch(error => {
    console.error('Error generating item sprites:', error);
  });
```

### Parameters

- `description` (string): Description of the items to generate.
- `options` (object): Configuration options for the item generation.

### Options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| itemCount | number | 4 | Number of different items in the collection |
| size | string | '1024x1024' | Output image size |
| style | string | 'pixel-art' | Art style to use |
| padding | number | 1 | Padding between items |
| itemType | string | 'equipment' | Type of items to generate |
| background | string | 'white' | Background color of the items |
| save | boolean | false | Whether to save the generated item sheet to a file |

### Return Value

The function returns an object with the following properties:

- `original`: URL of the original generated image.
- `itemSheet`: Base64-encoded PNG data of the processed item sheet.
- `metadata`: Object containing information about the generated items.

## fetchAvailableAnimationStates

This function retrieves a list of available animation states for sprite generation.

### Usage

```javascript
import { fetchAvailableAnimationStates } from './spriteAI/index.js';

fetchAvailableAnimationStates()
  .then(states => {
    console.log('Available animation states:', states);
  })
  .catch(error => {
    console.error('Error fetching animation states:', error);
  });
```

### Return Value

The function returns a Promise that resolves to an array of strings representing available animation states.

## fetchAvailableSpriteStyles

This function retrieves a list of available sprite styles for sprite generation.

### Usage

```javascript
import { fetchAvailableSpriteStyles } from './spriteAI/index.js';

fetchAvailableSpriteStyles()
  .then(styles => {
    console.log('Available sprite styles:', styles);
  })
  .catch(error => {
    console.error('Error fetching sprite styles:', error);
  });
```

### Return Value

The function returns a Promise that resolves to an array of strings representing available sprite styles.

## Conclusion

These new functions enhance the capabilities of the SpriteAI SDK, allowing for more diverse and customizable sprite generation. They can be used to create rich environments, varied item collections, and to retrieve information about available options for sprite customization.