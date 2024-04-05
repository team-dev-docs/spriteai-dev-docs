
  
  ```jsx
import InterestingText from '@site/src/components/InterestingText';

# **Remove Background Color from Image**

High Level

This is an async function that removes a specific background color from an image. It is a part of the SpriteAI Node.js SDK, which can be installed from NPM and imported like this:

```javascript
import { removeBackgroundColor } from 'sprite-ai';
```

## Why should I use this function?

This function is useful when you need to remove a specific background color from an image, making it transparent. This can be helpful in various scenarios, such as creating transparent logos, removing unwanted backgrounds from product images, or preparing images for further processing or compositing.

## What are the parameters or arguments required?

1. `inputPath` (string): The file path of the input image.
2. `outputPath` (string): The file path where the processed image with the removed background color will be saved.
3. `targetColor` (string): The CSS color value (e.g., '#FFFFFF' for white) or the name of the color (e.g., 'white') that you want to remove from the background.
4. `colorThreshold` (number, optional): A threshold value that determines the maximum color difference allowed between the target color and the actual pixel color. If the color difference is less than or equal to this threshold, the pixel will be made transparent. The default value is 0.
5. `options` (object, optional): An object containing additional options for processing the image. Currently, no options are available, but this parameter is included for future extensibility.

## Prerequisites

- This function requires the `jimp` library, which is a popular image processing library for Node.js. Make sure you have installed the `jimp` package in your project before using this function.

## How do I use this function?

Here's an example of how to use the `removeBackgroundColor` function:

```javascript
import { removeBackgroundColor } from 'sprite-ai';

async function processImage() {
  const inputPath = '/path/to/input/image.png';
  const outputPath = '/path/to/output/image.png';
  const targetColor = '#FFFFFF'; // White color
  const colorThreshold = 10; // Adjust the threshold as needed

  try {
    const result = await removeBackgroundColor(inputPath, outputPath, targetColor, colorThreshold);
    console.log('Background color removal successful:', result);
  } catch (error) {
    console.error('Error removing background color:', error);
  }
}

processImage();
```

In this example, the `removeBackgroundColor` function is called with the following arguments:

- `inputPath`: The file path of the input image to be processed.
- `outputPath`: The file path where the processed image with the removed background color will be saved.
- `targetColor`: The CSS color value '#FFFFFF' (white) that will be removed from the background.
- `colorThreshold`: A value of 10, which means that any pixel with a color difference from the target color (white) less than or equal to 10 will be made transparent.

The function processes the image asynchronously and returns a promise that resolves with the result of the image processing operation. If the operation is successful, the processed image with the removed background color will be saved at the specified `outputPath`.

Note: Make sure to handle any errors that may occur during the image processing operation, as shown in the example with the `catch` block.

## Copy the Code into Your Components Folder

<InterestingText text="The ability to manipulate images programmatically opens up a world of possibilities in the digital realm. Just as an artist can skillfully remove unwanted elements from a canvas, the `removeBackgroundColor` function allows developers to seamlessly extract the essence of an image, leaving behind a transparent backdrop ripe for creative integration." />
  
  