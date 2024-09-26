

  # **Remove Background Color Function**

High Level

This function is part of our Node.js SDK, which you can install from NPM and import from the `sprite` object as follows:

```javascript
import { sprite } from 'sprite'
```

The `removeBackgroundColor` function is designed to remove a specific background color from an image, making it transparent.

## Why should I use this function?

Use this function when you need to:
- Remove a specific background color from an image
- Create transparent images from ones with solid color backgrounds
- Prepare images for use in projects that require transparent backgrounds

## What parameters are required?

The function takes the following parameters:
1. `inputPath` (string): Path to the input image file
2. `outputPath` (string): Path where the processed image will be saved
3. `targetColor` (string): CSS color string of the background color to remove (e.g., '#FFFFFF')
4. `colorThreshold` (number, optional): Tolerance for color matching (default: 0)
5. `options` (object, optional): Additional options (currently unused)

## Prerequisites

- Node.js environment
- The `sprite` package installed in your project
- The `Jimp` library (used internally by the function)

## How do I use this function?

Here's an example of how to use the `removeBackgroundColor` function:

```javascript
import { sprite } from 'sprite'

async function processImage() {
  try {
    await sprite.removeBackgroundColor(
      'input-image.png',
      'output-image.png',
      '#FFFFFF',
      10
    )
    console.log('Background removed successfully!')
  } catch (error) {
    console.error('Error processing image:', error)
  }
}

processImage()
```

This function uses the Jimp library to read the input image, scan through each pixel, and make the specified color transparent based on the given threshold. The resulting image is then saved to the specified output path.

The `colorThreshold` parameter allows you to adjust the sensitivity of the color matching. A higher threshold will remove colors that are similar to the target color, which can be useful for images with slight color variations in the background.

Note that this function is asynchronous and returns a Promise, so you should use `await` or `.then()` when calling it.

  