# Advanced Techniques

This document covers advanced techniques and features of the SpriteAI library that can help you create more complex and customized sprite-based assets for your projects.

## Custom Animation States

While SpriteAI provides default animation states, you can create custom animation sequences for your character spritesheets. Here's how to use custom animation states:

```javascript
import { generateCharacterSpritesheet } from 'spriteai';

const description = 'A cyberpunk hacker';
const options = {
  states: ['hack', 'type', 'sneak', 'jack-in'],
  framesPerState: 8,
  size: '1024x1024',
  style: 'pixel-art',
  direction: 'left'
};

const result = await generateCharacterSpritesheet(description, options);
console.log(result.metadata.frameData);
```

This example creates a character spritesheet with custom hacking-themed animation states.

## Environment Generation

SpriteAI can generate environment sprites to complement your character sprites. Use the `generateEnvironmentSprites` function to create tileset-style environmental elements:

```javascript
import { generateEnvironmentSprites } from 'spriteai';

const description = 'Cyberpunk city elements';
const options = {
  elements: 6,
  size: '1024x1024',
  style: 'pixel-art',
  theme: 'cyberpunk'
};

const result = await generateEnvironmentSprites(description, options);
console.log(result.metadata.tileData);
```

This generates a tileset of cyberpunk city elements that can be used as background or interactive elements in your game.

## Item Generation

For creating game items or icons, use the `generateItemSprites` function:

```javascript
import { generateItemSprites } from 'spriteai';

const description = 'Futuristic hacking tools';
const options = {
  itemCount: 8,
  size: '512x512',
  style: 'pixel-art',
  itemType: 'equipment'
};

const result = await generateItemSprites(description, options);
console.log(result.metadata.itemData);
```

This creates a set of futuristic hacking tool sprites that can be used as inventory items or pickups in your game.

## Landscape Generation

To create detailed background landscapes, use the `generateLandscapeSprite` function:

```javascript
import { generateLandscapeSprite } from 'spriteai';

const description = 'Dystopian cityscape';
const options = {
  size: '1024x512',
  style: 'pixel-art',
  timeOfDay: 'night',
  weather: 'rainy',
  perspective: 'side-scrolling'
};

const result = await generateLandscapeSprite(description, options);
console.log(result.metadata);
```

This generates a dystopian cityscape background suitable for a side-scrolling game.

## Background Removal

For more control over your sprites, you can remove backgrounds using the `removeBackgroundColor` function:

```javascript
import { removeBackgroundColor } from 'spriteai';

const inputPath = 'path/to/sprite.png';
const outputPath = 'path/to/output.png';
const targetColor = '#FFFFFF';
const colorThreshold = 10;

await removeBackgroundColor(inputPath, outputPath, targetColor, colorThreshold);
console.log('Background removed successfully');
```

This removes the white background from a sprite, making it transparent.

## Combining Techniques

You can combine these advanced techniques to create complex game assets. For example:

1. Generate a character spritesheet with custom states
2. Create environment tiles that match the character's theme
3. Generate item sprites for the character to use
4. Create a landscape background for the game scene
5. Remove backgrounds from all generated assets for seamless integration

By leveraging these advanced techniques, you can create cohesive and detailed sprite-based games with SpriteAI.

Remember to experiment with different descriptions, styles, and options to achieve the desired results for your specific game or application.