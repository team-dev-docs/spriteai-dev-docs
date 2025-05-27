---
slug: /
sidebar_position: 1
---
# generateSprite Documentation

## Brief Description
`generateSprite` is a turbo-charged function that conjures up mind-blowing sprite sheet images based on your wildest descriptions, powered by cutting-edge AI sorcery and image analysis wizardry!

## Usage
Unleash the power of `generateSprite` by summoning it from the sprite dimension and invoking its mystical abilities with a description of the character you want to bring to life.

```javascript
import { sprite } from './path/to/sprite/module';

const result = await sprite.generateSprite(description, options);
```

## Parameters
- `description` (string, required): Your magical incantation describing the character to generate.
- `options` (object, optional):
  - `iterations` (number): Number of sprite variations to spawn (more is merrier!).
  - `size` (string): Size of the generated image (default: "1024x1024") - go big or go home!
  - `save` (boolean): Whether to immortalize the generated image on your hard drive.

## Return Value
Conjures an object or array of objects containing:
- `messages`: A JSON treasure trove with frameHeight and frameWidth secrets.
- `image`: Base64-encoded image data URL of the generated sprite sheet - pure pixel perfection!

## Examples

1. Summon a single sprite sheet:
```javascript
const result = await sprite.generateSprite("A pixelated robot with laser eyes and rocket boots");
console.log(result.messages);
console.log(result.image); // Behold the robotic glory!
```

2. Generate multiple variations for maximum awesomeness:
```javascript
const variations = await sprite.generateSprite("A cartoon cat with ninja skills and a jetpack", { iterations: 3 });
variations.forEach((variation, index) => {
  console.log(`Variation ${index + 1}:`, variation.messages);
  // Each cat more epic than the last!
});
```

## Notes or Considerations
- This function harnesses the power of AI models (DALL-E 3 and GPT) to generate and analyze images, so expect some delightful surprises in your outputs!
- Generated sprites are optimized for walking animations and follow a specific layout (6 frames in a 2x3 grid) - perfect for side-scrolling adventures!
- The function converts images to grayscale, adding a touch of noir to your sprites.
- When saving images, they're stored in an 'assets' folder with a filename based on your description - easy to find, hard to forget!
- Patience, young padawan! The function may take a moment to complete due to API calls and image processing. Good things come to those who wait!

Now go forth and generate sprites that will make your fellow developers weep with joy! 🚀✨
