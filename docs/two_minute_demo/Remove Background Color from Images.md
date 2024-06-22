
  
  # **Remove Background Color**

## High Level

This is a function that is part of the Sprite AI Node.js SDK, which allows you to remove a specific background color from an image. It leverages the `jimp` library for image processing. To use this function, you need to install the SDK from NPM and import the `sprite` object:

```javascript
import { sprite } from 'sprite-ai';
```

## Why should I use this function?

You should use this function if you need to remove a specific background color from an image. This can be useful in various scenarios, such as:

1. **Removing a solid color background**: If your image has a solid color background (e.g., white, blue, or yellow), you can remove it to make the image transparent or prepare it for further processing.

2. **Preparing images for compositing**: By removing the background color, you can easily layer or composite the image with other images or backgrounds.

3. **Improving image quality**: Removing unnecessary background colors can help to improve the overall image quality and clarity.

## What are the required parameters?

The `removeBackgroundColor` function takes the following parameters:

1. `inputPath` (string): The file path of the input image you want to process.
2. `outputPath` (string): The file path where the processed image will be saved.
3. `targetColor` (string): The CSS color code (e.g., '#FFFFFF' for white) or color name (e.g., 'white', 'blue', 'yellow') of the background color you want to remove.
4. `colorThreshold` (number, optional): The maximum color difference threshold for determining if a pixel should be made transparent. The default value is 0, meaning an exact match to the target color is required.
5. `options` (object, optional): An optional object for passing additional options to the image processing library (currently not used).

## Prerequisites

Before using this function, make sure you have:

1. Installed the Sprite AI Node.js SDK by running `npm install sprite-ai` or `yarn add sprite-ai`.
2. Imported the `sprite` object from the SDK in your JavaScript file.
3. Prepared the input image file and determined the target background color you want to remove.

## How do I use this function?

Here's an example of how to use the `removeBackgroundColor` function:

```javascript
import { sprite } from 'sprite-ai';

async function processImage() {
  const inputPath = '/path/to/input/image.jpg';
  const outputPath = '/path/to/output/image.png';
  const targetColor = 'white'; // or '#FFFFFF'
  const colorThreshold = 10; // Allow a slight color variation

  try {
    const result = await sprite.removeBackgroundColor(
      inputPath,
      outputPath,
      targetColor,
      colorThreshold
    );
    console.log('Image processed successfully:', result);
  } catch (error) {
    console.error('Error processing image:', error);
  }
}

processImage();
```

In this example, the `removeBackgroundColor` function is called with the input and output file paths, the target color to remove ('white'), and a color threshold of 10 (allowing a slight color variation). The processed image will be saved at the specified `outputPath`.

By adjusting the `colorThreshold` parameter, you can control how strictly the function matches the target color. A higher value will allow for more color variation, while a lower value (closer to 0) will require an exact match.
  
  