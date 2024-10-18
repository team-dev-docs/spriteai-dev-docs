

  # **getUniqueColors Function**

High Level

This is an asynchronous function that analyzes an image file to extract unique colors. It's part of our Node.js SDK, which you can install from NPM and import from the sprite object as follows:

```javascript
import { sprite } from 'sprite'
```

## Why should I use this function?

The `getUniqueColors` function is useful when you need to identify and extract all unique colors present in an image. This can be particularly helpful for:

1. Color palette generation
2. Image analysis and processing
3. Sprite sheet optimization
4. Color-based image categorization

## What parameters or arguments are required?

The function requires the following parameters:

1. `imagePath` (string): The path to the image file you want to analyze.
2. `options` (object, optional): An empty object for potential future extensions.

## Prerequisites

Before using this function, ensure that:

1. You have installed the Sprite SDK in your project.
2. The Jimp library is available, as the function relies on it for image processing.

## How do I use this function?

Here's a step-by-step guide on how to use the `getUniqueColors` function:

1. Import the function from the Sprite SDK:

   ```javascript
   import { sprite } from 'sprite'
   ```

2. Call the function with the path to your image:

   ```javascript
   const imagePath = './path/to/your/image.png';
   const uniqueColors = await sprite.getUniqueColors(imagePath);
   ```

3. The function returns a Promise that resolves to an array of unique colors found in the image. Each color is represented as an integer value.

4. You can then process or use these unique colors as needed in your application.

Note: The function ignores fully transparent pixels (alpha = 0) when identifying unique colors.

This function scans the entire image pixel by pixel, collecting unique colors into a Set to ensure no duplicates. It then converts the Set to an array before returning the result.

  