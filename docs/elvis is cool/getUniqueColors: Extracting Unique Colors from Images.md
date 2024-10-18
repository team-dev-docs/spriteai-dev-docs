

  # **getUniqueColors Function**

High Level

This is an asynchronous function that extracts unique colors from an image. It's part of our Node.js SDK, which you can install from NPM and import from the sprite object as follows:

```javascript
import { sprite } from 'sprite'
```

## Why should I use this function?

Use this function when you need to analyze the color palette of an image. It's particularly useful for:
- Identifying the number of unique colors in an image
- Color analysis and processing tasks
- Optimizing sprite sheets or image assets

## What parameters or arguments are required?

The function takes two parameters:
1. `imagePath` (required): A string representing the path to the image file.
2. `options` (optional): An object for additional configuration (currently not used in the function).

## Prerequisites

To use this function, ensure you have:
- Installed the Jimp library (the function relies on it for image processing)
- Proper file permissions to read the image at the specified path

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

3. The function returns a Promise that resolves to an array of unique color integers. You can then process or display these colors as needed.

Example usage:
```javascript
try {
  const uniqueColors = await sprite.getUniqueColors('./myImage.png');
  console.log(`Number of unique colors: ${uniqueColors.length}`);
  console.log('Unique colors:', uniqueColors);
} catch (error) {
  console.error('Error processing image:', error);
}
```

Note: The function ignores fully transparent pixels and returns colors as integers. You may need to convert these to RGB or hex values for further use.

  