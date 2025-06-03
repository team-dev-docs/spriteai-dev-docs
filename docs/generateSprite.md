---
slug: /
sidebar_position: 1
---

# 🌶️ Spicy generateSprite Documentation 🌶️

## 🚀 Brief Description
`generateSprite` is a sizzling function that conjures up a sprite sheet image based on your wildest imagination, using AI-powered image generation and analysis that's hotter than a ghost pepper! 🔥

## 🎮 Usage
To unleash the power of `generateSprite`, import it from the spicy sprite module and call it with a description that'll make your taste buds tingle!

```javascript
import { sprite } from './path/to/spicy/sprite/module';

const result = await sprite.generateSprite(description, options);
```

## 🌡️ Parameters
- `description` (string, required): A text description so spicy it'll make your GPU sweat!
- `options` (object, optional): A smorgasbord of flavor enhancers:
  - `iterations` (number): Number of sprite variations to generate. More is merrier!
  - `size` (string): Size of the generated image (default: "1024x1024"). Go big or go home!
  - `save` (boolean): Whether to save the generated image to disk. Don't let these spicy creations escape!
  - `states` (array): Animation states to generate (default: ['idle', 'walk', 'run', 'attack']). Add some extra kick!
  - `framesPerState` (number): Number of frames per animation state (default: 6). More frames, more flavor!
  - `style` (string): Style of the generated sprite (default: 'pixel-art'). Choose your spice level!
  - `padding` (number): Padding between frames (default: 1). Give your sprites some breathing room!
  - `direction` (string): Direction the character should face (default: 'right'). Left or right, the choice is yours!

## 🔥 Return Value
Returns an object hotter than a jalapeño popper:
- `original`: URL of the original generated image. The raw, unfiltered heat!
- `spritesheet`: Base64-encoded image data URL of the generated sprite sheet. Spice encoded for your pleasure!
- `metadata`: Object containing information about the generated sprite sheet, including:
  - `states`: Array of animation states. The spice spectrum!
  - `framesPerState`: Number of frames per state. The more, the merrier!
  - `totalFrames`: Total number of frames in the sprite sheet. Feel the burn!
  - `dimensions`: Object with width and height of the sprite sheet. Size matters!
  - `frameData`: Object with information about each animation state's position in the sprite sheet. Navigate the heat map!

## 🌶️ Examples

1. Generate a single sprite sheet that's hotter than a summer in Phoenix:
```javascript
const result = await sprite.generateSprite("A pixelated robot breathing fire");
console.log(result.metadata); // Check out these spicy stats!
console.log(result.spritesheet); // Behold the fiery creation!
```

2. Generate a sprite sheet with custom options that'll make your eyes water:
```javascript
const result = await sprite.generateSprite("A cartoon cat juggling habaneros", {
  states: ['idle', 'walk', 'jump', 'throw'],
  framesPerState: 8,
  style: 'vector',
  size: '2048x2048'
});
console.log(result.metadata); // Prepare for a flavor explosion!
```

## 🔥 Additional Functions

### 🕺 fetchAvailableAnimationStates
Retrieves a list of available animation states. It's like a dance move catalog for your sprites!

```javascript
import { fetchAvailableAnimationStates } from './path/to/spicy/sprite/module';

const states = await fetchAvailableAnimationStates();
console.log(states); // ['idle', 'walk', 'run', 'attack', 'jump', 'fall', 'hurt', 'die', 'dab']
```

### 🎨 fetchAvailableSpriteStyles
Retrieves a list of available sprite styles. Choose your flavor wisely!

```javascript
import { fetchAvailableSpriteStyles } from './path/to/spicy/sprite/module';

const styles = await fetchAvailableSpriteStyles();
console.log(styles); // ['pixel-art', 'vector', '3d', 'hand-drawn', 'anime', 'hyper-realistic']
```

### 🌳 generateEnvironmentSprites
Generates a set of environment sprites that'll make your game world spicier than a ghost pepper farm!

```javascript
import { generateEnvironmentSprites } from './path/to/spicy/sprite/module';

const result = await generateEnvironmentSprites("A volcanic island with lava rivers", {
  elements: 6,
  size: '2048x2048',
  style: 'pixel-art',
  theme: 'inferno'
});
console.log(result.metadata); // Check out this hot environment!
console.log(result.tileset); // Caution: Hot tiles ahead!
```

### 🗡️ generateItemSprites
Generates a set of item sprites that'll add some serious kick to your inventory!

```javascript
import { generateItemSprites } from './path/to/spicy/sprite/module';

const result = await generateItemSprites("Legendary hot sauce bottles", {
  itemCount: 8,
  size: '1024x1024',
  style: 'pixel-art',
  itemType: 'consumables'
});
console.log(result.metadata); // Inventory's about to get spicy!
console.log(result.itemSheet); // Handle with oven mitts!
```

## 🚨 Notes or Considerations
- This function uses AI models (DALL-E 3 and GPT) hotter than a supernova to generate and analyze images. Results may vary, but they'll always be spicy! 🌟
- Generated sprites are optimized for animations smoother than ghost pepper sauce!
- When saving images, they're stored in an 'assets' folder. Handle with care, they're hot off the press! 🔥
- This function might take a moment to work its magic. Good things (and spicy sprites) come to those who wait! ⏳
- The new functions (generateEnvironmentSprites and generateItemSprites) are like adding extra hot sauce to your sprite generation toolkit! 🌶️
- For the latest and greatest options, use fetchAvailableAnimationStates and fetchAvailableSpriteStyles. Stay on the cutting edge of spice! 🔪

Remember, with great sprite power comes great responsibility. Use these functions wisely, and may your games be as spicy as your imagination allows! 🎮🔥
