

  # **getUniqueColors Function**

High Level

This is an asynchronous function that is part of our image processing toolkit. While it's not explicitly shown as being exported from a Node.js SDK, it can be utilized in your project after proper setup and import.

## Why should I use this function?

The `getUniqueColors` function is useful when you need to analyze an image and extract all unique colors present in it. This can be particularly helpful in various scenarios such as:

1. Color palette generation
2. Image analysis and processing
3. Detecting color usage in sprites or pixel art
4. Optimization of color schemes in graphics

## What parameters or arguments are required?

The function takes two parameters:

1. `imagePath` (required): A string representing the path to the image file you want to analyze.
2. `options` (optional): An object for additional configuration. Currently, no specific options are utilized in the function, but it's included for potential future expansions.

## Prerequisites

To use this function, you need to have:

1. Node.js installed in your environment
2. The `jimp` library installed in your project (`npm install jimp`)

## How do I use this function?

Here's a step-by-step guide on how to use the `getUniqueColors` function:

1. Ensure you have the necessary prerequisites installed.

2. Import the function into your script (exact import statement may vary based on your project structure):

   ```javascript
   import { getUniqueColors } from './path/to/your/module';
   ```

3. Call the function with the path to your image:

   ```javascript
   const imagePath = './path/to/your/image.png';
   
   getUniqueColors(imagePath)
     .then(uniqueColors => {
       console.log('Unique colors:', uniqueColors);
     })
     .catch(error => {
       console.error('Error:', error);
     });
   ```

4. The function returns a Promise that resolves to an array of unique colors found in the image. Each color is represented as an integer value.

5. You can then process this array of unique colors as needed for your specific use case.

Note: The function ignores fully transparent pixels (alpha = 0) when collecting unique colors.

Remember that this function uses the `jimp` library to read and process the image, so make sure you're familiar with its capabilities and limitations when working with different image formats and sizes.

  