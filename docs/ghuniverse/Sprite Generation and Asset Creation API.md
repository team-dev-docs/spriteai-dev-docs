

  # **Sprite Generation and Asset Creation**

High Level

This module provides functions for generating sprites and house assets using AI. It's part of our Node.js SDK that you can install from NPM and import from the `sprite` object like this:

```javascript
import { sprite } from 'sprite'
```

## Why should I use these functions?

These functions allow you to programmatically generate sprite images and house assets for your game or application. By leveraging AI, you can quickly create diverse and unique visual elements based on text descriptions, saving time in the asset creation process.

## What parameters are required?

For both `generateSprite` and `generateHouseAsset`:
- `description`: A string describing the sprite or house asset you want to generate.
- `options`: An object containing configuration options. Currently, it includes:
  - `iterations`: The number of iterations to generate (default is 1).

## Prerequisites

- Node.js environment
- The `sprite` package installed in your project
- `sharp` library for image processing (used in tests, may be required for certain operations)

## How do I use these functions?

### Generating a Sprite

```javascript
const description = 'knight';
const options = { iterations: 1 };
const result = await sprite.generateSprite(description, options);

// The result is an array of generated sprites
console.log(result[0].messages); // Contains frame information
console.log(result[0].image); // Base64 encoded image data
```

### Generating a House Asset

```javascript
const description = 'house';
const options = { iterations: 1 };
const result = await sprite.generateHouseAsset(description, options);

// The result is an array of generated house assets
console.log(result[0].data); // Contains the asset data
```

Both functions return promises that resolve to arrays containing the generated assets. Each asset includes relevant data such as messages (for sprites) or raw data (for house assets).

These functions are particularly useful when you need to create multiple variations of sprites or house assets quickly, or when you want to generate assets based on dynamic descriptions in your application.

  