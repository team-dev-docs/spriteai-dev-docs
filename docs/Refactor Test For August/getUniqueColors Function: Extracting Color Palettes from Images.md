

  # **getUniqueColors Function**

High Level

This is an asynchronous function that extracts unique colors from an image. It's part of our Node.js image processing library, which you can install from NPM and import like this:

```javascript
import { imageProcessor } from 'image-processor'
```

## Why should I use this function?

Use this function when you need to analyze the color palette of an image. It's particularly useful for:
- Identifying the color scheme of an image
- Preparing data for color-based image processing tasks
- Optimizing image color palettes
- Creating color histograms for image analysis

## What parameters or arguments are required?

The function requires two parameters:
1. `imagePath` (required): A string representing the path to the image file.
2. `options` (optional): An object for additional configuration, which may include:
   - `maxColors` (number): Limit the number of colors returned
   - `ignoreAlpha` (boolean): Whether to consider alpha channel in color uniqueness

## Prerequisites

Before using this function, ensure you have:
- Installed the Jimp library (the function uses Jimp for image processing)
- Proper read access to the image file specified by `imagePath`
- Sufficient memory to process large images, if applicable

## How do I use this function?

Here's a step-by-step guide to using the `getUniqueColors` function:

1. Import the function from the image processing library:
   ```javascript
   import { imageProcessor } from 'image-processor'
   ```

2. Call the function with the path to your image and optional settings:
   ```javascript
   const imagePath = './path/to/your/image.png';
   const options = { maxColors: 256, ignoreAlpha: true };
   const uniqueColors = await imageProcessor.getUniqueColors(imagePath, options);
   ```

3. The function returns a Promise that resolves to an array of unique color integers. You can then process or display these colors as needed.

Note: The function's default behavior ignores fully transparent pixels (alpha = 0) when collecting unique colors, but this can be customized using the `ignoreAlpha` option.

Remember that this function processes the entire image, so it may take some time for large images. Consider using it asynchronously or in a separate thread for better performance in interactive applications.

## Advanced Usage

For more complex color analysis tasks, you can combine this function with other image processing utilities:

- Use the returned color array to generate a color palette for your application
- Implement color quantization by reducing the number of unique colors
- Create color distribution visualizations for data analysis purposes

By leveraging the `getUniqueColors` function, you can build powerful image analysis and processing pipelines tailored to your specific needs.

  