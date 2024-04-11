
  
  # **Remove Background Color**

**High Level**

This is an asynchronous function imported from the `sprite` object in our Node.js SDK. It removes a specified background color from an image file. You can install the SDK from NPM and import the function like this:

```javascript
import { sprite } from 'sprite';
```

## Why should I use this function?

You should use this function when you need to remove a solid background color from an image. It's particularly useful for creating transparent backgrounds or preparing images for further processing or compositing.

## What parameters or arguments are required?

1. `inputPath` (string): The file path of the input image.
2. `outputPath` (string): The file path where the processed image will be saved.
3. `targetColor` (string): The CSS color value (e.g., '#FFFFFF' for white) of the background color you want to remove.
4. `colorThreshold` (optional, number): The maximum allowed color difference for a pixel to be considered part of the background color. Default is 0.
5. `options` (optional, object): Additional options for the image processing. Currently, no options are supported.

## Prerequisites

- This function uses the `jimp` library for image processing. Make sure you have installed `jimp` as a dependency in your project.

## How do I use this function?

To use this function, you need to provide the required parameters and call it with the appropriate input and output file paths. Here's an example:

```javascript
import { sprite } from 'sprite';

const inputPath = '/path/to/input/image.png';
const outputPath = '/path/to/output/image.png';
const targetColor = '#FFFFFF'; // White background color

sprite.removeBackgroundColor(inputPath, outputPath, targetColor)
  .then(() => {
    console.log('Background color removed successfully!');
  })
  .catch((error) => {
    console.error('Error removing background color:', error);
  });
```

In this example, the function reads the image from `inputPath`, removes the white background color, and saves the processed image to `outputPath`.

You can adjust the `targetColor` parameter to specify the background color you want to remove. If the background color is not a solid color or has slight variations, you can increase the `colorThreshold` value to include pixels within a certain color difference range.

Keep in mind that this function modifies the image in-place, so make sure to provide the correct output file path if you want to preserve the original image.
  
  