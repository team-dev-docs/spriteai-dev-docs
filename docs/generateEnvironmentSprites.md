---
title: generateEnvironmentSprites
description: Generate environment sprite sheets using AI-powered image generation
---

# generateEnvironmentSprites

The `generateEnvironmentSprites` function allows you to create environment sprite sheets for your game using AI-powered image generation. This function is part of the SpriteAI module and provides a convenient way to generate tileset images for game environments.

## Usage

To use the `generateEnvironmentSprites` function, import it from the SpriteAI module:

```javascript
import { generateEnvironmentSprites } from 'spriteAI';
```

Then, call the function with a description of the environment you want to generate and any additional options:

```javascript
const result = await generateEnvironmentSprites('forest with trees and rocks', options);
```

## Parameters

- `description` (string, required): A text description of the environment to generate.
- `options` (object, optional): An object containing additional configuration options.

### Options

- `elements` (number, default: 4): The number of distinct environment elements to generate.
- `size` (string, default: '1024x1024'): The size of the generated image.
- `style` (string, default: 'pixel-art'): The visual style of the generated sprites.
- `padding` (number, default: 1): The padding between sprite elements.
- `theme` (string, default: 'fantasy'): The theme of the environment.
- `save` (boolean): Whether to save the generated image to disk.

## Return Value

The function returns a Promise that resolves to an object containing:

- `original` (string): The URL of the original generated image.
- `tileset` (string): A base64-encoded data URL of the processed tileset image.
- `metadata` (object): Additional information about the generated tileset.

### Metadata

The `metadata` object includes:

- `elements` (number): The number of distinct environment elements.
- `theme` (string): The theme of the environment.
- `dimensions` (object): The width and height of the generated image.
- `tileData` (object): Information about the tileset layout.

## Example

Here's an example of how to use the `generateEnvironmentSprites` function:

```javascript
import { generateEnvironmentSprites } from 'spriteAI';

async function createForestEnvironment() {
  const options = {
    elements: 6,
    size: '2048x2048',
    style: 'pixel-art',
    theme: 'forest',
    save: true
  };

  try {
    const result = await generateEnvironmentSprites('lush forest with trees, bushes, and rocks', options);
    console.log('Environment tileset generated:', result.tileset);
    console.log('Metadata:', result.metadata);
  } catch (error) {
    console.error('Error generating environment sprites:', error);
  }
}

createForestEnvironment();
```

## Notes and Considerations

- The function uses the DALL-E 3 AI model to generate images, which may result in variations for the same input.
- Generated images are optimized for game environments and arranged in a grid layout.
- The `save` option will store the generated image in an 'assets' folder with a filename based on the description.
- The function may take some time to complete due to API calls and image processing.
- Ensure you have the necessary permissions and API access to use the OpenAI image generation service.

## See Also

- [generateCharacterSpritesheet](./generateCharacterSpritesheet.md) - For generating character sprite sheets
- [generateItemSprites](./generateItemSprites.md) - For generating item sprite sheets