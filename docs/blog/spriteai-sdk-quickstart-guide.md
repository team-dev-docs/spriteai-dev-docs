# SpriteAI SDK Quickstart Guide

Welcome to the SpriteAI SDK Quickstart Guide! This guide will help you get started with using the SpriteAI SDK to generate and manipulate sprite images for your game development projects. Whether you're a seasoned game developer or just starting out, this guide will walk you through the basic steps to integrate SpriteAI into your workflow.

## Installation

To begin using the SpriteAI SDK, you'll need to install it in your project. You can do this using npm (Node Package Manager):

```bash
npm install spriteai-sdk
```

## Setting Up Your Environment

Before you start using the SpriteAI SDK, make sure you have your OpenAI API key ready. You'll need to set this as an environment variable:

```bash
export OPENAI_API_KEY=your_api_key_here
```

Replace `your_api_key_here` with your actual OpenAI API key.

## Basic Usage

Let's dive into some basic examples of how to use the SpriteAI SDK.

### Generating a Sprite

To generate a basic sprite, you can use the `generateSprite` method:

```javascript
const SpriteAI = require('spriteai-sdk');

async function createSprite() {
  const sprite = new SpriteAI.sprite();
  const result = await sprite.generateSprite('A cute robot character');
  console.log(result);
}

createSprite();
```

This will generate a sprite based on the description 'A cute robot character' and return an object containing the generated image and metadata.

### Generating a House Asset

For creating game assets like houses, you can use the `generateHouseAsset` method:

```javascript
const SpriteAI = require('spriteai-sdk');

async function createHouseAsset() {
  const sprite = new SpriteAI.sprite();
  const result = await sprite.generateHouseAsset('A cozy log cabin in a snowy forest');
  console.log(result);
}

createHouseAsset();
```

This will generate a house asset based on the description 'A cozy log cabin in a snowy forest'.

## Advanced Features

The SpriteAI SDK offers several advanced features for manipulating and enhancing your sprites.

### Adding Effects

You can add various effects to your sprites, such as outlines, shadows, or particle effects. Here's an example of adding an outline to a sprite:

```javascript
const SpriteAI = require('spriteai-sdk');

async function addOutlineToSprite() {
  const sprite = new SpriteAI.sprite();
  const baseSprite = await sprite.generateSprite('A fierce dragon');
  const outlinedSprite = await sprite.addOutline(baseSprite.image, { color: '#FF0000', thickness: 2 });
  console.log(outlinedSprite);
}

addOutlineToSprite();
```

This will generate a sprite of a fierce dragon and then add a red outline to it.

### Creating Animations

You can also create animated sprites using the SpriteAI SDK. Here's an example of creating a simple walking animation:

```javascript
const SpriteAI = require('spriteai-sdk');

async function createWalkingAnimation() {
  const sprite = new SpriteAI.sprite();
  const animation = await sprite.createSpriteAnimation('A character walking', { frames: 4 });
  console.log(animation);
}

createWalkingAnimation();
```

This will generate a 4-frame walking animation based on the description.

## Best Practices

When using the SpriteAI SDK, keep these best practices in mind:

1. Be specific in your descriptions to get the best results.
2. Experiment with different parameters to fine-tune your sprites and effects.
3. Cache generated sprites when possible to avoid unnecessary API calls.
4. Handle errors gracefully, as API calls can sometimes fail.

## Conclusion

This quickstart guide has introduced you to the basics of using the SpriteAI SDK. You've learned how to generate sprites, create house assets, add effects, and even create simple animations. As you continue to explore the SDK, you'll discover many more features and possibilities for enhancing your game development workflow.

For more detailed information on all the available methods and options, please refer to the full API documentation. Happy sprite creating!
