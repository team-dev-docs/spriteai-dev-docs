# New SpriteAI Functions

In this developer blog post, we'll explore the exciting new functions added to the SpriteAI SDK in our latest update. These additions expand the capabilities of our sprite generation toolkit, providing developers with more tools to create rich, diverse game assets.

## New Functions Overview

We've introduced three main new functions to enhance the SpriteAI SDK:

1. `generateEnvironmentSprites`
2. `generateItemSprites`
3. `fetchAvailableAnimationStates`
4. `fetchAvailableSpriteStyles`

Let's dive into each of these functions and see how they can be used in your game development projects.

## generateEnvironmentSprites

The `generateEnvironmentSprites` function allows you to create environment tilesets based on a text description. This is perfect for quickly generating background elements and terrain for your games.

### Function Signature

```javascript
async function generateEnvironmentSprites(description, options = {})
```

### Parameters

- `description` (string): A text description of the environment you want to generate.
- `options` (object): Configuration options for the tileset generation.

### Options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| elements | number | 4 | Number of different elements in the tileset |
| size | string | '1024x1024' | Output image size |
| style | string | 'pixel-art' | Art style to use |
| padding | number | 1 | Padding between tiles |
| theme | string | 'fantasy' | Theme of the environment |

### Example Usage

```javascript
const environmentSprites = await generateEnvironmentSprites('a fantasy forest', {
  elements: 6,
  size: '1024x1024',
  style: 'pixel-art',
  padding: 2,
  theme: 'fantasy',
  save: true
});
console.log(environmentSprites.tileset);
```

This will generate a tileset of fantasy forest elements, with 6 different tiles in a pixel-art style.

## generateItemSprites

The `generateItemSprites` function is designed to create collections of item sprites based on a description. This is invaluable for quickly populating your game's inventory system with a variety of items.

### Function Signature

```javascript
async function generateItemSprites(description, options = {})
```

### Parameters

- `description` (string): A text description of the items you want to generate.
- `options` (object): Configuration options for the item generation.

### Options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| itemCount | number | 4 | Number of different items in the collection |
| size | string | '1024x1024' | Output image size |
| style | string | 'pixel-art' | Art style to use |
| padding | number | 1 | Padding between items |
| itemType | string | 'equipment' | Type of items to generate |
| background | string | 'white' | Background color of the items |

### Example Usage

```javascript
const itemSprites = await generateItemSprites('medieval weapons', {
  itemCount: 8,
  size: '1024x1024',
  style: 'pixel-art',
  padding: 2,
  itemType: 'weapon',
  background: 'transparent',
  save: true
});
console.log(itemSprites.itemSheet);
```

This will generate a collection of 8 medieval weapon sprites in a pixel-art style with a transparent background.

## fetchAvailableAnimationStates

The `fetchAvailableAnimationStates` function provides a list of available animation states that can be used when generating character sprites. This is useful for developers who want to know what animation options are available in the current version of the SDK.

### Function Signature

```javascript
async function fetchAvailableAnimationStates()
```

### Example Usage

```javascript
const animationStates = await fetchAvailableAnimationStates();
console.log(animationStates);
```

This will return an array of strings representing the available animation states, such as ['idle', 'walk', 'run', 'attack', 'jump', 'fall', 'hurt', 'die'].

## fetchAvailableSpriteStyles

The `fetchAvailableSpriteStyles` function returns a list of available sprite styles that can be used when generating sprites. This allows developers to see what visual styles are supported by the SDK.

### Function Signature

```javascript
async function fetchAvailableSpriteStyles()
```

### Example Usage

```javascript
const spriteStyles = await fetchAvailableSpriteStyles();
console.log(spriteStyles);
```

This will return an array of strings representing the available sprite styles, such as ['pixel-art', 'vector', '3d', 'hand-drawn', 'anime'].

## Conclusion

These new functions greatly expand the capabilities of the SpriteAI SDK, allowing developers to generate not just character sprites, but also environment tilesets and item collections. The addition of functions to fetch available animation states and sprite styles also improves the developer experience by providing clear information about the options available.

We're excited to see how you'll use these new features in your game development projects. Happy coding!