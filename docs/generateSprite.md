---
slug: /
sidebar_position: 1
---
# 🌶️ Spicy generateSprite Documentation 🌶️

## 🚀 Brief Description
`generateSprite` is a sizzling function that conjures up sprite sheet images based on your wildest descriptions, using cutting-edge AI-powered image generation and analysis that's hotter than a ghost pepper! 🔥

## 🔧 Usage
To harness the power of `generateSprite`, import it from the spicy sprite module and call it with a description that'll make your taste buds tingle! It's like summoning a pixelated genie with a flavor kick!

```javascript
import { sprite } from './path/to/spicy/sprite/module';

const result = await sprite.generateSprite(description, options);
```

## 🎭 Parameters
- `description` (string, required): A text description of the character to generate. Let your imagination run wild and spicy!
- `options` (object, optional): A smorgasbord of flavor enhancers:
  - `iterations` (number): Number of sprite variations to generate. More iterations = more magic and flavor!
  - `size` (string): Size of the generated image (default: "1024x1024"). Go big or go home, flame on!
  - `save` (boolean): Whether to save the generated image to disk. Save your fiery masterpiece!

## 🎁 Return Value
Returns an object or array of objects hotter than a jalapeño popper:
- `messages`: JSON object with frameHeight and frameWidth information. It's like the blueprint of your spicy sprite!
- `image`: Base64-encoded image data URL of the generated sprite sheet. Ready to set your game world on fire!

## 🌟 Examples

1. Generate a single sprite sheet that's hotter than a summer in Phoenix:
```javascript
const result = await sprite.generateSprite("A pixelated robot with laser eyes and rocket boots");
console.log(result.messages); // Check out these spicy stats!
console.log(result.image); // Behold the fiery creation!
```

2. Generate multiple variations to turn up the heat:
```javascript
const variations = await sprite.generateSprite("A cartoon cat with rainbow fur and a jetpack", { iterations: 3 });
variations.forEach((variation, index) => {
  console.log(`Variation ${index + 1} - Extra Spicy:`, variation.messages);
});
```

## 🧠 Notes or Considerations
- Our function uses AI models (DALL-E 3 and GPT) hotter than a supernova to generate and analyze images. It's like having a team of tiny spice-loving artists living in your computer!
- Generated sprites are optimized for walking animations and follow a specific layout (6 frames in a 2x3 grid). It's like Tetris, but for animations with an extra kick!
- The function converts images to grayscale, which may affect the final output. Think of it as adding a vintage, smoky flavor to your sprites!
- When saving images, they are stored in an 'assets' folder with a filename based on the description. It's like a cozy, spicy home for your sprites!
- The function may take some time to complete due to API calls and image processing. Good things (and spicy sprites) come to those who wait!

Now go forth and create some pixel-perfect, tongue-tingling magic! 🌟🌶️✨
