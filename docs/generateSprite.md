---
slug: /
sidebar_position: 1
---
# generateSprite Documentation

## Brief Description
`generateSprite` is a function that generates sprite sheet images from text descriptions using AI-powered image generation and analysis.

## Usage
Import and use the `generateSprite` function in your code:

```javascript
import { sprite } from './path/to/sprite/module';

const result = await sprite.generateSprite(description, options);
```

## Parameters
- `description` (string, required): Text description of the character or object to generate.
- `options` (object, optional): Configuration options:
  - `iterations` (number): Number of sprite variants to generate.
  - `size` (string): Image size. Default: "1024x1024".
  - `save` (boolean): Whether to save the generated image.

## Return Value
The function returns an object with:
- `messages`: JSON object containing frameHeight and frameWidth.
- `image`: Base64-encoded image data URL of the generated sprite sheet.

## Examples

1. Generate a single sprite:
```javascript
const result = await sprite.generateSprite("A pixelated robot");
console.log("Sprite dimensions:", result.messages);
console.log("Sprite image data:", result.image);
```

2. Generate multiple sprite variants:
```javascript
const results = await sprite.generateSprite("A cartoon cat", { iterations: 3 });
results.forEach((variant, index) => {
  console.log(`Variant ${index + 1} dimensions:`, variant.messages);
});
```

## Notes
- This function uses AI models (DALL-E 3 and GPT) for image generation and analysis.
- Sprites are optimized for walking animations in a 6-frame, 2x3 grid layout.
- Generated images are converted to grayscale for optimization.
- Generated images are saved in the 'assets' folder, named after their description.
- The generation process may take some time depending on the complexity of the description and the number of iterations.
