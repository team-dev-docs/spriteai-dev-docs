---
slug: /api/generateNinja
sidebar_position: 7
---

# generateNinja

## Brief Description
`generateNinja` is a function that generates a ninja character sprite sheet using AI-powered image generation. This function is specifically optimized for creating ninja-themed sprites with appropriate animations and styling.

## Usage
To use `generateNinja`, import it from the sprite module and call it with customization options.

```javascript
import { sprite } from './path/to/sprite/module';

const result = await sprite.generateNinja(options);
```

## Parameters
- `options` (object, optional):
  - `color` (string): Dominant color scheme for the ninja (e.g., "black", "red", "blue").
  - `style` (string): Visual style for the ninja (e.g., "cartoon", "pixel art", "realistic").
  - `weapon` (string): Weapon the ninja is carrying (e.g., "katana", "shuriken", "nunchaku").
  - `pose` (string): Starting pose for the sprite sheet (e.g., "stealth", "combat ready", "running").
  - `iterations` (number): Number of ninja variations to generate.
  - `size` (string): Size of the generated image (default: "1024x1024").
  - `save` (boolean): Whether to save the generated image to disk.

## Return Value
Returns an object or array of objects containing:
- `messages`: JSON object with frameHeight and frameWidth information.
- `image`: Base64-encoded image data URL of the generated ninja sprite sheet.

## Examples

1. Generate a default ninja sprite sheet:
```javascript
const result = await sprite.generateNinja();
console.log(result.messages);
console.log(result.image);
```

2. Generate a customized ninja:
```javascript
const result = await sprite.generateNinja({
  color: "red",
  style: "pixel art",
  weapon: "katana",
  pose: "stealth"
});
```

3. Generate multiple ninja variations:
```javascript
const variations = await sprite.generateNinja({ 
  iterations: 3,
  color: "black",
  weapon: "shuriken"
});

variations.forEach((variation, index) => {
  console.log(`Ninja Variation ${index + 1}:`, variation.messages);
});
```

## Notes or Considerations
- The function uses AI models (DALL-E 3 and GPT) to generate and analyze images, which may result in varying outputs even with the same input parameters.
- Generated ninja sprites are optimized for walking/running animations and stealth movements.
- The sprite sheet typically follows a specific layout (6 frames in a 2x3 grid).
- When saving images, they are stored in an 'assets' folder with a filename including a timestamp.
- The function may take some time to complete due to API calls and image processing.
- For best results, be specific with color, style, and weapon parameters.
