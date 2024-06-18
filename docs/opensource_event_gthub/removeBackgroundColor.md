
  
  # **Remove Background Color**

**High Level**

This is an asynchronous function that removes a specific background color from an image. It is a part of a Node.js SDK provided by Sprite, which you can install from NPM and import using the following code:

```javascript
import { sprite } from 'sprite';
```

## Why should I use this function?

You should use this function if you need to remove a specific background color from an image. This can be useful in various scenarios, such as:

1. **Preparing images for transparency**: If you have an image with a solid background color that you want to remove, this function can make the background transparent, allowing you to overlay the image on different backgrounds or use it with transparent backgrounds.

2. **Image processing and manipulation**: This function can be a part of a larger image processing pipeline, where removing the background color is a necessary step before performing other operations, such as resizing, cropping, or applying filters.

3. **Web development**: When working with web applications or websites, you may need to remove the background color of images to ensure they blend seamlessly with the site's design or to create transparent image overlays.

## What are the parameters or arguments required?

The `removeBackgroundColor` function accepts the following parameters:

1. `inputPath` (string, required): The file path of the input image you want to process.
2. `outputPath` (string, required): The file path where the processed image with the removed background color will be saved.
3. `targetColor` (string, required): The CSS color value (e.g., '#FFFFFF' for white, '#0000FF' for blue) representing the background color you want to remove from the image.
4. `colorThreshold` (number, optional): A value between 0 and 1 that determines the threshold for color difference. Colors that differ from the `targetColor` by less than or equal to this threshold will be considered part of the background and made transparent. The default value is 0, which means only the exact `targetColor` will be removed.
5. `options` (object, optional): An optional object that can be used to pass additional options to the underlying image processing library (Jimp). Currently, no options are defined, but this parameter is included for future extensibility.

## Prerequisites

To use this function, you need to have the following prerequisites:

1. **Node.js**: This function is part of a Node.js SDK, so you need to have Node.js installed on your system.
2. **Sprite SDK**: You need to install the Sprite SDK by running `npm install sprite` or `yarn add sprite` in your project.
3. **Jimp**: The Sprite SDK uses the Jimp library for image processing. Jimp will be installed automatically when you install the Sprite SDK.

## How do I use this function?

Here's an example of how you can use the `removeBackgroundColor` function:

```javascript
import { sprite } from 'sprite';

const inputPath = 'path/to/your/input/image.jpg';
const outputPath = 'path/to/your/output/image.png';
const targetColor = '#FFFFFF'; // White background color
const colorThreshold = 0.1; // Adjust this value based on your needs

sprite.removeBackgroundColor(inputPath, outputPath, targetColor, colorThreshold)
  .then((result) => {
    console.log('Background color removed successfully!');
    console.log(result); // Log the result from Jimp's writeAsync method
  })
  .catch((error) => {
    console.error('Error removing background color:', error);
  });
```

In this example:

1. We import the `sprite` object from the Sprite SDK.
2. We define the paths for the input and output images.
3. We specify the target color we want to remove from the background (`#FFFFFF` for white).
4. We set the `colorThreshold` to 0.1, which means that colors that differ from the target color by less than or equal to 0.1 will be considered part of the background and made transparent.
5. We call the `removeBackgroundColor` function, passing in the required parameters.
6. If the operation is successful, the function resolves with the result from Jimp's `writeAsync` method, and we log a success message.
7. If an error occurs, we catch and log the error.

By following this example, you can remove the background color from your images using the Sprite SDK's `removeBackgroundColor` function.
  
  