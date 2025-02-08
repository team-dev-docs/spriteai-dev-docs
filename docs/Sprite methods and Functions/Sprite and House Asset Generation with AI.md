

  # **Sprite Generation and Asset Creation**

High Level

This module provides functions for generating sprites and house assets using AI. These functions are exported from our Node.js SDK, which you can install from NPM and import from the `sprite` object like this:

```javascript
import { sprite } from 'sprite-ai'
```

## Why should I use these functions?

These functions allow you to easily generate game assets, specifically sprites and house assets, using AI-powered image generation. This can significantly speed up your game development process by automating the creation of visual elements based on text descriptions.

## What parameters are required?

Both `generateSprite` and `generateHouseAsset` functions require:

1. `description`: A string describing the sprite or house asset you want to generate.
2. `options`: An object containing configuration options. Currently, it includes:
   - `iterations`: The number of generation attempts (default is 1).

## Prerequisites

- Node.js environment
- The `sprite-ai` package installed in your project
- Access to the AI service used for image generation (handled internally by the SDK)

## How do I use these functions?

### Generating a Sprite

```javascript
const description = 'knight';
const options = { iterations: 1 };
const result = await sprite.generateSprite(description, options);
```

This will return an array of results. Each result contains:
- `messages`: Object with a `content` property containing frame information (width and height) in JSON format.
- `image`: A base64-encoded string of the generated sprite image.

### Generating a House Asset

```javascript
const description = 'house';
const options = { iterations: 1 };
const result = await sprite.generateHouseAsset(description, options);
```

This will return an array of results. Each result contains:
- `data`: The generated house asset data.

Both functions are asynchronous and return promises, so you should use `await` or `.then()` when calling them.

Remember to handle any potential errors that might occur during the generation process.

  