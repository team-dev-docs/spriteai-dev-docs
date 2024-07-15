
  
  # **Remove Background Color**

High Level

This function is part of our Node.js SDK, which you can install from NPM and import from the `sprite` object as follows:

```javascript
import { sprite } from 'sprite'
```

## Why should I use this function?

The `removeBackgroundColor` function is useful when you need to remove a specific background color from an image, creating transparency. This is particularly helpful in sprite creation, image editing, or preparing graphics for various applications where a transparent background is required.

## What are the parameters or arguments required?

1. `inputPath` (string): The file path of the input image.
2. `outputPath` (string): The file path where the processed image will be saved.
3. `targetColor` (string): The color to be removed, specified as a CSS color string (e.g., '#FFFFFF' for white).
4. `colorThreshold` (number, optional): The tolerance for color matching. Default is 0.
5. `options` (object, optional): Additional options (currently unused in the provided code).

## Prerequisites

- Node.js environment
- The `sprite` package installed via NPM
- The `jimp` library (used internally by the function)

## How do I use this function?

To use the `removeBackgroundColor` function, follow these steps:

1. Import the function from the `sprite` package.
2. Call the function with the required parameters.
3. Await the result as it's an asynchronous function.

Here's an example:

```javascript
import { sprite } from 'sprite';

async function processImage() {
  try {
    const result = await sprite.removeBackgroundColor(
      'input.png',
      'output.png',
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

In this example, the function will remove white backgrounds from 'input.png', save the result to 'output.png', and use a color threshold of 10 to allow for slight variations in the white color.

The function uses the Jimp library to process the image, scanning each pixel and comparing it to the target color. If a pixel's color is within the specified threshold, it's made transparent. This process creates an image with a transparent background where the specified color was previously present.
  
  