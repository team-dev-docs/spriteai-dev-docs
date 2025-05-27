---
slug: /
sidebar_position: 1
---
# generateSprite Documentation 🌶️🔥

## Brief Description
`generateSprite` is a sizzling function that conjures up a sprite sheet image based on your wildest descriptions, using cutting-edge AI-powered image generation and analysis. Get ready for some pixel-perfect magic! 🧙‍♂️✨

## Usage
To unleash the power of `generateSprite`, summon it from the sprite module and call upon its mystical abilities with a description of the character you want to bring to life.

```javascript
import { sprite } from './path/to/sprite/module';

const result = await sprite.generateSprite(description, options);
```

## Parameters
- `description` (string, required): A tantalizing text description of the character to generate. Let your imagination run wild! 🎭
- `options` (object, optional):
  - `iterations` (number): Number of sprite variations to generate. More iterations, more spice! 🌶️
  - `size` (string): Size of the generated image (default: "1024x1024"). Go big or go home! 📏
  - `save` (boolean): Whether to save the generated image to disk. Save that masterpiece! 💾

## Return Value
Returns a sizzling object or array of objects containing:
- `messages`: JSON object with frameHeight and frameWidth information. The secret sauce of your sprite! 🍯
- `image`: Base64-encoded image data URL of the generated sprite sheet. Picture perfect! 🖼️

## Examples

1. Generate a single spicy sprite sheet:
```javascript
const result = await sprite.generateSprite("A pixelated robot with flame-throwers for arms");
console.log(result.messages);
console.log(result.image);
```

2. Generate multiple hot variations:
```javascript
const variations = await sprite.generateSprite("A cartoon cat breathing fire", { iterations: 3 });
variations.forEach((variation, index) => {
  console.log(`Spicy Variation ${index + 1}:`, variation.messages);
});
```

## Notes or Considerations
- This function uses AI models (DALL-E 3 and GPT) hotter than a jalapeño to generate and analyze images, which may result in varying outputs for the same input. Embrace the spice of life! 🌶️
- Generated sprites are optimized for walking animations and follow a specific layout (6 frames in a 2x3 grid). It's like a dance floor for your characters! 💃
- The function converts images to grayscale, which may affect the final output. Fifty shades of sprites! 🌚
- When saving images, they're stored in an 'assets' folder with a filename based on the description. Organize that spice rack! 🗄️
- The function may take some time to complete due to API calls and image processing. Good things come to those who wait! ⏳

## New Functions

### fetchAvailableSpriteStyles

This function retrieves a list of available sprite styles that can be used when generating sprites. It's like a spice rack for your visual flavors! 🌶️🧂🌿

```javascript
import { fetchAvailableSpriteStyles } from './path/to/sprite/module';

const styles = await fetchAvailableSpriteStyles();
console.log(styles);
// Output: ['pixel-art', 'vector', '3d', 'hand-drawn', 'anime']
```

### generateEnvironmentSprites

This function generates a tileset of environment sprites based on a given description. Create entire worlds with a dash of AI spice! 🌍✨

```javascript
import { generateEnvironmentSprites } from './path/to/sprite/module';

const result = await generateEnvironmentSprites("volcanic lava fields with fire geysers", {
  elements: 4,
  size: "1024x1024",
  style: "pixel-art",
  padding: 1,
  theme: "fantasy",
  save: true
});

console.log(result.original); // URL of the original generated image
console.log(result.tileset); // Base64-encoded tileset image
console.log(result.metadata); // Metadata about the generated tileset
```

#### Parameters
- `description` (string, required): A spicy text description of the environment to generate. Let your imagination erupt! 🌋
- `options` (object, optional):
  - `elements` (number): Number of different elements to generate (default: 4). More elements, more flavor! 🍴
  - `size` (string): Size of the generated image (default: "1024x1024"). Super-size your world! 🔍
  - `style` (string): Style of the sprites (default: "pixel-art"). Choose your visual seasoning! 🎨
  - `padding` (number): Padding between elements (default: 1). Give your elements some breathing room! 💨
  - `theme` (string): Theme of the environment (default: "fantasy"). Set the mood for your world! 🌠
  - `save` (boolean): Whether to save the generated image to disk. Preserve your creations! 💾

### generateItemSprites

This function generates a collection of item sprites based on a given description. Spice up your inventory with AI-generated goodies! 🎒✨

```javascript
import { generateItemSprites } from './path/to/sprite/module';

const result = await generateItemSprites("legendary weapons infused with elemental powers", {
  itemCount: 6,
  size: "1024x1024",
  style: "pixel-art",
  padding: 1,
  itemType: "equipment",
  background: "transparent",
  save: true
});

console.log(result.original); // URL of the original generated image
console.log(result.itemSheet); // Base64-encoded item sheet image
console.log(result.metadata); // Metadata about the generated items
```

#### Parameters
- `description` (string, required): A zesty text description of the items to generate. Let your creativity sizzle! 🔥
- `options` (object, optional):
  - `itemCount` (number): Number of items to generate (default: 4). More items, more treasure! 💎
  - `size` (string): Size of the generated image (default: "1024x1024"). Size matters in the item world! 📏
  - `style` (string): Style of the sprites (default: "pixel-art"). Choose your item's fashion! 👗
  - `padding` (number): Padding between items (default: 1). Give your items some personal space! 🤲
  - `itemType` (string): Type of items (default: "equipment"). What's your flavor of loot? 🍽️
  - `background` (string): Background color (default: "white"). Set the stage for your items! 🎭
  - `save` (boolean): Whether to save the generated image to disk. Hoard your digital treasures! 🏴‍☠️

These new functions expand the capabilities of the sprite generation module, allowing for more diverse and specialized sprite creation for game development and other visual applications. It's like having a full spice rack for your visual feast! 🌶️🧂🌿🍳

So go ahead, sprinkle some AI magic into your games and watch them come to life with these spicy sprite generation functions! 🎮✨🔥
