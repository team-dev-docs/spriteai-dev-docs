---
title: Character Sprite Generation Documentation
description: >-
  Detailed guide on generating character sprite sheets using AI-powered image
  generation and analysis.
slug: /
sidebar_position: 1
---
# Character Sprite Generation Documentation 🔥

## Introduction

Welcome to the world of epic sprite generation! 🚀 This guide will take you on a thrilling journey through our AI-powered image generation and analysis functions. Get ready to create mind-blowing, customized sprite sheets that'll make your game characters come to life like never before! 🎮✨

## Prerequisites

Before we dive into the sprite-tacular adventure, make sure you've got your developer toolkit locked and loaded:

- 💻 Node.js installed and ready to rock
- 🔑 VIP access to the spriteAI module
- 🧠 JavaScript and async/await skills sharp as a ninja's blade

## Usage

Let's get this pixel party started! 🎉 Here's how to summon the sprite-generating gods:

### Importing Functions

First, let's call upon the mighty powers of our spriteAI module:

```javascript
import { generateCharacterSpritesheet, fetchAvailableAnimationStates, fetchAvailableSpriteStyles } from './path/to/spriteAI/module';
```

### Generating a Character Sprite Sheet

Time to unleash the `generateCharacterSpritesheet` function and create some legendary sprites! 🧙‍♂️

#### Basic Usage

Behold, the incantation to summon your first sprite sheet:

```javascript
const result = await generateCharacterSpritesheet("A pixelated robot", {
  states: ['idle', 'walk', 'run', 'attack'],
  framesPerState: 6,
  size: '1024x1024',
  style: 'pixel-art',
  padding: 1,
  direction: 'right',
  save: true
});
console.log(result);
```

#### Parameters

- `description` (string, required): Paint a picture with words! Describe your character in all its glory.
- `options` (object, optional): Customize your sprite-crafting experience:
  - `states` (array of strings): Choose your fighter's moves! (default: `['idle', 'walk', 'run', 'attack']`)
  - `framesPerState` (number): How smooth do you want it? More frames = butter-smooth animations! (default: `6`)
  - `size` (string): Go big or go home! (default: `"1024x1024"`)
  - `style` (string): Pixel-perfect or hand-drawn masterpiece? You decide! (default: `"pixel-art"`)
  - `padding` (number): Give your sprites some breathing room (default: `1`)
  - `direction` (string): Which way is your character facing? (default: `"right"`)
  - `save` (boolean): Want to keep this work of art? (default: `false`)

#### Return Value

You'll receive a treasure trove of sprite goodness:
- `original`: The URL to your original masterpiece
- `spritesheet`: A Base64-encoded image data URL of your sprite sheet (perfect for showing off!)
- `metadata`: All the juicy details about your creation, including states, frames, and dimensions

## Fetching Available Animation States and Styles

Want to know what moves your character can bust out? Let's check the available states and styles!

### Fetching Available Animation States

```javascript
const states = await fetchAvailableAnimationStates();
console.log(states); // Output: ['idle', 'walk', 'run', 'attack', 'jump', 'fall', 'hurt', 'die']
```

### Fetching Available Sprite Styles

```javascript
const styles = await fetchAvailableSpriteStyles();
console.log(styles); // Output: ['pixel-art', 'vector', '3d', 'hand-drawn', 'anime']
```

## Examples

### Generating a Single Sprite Sheet

Let's bring a pixelated robot to life! 🤖

```javascript
const result = await generateCharacterSpritesheet("A pixelated robot", {
  states: ['idle', 'walk', 'run', 'attack'],
  framesPerState: 6,
  size: '1024x1024',
  style: 'pixel-art',
  padding: 1,
  direction: 'right',
  save: true
});
console.log(result.original); // URL of the original image
console.log(result.spritesheet); // Base64-encoded sprite sheet
console.log(result.metadata); // Metadata about the sprite sheet
```

### Generating Multiple Variations

Can't decide on just one look? Generate a whole cat-alog of variations! 😸

```javascript
const variations = await generateCharacterSpritesheet("A cartoon cat", {
  states: ['idle', 'walk', 'run', 'attack'],
  framesPerState: 6,
  size: '1024x1024',
  style: 'pixel-art',
  padding: 1,
  direction: 'right',
  save: true,
  iterations: 3
});
variations.forEach((variation, index) => {
  console.log(`Variation ${index + 1}:`, variation.metadata);
});
```

## Notes or Considerations

- Our AI models (DALL-E 3 and GPT) are like creative genies – sometimes they surprise even us with their output! 🧞‍♂️
- Your sprites are tailor-made for the states you choose, arranged in a slick layout based on your specs.
- Saving your masterpieces? Look for them in the 'assets' folder, named after your brilliant descriptions.
- Rome wasn't built in a day, and neither are epic sprites. Give the function some time to work its magic! ⏳

## Next Steps

Ready to level up your sprite game? Here's what's next on your quest:

- Craft entire worlds with the `generateEnvironmentSprites` function! 🌍
- Equip your heroes with the `generateItemSprites` function! ⚔️
- Dive deep into the [Reference Documentation](/docs/reference) for all the nitty-gritty details.
- Master advanced techniques with our [How-To Guides](/docs/how-to) and become a true Sprite Sorcerer! 🧙‍♂️

Now go forth and create some legendary sprites! May your pixels be ever in your favor! 🎨🕹️
