
  
  # **getUniqueColors Function**

High Level

This is an asynchronous function that extracts unique colors from an image. It's part of the sprite manipulation toolkit, which you can import into your Node.js project as follows:

```javascript
import { sprite } from 'sprite';
```

## Why should I use this function?

The `getUniqueColors` function is useful when you need to analyze the color palette of an image. It can help in various scenarios such as:

- Color reduction for sprite optimization
- Palette analysis for retro-style game development
- Image processing tasks that require knowledge of the unique colors used

## What parameters or arguments are required?

The function takes two parameters:

1. `imagePath` (required): A string representing the path to the image file you want to analyze.
2. `options` (optional): An object for additional configuration (currently not utilized in the provided code, but reserved for future enhancements).

## Prerequisites

Before using this function, ensure you have:

1. Installed the necessary dependencies, particularly the `jimp` library.
2. Properly set up your Node.js environment.
3. Imported the `sprite` module in your project.

## How do I use this function?

Here's a step-by-step guide to using the `getUniqueColors` function:

1. Import the function from the sprite module:

   ```javascript
   import { sprite } from 'sprite';
   ```

2. Call the function with the path to your image:

   ```javascript
   const imagePath = './path/to/your/image.png';
   const uniqueColors = await sprite.getUniqueColors(imagePath);
   ```

3. The function returns a Promise that resolves to an array of unique colors found in the image, represented as integer values.

4. You can then process or display these colors as needed in your application.

Note that this function ignores fully transparent pixels (alpha = 0) when collecting unique colors. The colors are returned as Jimp integer representations, which you can convert to other formats (like RGB or HEX) using Jimp's utility functions if needed.
  
  