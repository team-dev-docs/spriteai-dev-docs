---
title: Character Sprite Generation Documentation
description: >-
  Detailed guide on generating character sprite sheets using AI-powered image
  generation and analysis.
slug: /
sidebar_position: 1
---

# 🔥 Character Sprite Generation Documentation

## 🚀 Introduction

Welcome to the **most epic** character sprite generation system you've ever seen! This documentation will guide you through creating absolutely stunning character sprite sheets using our blazing-fast AI-powered image generation and analysis functions. Get ready to unleash your creativity and generate sprites that will make your games absolutely legendary! 🎮✨

With our expanded capabilities, you can now create jaw-dropping, customized sprite sheets for any character type and animation state imaginable. Let's dive into the magic! 🪄

## 🛠️ Prerequisites

Before you embark on this incredible journey, make sure you have:

- 🟢 **Node.js installed** (the latest version for maximum power!)
- 🎯 **Access to the spriteAI module** (your gateway to sprite perfection)
- 💡 **Basic understanding of JavaScript and asynchronous functions** (don't worry, we'll guide you!)

## 🎨 Usage

Time to create some sprite magic! Import the necessary functions from the `spriteAI` module and watch the sparks fly! ⚡

### 📦 Importing Functions

```javascript
// Import the powerhouse trio of sprite generation! 🔥
import { 
  generateCharacterSpritesheet, 
  fetchAvailableAnimationStates, 
  fetchAvailableSpriteStyles 
} from './path/to/spriteAI/module';
```

### 🎭 Generating a Character Sprite Sheet

The `generateCharacterSpritesheet` function is your **secret weapon** for creating mind-blowing character sprite sheets! This bad boy takes your wildest character descriptions and transforms them into pixel-perfect reality! 🌟

#### 🚀 Basic Usage (Prepare to be amazed!)

```javascript
// Brace yourself for sprite generation excellence! 🎯
const result = await generateCharacterSpritesheet("A badass pixelated robot warrior", {
  states: ['idle', 'walk', 'run', 'attack'], // Animation states that pack a punch! 💥
  framesPerState: 6, // Smooth as butter animations
  size: '1024x1024', // Crystal clear quality
  style: 'pixel-art', // Retro gaming vibes
  padding: 1, // Perfect spacing
  direction: 'right', // Ready for action
  save: true // Save that masterpiece!
});
console.log(result); // Witness the magic! ✨
```

#### 🎛️ Parameters (Your Creative Arsenal)

- 🎨 **`description`** (string, required): Paint your character with words! Be descriptive, be creative, be AMAZING!
- ⚙️ **`options`** (object, optional): Fine-tune your sprite generation like a pro:
  - 🎭 **`states`** (array of strings): Animation states that bring your character to life! (default: `['idle', 'walk', 'run', 'attack']`)
  - 🎬 **`framesPerState`** (number): More frames = smoother animations = happier players! (default: `6`)
  - 📏 **`size`** (string): Size matters! Go big or go home! (default: `"1024x1024"`)
  - 🎨 **`style`** (string): Choose your artistic destiny! (default: `"pixel-art"`)
  - 📐 **`padding`** (number): Perfect spacing for professional results (default: `1`)
  - 🧭 **`direction`** (string): Which way is your hero facing? (default: `"right"`)
  - 💾 **`save`** (boolean): Save your creation to immortalize it! (default: `false`)

#### 🎁 Return Value (The Treasure Chest)

Get ready for a package of pure awesomeness:
- 🖼️ **`original`**: URL of the original generated image (the raw power!)
- 🎞️ **`spritesheet`**: Base64-encoded image data URL of your sprite sheet masterpiece
- 📊 **`metadata`**: All the juicy details about your creation - animation states, frames, dimensions, and more!

## 🔍 Fetching Available Animation States and Styles

Want to know what's possible? We've got you covered with these incredible discovery functions! 🕵️‍♂️

### 🎭 Fetching Available Animation States

```javascript
// Discover all the amazing animation possibilities! 🌈
const states = await fetchAvailableAnimationStates();
console.log(states); 
// 💥 Output: ['idle', 'walk', 'run', 'attack', 'jump', 'fall', 'hurt', 'die']
// So many ways to bring your characters to life! 🎪
```

### 🎨 Fetching Available Sprite Styles

```javascript
// Explore the artistic universe at your fingertips! 🎭
const styles = await fetchAvailableSpriteStyles();
console.log(styles); 
// 🔥 Output: ['pixel-art', 'vector', '3d', 'hand-drawn', 'anime']
// From retro pixel art to modern anime - the choice is yours! ✨
```

## 🌟 Examples (Where Dreams Become Reality)

### 🎯 Generating a Single Sprite Sheet (The Classic)

```javascript
// Create your first sprite sheet masterpiece! 🏆
const result = await generateCharacterSpritesheet("A legendary pixelated robot guardian", {
  states: ['idle', 'walk', 'run', 'attack'],
  framesPerState: 6,
  size: '1024x1024',
  style: 'pixel-art',
  padding: 1,
  direction: 'right',
  save: true
});

// Behold your creation! 👑
console.log(result.original); // The original masterpiece URL
console.log(result.spritesheet); // Your sprite sheet in all its glory
console.log(result.metadata); // The technical details of your creation
```

### 🎪 Generating Multiple Variations (The Power Move)

```javascript
// Why settle for one when you can have multiple masterpieces? 🎨
const variations = await generateCharacterSpritesheet("An adorable cartoon cat ninja", {
  states: ['idle', 'walk', 'run', 'attack'],
  framesPerState: 6,
  size: '1024x1024',
  style: 'pixel-art',
  padding: 1,
  direction: 'right',
  save: true,
  iterations: 3 // Triple the awesomeness! 🔥
});

// Celebrate each variation! 🎉
variations.forEach((variation, index) => {
  console.log(`🎭 Variation ${index + 1} is absolutely stunning:`, variation.metadata);
});
```

## 🚨 Notes or Considerations (The Fine Print, But Make It Spicy)

- 🤖 **AI-Powered Magic**: Our system uses cutting-edge AI models (DALL-E 3 and GPT) to generate and analyze images. Each generation is unique - embrace the beautiful unpredictability!
- 🎯 **Optimized Perfection**: Generated sprites are laser-focused on your specified animation states with layouts that would make professional animators jealous!
- 💾 **Smart Storage**: When saving images, they're automatically organized in an 'assets' folder with intelligent naming based on your descriptions.
- ⏱️ **Worth the Wait**: Great art takes time! Our API calls and image processing ensure you get premium quality results.

## 🚀 Next Steps (Your Journey Continues)

- 🌍 **Expand Your Universe**: Explore environment sprites and item sprites using the `generateEnvironmentSprites` and `generateItemSprites` functions!
- 📚 **Dive Deeper**: Check out our [Reference Documentation](/docs/reference) for the complete technical breakdown
- 🎓 **Master the Craft**: Visit our [How-To Guides](/docs/how-to) for pro tips, advanced techniques, and mind-blowing use cases!

---

**Ready to create sprite magic? The only limit is your imagination! Let's build something incredible together!** 🌟🎮✨
