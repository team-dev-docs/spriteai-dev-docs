

  # **Remove Background Color**

High Level

This function is part of our Node.js SDK for image processing. It allows you to remove a specific background color from an image. You can import it from the `sprite` object after installing the package from NPM:

```javascript
import { sprite } from 'sprite';
```

## Why should I use this function?

Use this function when you need to remove a specific background color from an image programmatically. It's particularly useful for:

- Preparing images for transparent backgrounds
- Cleaning up scanned documents or drawings
- Creating cutout effects in images

## What parameters are required?

The function requires the following parameters:

1. `inputPath`: The file path of the input image
2. `outputPath`: The file path where the processed image will be saved
3. `targetColor`: The color to be removed (e.g., '#FFFFFF' for white)
4. `colorThreshold`: The tolerance level for color matching (0 for exact match)

## Prerequisites

- Node.js environment
- The `sprite` package installed via NPM
- `Jimp` library (used internally for image processing)

## How do I use this function?

Here's a basic example of how to use the `removeBackgroundColor` function:

```javascript
import { sprite } from 'sprite';

const inputPath = 'path/to/input/image.jpg';
const outputPath = 'path/to/output/image.png';
const targetColor = '#FFFFFF'; // White background
const colorThreshold = 0;

await sprite.removeBackgroundColor(inputPath, outputPath, targetColor, colorThreshold);
```

This will process the image at `inputPath`, remove the white background, and save the result to `outputPath`. Adjust the `targetColor` and `colorThreshold` as needed for your specific use case.

Note: The function returns a Promise, so you should use `await` or `.then()` to handle the asynchronous operation.

  