---
slug: /
sidebar_position: 1
---
# generateSprite Documentation

## Brief Description
`generateSprite` is a turbocharged function that conjures up mind-blowing sprite sheet images based on your wildest descriptions, harnessing the power of cutting-edge AI to bring your pixelated dreams to life!

## Usage
Summon the sprite-generating sorcery by importing it from the sprite module and unleashing it with a description of the character you want to materialize:

```javascript
import { sprite } from './path/to/sprite/module';

const result = await sprite.generateSprite(description, options);
```

## Parameters
- `description` (string, required): Your spellbinding text description of the character to generate. Let your imagination run wild!
- `options` (object, optional):
  - `iterations` (number): Number of sprite variations to spawn (because why settle for just one?).
  - `size` (string): Size of the generated image (default: "1024x1024"). Go big or go home!
  - `save` (boolean): Whether to immortalize the generated image on your disk.

## Return Value
Behold! The function bestows upon you an object or array of objects containing:
- `messages`: A JSON object brimming with frameHeight and frameWidth secrets.
- `image`: A Base64-encoded image data URL of the generated sprite sheet, ready to dazzle your eyeballs.

## Examples

1. Conjure a single sprite sheet:
```javascript
const result = await sprite.generateSprite("A pixelated robot with laser eyes and rocket boosters");
console.log(result.messages);
console.log(result.image);
```

2. Unleash multiple variations:
```javascript
const variations = await sprite.generateSprite("A cartoon cat with rainbow fur and a jetpack", { iterations: 3 });
variations.forEach((variation, index) => {
  console.log(`Variation ${index + 1}:`, variation.messages);
});
```

## Notes or Considerations
- This function harnesses the arcane powers of AI models (DALL-E 3 and GPT) to generate and analyze images, which may result in delightfully unpredictable outputs for the same input.
- Generated sprites are optimized for walking animations and follow a specific layout (6 frames in a 2x3 grid), perfect for bringing your characters to life!
- The function converts images to grayscale, adding a touch of noir to your sprites.
- When saving images, they're stored in an 'assets' folder with a filename based on your description. Organize your digital treasures!
- Patience, young sprite-master! The function may take some time to complete due to API calls and image processing. Good things come to those who wait!

Get ready to revolutionize your game development with these electrifying sprite generation capabilities! The only limit is your imagination (and maybe your API quota).
