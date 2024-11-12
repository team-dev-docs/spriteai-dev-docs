

  # **removeBackgroundColor Function**

High Level

This is an asynchronous function that is exported from our Node.js SDK. You can install it from NPM and import it from the sprite object `sprite` like this:

```javascript
import { sprite } from 'sprite'
```

## Why should I use this function?

The `removeBackgroundColor` function is useful when you need to remove a specific background color from an image, effectively making it transparent. This is particularly helpful for creating sprites or images with transparent backgrounds, which can be used in various applications such as game development, web design, or image processing tasks.

## What parameters or arguments are required?

The function takes the following parameters:

1. `inputPath` (string): The file path of the input image.
2. `outputPath` (string): The file path where the processed image will be saved.
3. `targetColor` (string): The color to be removed, specified as a CSS color string (e.g., '#FFFFFF' for white).
4. `colorThreshold` (number, optional): The tolerance for color matching. Default is 0.
5. `options` (object, optional): Additional options (currently unused in the provided code).

## Prerequisites

Before using this function, ensure you have:

1. Installed the Jimp library, as the function relies on it for image processing.
2. The necessary permissions to read from the input path and write to the output path.

## How do I use this function?

To use the `removeBackgroundColor` function, follow these steps:

1. Import the function from the sprite SDK.
2. Prepare your input image and decide on the output location.
3. Determine the background color you want to remove.
4. Call the function with the required parameters.

Here's an example of how to use the function:

```javascript
import { sprite } from 'sprite'

async function processImage() {
  const inputPath = './input-image.png'
  const outputPath = './output-image.png'
  const targetColor = '#FFFFFF' // White background
  const colorThreshold = 5 // Slight tolerance for color variations

  try {
    await sprite.removeBackgroundColor(inputPath, outputPath, targetColor, colorThreshold)
    console.log('Background removed successfully!')
  } catch (error) {
    console.error('Error processing image:', error)
  }
}

processImage()
```

This function uses the Jimp library to read the input image, scan through each pixel, and set the alpha channel to 0 (making it transparent) for pixels that match the target color within the specified threshold. The resulting image with the background removed is then saved to the output path.

  