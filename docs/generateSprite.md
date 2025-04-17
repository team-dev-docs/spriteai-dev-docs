---
slug: /
sidebar_position: 1
---
```markdown
---
slug: /
sidebar_position: 1
---

# generateSprite Documentation

## Brief Description
`generateSprite` is a function that generates a sprite sheet image based on a given description, using AI-powered image generation and analysis. It now includes an additional function `generateSpriteWithBorder` for creating sprites with customizable borders.

## Usage
To use `generateSprite` or `generateSpriteWithBorder`, import them from the sprite module and call them with a description of the character you want to generate.

```javascript
import { sprite } from './path/to/sprite/module';

const result = await sprite.generateSprite(description, options);
const borderedResult = await sprite.generateSpriteWithBorder(description, options);
```

## Parameters
- `description` (string, required): A text description of the character to generate.
- `options` (object, optional):
  - `iterations` (number): Number of sprite variations to generate.
  - `size` (string): Size of the generated image (default: "1024x1024").
  - `save` (boolean): Whether to save the generated image to disk.
  - `border` (object): Options for `generateSpriteWithBorder` function.
    - `color` (string): Color of the border (e.g., "#FFFFFF").
    - `width` (number): Width of the border in pixels.

## Return Value
Both functions return an object or array of objects containing:
- `messages`: JSON object with frameHeight and frameWidth information.
- `image`: Base64-encoded image data URL of the generated sprite sheet.

## Examples

1. Generate a single sprite sheet:
```javascript
const result = await sprite.generateSprite("A pixelated robot");
console.log(result.messages);
console.log(result.image);
```

2. Generate multiple variations:
```javascript
const variations = await sprite.generateSprite("A cartoon cat", { iterations: 3 });
variations.forEach((variation, index) => {
  console.log(`Variation ${index + 1}:`, variation.messages);
});
```

3. Generate a sprite with a border:
```javascript
const borderedSprite = await sprite.generateSpriteWithBorder("A medieval knight", {
  border: {
    color: "#000000",
    width: 2
  }
});
console.log(borderedSprite.messages);
console.log(borderedSprite.image);
```

## Notes or Considerations
- The functions use AI models (DALL-E 3 and GPT) to generate and analyze images, which may result in varying outputs for the same input.
- Generated sprites are optimized for walking animations and follow a specific layout (6 frames in a 2x3 grid).
- The functions convert images to grayscale, which may affect the final output.
- When saving images, they are stored in an 'assets' folder with a filename based on the description.
- The functions may take some time to complete due to API calls and image processing.
- The `generateSpriteWithBorder` function allows for customization of border color and width, providing more flexibility in sprite design.
```
