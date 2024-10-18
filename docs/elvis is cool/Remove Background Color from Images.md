

  # **Remove Background Color**

High Level

This function is part of our Node.js SDK, which you can install from NPM and import from the `sprite` object as follows:

```javascript
import { sprite } from 'sprite'
```

## Why should I use this function?

The `removeBackgroundColor` function is useful when you need to remove a specific background color from an image, making it transparent. This is particularly helpful in image processing tasks where you want to isolate the main subject of an image by removing its background.

## What are the parameters or arguments required?

The function requires the following parameters:

1. `inputPath` (string): The file path of the input image.
2. `outputPath` (string): The file path where the processed image will be saved.
3. `targetColor` (string): The color to be removed, specified as a CSS color string (e.g., '#FFFFFF' for white).
4. `colorThreshold` (number, optional): The tolerance for color matching. Default is 0.
5. `options` (object, optional): Additional options (currently unused in the provided code).

## Prerequisites

- Node.js environment
- The `sprite` package installed in your project
- The `jimp` library (used internally by the function)

## How do I use this function?

To use the `removeBackgroundColor` function, follow these steps:

1. Import the function from the `sprite` package:

   ```javascript
   import { sprite } from 'sprite'
   ```

2. Call the function with the required parameters:

   ```javascript
   await sprite.removeBackgroundColor(
     'input-image.png',
     'output-image.png',
     '#FFFFFF',
     5
   )
   ```

   This example removes white backgrounds with a threshold of 5.

3. The function returns a promise, so you can use `await` or `.then()` to handle the result.

The function processes the image pixel by pixel, comparing each pixel's color to the target color. If the color difference is within the specified threshold, it sets the pixel to transparent. The resulting image is then saved to the specified output path.

  