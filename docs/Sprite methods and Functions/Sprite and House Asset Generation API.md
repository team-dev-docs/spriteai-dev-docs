

  # **Sprite Generation and Asset Creation**

High Level

This module provides functions for generating sprites and house assets using AI. It's part of our Node.js SDK that you can install from NPM and import from the `sprite` object like this:

```javascript
import { sprite } from 'sprite'
```

## Why should I use these functions?

These functions allow you to programmatically generate custom sprites and house assets for your game or application. By leveraging AI, you can quickly create diverse and unique visual elements based on text descriptions, saving time and resources in asset creation.

## What parameters are required?

For both `generateSprite` and `generateHouseAsset`:
- `description`: A string describing the sprite or house you want to generate.
- `options`: An object containing additional parameters, including:
  - `iterations`: The number of iterations for generation (default is 1).

## Prerequisites

- Node.js environment
- The `sprite` package installed from NPM
- `sharp` library for image processing (used in tests)

## How do I use these functions?

### Generating a Sprite

To generate a sprite:

```javascript
const description = 'knight';
const options = { iterations: 1 };
const result = await sprite.generateSprite(description, options);
```

The `result` will be an array of objects, each containing:
- `messages`: Object with sprite information, including `frameWidth` and `frameHeight`.
- `image`: Base64 encoded string of the generated sprite image.

### Generating a House Asset

To generate a house asset:

```javascript
const description = 'house';
const options = { iterations: 1 };
const result = await sprite.generateHouseAsset(description, options);
```

The `result` will be an array of objects, each containing:
- `data`: The generated house asset data.

Both functions return promises, so remember to use `await` or `.then()` when calling them.

Note: The generated sprites and assets are 1024x1024 pixels in size. You can process or resize these images as needed for your specific use case.

  