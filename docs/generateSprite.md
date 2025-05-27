---
slug: /
sidebar_position: 1
---
# generateSprite Documentation

## Brief Description
🚀 `generateSprite` is a powerful function that conjures up mind-blowing sprite sheet images based on your wildest descriptions, harnessing the cosmic forces of AI-powered image generation and analysis! 🎨✨

## Usage
Summon the sprite-generating magic by importing it from the mystical sprite module and invoking it with a description of the character you wish to bring to life! 🧙‍♂️

```javascript
import { sprite } from './path/to/sprite/module';

const result = await sprite.generateSprite(description, options);
```

## Parameters
- `description` (string, required): The enchanted text that describes your character's essence. 📜
- `options` (object, optional): A treasure chest of customization! 💎
  - `iterations` (number): The number of alternate universe versions of your sprite to generate.
  - `size` (string): The dimensional proportions of your generated masterpiece (default: "1024x1024").
  - `save` (boolean): Choose whether to immortalize your creation in the digital realm.

## Return Value
Behold! Your function shall bestow upon you an object (or array of objects) containing:
- `messages`: A JSON artifact revealing the sacred frameHeight and frameWidth incantations.
  🔮 
- `image`: The very essence of your sprite, captured in a Base64-encoded image data URL. 🖼️

## Examples

1. Conjure a single sprite sheet:
```javascript
const result = await sprite.generateSprite("A pixelated robot with laser eyes and rocket boots");
console.log(result.messages); // Unveil the secrets!
console.log(result.image); // Gaze upon your creation!
```

2. Summon multiple variations from the multiverse:
```javascript
const variations = await sprite.generateSprite("A cartoon cat with rainbow fur and butterfly wings", { iterations: 3 });
variations.forEach((variation, index) => {
  console.log(`Dimension ${index + 1}:`, variation.messages);
});
```

## Notes or Considerations
- 🎭 This function harnesses the chaotic energies of AI models (DALL-E 3 and GPT), resulting in delightfully unpredictable outputs for the same incantation.
- 🚶‍♂️ Generated sprites are optimized for walking animations, following a mystical 6-frame layout in a 2x3 grid.
- 🌈➡️⚪️ The function transmutes images into grayscale, potentially altering the fabric of reality (and your final output).
- 💾 When saving images, they materialize in an 'assets' folder, their filename a reflection of your description.
- ⏳ Patience, young wizard! The function may take some time to complete its arcane processes.

Embrace the power of `generateSprite` and breathe life into your digital creations! May your sprites be ever epic and your code forever bug-free! 🌟🎮
