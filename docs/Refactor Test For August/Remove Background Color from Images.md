

  # **Remove Background Color**

High Level

This function is part of our Node.js SDK, which you can install from NPM and import from the `sprite` object as follows:

```javascript
import { sprite } from 'sprite'
```

## Why should I use this function?

Use this function when you need to remove a specific background color from an image, creating transparency where that color exists. This is particularly useful for:

- Creating sprites with transparent backgrounds
- Cleaning up images for use in graphic design or web development
- Preparing images for layering in digital compositing

## What parameters are required?

The `removeBackgroundColor` function accepts the following parameters:

1. `inputPath` (string): The path to the input image file.
2. `outputPath` (string): The path where the processed image will be saved.
3. `targetColor` (string): The color to be removed, specified as a CSS color string (e.g., '#FFFFFF' for white).
4. `colorThreshold` (number, optional): The tolerance for color matching. Default is 0.
5. `options` (object, optional): Additional options (currently unused in the provided code).

## Prerequisites

Before using this function, ensure you have:

- Installed the Sprite SDK in your Node.js project
- The Jimp library, which is used internally for image processing

## How do I use this function?

Here's an example of how to use the `removeBackgroundColor` function:

```javascript
import { sprite } from 'sprite'

async function processImage() {
  try {
    await sprite.removeBackgroundColor(
      'input/image.png',
      'output/transparent_image.png',
      '#FFFFFF',
      10
    )
    console.log('Background removal completed successfully')
  } catch (error) {
    console.error('Error removing background:', error)
  }
}

processImage()
```

This example removes white backgrounds from 'input/image.png', saves the result to 'output/transparent_image.png', and uses a color threshold of 10 for more flexible color matching.

The function works by scanning each pixel of the image, comparing it to the target color, and making matching pixels transparent based on the specified threshold. This allows for slight variations in the background color to be removed as well.

  