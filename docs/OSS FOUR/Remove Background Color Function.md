

  # **Remove Background Color Function**

High Level

This function is part of our Node.js SDK, which you can install from NPM and import from the `sprite` object as follows:

```javascript
import { sprite } from 'sprite'
```

## Why should I use this function?

The `removeBackgroundColor` function is useful when you need to remove a specific background color from an image, making it transparent. This is particularly helpful for:

1. Creating sprites or icons with transparent backgrounds
2. Preparing images for use in game development or web design
3. Cleaning up scanned images or screenshots

## What parameters or arguments are required?

The function accepts the following parameters:

1. `inputPath` (string): Path to the input image file
2. `outputPath` (string): Path where the processed image will be saved
3. `targetColor` (string): CSS color string of the background color to remove (e.g., '#FFFFFF' for white)
4. `colorThreshold` (number, optional): Tolerance for color matching (default: 0)
5. `options` (object, optional): Additional options (currently unused)

## Prerequisites

To use this function, you need to:

1. Have Node.js installed on your system
2. Install the Sprite SDK via NPM
3. Have the Jimp library available (it's a dependency of the SDK)

## How do I use this function?

Here's an example of how to use the `removeBackgroundColor` function:

```javascript
import { sprite } from 'sprite'

async function processImage() {
  try {
    await sprite.removeBackgroundColor(
      'input.png',
      'output.png',
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

This example removes the white background from 'input.png' and saves the result as 'output.png'. The color threshold is set to 10, allowing for slight variations in the white color.

The function uses the Jimp library to read and process the image. It scans each pixel, compares it to the target color, and makes it transparent if the color difference is within the specified threshold.

Remember that the effectiveness of the background removal depends on the complexity of the image and the consistency of the background color. You may need to adjust the `colorThreshold` for optimal results.

  