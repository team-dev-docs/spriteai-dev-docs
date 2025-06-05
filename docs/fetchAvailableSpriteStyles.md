---
title: fetchAvailableSpriteStyles Documentation
description: Learn how to use the `fetchAvailableSpriteStyles` function to retrieve the list of available sprite styles for sprite generation.
---

# fetchAvailableSpriteStyles Documentation

## Introduction

The `fetchAvailableSpriteStyles` function is a powerful utility in our SDK that allows developers to retrieve the complete list of available sprite styles that can be used when generating sprites. This function is essential for creating dynamic sprite generation workflows and ensuring your application uses only supported styles.

## Prerequisites

Before you begin, ensure you have the following:

- A working development environment set up
- The latest version of our SDK installed
- Basic understanding of JavaScript and asynchronous functions

## Usage

To use `fetchAvailableSpriteStyles`, import it from the sprite module and call the function to get all available styles.

### Importing the Function

```javascript
import { fetchAvailableSpriteStyles } from './path/to/sprite/module';
```

### Calling the Function

The `fetchAvailableSpriteStyles` function does not require any parameters. Simply call it to retrieve the list of available sprite styles.

```javascript
const spriteStyles = await fetchAvailableSpriteStyles();
console.log(spriteStyles);
```

### Example Output

The function returns an array of available sprite styles. Here's an example of what the output might look like:

```javascript
[
  'pixel-art',
  'vector',
  '3d',
  'hand-drawn',
  'anime',
  'realistic',
  'cartoon',
  'minimalist'
]
```

## Using with Sprite Generation

Once you have the list of available sprite styles, you can use them when generating character sprites, environment sprites, or item sprites. Below are examples of how to integrate the styles with various sprite generation functions.

### Example: Generating a Character Spritesheet with Dynamic Style Selection

```javascript
import { fetchAvailableSpriteStyles, generateCharacterSpritesheet } from './path/to/sprite/module';

async function generateSpriteWithDynamicStyle() {
  const availableStyles = await fetchAvailableSpriteStyles();
  const selectedStyle = availableStyles.find(style => style === 'pixel-art') || availableStyles[0];

  const result = await generateCharacterSpritesheet("A brave knight", {
    states: ['idle', 'walk', 'attack'],
    framesPerState: 6,
    size: '1024x1024',
    style: selectedStyle,
    padding: 1,
    direction: 'right'
  });

  console.log(`Generated sprite with style: ${selectedStyle}`);
  console.log(result);
}

generateSpriteWithDynamicStyle();
```

### Example: Creating a Style Selector Interface

```javascript
import { fetchAvailableSpriteStyles } from './path/to/sprite/module';

async function createStyleSelector() {
  const styles = await fetchAvailableSpriteStyles();
  
  // Create a dropdown or selection interface
  const styleOptions = styles.map(style => ({
    value: style,
    label: style.charAt(0).toUpperCase() + style.slice(1).replace('-', ' ')
  }));
  
  console.log('Available style options:', styleOptions);
  return styleOptions;
}

createStyleSelector();
```

## Parameters

The `fetchAvailableSpriteStyles` function does not accept any parameters.

## Return Value

Returns an array of strings, each representing an available sprite style that can be used with sprite generation functions.

## Style Descriptions

Here's a brief overview of common sprite styles you might encounter:

- **pixel-art**: Classic retro-style pixelated graphics, perfect for indie games
- **vector**: Clean, scalable vector-based artwork
- **3d**: Three-dimensional rendered sprites with depth and shadows
- **hand-drawn**: Artistic, sketched appearance with organic lines
- **anime**: Japanese animation-inspired character designs
- **realistic**: Photo-realistic or highly detailed artwork
- **cartoon**: Stylized, colorful cartoon-like graphics
- **minimalist**: Simple, clean designs with minimal detail

## Error Handling

When using `fetchAvailableSpriteStyles`, consider implementing proper error handling:

```javascript
async function getSpriteStylesSafely() {
  try {
    const styles = await fetchAvailableSpriteStyles();
    return styles;
  } catch (error) {
    console.error('Failed to fetch sprite styles:', error);
    // Return a fallback list of common styles
    return ['pixel-art', 'vector', 'cartoon'];
  }
}
```

## Notes or Considerations

- The list of sprite styles is dynamically maintained and may be updated as new styles are added to the system
- Different styles may produce varying results in terms of generation time and output quality
- Some styles work better with certain types of descriptions or character concepts
- Consider caching the results if you need to call this function multiple times in your application
- The style parameter is case-sensitive, so ensure you use the exact string returned by this function

## Next Steps

- Explore the [generateCharacterSpritesheet documentation](/docs/generateSprite) to learn how to use these styles in character generation
- Check out the [fetchAvailableAnimationStates documentation](/docs/fetchAvailableAnimationStates) to learn about available animation states
- Learn about generating environment and item sprites in the respective documentation pages
- Refer to our [How-To Guides](/docs/how-to) for specific use cases and advanced styling techniques