

  # **removeBackgroundColor Function**

High Level

This is a function that is part of our Node.js SDK, which you can install from NPM and import from the `sprite` object like this:

```javascript
import { sprite } from 'sprite'
```

## Why should I use this function?

The `removeBackgroundColor` function is useful when you need to remove a specific background color from an image. This can be particularly helpful in image processing tasks where you want to isolate the main subject of an image by removing its background.

## What are the parameters or arguments required?

The `removeBackgroundColor` function requires the following parameters:

1. `inputPath`: The file path of the input image.
2. `outputPath`: The file path where the processed image will be saved.
3. `targetColor`: The color to be removed, specified as a hexadecimal string (e.g., '#FFFFFF' for white).
4. `colorThreshold`: A number representing the threshold for color matching. A value of 0 means exact color matching.

## Prerequisites

Before using this function, ensure that you have:

1. Installed the Sprite SDK in your Node.js project.
2. The necessary permissions to read from the input file path and write to the output file path.
3. The `Jimp` library installed, as it's used for image processing in this function.

## How do I use this function?

Here's a step-by-step guide on how to use the `removeBackgroundColor` function:

1. Import the function from the Sprite SDK:

   ```javascript
   import { sprite } from 'sprite'
   ```

2. Prepare your input image and decide on an output path.

3. Call the function with the required parameters:

   ```javascript
   const inputPath = 'path/to/your/input/image.png';
   const outputPath = 'path/to/your/output/image.png';
   const targetColor = '#FFFFFF'; // The color you want to remove (white in this example)
   const colorThreshold = 0; // Exact color matching

   await sprite.removeBackgroundColor(inputPath, outputPath, targetColor, colorThreshold);
   ```

4. The function will process the image and save the result to the specified output path.

Note that this function is asynchronous, so you should use `await` when calling it or handle the returned Promise appropriately.

Remember to handle potential errors, especially when dealing with file operations. The function will throw an error if the input file doesn't exist or if there are issues during the image processing.

  