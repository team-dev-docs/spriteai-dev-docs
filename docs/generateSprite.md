---
title: Generate Character Spritesheet
description: >-
  Learn how to use the generateCharacterSpritesheet function to create custom
  character spritesheets for your game.
slug: /
sidebar_position: 1
---

# Generate Character Spritesheet

## Introduction

The `generateCharacterSpritesheet` function is a powerful tool that allows you to create custom character spritesheets for your game using AI-generated images. This tutorial will guide you through the process of using this function to create a character spritesheet with various animation states.

## Prerequisites

- Node.js installed on your system
- Access to the `spriteAI` module
- An OpenAI API key (for image generation)

## Steps

### 1. Import the necessary modules

First, make sure you have the required modules imported in your project:

```javascript
import { generateCharacterSpritesheet } from 'spriteAI';
```

### 2. Set up the function call

Now, let's create a basic function call to generate a character spritesheet:

```javascript
async function createCharacterSpritesheet() {
  const description = "A pixelated warrior with sword and shield";
  const result = await generateCharacterSpritesheet(description);
  console.log(result);
}

createCharacterSpritesheet();
```

### 3. Customize the spritesheet options

The `generateCharacterSpritesheet` function accepts an options object as its second parameter. Let's explore some of the available options:

```javascript
async function createCustomCharacterSpritesheet() {
  const description = "A steampunk robot with gears and steam pipes";
  const options = {
    states: ['idle', 'walk', 'attack', 'jump'],
    framesPerState: 8,
    size: '1024x1024',
    style: 'pixel-art',
    direction: 'left',
    save: true
  };

  const result = await generateCharacterSpritesheet(description, options);
  console.log(result);
}

createCustomCharacterSpritesheet();
```

### 4. Understanding the result

The function returns an object with the following properties:

- `original`: The URL of the original AI-generated image
- `spritesheet`: A base64-encoded string of the processed spritesheet
- `metadata`: An object containing information about the spritesheet, including:
  - `states`: An array of animation states
  - `framesPerState`: The number of frames per animation state
  - `totalFrames`: The total number of frames in the spritesheet
  - `dimensions`: The width and height of the spritesheet
  - `frameData`: An object with information about each animation state

### 5. Using the generated spritesheet

You can use the base64-encoded spritesheet directly in your game or save it as an image file. If you set `save: true` in the options, the function will automatically save the spritesheet in the `assets` folder of your project.

## Outcome

After running the function, you'll have a custom character spritesheet that you can use in your game. The spritesheet will contain multiple animation states for your character, ready to be implemented in your game engine.

## Next Steps

- Learn how to [fetch available animation states](/docs/fetchAvailableAnimationStates) for your spritesheets
- Explore [generating environment sprites](/docs/generateEnvironmentSprites) for your game world
- Dive into [creating item sprites](/docs/generateItemSprites) for your game's inventory system

By following this tutorial, you've learned how to use the `generateCharacterSpritesheet` function to create custom character spritesheets for your game. Experiment with different descriptions, styles, and options to create unique characters for your projects!
