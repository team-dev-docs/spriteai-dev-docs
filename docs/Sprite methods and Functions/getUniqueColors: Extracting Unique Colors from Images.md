
  
  # **getUniqueColors Function**

High Level

This is an asynchronous function that analyzes an image to extract unique colors. It's part of our Node.js SDK, which you can install from NPM and import from the `sprite` object like this:

```javascript
import { sprite } from 'sprite'
```

## Why should I use this function?

Use `getUniqueColors` when you need to identify and extract all unique colors from an image. This can be particularly useful for:

- Color palette generation
- Image analysis and processing
- Reducing color complexity in sprites or pixel art

## What parameters or arguments are required?

The function requires two parameters:

1. `imagePath` (string): The path to the image file you want to analyze.
2. `options` (object, optional): An empty object by default, reserved for future customization.

## Prerequisites

Before using this function, ensure you have:

1. Installed the Sprite SDK in your project
2. The `jimp` library, as it's used for image processing

## How do I use this function?

Here's a step-by-step guide to using the `getUniqueColors` function:

1. Import the function from the Sprite SDK:

   ```javascript
   import { sprite } from 'sprite'
   ```

2. Call the function with the path to your image:

   ```javascript
   const imagePath = './path/to/your/image.png'
   const uniqueColors = await sprite.getUniqueColors(imagePath)
   ```

3. The function returns a Promise that resolves to an array of unique colors found in the image, represented as integers.

4. You can then process or display these colors as needed in your application.

Note: The function ignores fully transparent pixels (alpha = 0) when identifying unique colors.

Example usage:

```javascript
import { sprite } from 'sprite'

async function analyzeImage() {
  const imagePath = './mySprite.png'
  try {
    const colors = await sprite.getUniqueColors(imagePath)
    console.log(`Found ${colors.length} unique colors in the image.`)
    // Further processing of colors...
  } catch (error) {
    console.error('Error analyzing image:', error)
  }
}

analyzeImage()
```

This function provides a powerful tool for color analysis in images, particularly useful for sprite and pixel art applications.
  
  