

  # **Remove Background Color Function**

High Level

This function is part of our Node.js SDK that you can install from NPM and import from the `sprite` object as follows:

```javascript
import { sprite } from 'sprite'
```

## Why should I use this function?

The `removeBackgroundColor` function is useful when you need to remove a specific background color from an image, making it transparent. This is particularly helpful for:

1. Creating sprites or icons with transparent backgrounds
2. Cleaning up images for web or graphic design projects
3. Preparing images for overlays or compositing

## What are the parameters or arguments required?

The function takes the following parameters:

1. `inputPath` (string): The path to the input image file
2. `outputPath` (string): The path where the processed image will be saved
3. `targetColor` (string): The color to be removed, specified as a CSS color string (e.g., '#FFFFFF' for white)
4. `colorThreshold` (number, optional): The tolerance for color matching (default: 0)
5. `options` (object, optional): Additional options (currently unused)

## Prerequisites

Before using this function, ensure you have:

1. Installed the Sprite SDK via NPM
2. Imported the necessary modules in your project
3. The `jimp` library, which is used internally for image processing

## How do I use this function?

Here's a step-by-step guide to using the `removeBackgroundColor` function:

1. Import the function from the Sprite SDK:

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
    console.log('Background removed successfully!');
  } catch (error) {
    console.error('Error removing background:', error);
  }
}

processImage();
```

In this example, we're removing a white background (`#FFFFFF`) with a color threshold of 10. Adjust the `targetColor` and `colorThreshold` as needed for your specific use case.

The function will process the image, removing the specified background color, and save the result to the specified output path. The resulting image will have a transparent background where the target color was previously.

Note: The function returns a promise, so make sure to use `await` or handle the promise appropriately in your code.

  