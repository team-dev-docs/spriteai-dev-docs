

  # **Remove Background Color**

High Level

This function is part of our Node.js SDK, which you can install from NPM and import from the `sprite` object as follows:

```javascript
import { sprite } from 'sprite'
```

## Why should I use this function?

The `removeBackgroundColor` function is useful when you need to remove a specific background color from an image, effectively making it transparent. This is particularly helpful in scenarios where you want to isolate the main subject of an image or create sprites with transparent backgrounds for use in games or web applications.

## What parameters or arguments are required?

The function accepts the following parameters:

1. `inputPath` (string): The path to the input image file.
2. `outputPath` (string): The path where the processed image will be saved.
3. `targetColor` (string): The color to be removed, specified as a CSS color string (e.g., '#FFFFFF' for white).
4. `colorThreshold` (number, optional): The tolerance for color matching. Default is 0.
5. `options` (object, optional): Additional options for image processing (currently unused in the provided code).

## Prerequisites

To use this function, you need to:

1. Have Node.js installed on your system.
2. Install the Sprite SDK via NPM.
3. Have the Jimp library available, as it's used for image processing.

## How do I use this function?

Here's an example of how to use the `removeBackgroundColor` function:

```javascript
import { sprite } from 'sprite'

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

This function uses the Jimp library to read the input image, scan through each pixel, and make the specified color transparent based on the given threshold. The resulting image is then saved to the specified output path.

The color threshold parameter allows for some flexibility in matching colors, which can be useful when dealing with anti-aliasing or slight color variations in the background.

Note that this function is asynchronous and returns a Promise, so you should use it with `await` or `.then()` to handle the result properly.

  