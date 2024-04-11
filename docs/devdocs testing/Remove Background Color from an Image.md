
  
  # **Remove Background Color from an Image**

**High Level**

This is a function that allows you to remove a specific background color from an image. It is part of the `sprite` library, which you can install from NPM and import as follows:

```javascript
import { sprite } from 'sprite';
```

## Why should I use this function?

You may want to use this function if you have images with a solid background color that you want to remove. This can be useful in various scenarios, such as:

- Creating transparent logos or icons
- Removing unwanted backgrounds from product images
- Preparing images for use with transparent backgrounds on websites or applications

## What parameters or arguments are required?

The `removeBackgroundColor` function accepts the following parameters:

1. `inputPath` (string): The file path of the input image.
2. `outputPath` (string): The file path where the processed image will be saved.
3. `targetColor` (string): The CSS color code (e.g., `#FFFFFF` for white) or color name (e.g., `'blue'`) of the background color you want to remove.
4. `colorThreshold` (number, optional): A numeric value representing the maximum color difference allowed between the target color and the pixel color. This is useful when the background color is not a solid color but has slight variations. The default value is `0`.
5. `options` (object, optional): An optional object for passing additional options to the function. Currently, no options are used.

## Prerequisites

To use this function, you need to have the following:

- Node.js installed on your system
- The `sprite` library installed (e.g., `npm install sprite`)
- The `jimp` library, which is a dependency of `sprite` and is used for image processing

## How do I use this function?

Here's an example of how to use the `removeBackgroundColor` function:

```javascript
import { removeBackgroundColor } from 'sprite';

const inputPath = '/path/to/input-image.jpg';
const outputPath = '/path/to/output-image.png';
const targetColor = '#FFFFFF'; // White background color
const colorThreshold = 10; // Allow slight color variations

removeBackgroundColor(inputPath, outputPath, targetColor, colorThreshold)
  .then(() => {
    console.log('Background color removal successful!');
  })
  .catch((error) => {
    console.error('Error removing background color:', error);
  });
```

In this example, the function reads the input image located at `inputPath`, removes the white background color (or any color within the `colorThreshold` range), and saves the processed image with a transparent background at `outputPath`.

**Important Notes:**

- Make sure to provide valid file paths for `inputPath` and `outputPath`.
- The `colorThreshold` parameter is optional and defaults to `0`. Increase this value if the background color has slight variations and you want to remove those variations as well.
- The `options` parameter is currently not used, but it allows for future extensibility of the function.

By following these instructions, you can effectively remove solid background colors from your images using the `removeBackgroundColor` function provided by the `sprite` library.
  
  