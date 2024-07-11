
  
  # **getUniqueColors Function**

High Level

This is an asynchronous function that analyzes an image file to extract unique colors. It's part of our Node.js SDK, which you can install from NPM and import from the `sprite` object like this:

```javascript
import { sprite } from 'sprite'
```

## Why should I use this function?

Use this function when you need to identify and extract all unique colors from an image. It's particularly useful for:
- Analyzing color palettes in sprites or pixel art
- Preparing images for color reduction or optimization
- Creating color swatches from existing images

## What parameters or arguments are required?

The function requires the following parameters:
1. `imagePath` (string): The path to the image file you want to analyze.
2. `options` (object, optional): An optional parameter for additional configuration (currently not utilized in the provided code).

## Prerequisites

Before using this function, ensure you have:
1. Installed the Jimp library, as it's used for image processing.
2. Proper read access to the image file specified in the `imagePath`.

## How do I use this function?

Here's a step-by-step guide to using the `getUniqueColors` function:

1. Import the function from the sprite SDK:
   ```javascript
   import { sprite } from 'sprite'
   ```

2. Call the function with the path to your image:
   ```javascript
   const imagePath = './path/to/your/image.png'
   const uniqueColors = await sprite.getUniqueColors(imagePath)
   ```

3. The function returns a Promise that resolves to an array of unique colors found in the image, represented as integers.

4. You can then process or display these colors as needed in your application.

Note: This function ignores fully transparent pixels (alpha = 0) when collecting unique colors.

The function uses Jimp to read and process the image, scanning each pixel to collect unique colors. It's efficient for most use cases, but be aware that processing very large images may take some time.
  
  