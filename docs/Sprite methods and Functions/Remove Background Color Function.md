

  # **Remove Background Color Function**

High Level

This function is part of our Node.js SDK, which you can install from NPM and import from the `sprite` object as follows:

```javascript
import { sprite } from 'sprite'
```

## Why should I use this function?

The `removeBackgroundColor` function is useful when you need to remove a specific background color from an image, creating transparency where that color exists. This is particularly helpful for:

1. Creating sprites or icons with transparent backgrounds
2. Cleaning up images for use in design projects
3. Preparing images for overlays or compositing

## What parameters or arguments are required?

The function takes the following parameters:

1. `inputPath` (string): The file path of the input image
2. `outputPath` (string): The file path where the processed image will be saved
3. `targetColor` (string): The color to be removed, specified as a CSS color string (e.g., '#FFFFFF' for white)
4. `colorThreshold` (number, optional): The tolerance for color matching (default is 0)
5. `options` (object, optional): Additional options (currently unused in the provided code)

## Prerequisites

To use this function, you need to:

1. Have Node.js installed on your system
2. Install the Sprite SDK via NPM
3. Have the Jimp library installed (it's used internally by the function)

## How do I use this function?

Here's an example of how to use the `removeBackgroundColor` function:

```javascript
import { sprite } from 'sprite'

async function processImage() {
  try {
    const inputPath = 'path/to/your/input/image.png'
    const outputPath = 'path/to/your/output/image.png'
    const targetColor = '#FFFFFF' // White background
    const colorThreshold = 10 // Allows for slight color variations

    await sprite.removeBackgroundColor(inputPath, outputPath, targetColor, colorThreshold)
    console.log('Background removed successfully!')
  } catch (error) {
    console.error('Error processing image:', error)
  }
}

processImage()
```

This function uses the Jimp library to read the input image, scan through each pixel, and make pixels transparent if they match the target color within the specified threshold. The resulting image is then saved to the output path.

Note that the color threshold parameter allows you to account for slight variations in the background color. A higher threshold will remove colors that are similar to the target color, while a lower threshold will only remove colors that are an exact match.

  