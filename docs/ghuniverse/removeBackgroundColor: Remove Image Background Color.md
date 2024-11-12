

  # **removeBackgroundColor Function**

High Level

This function is part of our Node.js SDK, which you can install from NPM and import from the `sprite` object as follows:

```javascript
import { sprite } from 'sprite';
```

## Why should I use this function?

The `removeBackgroundColor` function is useful when you need to remove a specific background color from an image. This can be particularly helpful in image processing tasks where you want to isolate the main subject of an image by eliminating a uniform background.

## What parameters are required?

The function requires the following parameters:
1. Input file path (string)
2. Output file path (string)
3. Target color (string, in hexadecimal format)
4. Color threshold (number)

## Prerequisites

- Node.js environment
- Sprite SDK installed in your project
- Access to the file system for reading and writing image files

## How do I use this function?

To use the `removeBackgroundColor` function, you need to provide the path to the input image, specify where you want to save the processed image, define the background color you want to remove, and set a color threshold for the removal process.

Here's an example of how you might use it:

```javascript
import { sprite } from 'sprite';

const inputPath = './path/to/input/image.png';
const outputPath = './path/to/output/image.png';
const targetColor = '#FFFFFF';  // White background
const colorThreshold = 10;  // Allows for slight variations in the background color

try {
  await sprite.removeBackgroundColor(inputPath, outputPath, targetColor, colorThreshold);
  console.log('Background removal successful');
} catch (error) {
  console.error('Error removing background:', error);
}
```

Note that the function will throw an error if the input file doesn't exist, so it's important to handle potential errors when using this function.

  