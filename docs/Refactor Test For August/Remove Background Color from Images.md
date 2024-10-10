

  # **Remove Background Color**

High Level

This function is part of our Node.js SDK, which you can install from NPM and import from the `sprite` object as follows:

```javascript
import { sprite } from 'sprite'
```

The `removeBackgroundColor` function allows you to remove a specific background color from an image, making it transparent.

## Why should I use this function?

You should use this function when you need to:

1. Remove a specific background color from an image
2. Create transparent images from ones with solid color backgrounds
3. Process sprites or icons that need a transparent background

This function is particularly useful for game developers, web designers, and anyone working with image assets that require transparency.

## What parameters or arguments are required?

The `removeBackgroundColor` function accepts the following parameters:

1. `inputPath` (string): The path to the input image file
2. `outputPath` (string): The path where the processed image will be saved
3. `targetColor` (string): The color to be removed, in CSS color format (e.g., '#FFFFFF' for white)
4. `colorThreshold` (number, optional): The threshold for color matching (default: 0)
5. `options` (object, optional): Additional options (currently unused)

## Prerequisites

Before using this function, ensure that you have:

1. Installed the Sprite SDK via NPM
2. Imported the SDK in your project
3. The `jimp` library installed (it's a dependency of this function)

## How do I use this function?

Here's an example of how to use the `removeBackgroundColor` function:

```javascript
import { sprite } from 'sprite'

async function processImage() {
  try {
    const inputPath = 'path/to/input/image.png'
    const outputPath = 'path/to/output/image.png'
    const targetColor = '#FFFFFF' // white background
    const colorThreshold = 5 // allow slight color variations

    await sprite.removeBackgroundColor(inputPath, outputPath, targetColor, colorThreshold)
    console.log('Background removed successfully!')
  } catch (error) {
    console.error('Error removing background:', error)
  }
}

processImage()
```

This function uses the Jimp library to read the image, process it pixel by pixel, and remove the specified background color. It then saves the resulting image with a transparent background where the target color was found.

The `colorThreshold` parameter allows for some flexibility in color matching, which can be useful for images with slight variations in the background color due to compression or other factors.

  