---
title: generateEnvironmentSprites
description: Generate environment sprites using AI-powered image generation
---

# generateEnvironmentSprites

The `generateEnvironmentSprites` function is part of the SpriteAI module and allows you to generate environment sprites for game development using AI-powered image generation.

## Usage

```javascript
import { generateEnvironmentSprites } from 'spriteAI';

const description = 'forest clearing';
const options = {
  elements: 6,
  size: '1024x1024',
  style: 'pixel-art',
  padding: 2,
  theme: 'fantasy'
};

const result = await generateEnvironmentSprites(description, options);
```

## Parameters

- `description` (string, required): A text description of the environment to generate.
- `options` (object, optional):
  - `elements` (number): Number of distinct environment elements to generate (default: 4).
  - `size` (string): Size of the generated image (default: "1024x1024").
  - `style` (string): Art style for the sprites (default: "pixel-art").
  - `padding` (number): Padding between sprite elements (default: 1).
  - `theme` (string): Theme of the environment (default: "fantasy").
  - `save` (boolean): Whether to save the generated image to disk (default: false).

## Return Value

The function returns a Promise that resolves to an object containing:

- `original` (string): URL of the original DALL-E generated image.
- `tileset` (string): Base64-encoded image data URL of the processed tileset.
- `metadata` (object): Information about the generated sprites, including:
  - `elements` (number): Number of distinct environment elements.
  - `theme` (string): Theme of the environment.
  - `dimensions` (object): Width and height of the generated image.
  - `tileData` (object): Information about the tileset layout.

## Example

```javascript
import { generateEnvironmentSprites } from 'spriteAI';

async function generateForestEnvironment() {
  const description = 'lush forest with ancient ruins';
  const options = {
    elements: 8,
    size: '2048x2048',
    style: 'pixel-art',
    theme: 'fantasy',
    save: true
  };

  try {
    const result = await generateEnvironmentSprites(description, options);
    console.log('Environment sprites generated:', result.metadata);
    console.log('Tileset image:', result.tileset);
  } catch (error) {
    console.error('Error generating environment sprites:', error);
  }
}

generateForestEnvironment();
```

## Notes

- The function uses OpenAI's DALL-E 3 model to generate the initial image based on the provided description.
- The generated image is processed to create a tileset with the specified number of elements.
- If the `save` option is set to `true`, the generated tileset will be saved in the `assets` folder with a filename based on the description.
- The function supports various art styles, but "pixel-art" is recommended for game development purposes.
- You can customize the theme to match your game's setting (e.g., "fantasy", "sci-fi", "modern", etc.).
- The tileset is arranged in a grid, with the number of rows calculated based on the number of elements.

## See Also

- [generateCharacterSpritesheet](./generateCharacterSpritesheet.md)
- [generateItemSprites](./generateItemSprites.md)
- [fetchAvailableSpriteStyles](./fetchAvailableSpriteStyles.md)