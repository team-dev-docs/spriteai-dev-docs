
  
  import InterestingText from '@site/src/components/intersting-text';

# **getUniqueColors**

High Level

This is an asynchronous function exported from our Node.js SDK that allows you to retrieve a list of unique colors present in an image. You can install the SDK from NPM and import the function from the `sprite` object like this:

```javascript
import { getUniqueColors } from 'sprite';
```

## Why should I use this function?

You should use this function when you need to analyze the color palette of an image. It can be useful in various scenarios, such as image processing, color analysis, or generating color palettes for design purposes. By obtaining a list of unique colors, you can gain insights into the color distribution and diversity within the image.

## What are the parameters or arguments required?

The `getUniqueColors` function accepts two parameters:

1. `imagePath` (required): A string representing the file path or URL of the image you want to analyze.
2. `options` (optional): An object that can be used to pass additional options or configurations for the color extraction process. Currently, no options are specified in the provided code.

## Prerequisites

To use this function, you'll need to have the following prerequisites:

1. The `jimp` library installed and imported in your project. This library is used for image processing and color extraction.
2. The image file you want to analyze should be accessible by providing a valid file path or URL.

## How do I use this function?

Here's an example of how to use the `getUniqueColors` function:

```javascript
import { getUniqueColors } from 'sprite';

async function analyzeImageColors(imagePath) {
  try {
    const uniqueColors = await getUniqueColors(imagePath);
    console.log('Unique colors in the image:', uniqueColors);
    // You can further process or manipulate the uniqueColors array as needed
  } catch (error) {
    console.error('Error:', error);
  }
}

// Usage example
analyzeImageColors('/path/to/your/image.jpg');
```

1. Import the `getUniqueColors` function from the `sprite` package.
2. Call the `getUniqueColors` function with the `imagePath` parameter, which should be a valid file path or URL pointing to the image you want to analyze.
3. The function will return an array of unique color integers present in the image.
4. You can then process or manipulate the `uniqueColors` array based on your specific requirements.

The function uses the `jimp` library to read the image and iterate over each pixel, extracting the RGBA (red, green, blue, alpha) values. It then converts the RGBA values to a single integer representation and stores them in a `Set` to ensure uniqueness. Finally, it returns an array containing all the unique color integers.

## Copy the Code into Your Components Folder

```javascript
import { getUniqueColors } from 'sprite';

async function analyzeImageColors(imagePath) {
  try {
    const uniqueColors = await getUniqueColors(imagePath);
    console.log('Unique colors in the image:', uniqueColors);
    // You can further process or manipulate the uniqueColors array as needed
  } catch (error) {
    console.error('Error:', error);
  }
}

// Usage example
analyzeImageColors('/path/to/your/image.jpg');
```

<InterestingText text="Colors are the essence of life, they surround us, inspire us, and evoke emotions within us. The ability to analyze and understand the color palette of an image is a powerful tool, opening doors to new creative possibilities and insights. Like a painter's brush strokes, the unique colors in an image tell a story, inviting us to appreciate the depth and beauty of the world around us." />
  
  