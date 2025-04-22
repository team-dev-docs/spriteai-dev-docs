---
slug: /generateninja
sidebar_position: 5
---

# Generate Ninja

## Brief Description
`generateNinja` is a function that generates a ninja sprite sheet image based on provided options, leveraging AI-powered image generation and analysis.

## Usage
To use `generateNinja`, import it from the sprite module and call it with optional customization parameters.

```javascript
import { sprite } from './path/to/sprite/module';

const result = await sprite.generateNinja(options);
```

## Parameters
- `options` (object, optional):
  - `iterations` (number): Number of sprite variations to generate.
  - `size` (string): Size of the generated image (default: "1024x1024").
  - `save` (boolean): Whether to save the generated image to disk.
  - `color` (string): Primary color of the ninja outfit (e.g., "black", "red").
  - `style` (string): Visual style of the ninja (e.g., "traditional", "modern", "cartoon").
  - `weapons` (string): Weapons carried by the ninja (e.g., "katana", "shuriken", "nunchaku").
  - `accessories` (string): Additional accessories (e.g., "mask", "scarf", "smoke bombs").

## Return Value
Returns an object or array of objects containing:
- `messages`: JSON object with frameHeight and frameWidth information.
- `image`: Base64-encoded image data URL of the generated ninja sprite sheet.

## Examples

1. Generate a default ninja sprite sheet:
```javascript
const ninja = await sprite.generateNinja();
console.log(ninja.messages); // Frame dimensions
```

2. Generate a custom ninja:
```javascript
const redNinja = await sprite.generateNinja({
  color: "red",
  style: "cartoon",
  weapons: "katana and shuriken",
  accessories: "mask and smoke bombs"
});
```

3. Generate multiple ninja variations:
```javascript
const ninjaVariations = await sprite.generateNinja({ 
  iterations: 3,
  color: "black",
  style: "traditional"
});

ninjaVariations.forEach((variation, index) => {
  console.log(`Ninja variation ${index + 1}:`, variation.messages);
});
```

## Notes or Considerations
- The function uses AI models (DALL-E 3 and GPT) to generate and analyze images, which may result in varying outputs even with the same parameters.
- Generated ninja sprites are optimized for walking/running animations and follow a specific layout (6 frames in a 2x3 grid).
- When saving images, they are stored in an 'assets' folder with a timestamp-based filename.
- The ninja appearance will vary based on the combination of options provided.
- The function may take some time to complete due to API calls and image processing.
