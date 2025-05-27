---
title: generateItemSprites
description: Generate item sprites for game assets using AI-powered image generation
---

# generateItemSprites

## Introduction

The `generateItemSprites` function is a powerful tool for game developers to quickly generate item sprites using AI-powered image generation. This function allows you to create a collection of item sprites based on a given description, with customizable options for style, size, and layout.

## Usage

To use the `generateItemSprites` function, import it from the spriteAI module and call it with a description of the items you want to generate.

```javascript
import { generateItemSprites } from './path/to/spriteAI';

const result = await generateItemSprites(description, options);
```

## Parameters

- `description` (string, required): A text description of the items to generate.
- `options` (object, optional):
  - `itemCount` (number): Number of items to generate (default: 4).
  - `size` (string): Size of the generated image (default: "1024x1024").
  - `style` (string): Art style of the generated items (default: "pixel-art").
  - `padding` (number): Padding between items (default: 1).
  - `itemType` (string): Type of items to generate (default: "equipment").
  - `background` (string): Background color of the generated image (default: "white").
  - `save` (boolean): Whether to save the generated image to disk.

## Return Value

The function returns a Promise that resolves to an object containing:

- `original`: URL of the original generated image.
- `itemSheet`: Base64-encoded image data URL of the processed item sheet.
- `metadata`: Object containing information about the generated items.

## Examples

1. Generate a basic set of item sprites:

```javascript
const result = await generateItemSprites("medieval weapons");
console.log(result.metadata);
console.log(result.itemSheet);
```

2. Generate custom item sprites with specific options:

```javascript
const options = {
  itemCount: 6,
  size: "2048x2048",
  style: "hand-drawn",
  itemType: "potions",
  background: "transparent",
  save: true
};

const result = await generateItemSprites("magical potions", options);
console.log(result.metadata);
```

## Notes and Considerations

- The function uses AI models (DALL-E 3) to generate images, which may result in varying outputs for the same input.
- Generated items are arranged in a grid layout, with a maximum of 2 columns.
- When saving images, they are stored in an 'assets' folder with a filename based on the description.
- The function may take some time to complete due to API calls and image processing.
- Ensure you have the necessary dependencies installed (OpenAI, axios, sharp) before using this function.

## Related Functions

- `generateCharacterSpritesheet`: For generating character spritesheets.
- `generateEnvironmentSprites`: For generating environment sprites.
- `fetchAvailableSpriteStyles`: To get a list of available sprite styles.