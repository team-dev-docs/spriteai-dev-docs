
  
  # **Remove Background Color Function**

High Level

This function is part of our Node.js SDK, which you can install from NPM and import from the sprite object as follows:

```javascript
import { sprite } from 'sprite'
```

## Why should I use this function?

The `removeBackgroundColor` function is useful when you need to remove a specific background color from an image, creating transparency. This is particularly helpful in sprite creation, image editing, and preparing graphics for various applications where a transparent background is required.

## What parameters or arguments are required?

The function takes the following parameters:

1. `inputPath` (string): The path to the input image file.
2. `outputPath` (string): The path where the processed image will be saved.
3. `targetColor` (string): The color to be removed, specified as a CSS color string (e.g., '#FFFFFF' for white).
4. `colorThreshold` (number, optional): The tolerance for color matching. Default is 0.
5. `options` (object, optional): Additional options for image processing (currently unused in the provided code).

## Prerequisites

- Node.js environment
- The `sprite` package installed in your project
- The `jimp` library (used internally by the function)

## How do I use this function?

To use the `removeBackgroundColor` function, follow these steps:

1. Import the function from the sprite package:

   ```javascript
   import { sprite } from 'sprite'
   ```

2. Call the function with the required parameters:

   ```javascript
   const inputPath = 'path/to/input/image.png';
   const outputPath = 'path/to/output/image.png';
   const targetColor = '#FFFFFF'; // Example: remove white background
   const colorThreshold = 10; // Optional: adjust for color tolerance

   try {
     await sprite.removeBackgroundColor(inputPath, outputPath, targetColor, colorThreshold);
     console.log('Background removed successfully!');
   } catch (error) {
     console.error('Error removing background:', error);
   }
   ```

3. The function will process the image, removing the specified background color, and save the result to the output path.

Note that the function uses the Jimp library internally to read and process the image. It scans each pixel of the image and compares it to the target color. If the color difference is within the specified threshold, it sets the pixel to transparent.
  
  