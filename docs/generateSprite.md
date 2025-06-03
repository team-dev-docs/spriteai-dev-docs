---
slug: /
sidebar_position: 1
---
# 🌶️ Spicy generateSprite Documentation 🌶️

## 🚀 Brief Description
`generateSprite` is a sizzling function that conjures up sprite sheet images based on your wildest imagination, using AI-powered image generation and analysis that's hotter than a ghost pepper! 🔥 But wait, there's more! This module is a treasure trove of sprite-tastic goodness, including functions for fetching available sprite styles and generating environment sprites that'll make your game worlds pop!

## 🔧 Usage
To harness the power of these sprite generation functions, import them from the spicy sprite module and call them with the required parameters. It's like summoning magical creatures, but with code!

```javascript
import { generateCharacterSpritesheet, fetchAvailableSpriteStyles, generateEnvironmentSprites } from './path/to/spicy/sprite/module';

const characterResult = await generateCharacterSpritesheet(description, options);
const styles = await fetchAvailableSpriteStyles();
const environmentResult = await generateEnvironmentSprites(description, options);
```

## 🎭 Functions

### 🦸‍♂️ generateCharacterSpritesheet

#### Parameters
- `description` (string, required): A text description of the character to generate. Go wild with your imagination!
- `options` (object, optional):
  - `states` (array): Animation states to include (default: ['idle', 'walk', 'run', 'attack']). Want your character to breakdance? Add it here!
  - `framesPerState` (number): Number of frames per animation state (default: 6). More frames = smoother animations!
  - `size` (string): Size of the generated image (default: "1024x1024"). Go big or go home!
  - `style` (string): Style of the sprite (default: "pixel-art"). From retro to futuristic, we've got you covered!
  - `padding` (number): Padding between frames (default: 1). Give your sprites some breathing room!
  - `direction` (string): Direction the character faces (default: "right"). Left, right, or do the twist!
  - `save` (boolean): Whether to save the generated image to disk. Save it for posterity!

#### Return Value
Returns an object containing:
- `original`: URL of the original generated image. It's like seeing your newborn sprite for the first time!
- `spritesheet`: Base64-encoded image data URL of the processed sprite sheet. Ready to rock your game world!
- `metadata`: Object with information about the generated sprite sheet. Knowledge is power!

### 🎨 fetchAvailableSpriteStyles

#### Parameters
None. This function is as easy as pie!

#### Return Value
Returns an array of available sprite styles as strings. It's like a fashion catalog for your sprites!

### 🌳 generateEnvironmentSprites

#### Parameters
- `description` (string, required): A text description of the environment to generate. From lush forests to alien landscapes, the world is your oyster!
- `options` (object, optional):
  - `elements` (number): Number of environment elements to generate (default: 4). More elements = more diversity!
  - `size` (string): Size of the generated image (default: "1024x1024"). Size matters in the sprite world!
  - `style` (string): Style of the sprites (default: "pixel-art"). Match your characters or go wild!
  - `padding` (number): Padding between elements (default: 1). Give your trees some personal space!
  - `theme` (string): Theme of the environment (default: "fantasy"). From fairy tales to sci-fi, we've got it all!
  - `save` (boolean): Whether to save the generated image to disk. Save your masterpiece!

#### Return Value
Returns an object containing:
- `original`: URL of the original generated image. Witness the birth of your world!
- `tileset`: Base64-encoded image data URL of the processed environment tileset. Ready to build your game world!
- `metadata`: Object with information about the generated environment sprites. Knowledge is key to mastering your environment!

## 🎬 Examples

1. Generate a character sprite sheet that's hotter than a summer in Phoenix:
```javascript
const result = await generateCharacterSpritesheet("A pixelated robot with laser eyes and rocket boots", {
  states: ['idle', 'walk', 'attack', 'fly'],
  framesPerState: 8,
  style: "pixel-art"
});
console.log(result.metadata); // Check out these spicy stats!
console.log(result.spritesheet); // Behold the fiery creation!
```

2. Fetch available sprite styles:
```javascript
const styles = await fetchAvailableSpriteStyles();
console.log("Available styles for your sprite fashion show:", styles);
```

3. Generate environment sprites that'll make your game world spicier than a ghost pepper farm:
```javascript
const environmentResult = await generateEnvironmentSprites("A lush neon forest with glowing mushrooms and floating islands", {
  elements: 6,
  theme: "sci-fi-nature",
  style: "pixel-art"
});
console.log(environmentResult.metadata); // Check out this hot environment!
console.log(environmentResult.tileset); // Caution: Hot tiles ahead!
```

## 🧠 Notes or Considerations
- Our functions use AI models (DALL-E 3 and GPT) to generate and analyze images. It's like having a team of tiny artists living in your computer!
- Generated sprites are optimized for the specified animation states and follow a grid layout based on the number of frames and states. It's like Tetris, but for animations!
- The `generateCharacterSpritesheet` function is designed for character animations, while `generateEnvironmentSprites` is for creating environment tilesets. Choose your fighter!
- When saving images, they are stored in an 'assets' folder with a filename based on the description. It's like a cozy home for your sprites!
- The functions may take some time to complete due to API calls and image processing. Good things come to those who wait!
- Available sprite styles and animation states are predefined but can be expanded in future updates. The sprite fashion world is ever-evolving!
- Consider using the `fetchAvailableSpriteStyles` function to ensure you're using a supported style before generating sprites. Don't be a fashion faux pas in the sprite world!

Now go forth and create some pixel-perfect magic that's so hot, it'll melt your players' screens! 🌟✨🔥
