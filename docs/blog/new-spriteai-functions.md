# New SpriteAI Functions: Enhancing Game Asset Creation

## Introduction

We're excited to announce the latest additions to our SpriteAI SDK, which significantly expand its capabilities in game asset creation. These new functions will allow developers to generate environment tilesets and item collections with ease, as well as provide improved access to available animation states and sprite styles.

## New Functions Overview

### 1. generateEnvironmentSprites

This function enables the creation of environment tilesets based on a description. It's perfect for quickly generating game backgrounds, terrain, and other environmental elements.

```javascript
async function generateEnvironmentSprites(description, options = {})
```

#### Key Features:
- Customizable number of elements
- Adjustable output size and style
- Theme-based generation
- Automatic tileset arrangement

### 2. generateItemSprites

This function allows for the generation of item collections, ideal for creating game inventories, power-ups, or collectibles.

```javascript
async function generateItemSprites(description, options = {})
```

#### Key Features:
- Customizable item count
- Flexible output size and style
- Specific item type targeting
- Background color options

### 3. fetchAvailableAnimationStates

This utility function provides a list of available animation states, helping developers understand what options are available for character animations.

```javascript
async function fetchAvailableAnimationStates()
```

### 4. fetchAvailableSpriteStyles

Similar to the animation states function, this provides a list of available sprite styles, allowing for more diverse asset creation.

```javascript
async function fetchAvailableSpriteStyles()
```

## Detailed Usage Examples

### Generating Environment Sprites

Here's how you can use the new `generateEnvironmentSprites` function to create a fantasy forest tileset:

```javascript
const description = 'a fantasy forest';
const options = {
  elements: 6,
  size: '1024x1024',
  style: 'pixel-art',
  padding: 2,
  theme: 'fantasy',
  save: true
};

generateEnvironmentSprites(description, options)
  .then(result => {
    console.log('Environment sprites generated:', result.tileset);
  })
  .catch(error => {
    console.error('Error generating environment sprites:', error);
  });
```

### Creating Item Collections

To generate a collection of medieval weapons, you can use the `generateItemSprites` function like this:

```javascript
const description = 'medieval weapons';
const options = {
  itemCount: 8,
  size: '1024x1024',
  style: 'pixel-art',
  padding: 2,
  itemType: 'weapon',
  background: 'transparent',
  save: true
};

generateItemSprites(description, options)
  .then(result => {
    console.log('Item sprites generated:', result.itemSheet);
  })
  .catch(error => {
    console.error('Error generating item sprites:', error);
  });
```

## Conclusion

These new functions represent a significant step forward in our SpriteAI SDK's capabilities. By providing tools for environment and item generation, alongside utilities for accessing animation states and sprite styles, we're empowering game developers to create diverse and rich game assets more efficiently than ever before.

We encourage you to explore these new functions and integrate them into your game development workflow. As always, we welcome your feedback and look forward to seeing the amazing game worlds you'll create with these new tools!

Happy coding!