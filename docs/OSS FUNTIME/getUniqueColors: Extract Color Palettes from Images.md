

  # **getUniqueColors Function**

High Level

This is an asynchronous function that extracts unique colors from an image. It's part of our Node.js SDK, which you can install from NPM and import from the `sprite` object like this:

```javascript
import { sprite } from 'sprite'
```

## Why should I use this function?

Use this function when you need to analyze the color palette of an image. It's particularly useful for:
- Extracting color information for sprite sheets or pixel art
- Optimizing image color usage
- Creating color palettes from existing images

## What parameters or arguments are required?

The function requires the following parameters:
1. `imagePath` (string): The path to the image file you want to analyze.
2. `options` (object, optional): An empty object for future extensibility.

## Prerequisites

Before using this function, ensure you have:
1. Installed the Jimp library (the function uses Jimp for image processing)
2. Proper file permissions to read the image at the specified path

## How do I use this function?

Here's a step-by-step guide to using the `getUniqueColors` function:

1. Import the function from the sprite SDK:
   ```javascript
   import { sprite } from 'sprite'
   ```

2. Call the function with the path to your image:
   ```javascript
   const imagePath = './path/to/your/image.png';
   const uniqueColors = await sprite.getUniqueColors(imagePath);
   ```

3. The function returns a Promise that resolves to an array of unique color integers. You can then use these color integers as needed in your application.

4. To convert the color integers back to RGBA values, you can use Jimp's `intToRGBA` method:
   ```javascript
   const Jimp = require('jimp');
   uniqueColors.forEach(colorInt => {
     const rgba = Jimp.intToRGBA(colorInt);
     console.log(`Color: R=${rgba.r}, G=${rgba.g}, B=${rgba.b}, A=${rgba.a}`);
   });
   ```

Note: The function ignores fully transparent pixels (alpha = 0) when collecting unique colors.

  