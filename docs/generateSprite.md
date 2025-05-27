---
slug: /
sidebar_position: 1
---
# generateSprite Documentation

## Brief Description
🎨 `generateSprite` is a magical function that conjures up sprite sheet images based on your wildest descriptions, powered by cutting-edge AI sorcery! 🧙‍♂️✨

## Usage
Summon the power of `generateSprite` by importing it from the sprite module and invoking it with your creative character description.

```javascript
import { sprite } from './path/to/sprite/module';

const result = await sprite.generateSprite(description, options);
```

## Parameters
- `description` (string, required): Your vivid text description of the character to materialize.
- `options` (object, optional):
  - `iterations` (number): Number of sprite variations to conjure (for when one just isn't enough).
  - `size` (string): Dimensions of your magical creation (default: "1024x1024").
  - `save` (boolean): Whether to immortalize your generated image on disk.

## Return Value
Unleashes an object or array of objects containing:
- `messages`: A JSON treasure chest with frameHeight and frameWidth secrets.
- `image`: Base64-encoded image data URL of your freshly spawned sprite sheet.

## Examples

1. Summon a single sprite sheet:
```javascript
const result = await sprite.generateSprite("A pixelated robot with laser eyes and a heart of gold");
console.log(result.messages); // Unveil the mysteries
console.log(result.image); // Behold your creation
```

2. Conjure multiple variations:
```javascript
const variations = await sprite.generateSprite("A cartoon cat with rainbow fur and a mischievous grin", { iterations: 3 });
variations.forEach((variation, index) => {
  console.log(`Variation ${index + 1}:`, variation.messages); // Examine each unique creation
});
```

## Notes or Considerations
- This function harnesses the power of AI models (DALL-E 3 and GPT), so expect some delightful surprises in your outputs! 🎉
- Generated sprites are optimized for walking animations and follow a specific layout (6 frames in a 2x3 grid). It's like a dance floor for your characters!
- The function converts images to grayscale, adding a touch of noir to your creations.
- When saving images, they're tucked away in an 'assets' folder with a filename based on your description. Easy to find, hard to forget!
- Be patient, young wizard! The function may take a moment to complete its arcane processes. Good things come to those who wait! ⏳🌟

Now go forth and create sprites that will dazzle the digital realm! 🚀🌈
