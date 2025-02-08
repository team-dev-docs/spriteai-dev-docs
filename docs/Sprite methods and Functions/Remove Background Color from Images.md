

  # **removeBackgroundColor Function**

High Level

This function is part of our Node.js SDK, which you can install from NPM and import from the `sprite` object like this:

```javascript
import { sprite } from 'sprite'
```

## Why should I use this function?

The `removeBackgroundColor` function is useful when you need to remove a specific background color from an image. This can be particularly helpful in image processing tasks where you want to isolate the main subject of an image by removing its background.

## What parameters or arguments are required?

The `removeBackgroundColor` function requires the following parameters:

1. Input file path (string): The path to the image file you want to process.
2. Output file path (string): The path where the processed image will be saved.
3. Target color (string): The color to be removed, specified as a hex code (e.g., '#FFFFFF' for white).
4. Color threshold (number): The tolerance level for color matching.

## Prerequisites

- Ensure you have the Sprite SDK installed in your Node.js project.
- The input image file must exist and be accessible.

## How do I use this function?

Here's an example of how to use the `removeBackgroundColor` function:

```javascript
import { sprite } from 'sprite'

const inputPath = '/path/to/your/input/image.png'
const outputPath = '/path/to/your/output/image.png'
const targetColor = '#FFFFFF' // white background
const colorThreshold = 10 // adjust as needed

try {
  await sprite.removeBackgroundColor(inputPath, outputPath, targetColor, colorThreshold)
  console.log('Background removed successfully!')
} catch (error) {
  console.error('Error removing background:', error.message)
}
```

Note that this function will throw an error if the input file doesn't exist. Always ensure that your input file path is correct and the file is accessible before calling this function.

  