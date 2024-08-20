

  # **getUniqueColors Function**

High Level

This is an asynchronous function that extracts unique colors from an image. It's part of our Node.js SDK, which you can install from NPM and import from the `sprite` object like this:

```javascript
import { sprite } from 'sprite'
```

## Why should I use this function?

Use this function when you need to analyze the color palette of an image. It's particularly useful for:
- Extracting color information for sprite sheets or pixel art
- Reducing the color palette of an image
- Analyzing color usage in images

## What parameters or arguments are required?

The function requires two parameters:
1. `imagePath` (required): A string representing the path to the image file.
2. `options` (optional): An object for additional configuration (currently unused in the provided code).

## Prerequisites

Before using this function, ensure you have:
1. Installed the Jimp library, as it's used for image processing.
2. Proper read access to the image file specified by `imagePath`.

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

3. The function returns a Promise that resolves to an array of unique color values as integers.

4. You can then process these color values as needed, for example:
   ```javascript
   uniqueColors.forEach(colorInt => {
     const rgba = Jimp.intToRGBA(colorInt);
     console.log(`Color: R${rgba.r} G${rgba.g} B${rgba.b} A${rgba.a}`);
   });
   ```

Note that this function ignores fully transparent pixels (alpha = 0) when collecting unique colors.

  