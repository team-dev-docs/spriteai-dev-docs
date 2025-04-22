---
slug: /generateSpaceman
sidebar_position: 5
---

# generateSpaceman

## Brief Description
`generateSpaceman` is a specialized function that creates a space-themed character sprite using AI-powered image generation and analysis.

## Usage
To use `generateSpaceman`, import it from the sprite module and call it with a description of the space character you want to generate.

```javascript
import { sprite } from './path/to/sprite/module';

const result = await sprite.generateSpaceman(description, options);
```

## Parameters
- `description` (string, required): A text description of the space character to generate.
- `options` (object, optional):
  - `iterations` (number): Number of sprite variations to generate.
  - `size` (string): Size of the generated image (default: "1024x1024").
  - `save` (boolean): Whether to save the generated image to disk.
  - `rotate` (boolean): Whether to apply rotation to the generated sprite.
  - `tint` (string): Color to apply as a tint to the sprite.

## Return Value
Returns an object or array of objects containing:
- `messages`: JSON object with frameHeight and frameWidth information.
- `image`: Base64-encoded image data URL of the generated space character sprite sheet.

## Examples

1. Generate a single space character sprite sheet:
```javascript
const result = await sprite.generateSpaceman("An astronaut with a fishbowl helmet");
console.log(result.messages);
console.log(result.image);
```

2. Generate multiple variations with custom options:
```javascript
const variations = await sprite.generateSpaceman("A green alien with three eyes", { 
  iterations: 2,
  tint: '#00ff00',
  rotate: true
});
variations.forEach((variation, index) => {
  console.log(`Variation ${index + 1}:`, variation.messages);
});
```

## Notes or Considerations
- The function uses AI models (DALL-E 3 and GPT) to generate and analyze images.
- Customized for space-themed characters with appropriate prompting.
- Generated sprites are optimized for walking/floating animations and follow a specific layout (6 frames in a 2x3 grid).
- The function processes images to enhance their suitability for game development.
- When saving images, they are stored in an 'assets' folder with a filename based on the description.
- Post-processing options like rotation and tinting can be applied to customize the appearance.
- The animation speed is automatically calculated based on the number of frames for smooth gameplay.