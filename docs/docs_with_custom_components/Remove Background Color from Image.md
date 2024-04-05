
  
  # **Remove Background Color from Image**

High Level

This is an asynchronous function that removes a specific color from an image, making it transparent. It is part of our Node.js SDK, which you can install from NPM and import into your project using the following code:

```javascript
import { removeBackgroundColor } from 'sprite-sdk';
```

## Why should I use this function?

This function is useful when you need to remove a specific background color from an image, such as white or any other solid color. It can be particularly helpful when working with images that have irregular shapes or objects that need to be extracted from a solid background.

## What are the required parameters or arguments?

1. `inputPath` (string): The file path of the input image.
2. `outputPath` (string): The file path where the modified image will be saved.
3. `targetColor` (string): The color to be removed from the image, specified as a CSS color code (e.g., '#FFFFFF' for white).
4. `colorThreshold` (number, optional): The maximum color difference allowed for a pixel to be considered part of the target color. This parameter has a default value of 0.
5. `options` (object, optional): An optional object that can be used to pass additional options to the function. Currently, no specific options are implemented.

## Prerequisites

- This function is part of our Node.js SDK, so you need to have Node.js installed on your machine.
- You need to install the `sprite-sdk` package from NPM using the following command:

```
npm install sprite-sdk
```

- The function uses the `jimp` library for image processing, which is included as a dependency in the `sprite-sdk` package.

## How do I use this function?

Here's an example of how you can use the `removeBackgroundColor` function:

```javascript
import { removeBackgroundColor } from 'sprite-sdk';

const inputPath = '/path/to/input/image.jpg';
const outputPath = '/path/to/output/image.png';
const targetColor = '#FFFFFF'; // White color
const colorThreshold = 10; // Adjust this value based on your needs

try {
  const result = await removeBackgroundColor(inputPath, outputPath, targetColor, colorThreshold);
  console.log('Background color removal successful:', result);
} catch (error) {
  console.error('Error removing background color:', error);
}
```

In this example, we import the `removeBackgroundColor` function from the `sprite-sdk` package. We then provide the necessary arguments:

- `inputPath`: The file path of the input image.
- `outputPath`: The file path where the modified image will be saved.
- `targetColor`: The color to be removed from the image, in this case, white (`#FFFFFF`).
- `colorThreshold`: An optional parameter that specifies the maximum color difference allowed for a pixel to be considered part of the target color. In this example, it is set to 10.

The function returns a promise that resolves with the result of the operation. If the background color removal is successful, the modified image will be saved to the specified `outputPath`.

Note: Make sure to replace `/path/to/input/image.jpg` and `/path/to/output/image.png` with the actual file paths on your system.
  
  