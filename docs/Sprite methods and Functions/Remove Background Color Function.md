
  
  # **Remove Background Color**

## High-Level

This function is part of the Sprite AI Node.js SDK, designed to remove a specified background color from an image. It utilizes the powerful Jimp library for image processing. You can install the SDK from NPM and import the `sprite` object like this:

```javascript
import { sprite } from 'sprite';
```

## Why Should I Use This Function?

If you need to remove a specific background color from an image, this function provides a convenient and efficient way to achieve that. It can be particularly useful when working with images that have a solid background color you want to make transparent or replace with a different color.

## Parameters/Arguments Required

The function accepts the following parameters:

1. `inputPath` (string): The file path of the input image you want to process.
2. `outputPath` (string): The file path where the processed image will be saved.
3. `targetColor` (string): The CSS color code (e.g., '#FFFFFF' for white) or color name (e.g., 'blue') representing the background color you want to remove.
4. `colorThreshold` (number, optional): A threshold value between 0 and 1 that determines the maximum color difference allowed for a pixel to be considered part of the background color. The default value is 0, meaning an exact match is required.
5. `options` (object, optional): Additional options for image processing (currently unused).

## Prerequisites

Before using this function, ensure that you have the following:

1. Node.js installed on your system.
2. The Sprite AI Node.js SDK installed via NPM.
3. The `jimp` library installed as a dependency (it should be included with the Sprite AI SDK).

## How to Use This Function

Here's an example of how to use the `removeBackgroundColor` function:

```javascript
import { sprite } from 'sprite';

async function removeBackground() {
  const inputPath = '/path/to/input/image.jpg';
  const outputPath = '/path/to/output/image.png';
  const targetColor = '#FFFFFF'; // White background color
  const colorThreshold = 0.1; // Adjust the threshold as needed

  try {
    const result = await sprite.removeBackgroundColor(inputPath, outputPath, targetColor, colorThreshold);
    console.log('Background removal successful:', result);
  } catch (error) {
    console.error('Error removing background:', error);
  }
}

removeBackground();
```

In this example, the function takes the following steps:

1. Reads the input image from the specified `inputPath`.
2. Converts the `targetColor` string to a hexadecimal color code.
3. Scans through each pixel of the image, comparing its color to the `targetColor`.
4. If the color difference between the pixel and the `targetColor` is less than or equal to the `colorThreshold`, the pixel's alpha value (transparency) is set to 0, making it transparent.
5. Writes the processed image to the specified `outputPath`.

The `colorThreshold` parameter allows you to control the tolerance for color matching. A lower value (closer to 0) means that only pixels with an exact color match will be made transparent, while a higher value (closer to 1) will make pixels with similar colors transparent as well.

By adjusting the `targetColor` and `colorThreshold` values, you can effectively remove or make transparent any solid background color from an image using this function.
  
  