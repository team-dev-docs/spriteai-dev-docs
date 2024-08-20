

  # **Remove Background Color**

High Level

This is an asynchronous function that removes the background color from an image. It's part of our Node.js SDK, which you can install from NPM and import from the `sprite` object like this:

```javascript
import { sprite } from 'sprite'
```

## Why should I use this function?

Use this function when you need to remove a specific background color from an image, making it transparent. This is particularly useful for creating sprites or preparing images for overlay on different backgrounds.

## What parameters or arguments are required?

The `removeBackgroundColor` function requires the following parameters:

1. `inputPath` (string): The file path of the input image.
2. `outputPath` (string): The file path where the processed image will be saved.
3. `targetColor` (string): The color to be removed, specified as a CSS color string (e.g., '#FFFFFF' for white).
4. `colorThreshold` (number, optional): The tolerance for color matching. Default is 0.
5. `options` (object, optional): Additional options (currently not used in the function).

## Prerequisites

- Node.js environment
- The `sprite` package installed via NPM
- The `Jimp` library (used internally by the function)

## How do I use this function?

Here's an example of how to use the `removeBackgroundColor` function:

```javascript
import { sprite } from 'sprite'

async function processImage() {
  try {
    const result = await sprite.removeBackgroundColor(
      'input.png',
      'output.png',
      '#FFFFFF',
      10
    )
    console.log('Background removed successfully')
  } catch (error) {
    console.error('Error removing background:', error)
  }
}

processImage()
```

This function works by scanning each pixel of the input image and comparing it to the specified target color. If the color difference is within the specified threshold, the pixel is made transparent. The resulting image is then saved to the specified output path.

Note that the color threshold parameter allows for some flexibility in color matching, which can be useful for dealing with slight color variations or anti-aliasing in the original image.

  