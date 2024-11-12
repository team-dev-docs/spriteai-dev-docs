

  # **Remove Background Color**

High Level

This function is part of our Node.js SDK that you can install from NPM and import from the `sprite` object like this:

```javascript
import { sprite } from 'sprite'
```

The `removeBackgroundColor` function is designed to remove a specific background color from an image file.

## Why should I use this function?

Use this function when you need to remove a uniform background color from an image programmatically. It's particularly useful for:

- Preparing images for overlay on other backgrounds
- Creating transparent PNGs from images with solid color backgrounds
- Batch processing of images to remove consistent background colors

## What parameters are required?

The `removeBackgroundColor` function requires the following parameters:

1. `inputPath`: (string) The file path of the input image
2. `outputPath`: (string) The file path where the processed image will be saved
3. `targetColor`: (string) The color to be removed, in hexadecimal format (e.g., '#FFFFFF' for white)
4. `colorThreshold`: (number) The tolerance level for color matching (0 for exact match)

## Prerequisites

Before using this function, ensure that:

- You have installed the Sprite SDK in your Node.js project
- The input image file exists and is accessible
- You have write permissions for the output directory

## How do I use this function?

Here's a basic example of how to use the `removeBackgroundColor` function:

```javascript
import { sprite } from 'sprite'

const inputPath = './path/to/input/image.png'
const outputPath = './path/to/output/image.png'
const targetColor = '#FFFFFF' // White background
const colorThreshold = 5 // Slight tolerance for color variations

try {
  await sprite.removeBackgroundColor(inputPath, outputPath, targetColor, colorThreshold)
  console.log('Background removal completed successfully')
} catch (error) {
  console.error('Error removing background:', error)
}
```

This function works asynchronously, so remember to use `await` or handle the returned promise appropriately.

Note: The function will throw an error if the input file doesn't exist, so it's a good practice to wrap the function call in a try-catch block for error handling.

  