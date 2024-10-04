

  # **Remove Background Color**

High Level

This function is part of our Node.js SDK, which you can install from NPM and import from the `sprite` object as follows:

```javascript
import { sprite } from 'sprite'
```

## Why should I use this function?

The `removeBackgroundColor` function is useful when you need to remove a specific background color from an image, making it transparent. This is particularly helpful for creating sprites or isolating objects in images for various graphic design or game development purposes.

## What parameters or arguments are required?

The function requires the following parameters:

1. `inputPath` (string): The path to the input image file.
2. `outputPath` (string): The path where the processed image will be saved.
3. `targetColor` (string): The color to be removed, specified as a CSS color string (e.g., '#FFFFFF' for white).
4. `colorThreshold` (number, optional): The tolerance for color matching. Default is 0.
5. `options` (object, optional): Additional options (currently unused in the provided code).

## Prerequisites

- Node.js environment
- The `sprite` package installed via NPM
- The `Jimp` library (which is likely a dependency of the `sprite` package)

## How do I use this function?

To use the `removeBackgroundColor` function, follow these steps:

1. Import the function from the `sprite` package.
2. Call the function with the required parameters.
3. Await the result, as it's an asynchronous function.

Here's an example of how to use the function:

```javascript
import { sprite } from 'sprite';

async function processImage() {
  try {
    const result = await sprite.removeBackgroundColor(
      'input.png',
      'output.png',
      '#FFFFFF',
      10
    );
    console.log('Background removed successfully');
  } catch (error) {
    console.error('Error processing image:', error);
  }
}

processImage();
```

This function scans the input image pixel by pixel, comparing each pixel's color to the specified target color. If the color difference is within the specified threshold, it sets the pixel's alpha channel to 0, making it transparent. The resulting image is then saved to the specified output path.

Note that the color threshold parameter allows for some flexibility in color matching, which can be useful when dealing with slightly varying background colors or anti-aliasing effects in the original image.

  