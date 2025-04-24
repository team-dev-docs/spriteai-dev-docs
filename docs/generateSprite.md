---
slug: /
sidebar_position: 1
---
# generateSprite Documentation

## Brief Description
`generateSprite` is a spellbinding function that conjures a sprite sheet image from thin air, based on your wildest descriptions. It harnesses the power of cutting-edge AI to bring your pixelated dreams to life!

## Usage
To unleash the magic of `generateSprite`, summon it from the mystical sprite module and invoke it with a description of the character you wish to materialize.

```javascript
import { sprite } from './path/to/sprite/module';

const result = await sprite.generateSprite(description, options);
```

## Parameters
- `description` (string, required): A tantalizing text description of the character you want to generate. Let your imagination run wild!
- `options` (object, optional): A bag of tricks to customize your sprite-summoning ritual:
  - `iterations` (number): Number of sprite variations to generate. More is merrier!
  - `size` (string): Size of the generated image (default: "1024x1024"). Go big or go home!
  - `save` (boolean): Whether to immortalize the generated image on your disk.

## Return Value
Behold! The function bestows upon you an object (or an array of objects) containing:
- `messages`: A JSON object brimming with frameHeight and frameWidth secrets.
- `image`: A Base64-encoded image data URL of your freshly minted sprite sheet, ready to dazzle the world.

## Examples

1. Conjure a single sprite sheet:
```javascript
const result = await sprite.generateSprite("A pixelated robot with laser eyes and a heart of gold");
console.log(result.messages); // Unveil the mysteries!
console.log(result.image); // Gaze upon your creation!
```

2. Summon multiple variations for good measure:
```javascript
const variations = await sprite.generateSprite("A cartoon cat with rainbow fur and a mischievous grin", { iterations: 3 });
variations.forEach((variation, index) => {
  console.log(`Behold variation ${index + 1}:`, variation.messages);
});
```

## Notes or Considerations
- This function taps into the arcane powers of AI models (DALL-E 3 and GPT), so expect some delightful unpredictability in your results!
- Generated sprites are optimized for walking animations and follow a specific layout (6 frames in a 2x3 grid). It's like a magical dance routine!
- The function transforms images into grayscale, adding a touch of noir to your creations.
- When saving images, they're tucked away in an 'assets' folder, with filenames as unique as your descriptions.
- Patience, young wizard! The function may take a moment to weave its magic due to API incantations and image alchemy.

Now go forth and create pixel art wonders that will leave the world in awe!
