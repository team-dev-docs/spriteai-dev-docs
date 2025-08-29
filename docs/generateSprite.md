---
title: Character Sprite Generation Documentation
description: >-
  Detailed guide on generating character sprite sheets using AI-powered image
  generation and analysis.
slug: /
sidebar_position: 1
---

# 🔥 Unleash Epic Character Sprites with AI Magic

## 🚀 Welcome to the Future of Sprite Creation

Ready to blow minds with some seriously sick character sprites? You've just discovered the most powerful AI-driven sprite generation system on the planet! Our cutting-edge tech transforms your wildest character ideas into pixel-perfect, animation-ready masterpieces that'll make other developers weep with envy.

💡 **Pro Tip**: This isn't your grandpa's sprite editor - we're talking next-level AI wizardry that'll have you creating AAA-quality sprites faster than you can say "game development revolution!"

## 🎯 Prerequisites (Get Your Battle Station Ready)

Before we dive into the epicness, make sure you've got these weapons in your arsenal:

- 🟢 **Node.js** installed (because we're not savages)
- ⚡ **Access to the spriteAI module** (your golden ticket)
- 🧠 **Basic JavaScript knowledge** (async/await is your best friend)
- 🎮 **A burning desire to create legendary sprites**

## 🎪 Usage: Where the Magic Happens

Time to unleash the beast! Our sprite generation system is so intuitive, even your pet hamster could probably figure it out (but please don't let them near your code).

### 📦 Import the Power Tools

```javascript
// Summon the sprite gods! 🧙‍♂️
import { 
  generateCharacterSpritesheet, 
  fetchAvailableAnimationStates, 
  fetchAvailableSpriteStyles 
} from './path/to/spriteAI/module';
```

### 🎨 Crafting Your Masterpiece

The `generateCharacterSpritesheet` function is your paintbrush, canvas, and artistic genius all rolled into one. Watch as it transforms mere words into visual poetry!

#### 🔥 Basic Usage That'll Blow Your Mind

```javascript
// Prepare to have your socks knocked clean off! 🧦💥
const result = await generateCharacterSpritesheet("A cyberpunk ninja with glowing katanas", {
  states: ['idle', 'walk', 'run', 'attack'],
  framesPerState: 6,
  size: '1024x1024',
  style: 'pixel-art',
  padding: 1,
  direction: 'right',
  save: true
});

// Behold your creation! 👑
console.log("🎉 BOOM! Your sprite is READY!", result);
```

#### ⚙️ Parameters: Your Creative Arsenal

- 🎭 `description` (string, **REQUIRED**): Paint your character with words - be as wild and creative as your imagination allows!
- 🛠️ `options` (object, optional but oh-so-powerful):
  - 🎬 `states` (array): Animation states that'll bring your character to life (default: `['idle', 'walk', 'run', 'attack']`)
  - 🎞️ `framesPerState` (number): More frames = smoother animations = happier players (default: `6`)
  - 📏 `size` (string): Size matters! Go big or go home (default: `"1024x1024"`)
  - 🎨 `style` (string): Your artistic signature (default: `"pixel-art"`)
  - 📐 `padding` (number): Give your frames some breathing room (default: `1`)
  - 🧭 `direction` (string): Which way is your hero facing? (default: `"right"`)
  - 💾 `save` (boolean): Keep that masterpiece safe! (default: `false`)

#### 🏆 What You Get Back (Treasure Chest Contents)

Prepare for a loot drop of epic proportions:
- 🖼️ `original`: The raw, uncut URL of your AI-generated masterpiece
- 🎪 `spritesheet`: Base64-encoded sprite sheet ready for game integration
- 📊 `metadata`: All the juicy details about your creation (states, frames, dimensions, and more!)

## 🎮 Unlock the Full Arsenal

Why settle for guessing when you can know exactly what's available? These functions are like cheat codes for sprite creation!

### 🎭 Discover All Animation States

```javascript
// What moves can your character pull off? Let's find out! 🕵️
const states = await fetchAvailableAnimationStates();
console.log("🎬 Available moves:", states); 
// Output: ['idle', 'walk', 'run', 'attack', 'jump', 'fall', 'hurt', 'die']
```

### 🎨 Explore All Art Styles

```javascript
// Time to pick your artistic weapon of choice! 🎨
const styles = await fetchAvailableSpriteStyles();
console.log("🖌️ Style options:", styles); 
// Output: ['pixel-art', 'vector', '3d', 'hand-drawn', 'anime']
```

## 🎪 Epic Examples That'll Inspire You

### 🚀 Single Sprite Sheet Generation

```javascript
// Create a legendary warrior sprite! ⚔️
const result = await generateCharacterSpritesheet("A battle-scarred orc warrior with massive war hammer", {
  states: ['idle', 'walk', 'run', 'attack'],
  framesPerState: 8, // Extra smooth animations!
  size: '2048x2048', // Go BIG!
  style: 'pixel-art',
  padding: 2,
  direction: 'right',
  save: true
});

console.log("🎉 Original image:", result.original);
console.log("🎪 Sprite sheet ready:", result.spritesheet);
console.log("📊 Epic metadata:", result.metadata);
```

### 🎰 Multiple Variations (Jackpot!)

```javascript
// Why have one when you can have THREE?! 🎲
const variations = await generateCharacterSpritesheet("A mystical fire mage with floating crystals", {
  states: ['idle', 'walk', 'cast_spell', 'teleport'],
  framesPerState: 6,
  size: '1024x1024',
  style: 'anime',
  padding: 1,
  direction: 'right',
  save: true,
  iterations: 3 // Triple the magic! ✨
});

variations.forEach((variation, index) => {
  console.log(`🔥 Variation ${index + 1} is FIRE:`, variation.metadata);
});
```

## ⚠️ Pro Tips & Battle-Tested Wisdom

- 🤖 **AI Creativity**: Our AI models (DALL-E 3 + GPT) are like having Picasso and Da Vinci as your personal art team - expect mind-blowing variety!
- 🎬 **Animation Optimization**: Sprites are crafted with frame layouts that'll make your animations smoother than butter
- 💾 **Auto-Save Magic**: Saved sprites land in your 'assets' folder with smart naming based on your descriptions
- ⏱️ **Patience Grasshopper**: Great art takes time - our AI is cooking up something special behind the scenes!

## 🚀 Level Up Your Game Development

- 🌍 **Environment Mastery**: Dive into `generateEnvironmentSprites` and `generateItemSprites` for complete world building
- 📚 **Deep Dive**: Check out our [Reference Documentation](/docs/reference) for the technical nitty-gritty
- 🎯 **Advanced Techniques**: Master the craft with our [How-To Guides](/docs/how-to) - from beginner to sprite sensei!

---

**Ready to create sprites that'll make players' jaws drop? Your epic adventure starts NOW! 🎮✨**
