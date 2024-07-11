
  
  # **Remove Background Color**

High Level

This function is part of our Node.js SDK, which you can install from NPM and import from the `sprite` object as follows:

```javascript
import { sprite } from 'sprite'
```

## Why should I use this function?

The `removeBackgroundColor` function is useful when you need to remove a specific background color from an image, creating transparency. This is particularly helpful in sprite creation, image editing, or preparing graphics for various applications where a transparent background is required.

## What parameters or arguments are required?

The function takes the following parameters:

1. `inputPath` (string): The path to the input image file.
2. `outputPath` (string): The path where the processed image will be saved.
3. `targetColor` (string): The color to be removed, specified as a CSS color string (e.g., '#FFFFFF' for white).
4. `colorThreshold` (number, optional): The tolerance for color matching. Default is 0.
5. `options` (object, optional): Additional options (currently unused in the provided code).

## Prerequisites

Before using this function, ensure you have:

1. Installed the Sprite SDK in your Node.js project.
2. The `jimp` library, which is used for image processing.
3. Proper read/write permissions for the input and output file paths.

## How do I use this function?

Here's an example of how to use the `removeBackgroundColor` function:

```javascript
import { sprite } from 'sprite'

async function processImage() {
  try {
    await sprite.removeBackgroundColor(
      'path/to/input/image.png',
      'path/to/output/image.png',
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

In this example, the function removes white backgrounds from the input image with a color threshold of 10, allowing for slight variations in the white color. The processed image is then saved to the specified output path.

The function uses the Jimp library to read the image, process it pixel by pixel, and save the result. It calculates the color difference between each pixel and the target color, making pixels transparent if the difference is within the specified threshold.
  
  