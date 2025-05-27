---
slug: /
sidebar_position: 1
---
# generateSprite Documentation

## 🚀 Brief Description
`generateSprite` is a magical function that conjures sprite sheet images from thin air, powered by cutting-edge AI sorcery! It's like having a tiny digital artist living in your code.

## 🎮 Usage
Summon the power of `generateSprite` by importing it from the sprite module and unleashing it with a description of the character you want to bring to life.

```javascript
import { sprite } from './path/to/sprite/module';

const result = await sprite.generateSprite(description, options);
```

## 🎛️ Parameters
- `description` (string, required): The incantation that describes your character. Make it as wild as your imagination!
- `options` (object, optional): Your magic wand for fine-tuning:
  - `iterations` (number): How many alternate universe versions of your sprite to create.
  - `size` (string): The dimensions of your pixelated masterpiece (default: "1024x1024").
  - `save` (boolean): Whether to eternalize your creation on disk.

## 🎁 Return Value
Unwrap a gift box containing:
- `messages`: A JSON treasure map with frameHeight and frameWidth secrets.
- `image`: A Base64-encoded portal to your generated sprite sheet.

## 🌟 Examples

1. Summon a single sprite sheet:
```javascript
const result = await sprite.generateSprite("A breakdancing robot with laser eyes");
console.log(result.messages); // Unveil the mysteries
console.log(result.image); // Behold your creation
```

2. Create a multiverse of variations:
```javascript
const variations = await sprite.generateSprite("A ninja cat riding a unicorn", { iterations: 3 });
variations.forEach((variation, index) => {
  console.log(`Dimension ${index + 1}:`, variation.messages);
});
```

## 🧙‍♂️ Notes or Considerations
- This function harnesses the power of AI models (DALL-E 3 and GPT), so results may vary. It's like asking different artists to draw the same thing - always a surprise!
- Generated sprites are optimized for walking animations, arranged in a 2x3 grid of 6 frames. It's like a tiny flip book!
- The function turns your colorful creations into moody grayscale masterpieces.
- Saved images find their home in an 'assets' folder, with filenames inspired by your descriptions.
- Be patient, young wizard! The spell may take a moment to weave its magic due to API calls and image processing.

Now go forth and populate your game world with AI-generated wonders! 🎨✨
