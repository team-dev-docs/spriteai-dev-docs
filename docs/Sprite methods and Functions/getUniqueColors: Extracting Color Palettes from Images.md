

  # **getUniqueColors Function**

High Level

This is an asynchronous function that extracts unique colors from an image. It's part of our Node.js SDK, which you can install from NPM and import from the `sprite` object like this:

```javascript
import { sprite } from 'sprite'
```

## Why should I use this function?

Use this function when you need to analyze the color palette of an image. It's particularly useful for:
- Identifying the number of distinct colors in an image
- Extracting a color palette for further processing or analysis
- Preparing data for color-based image manipulation tasks

## What parameters or arguments are required?

The function takes two parameters:
1. `imagePath` (required): A string representing the path to the image file you want to analyze.
2. `options` (optional): An object for additional configuration (currently not utilized in the provided code).

## Prerequisites

Before using this function, ensure you have:
1. Installed the Jimp library, as the function relies on it for image processing.
2. Properly set up the sprite SDK in your project.

## How do I use this function?

Here's a step-by-step guide to using the `getUniqueColors` function:

1. Import the function from the sprite SDK:
   ```javascript
   import { sprite } from 'sprite'
   ```

2. Call the function with the path to your image:
   ```javascript
   const imagePath = 'path/to/your/image.png'
   const uniqueColors = await sprite.getUniqueColors(imagePath)
   ```

3. The function returns a Promise that resolves to an array of unique colors in the image, represented as integer values.

4. You can then use these color values for further processing or analysis in your application.

Note: The function ignores fully transparent pixels (alpha = 0) when collecting unique colors.

Example usage:
```javascript
import { sprite } from 'sprite'

async function analyzeImageColors() {
  const imagePath = 'example.png'
  try {
    const colors = await sprite.getUniqueColors(imagePath)
    console.log(`The image contains ${colors.length} unique colors.`)
    // Further processing with the color data...
  } catch (error) {
    console.error('Error analyzing image colors:', error)
  }
}

analyzeImageColors()
```

This function provides a powerful tool for color analysis in images, enabling various image processing and design-related tasks in your Node.js applications.

  