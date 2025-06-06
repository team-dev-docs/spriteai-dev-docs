---
title: Fetch Available Sprite Styles
description: Learn how to retrieve the list of available sprite styles for character generation.
---

# Fetch Available Sprite Styles

## Introduction

The `fetchAvailableSpriteStyles` function allows you to retrieve a list of available sprite styles that can be used when generating character sprites. This tutorial will guide you through using this function in your projects.

## Prerequisites

Before you begin, make sure you have:

- Installed the sprite generation library in your project
- Basic knowledge of JavaScript and asynchronous programming

## Fetching Available Sprite Styles

To get the list of available sprite styles, follow these steps:

1. Import the function from the sprite module:

```javascript
import { fetchAvailableSpriteStyles } from './path/to/sprite/module';
```

2. Call the function and handle the returned promise:

```javascript
async function getSpriteStyles() {
  try {
    const styles = await fetchAvailableSpriteStyles();
    console.log('Available sprite styles:', styles);
  } catch (error) {
    console.error('Error fetching sprite styles:', error);
  }
}

getSpriteStyles();
```

3. The function will return an array of strings, each representing an available sprite style.

## Example Output

When you run the code above, you'll see output similar to this:

```
Available sprite styles: ['pixel-art', 'vector', '3d', 'hand-drawn', 'anime']
```

## Using Sprite Styles

Now that you have the list of available styles, you can use them when generating character sprites. For example:

```javascript
import { generateCharacterSpritesheet } from './path/to/sprite/module';

async function createCharacterSprite(description, style) {
  const spritesheet = await generateCharacterSpritesheet(description, {
    style: style
  });
  // Use the generated spritesheet...
}

// Example usage
createCharacterSprite('A brave knight', 'pixel-art');
```

## Next Steps

- Learn how to [Generate Character Spritesheets](/docs/generateCharacterSpritesheet) using different styles
- Explore [Available Animation States](/docs/fetchAvailableAnimationStates) for your sprites

## Common Pitfalls

- ⚠️ The list of available styles may change in future updates. Always check the returned array for the most up-to-date options.
- ⚠️ Make sure to handle potential errors when calling the `fetchAvailableSpriteStyles` function.

By following this guide, you should now be able to fetch and use available sprite styles in your projects. Happy sprite creating!