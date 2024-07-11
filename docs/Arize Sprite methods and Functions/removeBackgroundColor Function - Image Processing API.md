
  
  # **Remove Background Color Function**

High Level

This function is part of our Node.js SDK that you can install from NPM and import from the sprite object `sprite` like this:

```javascript
import { sprite } from 'sprite'
```

## Why should I use this function?

The `removeBackgroundColor` function is useful when you need to remove a specific background color from an image, creating transparency where that color exists. This is particularly helpful in image processing tasks such as:

- Preparing sprites for game development
- Cleaning up product images for e-commerce sites
- Creating transparent PNGs for web design

## What parameters or arguments are required?

The function takes the following parameters:

1. `inputPath` (string): The path to the input image file.
2. `outputPath` (string): The path where the processed image will be saved.
3. `targetColor` (string): The color to be removed, specified as a CSS color string (e.g., '#FFFFFF' for white).
4. `colorThreshold` (number, optional): Tolerance for color matching. Default is 0.
5. `options` (object, optional): Additional options (currently unused in the provided code).

## Prerequisites

- Node.js environment
- Jimp library installed (`npm install jimp`)

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

This example removes the white background from 'input.png', saves the result as 'output.png', and uses a color threshold of 10 to allow for slight variations in the background color.

The function uses the Jimp library to read the image, process it pixel by pixel, and save the result. It compares each pixel's color to the target color and makes it transparent if the color difference is within the specified threshold.
  
  