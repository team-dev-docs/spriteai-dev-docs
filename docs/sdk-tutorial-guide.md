# SpriteAI SDK Tutorial Guide

Welcome to the SpriteAI SDK tutorial guide! This document will walk you through the main features of our SDK and provide examples of how to use them in your projects.

## Table of Contents

1. [Introduction](#introduction)
2. [Installation](#installation)
3. [Generating Character Spritesheets](#generating-character-spritesheets)
4. [Creating Environment Sprites](#creating-environment-sprites)
5. [Generating Item Sprites](#generating-item-sprites)
6. [Fetching Available Animation States](#fetching-available-animation-states)
7. [Fetching Available Sprite Styles](#fetching-available-sprite-styles)

## Introduction

The SpriteAI SDK is a powerful tool for game developers and artists to generate various types of sprites and game assets using AI. With this SDK, you can create character spritesheets, environment tiles, and item sprites with ease.

## Installation

To install the SpriteAI SDK, use npm:

```bash
npm install spriteai-sdk
```

After installation, you can import the SDK functions in your project:

```javascript
import {
  generateCharacterSpritesheet,
  generateEnvironmentSprites,
  generateItemSprites,
  fetchAvailableAnimationStates,
  fetchAvailableSpriteStyles
} from 'spriteai-sdk';
```

## Generating Character Spritesheets

The `generateCharacterSpritesheet` function allows you to create detailed character spritesheets with multiple animation states.

```javascript
const characterDescription = 'a brave knight in shining armor';
const options = {
  states: ['idle', 'walk', 'run', 'attack'],
  framesPerState: 6,
  size: '1024x1024',
  style: 'pixel-art',
  padding: 1,
  direction: 'right',
  save: true
};

const result = await generateCharacterSpritesheet(characterDescription, options);
console.log(result.metadata);
```

This will generate a spritesheet with the specified animation states and save it to your assets folder.

## Creating Environment Sprites

Use the `generateEnvironmentSprites` function to create tileset sprites for your game environments.

```javascript
const environmentDescription = 'medieval castle';
const options = {
  elements: 6,
  size: '1024x1024',
  style: 'pixel-art',
  padding: 1,
  theme: 'fantasy',
  save: true
};

const result = await generateEnvironmentSprites(environmentDescription, options);
console.log(result.metadata);
```

This will generate a tileset with various castle elements suitable for a fantasy game environment.

## Generating Item Sprites

The `generateItemSprites` function helps you create sprites for game items, such as equipment or collectibles.

```javascript
const itemDescription = 'magical artifacts';
const options = {
  itemCount: 8,
  size: '1024x1024',
  style: 'pixel-art',
  padding: 1,
  itemType: 'equipment',
  background: 'transparent',
  save: true
};

const result = await generateItemSprites(itemDescription, options);
console.log(result.metadata);
```

This will create a sprite sheet with 8 different magical artifacts that can be used as equipment in your game.

## Fetching Available Animation States

To get a list of available animation states for character spritesheets, use the `fetchAvailableAnimationStates` function:

```javascript
const states = await fetchAvailableAnimationStates();
console.log(states);
```

This will return an array of available animation states that you can use when generating character spritesheets.

## Fetching Available Sprite Styles

To retrieve a list of available sprite styles, use the `fetchAvailableSpriteStyles` function:

```javascript
const styles = await fetchAvailableSpriteStyles();
console.log(styles);
```

This will return an array of available sprite styles that you can use when generating any type of sprite.

## Conclusion

The SpriteAI SDK provides a robust set of tools for generating game assets using AI. By leveraging these functions, you can quickly create high-quality sprites for characters, environments, and items, saving time and resources in your game development process.

Remember to experiment with different options and descriptions to get the best results for your specific game needs. Happy sprite generating!