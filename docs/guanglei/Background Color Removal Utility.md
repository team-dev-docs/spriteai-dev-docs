
  
  # **Background Color Removal Utility**

High Level

This function is part of the Sprite Node.js SDK, designed to remove a specific background color from an image. It leverages the power of the Jimp library for image manipulation. To use this function, you need to install the Sprite SDK from NPM and import the required functionality from the `sprite` object.

```javascript
import { removeBackgroundColor } from 'sprite';
```

## Why should I use this function?

The `removeBackgroundColor` function is useful when you need to remove a specific background color from an image, making the background transparent. This can be beneficial in various scenarios, such as:

1. **Image Compositing**: Combining multiple images with different backgrounds into a cohesive composition.
2. **Overlay Effects**: Creating overlays or watermarks on images with transparent backgrounds.
3. **Image Editing**: Removing unwanted background colors from images for further editing or processing.

## What are the required parameters?

The `removeBackgroundColor` function accepts the following parameters:

1. `inputPath` (string): The file path of the input image.
2. `outputPath` (string): The file path where the processed image will be saved.
3. `targetColor` (string): The CSS color code (e.g., '#FFFFFF' for white) or color name (e.g., 'blue') representing the color to be removed from the background.
4. `colorThreshold` (number, optional): A value between 0 and 1 that determines the tolerance for color matching. A lower value will result in a more precise color match, while a higher value will allow for a broader range of colors to be considered as the target color. The default value is 0.
5. `options` (object, optional): An object containing additional options for the Jimp library. Currently, no specific options are used in this function.

## Prerequisites

Before using this function, make sure you have the following prerequisites:

1. Node.js installed on your system.
2. The Sprite SDK installed via NPM by running `npm install sprite`.
3. The Jimp library, which is a dependency of the Sprite SDK and will be automatically installed.

## How do I use this function?

Here's an example of how to use the `removeBackgroundColor` function:

```javascript
import { removeBackgroundColor } from 'sprite';

const inputPath = '/path/to/input/image.jpg';
const outputPath = '/path/to/output/image.png';
const targetColor = '#FFFFFF'; // White color
const colorThreshold = 0.2; // Adjust the threshold as needed

removeBackgroundColor(inputPath, outputPath, targetColor, colorThreshold)
  .then(() => {
    console.log('Background color removal successful!');
  })
  .catch((error) => {
    console.error('Error:', error);
  });
```

In this example:

1. The `removeBackgroundColor` function is imported from the Sprite SDK.
2. The `inputPath` and `outputPath` variables specify the file paths for the input and output images, respectively.
3. The `targetColor` is set to '#FFFFFF', which represents the white color that will be removed from the background.
4. The `colorThreshold` is set to 0.2, allowing for a slight variation in the color to be considered as the target color.
5. The `removeBackgroundColor` function is called with the provided parameters, and the result is handled using Promise callbacks.

After executing this code, the output image at the specified `outputPath` will have the target color (white in this case) removed from the background, making it transparent.
  
  