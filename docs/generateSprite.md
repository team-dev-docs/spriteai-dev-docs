---
slug: /
sidebar_position: 1
---
# generateSprite Documentation

## Brief Description
🚀 `generateSprite` is a powerful function that conjures up mind-blowing sprite sheet images based on your wildest descriptions, leveraging cutting-edge AI-powered image generation and analysis. Get ready to bring your game characters to life!

## Usage
Unleash the magic of `generateSprite` by importing it from the sprite module and summoning it with a description of the character you want to materialize.

```javascript
import { sprite } from './path/to/sprite/module';

const result = await sprite.generateSprite(description, options);
```

## Parameters
- `description` (string, required): Your creative vision in text form. Go wild!
- `options` (object, optional):
  - `iterations` (number): How many alternate universe versions of your sprite to generate.
  - `size` (string): The dimensions of your pixelated masterpiece (default: "1024x1024").
  - `save` (boolean): Whether to immortalize your creation on disk.

## Return Value
Returns an object or array of objects containing:
- `messages`: A JSON treasure trove of frameHeight and frameWidth intel.
- `image`: The holy grail - a Base64-encoded image data URL of your generated sprite sheet.

## Examples

1. Conjure a single sprite sheet:
```javascript
const result = await sprite.generateSprite("A pixelated robot with laser eyes and rocket boots");
console.log(result.messages); // Behold the metadata!
console.log(result.image); // Gaze upon your creation!
```

2. Spawn multiple variations:
```javascript
const variations = await sprite.generateSprite("A cartoon cat with ninja skills and a jetpack", { iterations: 3 });
variations.forEach((variation, index) => {
  console.log(`Variation ${index + 1}:`, variation.messages); // Compare the alternate realities!
});
```

## Notes or Considerations
- This function harnesses the power of AI models (DALL-E 3 and GPT), so expect some delightful surprises in your outputs!
- Generated sprites are optimized for walking animations and follow a specific layout (6 frames in a 2x3 grid). It's like a dance floor for your characters!
- The function converts images to grayscale, giving your sprites that classic retro vibe.
- When saving images, they're stored in an 'assets' folder with a filename based on your description. Organization is key in the sprite multiverse!
- Be patient, young sprite master. The function may take some time to complete due to API calls and image processing. Good things come to those who wait!
