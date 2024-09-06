

  # **Remove Background Color**

High Level

This function is part of our Node.js SDK, which you can install from NPM and import from the `sprite` object as follows:

```javascript
import { sprite } from 'sprite'
```

## Why should I use this function?

The `removeBackgroundColor` function is designed to remove a specific background color from an image, making it transparent. This is particularly useful when working with sprites or images that need to be integrated into various backgrounds or scenes without carrying their original background.

## What parameters are required?

The function accepts the following parameters:

1. `inputPath` (string): The path to the input image file.
2. `outputPath` (string): The path where the processed image will be saved.
3. `targetColor` (string): The color to be removed, specified as a CSS color string (e.g., '#FFFFFF' for white).
4. `colorThreshold` (number, optional): The tolerance for color matching. Default is 0.
5. `options` (object, optional): Additional options (currently unused in the provided code).

## Prerequisites

- Node.js environment
- Jimp library installed (`npm install jimp`)

## How do I use this function?

To use the `removeBackgroundColor` function, follow these steps:

1. Import the function from the sprite SDK:

```javascript
import { sprite } from 'sprite'
```

2. Call the function with the required parameters:

```javascript
async function processImage() {
  try {
    await sprite.removeBackgroundColor(
      'input.png',
      'output.png',
      '#FFFFFF',
      10
    );
    console.log('Background removed successfully!');
  } catch (error) {
    console.error('Error removing background:', error);
  }
}

processImage();
```

This example removes the white background from 'input.png', saves the result to 'output.png', and uses a color threshold of 10 for more flexible color matching.

The function uses the Jimp library to process the image, scanning each pixel and comparing it to the target color. If a pixel's color is within the specified threshold, it's made transparent. The resulting image is then saved to the specified output path.

  