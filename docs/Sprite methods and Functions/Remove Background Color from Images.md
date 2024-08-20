

  # **Remove Background Color**

High Level

This function is part of our Node.js SDK, which you can install from NPM and import from the `sprite` object as follows:

```javascript
import { sprite } from 'sprite'
```

## Why should I use this function?

The `removeBackgroundColor` function is useful when you need to remove a specific background color from an image, making it transparent. This is particularly helpful in image processing tasks, such as preparing sprites or icons where you want to eliminate a uniform background color.

## What parameters or arguments are required?

The function takes the following parameters:

1. `inputPath` (string): The file path of the input image.
2. `outputPath` (string): The file path where the processed image will be saved.
3. `targetColor` (string): The color to be removed, specified as a CSS color string (e.g., '#FFFFFF' for white).
4. `colorThreshold` (number, optional): The tolerance for color matching. Default is 0.
5. `options` (object, optional): Additional options (currently unused in the provided code).

## Prerequisites

- Node.js environment
- The `sprite` package installed via NPM
- The `Jimp` library (used internally by the function)

## How do I use this function?

Here's an example of how to use the `removeBackgroundColor` function:

```javascript
import { sprite } from 'sprite'

async function processImage() {
  const inputPath = 'path/to/input/image.png'
  const outputPath = 'path/to/output/image.png'
  const targetColor = '#FFFFFF' // White background
  const colorThreshold = 10 // Allows for slight color variations

  try {
    await sprite.removeBackgroundColor(inputPath, outputPath, targetColor, colorThreshold)
    console.log('Background removed successfully!')
  } catch (error) {
    console.error('Error removing background:', error)
  }
}

processImage()
```

This function uses the Jimp library to read the input image, scan through each pixel, and make pixels transparent if their color is within the specified threshold of the target color. The resulting image with the background removed is then saved to the specified output path.

Note that the function is asynchronous and returns a Promise, so you should use `await` when calling it or handle the Promise appropriately.

  