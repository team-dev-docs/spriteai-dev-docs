

  # **getUniqueColors Function**

High Level

This is an asynchronous function that extracts unique colors from an image. It's part of our Node.js SDK for game development, which you can install from NPM and import from the `sprite` object like this:

```javascript
import { sprite } from 'sprite'
```

## Why should I use this function?

Use this function when you need to analyze the color palette of sprite images in your game development process. It's particularly useful for:
- Identifying the number of distinct colors in a sprite sheet
- Extracting a color palette for creating cohesive game art
- Optimizing sprite colors for performance in resource-constrained environments
- Preparing data for color-based sprite manipulation tasks, such as palette swapping

## What parameters or arguments are required?

The function takes two parameters:
1. `imagePath` (required): A string representing the path to the sprite image file you want to analyze.
2. `options` (optional): An object for additional configuration (currently not utilized in the provided code).

## Prerequisites

Before using this function, ensure you have:
1. Installed the Jimp library, as the function relies on it for image processing.
2. Properly set up the sprite SDK in your game development project.

## How do I use this function?

Here's a step-by-step guide to using the `getUniqueColors` function in your game development workflow:

1. Import the function from the sprite SDK:
   ```javascript
   import { sprite } from 'sprite'
   ```

2. Call the function with the path to your sprite image:
   ```javascript
   const spritePath = 'path/to/your/sprite.png'
   const uniqueColors = await sprite.getUniqueColors(spritePath)
   ```

3. The function returns a Promise that resolves to an array of unique colors in the sprite, represented as integer values.

4. You can then use these color values for further processing or analysis in your game, such as creating dynamic color palettes or implementing color-based special effects.

Note: The function ignores fully transparent pixels (alpha = 0) when collecting unique colors, which is useful for sprite sheets with transparency.

Example usage in a game development context:
```javascript
import { sprite } from 'sprite'

async function analyzeCharacterSprite() {
  const spritePath = 'character_sprite.png'
  try {
    const colors = await sprite.getUniqueColors(spritePath)
    console.log(`The character sprite contains ${colors.length} unique colors.`)
    // Use the color data to create a dynamic palette swap feature
    implementPaletteSwap(colors)
  } catch (error) {
    console.error('Error analyzing sprite colors:', error)
  }
}

analyzeCharacterSprite()
```

This function provides a powerful tool for color analysis in game sprites, enabling various sprite processing and visual customization tasks in your Node.js game development projects. It can help you create more efficient and visually appealing sprite-based games by giving you insights into your sprite's color composition and allowing for dynamic color manipulations.

  