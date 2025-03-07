---
slug: /
sidebar_position: 1
---
# generateSprite

## Overview

The `generateSprite` function is part of the sprite processing library, which provides a powerful and flexible way to generate, manipulate, and transform sprite images. This function specifically focuses on creating sprite sheets based on AI-generated images.

## Usage

To use the `generateSprite` function, import it from the sprite module:

```javascript
import { sprite } from './path/to/sprite/module';

const result = await sprite.generateSprite(description, options);
```

## Parameters

- `description` (string, required): A text description of the character or sprite to generate.
- `options` (object, optional):
  - `iterations` (number): Number of sprite variations to generate.
  - `size` (string): Size of the generated image (default: "1024x1024").
  - `save` (boolean): Whether to save the generated image to disk.

## Return Value

The function returns a Promise that resolves to an object or array of objects containing:

- `messages`: JSON object with `frameHeight` and `frameWidth` information.
- `image`: Base64-encoded image data URL of the generated sprite sheet.

## Examples

### Generate a single sprite sheet

```javascript
const result = await sprite.generateSprite("A pixelated robot");
console.log(result.messages);
console.log(result.image);
```

### Generate multiple variations

```javascript
const variations = await sprite.generateSprite("A cartoon cat", { iterations: 3 });
variations.forEach((variation, index) => {
  console.log(`Variation ${index + 1}:`, variation.messages);
});
```

## Advanced Usage

The `generateSprite` function is now part of a more comprehensive sprite processing library. For more advanced manipulation and transformations, you can use the `SpriteProcessor` class:

```javascript
import { createProcessor } from './path/to/sprite/module';

const processor = createProcessor(inputImageOrBuffer);

const result = await processor
  .transform({ resize: { width: 128, height: 128 } })
  .pixelArt({ pixelation: 'medium' })
  .effects({ outline: { width: 2, color: { r: 0, g: 0, b: 0, alpha: 1 } } })
  .output();

console.log(result.buffer);
console.log(result.metadata);
```

This allows for a more flexible and chainable approach to sprite manipulation.

## Error Handling

The new implementation includes improved error handling. Errors are now more descriptive and include the specific operation that failed:

```javascript
try {
  const result = await sprite.generateSprite("A complex character");
} catch (error) {
  console.error("Failed to generate sprite:", error.message);
}
```

## Performance Considerations

- The function uses AI models (DALL-E 3 and GPT) to generate and analyze images, which may result in varying outputs for the same input.
- Generated sprites are optimized for walking animations and follow a specific layout (6 frames in a 2x3 grid).
- Large or complex sprite generations may take longer to process due to API calls and image processing.

## Additional Notes

- The function converts images to grayscale, which may affect the final output.
- When saving images, they are stored in an 'assets' folder with a filename based on the description.
- For more complex sprite manipulations, consider using the `SpriteProcessor` class directly for fine-grained control over transformations and effects.