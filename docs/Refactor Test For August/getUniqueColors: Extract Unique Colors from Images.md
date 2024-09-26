

  # **getUniqueColors Function**

High Level

The `getUniqueColors` function is an asynchronous method that analyzes an image and returns an array of unique colors present in the image. This function is part of our Node.js SDK, which you can install from NPM and import from the `sprite` object as follows:

```javascript
import { sprite } from 'sprite'
```

## Why should I use this function?

You should use this function when you need to extract a list of unique colors from an image. This can be particularly useful for:

1. Color palette generation
2. Image analysis and processing
3. Sprite sheet optimization
4. Color-based image categorization

## What parameters or arguments are required?

The `getUniqueColors` function requires the following parameters:

1. `imagePath` (required): A string representing the path to the image file you want to analyze.
2. `options` (optional): An object for additional configuration options (currently not utilized in the provided code, but reserved for future enhancements).

## Prerequisites

To use this function, you need to:

1. Have Node.js installed in your development environment.
2. Install the Sprite SDK via NPM.
3. Have the `jimp` library installed, as the function relies on it for image processing.

## How do I use this function?

Here's a step-by-step guide on how to use the `getUniqueColors` function:

1. Import the function from the Sprite SDK:

   ```javascript
   import { sprite } from 'sprite'
   ```

2. Call the function with the path to your image:

   ```javascript
   const imagePath = './path/to/your/image.png';
   
   try {
     const uniqueColors = await sprite.getUniqueColors(imagePath);
     console.log('Unique colors:', uniqueColors);
   } catch (error) {
     console.error('Error processing image:', error);
   }
   ```

3. The function will return an array of unique colors represented as integers.

4. You can convert these color integers to RGBA values using Jimp's `intToRGBA` method if needed:

   ```javascript
   const Jimp = require('jimp');
   
   uniqueColors.forEach(colorInt => {
     const rgba = Jimp.intToRGBA(colorInt);
     console.log(`Color: R${rgba.r} G${rgba.g} B${rgba.b} A${rgba.a}`);
   });
   ```

Note that the function ignores fully transparent pixels (alpha = 0) when collecting unique colors.

  