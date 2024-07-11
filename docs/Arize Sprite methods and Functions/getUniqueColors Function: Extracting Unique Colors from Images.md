
  
  # **getUniqueColors Function**

High Level

This is a function that is part of our Node.js SDK. You can access it after installing the package from NPM and importing it from the `sprite` object like this:

```javascript
import { sprite } from 'sprite'
```

## Why should I use this function?

The `getUniqueColors` function is useful when you need to extract all unique colors from an image. This can be particularly helpful for sprite analysis, color palette generation, or image processing tasks where you need to know the exact set of colors used in an image.

## What parameters or arguments are required?

The function requires the following parameters:

1. `imagePath` (string): The path to the image file you want to analyze.
2. `options` (object, optional): An optional parameter for additional configuration (currently not utilized in the provided code).

## Prerequisites

Before using this function, ensure you have:

1. Installed the Jimp library, as the function depends on it for image processing.
2. Proper read access to the image file specified by `imagePath`.

## How do I use this function?

Here's a step-by-step guide on how to use the `getUniqueColors` function:

1. Import the function from the sprite SDK:

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

Note that the function ignores fully transparent pixels (alpha = 0) when collecting colors. The colors are returned as Jimp integer representations, which you can convert to other formats (like RGB or HEX) using Jimp's utility functions if needed.

This function is asynchronous, so remember to use `await` when calling it or handle the returned Promise appropriately.
  
  