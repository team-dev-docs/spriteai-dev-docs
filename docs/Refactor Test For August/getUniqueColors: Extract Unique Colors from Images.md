

  # **getUniqueColors Function**

High Level

This is an asynchronous function that extracts unique colors from an image. It's part of our Node.js SDK, which you can install from NPM and import from the `sprite` object like this:

```javascript
import { sprite } from 'sprite'
```

## Why should I use this function?

Use this function when you need to analyze the color palette of an image. It's particularly useful for:
- Identifying the color scheme of an image
- Preparing data for color-based image processing tasks
- Creating color palettes for design purposes

## What are the parameters or arguments required?

The function takes two parameters:
1. `imagePath` (required): A string representing the path to the image file you want to analyze.
2. `options` (optional): An object for additional configuration (currently not used in the function, but available for future extensions).

## Prerequisites

Before using this function, ensure you have:
1. Installed the Sprite SDK in your project
2. Imported the necessary modules (Jimp is used internally)
3. Access to the image file you want to analyze

## How do I use this function?

Here's a step-by-step guide to using the `getUniqueColors` function:

1. Import the function from the Sprite SDK:
   ```javascript
   import { sprite } from 'sprite'
   ```

2. Call the function with the path to your image:
   ```javascript
   const imagePath = '/path/to/your/image.png'
   const uniqueColors = await sprite.getUniqueColors(imagePath)
   ```

3. The function returns a Promise that resolves to an array of unique colors found in the image, represented as integers.

4. You can then process these colors as needed, for example:
   ```javascript
   uniqueColors.forEach(colorInt => {
     const rgba = Jimp.intToRGBA(colorInt)
     console.log(`Color: R=${rgba.r}, G=${rgba.g}, B=${rgba.b}, A=${rgba.a}`)
   })
   ```

Note: The function ignores fully transparent pixels (alpha = 0) when collecting unique colors.

This function efficiently scans the entire image, collecting unique colors while considering the alpha channel. It's optimized to handle various image sizes and color depths.

  