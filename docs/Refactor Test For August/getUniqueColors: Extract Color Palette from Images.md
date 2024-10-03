

  # **getUniqueColors Function**

High Level

This is an asynchronous function that extracts unique colors from an image. It's part of our Node.js SDK, which you can install from NPM and import like this:

```javascript
import { imageAnalysis } from 'image-analysis-sdk'
```

## Why should I use this function?

Use this function when you need to analyze the color palette of an image. It's particularly useful for:

1. Color analysis in image processing applications
2. Extracting color schemes from images for design purposes
3. Optimizing image color usage for performance or storage
4. Creating color histograms for image comparison

## What parameters or arguments are required?

The `getUniqueColors` function requires the following parameters:

1. `imagePath` (string): The path to the image file you want to analyze.
2. `options` (object, optional): An object that can include:
   - `ignoreAlpha` (boolean): If true, fully transparent pixels are ignored (default: true)
   - `maxColors` (number): Maximum number of unique colors to return (default: no limit)

## Prerequisites

Before using this function, ensure you have:

1. Installed the Jimp library in your project
2. Proper read access to the image file specified by `imagePath`
3. Sufficient memory to process large images, if applicable

## How do I use this function?

Here's a step-by-step guide to using the `getUniqueColors` function:

1. Import the function from the image analysis SDK:

   ```javascript
   import { imageAnalysis } from 'image-analysis-sdk'
   ```

2. Call the function with the path to your image and optional settings:

   ```javascript
   const imagePath = '/path/to/your/image.png'
   const options = { ignoreAlpha: true, maxColors: 100 }
   const uniqueColors = await imageAnalysis.getUniqueColors(imagePath, options)
   ```

3. The function returns a Promise that resolves to an array of unique colors found in the image, represented as integers.

4. You can then process these colors as needed, for example:

   ```javascript
   uniqueColors.forEach(colorInt => {
     const rgba = Jimp.intToRGBA(colorInt)
     console.log(`Color: R=${rgba.r}, G=${rgba.g}, B=${rgba.b}, A=${rgba.a}`)
   })
   ```

5. For more advanced analysis, you can use the returned colors to:
   - Generate a color palette
   - Create a color histogram
   - Identify dominant colors in the image

Remember that processing time may increase with image size and complexity. Consider using the `maxColors` option for large images to improve performance.

  