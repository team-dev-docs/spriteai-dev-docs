

  # **Remove Background Color**

High Level

This function is part of our Node.js SDK that you can install from NPM. It's designed to remove a specific background color from an image, making it transparent. You can import it from the `sprite` object like this:

```javascript
import { sprite } from 'sprite'
```

## Why should I use this function?

Use this function when you need to remove a specific background color from an image, creating transparency where that color exists. This is particularly useful for:

- Creating sprites or icons with transparent backgrounds
- Preparing images for overlays or compositing
- Cleaning up scanned images or screenshots

## What parameters or arguments are required?

The `removeBackgroundColor` function accepts the following parameters:

1. `inputPath` (string): The path to the input image file.
2. `outputPath` (string): The path where the processed image will be saved.
3. `targetColor` (string): The color to be replaced with transparency (e.g., '#FFFFFF' for white).
4. `colorThreshold` (number, optional): The tolerance for color matching. Default is 0.
5. `options` (object, optional): Additional options (currently unused in the provided code).

## Prerequisites

Before using this function, ensure you have:

1. Installed the `sprite` package from NPM
2. The `jimp` library, as the function relies on it for image processing

## How do I use this function?

Here's a step-by-step guide to using the `removeBackgroundColor` function:

1. Import the function from the `sprite` package.
2. Prepare your input image and decide on an output path.
3. Determine the background color you want to remove (in CSS color format).
4. Optionally, set a color threshold for more flexible color matching.
5. Call the function with the required parameters.

Example usage:

```javascript
import { sprite } from 'sprite'

async function processImage() {
  try {
    await sprite.removeBackgroundColor(
      'input.png',
      'output.png',
      '#FFFFFF',
      5
    )
    console.log('Background removed successfully!')
  } catch (error) {
    console.error('Error processing image:', error)
  }
}

processImage()
```

This function uses the Jimp library to read the input image, scan through each pixel, and make the specified color transparent based on the given threshold. The resulting image is then saved to the output path.

Remember that the effectiveness of the color removal depends on the consistency of the background color in your input image. Adjusting the `colorThreshold` can help with slight color variations.

  