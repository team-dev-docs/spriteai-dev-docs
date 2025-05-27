---
slug: /
sidebar_position: 1
---
# generateSprite Documentation

## Brief Description
🎨 `generateSprite` is a powerful function that brings your imagination to life! It conjures up a sprite sheet image based on your description, using cutting-edge AI-powered image generation and analysis. Get ready to spark your game development with some pixel-perfect magic! ✨

## Usage
To unleash the power of `generateSprite`, summon it from the sprite module and call upon it with a vivid description of the character you want to materialize.

```javascript
import { sprite } from './path/to/sprite/module';

const result = await sprite.generateSprite(description, options);
```

## Parameters
- `description` (string, required): Your creative vision in words! Describe the character you want to bring to life.
- `options` (object, optional):
  - `iterations` (number): Feeling indecisive? Generate multiple sprite variations!
  - `size` (string): Size matters! Choose your image dimensions (default: "1024x1024").
  - `save` (boolean): Want to keep your masterpiece? Set this to true to save the generated image.

## Return Value
Behold! Your function call shall return an object (or array of objects) containing:
- `messages`: A JSON object revealing the secrets of frameHeight and frameWidth.
- `image`: The crown jewel - a Base64-encoded image data URL of your generated sprite sheet.

## Examples

1. Generate a single sprite sheet (simple, yet effective):
```javascript
const result = await sprite.generateSprite("A pixelated robot with laser eyes");
console.log("Beep boop!", result.messages);
console.log("Robot incoming!", result.image);
```

2. Generate multiple variations (for the indecisive game dev):
```javascript
const variations = await sprite.generateSprite("A cartoon cat with a jetpack", { iterations: 3 });
variations.forEach((variation, index) => {
  console.log(`Meow-sterpiece ${index + 1}:`, variation.messages);
});
```

## Notes or Considerations
- This function harnesses the power of AI models (DALL-E 3 and GPT) to generate and analyze images. Like a box of chocolates, you never know exactly what you're gonna get!
- Generated sprites are optimized for walking animations and follow a specific layout (6 frames in a 2x3 grid). It's like a dance floor for your characters!
- The function converts images to grayscale. Who said shades of gray can't be exciting?
- When saving images, they find a cozy home in an 'assets' folder with a filename based on your description.
- Rome wasn't built in a day, and neither are these sprites. The function may take a moment to complete due to API calls and image processing. Patience is a virtue!

So, are you ready to turn your game ideas into sprite-tacular reality? Give `generateSprite` a whirl and watch your characters come to life! 🚀🎮
