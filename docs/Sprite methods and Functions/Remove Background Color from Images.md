
  
  # **Remove Background Color**

High Level

This function is part of our Node.js SDK that you can install from NPM and import from the `sprite` object as follows:

```javascript
import { sprite } from 'sprite'
```

## Why should I use this function?

The `removeBackgroundColor` function is useful when you need to remove a specific background color from an image, creating transparency. This is particularly helpful in sprite creation, image editing, or preparing graphics for various applications where a transparent background is required.

## What parameters or arguments are required?

The function requires the following parameters:

1. `inputPath` (string): The path to the input image file.
2. `outputPath` (string): The path where the processed image will be saved.
3. `targetColor` (string): The color to be removed, specified as a CSS color string (e.g., '#FFFFFF' for white).
4. `colorThreshold` (number, optional): The tolerance for color matching. Default is 0.
5. `options` (object, optional): Additional options for image processing (currently unused in the provided code).

## Prerequisites

- Node.js installed on your system
- The `sprite` package installed in your project
- The `jimp` library, which is used internally for image processing

## How do I use this function?

To use the `removeBackgroundColor` function, follow these steps:

1. Import the function from the `sprite` package:

```javascript
import { sprite } from 'sprite'
```

2. Call the function with the required parameters:

```javascript
async function processImage() {
  try {
    await sprite.removeBackgroundColor(
      'path/to/input/image.png',
      'path/to/output/image.png',
      '#FFFFFF',
      10
    );
    console.log('Background removed successfully');
  } catch (error) {
    console.error('Error removing background:', error);
  }
}

processImage();
```

This example removes a white background with a color threshold of 10. Adjust the `targetColor` and `colorThreshold` as needed for your specific use case.

The function processes the image pixel by pixel, comparing each pixel's color to the target color. If the color difference is within the specified threshold, it sets the pixel to transparent. The resulting image is then saved to the specified output path.
  
  