

  # **Remove Background Color**

High Level

This function is part of our Node.js SDK, which you can install from NPM and import from the `sprite` object as follows:

```javascript
import { sprite } from 'sprite'
```

The `removeBackgroundColor` function allows you to remove a specific background color from an image, making it transparent.

## Why should I use this function?

Use this function when you need to:
- Remove a uniform background color from an image
- Create transparent images for use in web design or game development
- Prepare images for overlaying on other backgrounds
- Clean up sprite sheets or individual sprite images

## What parameters or arguments are required?

The function takes the following parameters:
1. `inputPath` (string): Path to the input image file
2. `outputPath` (string): Path where the processed image will be saved
3. `targetColor` (string): CSS color string of the background color to remove (e.g., '#FFFFFF' for white)
4. `colorThreshold` (number, optional): Tolerance for color matching (default: 0)
5. `options` (object, optional): Additional options (currently unused)

## Prerequisites

- Node.js environment
- Jimp library installed (`npm install jimp`)
- Input image file accessible at the specified path

## How do I use this function?

Here's an example of how to use the `removeBackgroundColor` function:

```javascript
import { sprite } from 'sprite'

async function processImage() {
  const inputPath = './input-image.png'
  const outputPath = './output-image.png'
  const targetColor = '#FFFFFF'  // White background
  const colorThreshold = 10  // Allow some variation in the background color

  try {
    await sprite.removeBackgroundColor(inputPath, outputPath, targetColor, colorThreshold)
    console.log('Background removed successfully!')
  } catch (error) {
    console.error('Error processing image:', error)
  }
}

processImage()
```

This function uses the Jimp library to read the input image, scan through each pixel, and make pixels matching the target color (within the specified threshold) transparent. The resulting image is then saved to the output path.

The `colorThreshold` parameter allows you to account for slight variations in the background color. Increase this value if the background isn't perfectly uniform.

Note that this function works best with images that have a solid, uniform background color. Complex or gradient backgrounds may not be removed effectively.

  