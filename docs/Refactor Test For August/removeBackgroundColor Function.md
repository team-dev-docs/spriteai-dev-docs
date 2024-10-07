

  # **Remove Background Color Function**

High Level

This function is part of our Node.js SDK, which you can install from NPM and import from the `sprite` object like this:

```javascript
import { sprite } from 'sprite'
```

## Why should I use this function?

The `removeBackgroundColor` function is useful when you need to remove a specific background color from an image, making it transparent. This is particularly helpful for creating sprites or isolating objects in images for various graphical applications or web designs.

## What parameters or arguments are required?

The function requires the following parameters:

1. `inputPath` (string): The path to the input image file.
2. `outputPath` (string): The path where the processed image will be saved.
3. `targetColor` (string): The color to be removed, specified as a CSS color string (e.g., '#FFFFFF' for white).
4. `colorThreshold` (number, optional): The tolerance for color matching. Default is 0.
5. `options` (object, optional): Additional options (currently unused in the provided code).

## Prerequisites

Before using this function, ensure you have:

1. Installed the Sprite SDK in your Node.js project.
2. The `jimp` library, as the function uses it for image processing.

## How do I use this function?

Here's an example of how to use the `removeBackgroundColor` function:

```javascript
import { sprite } from 'sprite'

async function processImage() {
  const inputPath = 'path/to/input/image.png'
  const outputPath = 'path/to/output/image.png'
  const targetColor = '#FFFFFF' // Remove white background
  const colorThreshold = 10 // Allow some color variation

  try {
    await sprite.removeBackgroundColor(inputPath, outputPath, targetColor, colorThreshold)
    console.log('Background removed successfully!')
  } catch (error) {
    console.error('Error removing background:', error)
  }
}

processImage()
```

This function scans the input image pixel by pixel, comparing each pixel's color to the specified target color. If the color difference is within the threshold, it sets the pixel to transparent. The resulting image is then saved to the specified output path.

The `colorThreshold` parameter allows you to adjust the sensitivity of the color matching. A higher value will remove colors that are similar but not exactly the same as the target color.

Note that this function works asynchronously, so you should use `await` when calling it or handle the returned promise appropriately.

  