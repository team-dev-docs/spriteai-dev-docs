
  
  # **getUniqueColors Function**

High Level

This is an asynchronous function that analyzes an image file to extract unique colors. It's part of our Node.js SDK, which you can install from NPM and import from the `sprite` object like this:

```javascript
import { sprite } from 'sprite'
```

## Why should I use this function?

Use this function when you need to identify and extract all unique colors from an image. It's particularly useful for:

- Analyzing color palettes in sprites or pixel art
- Preparing images for color reduction or optimization
- Gathering color statistics for image processing tasks

## What parameters or arguments are required?

The function takes two parameters:

1. `imagePath` (required): A string representing the path to the image file you want to analyze.
2. `options` (optional): An object for additional configuration (currently not utilized in the provided code).

## Prerequisites

Before using this function, ensure you have:

1. Installed the Jimp library, as the function relies on it for image processing.
2. Proper read access to the image file specified by `imagePath`.

## How do I use this function?

Here's a step-by-step guide to using the `getUniqueColors` function:

1. Import the function from the sprite SDK:

   ```javascript
   import { sprite } from 'sprite'
   const { getUniqueColors } = sprite
   ```

2. Call the function with the path to your image:

   ```javascript
   const imagePath = './path/to/your/image.png'
   const uniqueColors = await getUniqueColors(imagePath)
   ```

3. The function returns a Promise that resolves to an array of unique colors found in the image, represented as integer values.

4. You can then process or display these colors as needed in your application.

Note that this function ignores fully transparent pixels (alpha = 0) when collecting unique colors. The colors are returned as integer values, which you can convert to RGBA or hex format using Jimp's utility functions if needed.
  
  