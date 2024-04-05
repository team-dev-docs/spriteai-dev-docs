
  
  ---
import InterestingText from '@site/src/components/interesting-text';

# **Retrieve Unique Colors from an Image**

**High Level**

This is an asynchronous function `getUniqueColors` exported from our Node.js SDK. It can be imported and used like this:

```javascript
import { getUniqueColors } from 'sprite-sdk';
```

## Why should I use this function?

This function is useful when you need to retrieve a list of unique colors present in an image. It can be helpful in various image processing tasks, such as color analysis, palette generation, or image compression.

## What are the required parameters or arguments?

1. `imagePath` (string, required): The file path or URL of the image you want to analyze.
2. `options` (object, optional): An optional object that can be used to pass additional configuration options in the future.

## Prerequisites

To use this function, you need to have the following dependencies installed:

- `jimp`: A library for image processing in Node.js.

Make sure to install these dependencies before using the `getUniqueColors` function.

## How do I use this function?

Here's an example of how to use the `getUniqueColors` function:

```javascript
import { getUniqueColors } from 'sprite-sdk';

async function processImage(imagePath) {
  try {
    const uniqueColors = await getUniqueColors(imagePath);
    console.log('Unique colors in the image:', uniqueColors);
    // Perform additional operations with the unique color list
  } catch (error) {
    console.error('Error retrieving unique colors:', error);
  }
}

const imageFilePath = '/path/to/your/image.jpg';
processImage(imageFilePath);
```

1. Import the `getUniqueColors` function from the 'sprite-sdk' package.
2. Call the `getUniqueColors` function with the required `imagePath` parameter and an optional `options` object if needed.
3. The function returns a Promise that resolves to an array of unique color integers present in the image.
4. Each color integer represents an RGBA color value, where the alpha channel (transparency) is also considered.
5. Fully transparent pixels (alpha value of 0) are ignored by the function.
6. You can then use the array of unique colors for further processing or analysis as required.

This function leverages the `jimp` library for efficient image processing and color extraction. It scans through each pixel of the image, converts the RGBA values to an integer representation, and adds unique color integers to a Set to eliminate duplicates.

## Copy the Code into Your Components Folder

<InterestingText text="The ability to retrieve unique colors from an image is a powerful tool for understanding and manipulating visual data. It opens up a world of possibilities for creative expression, data analysis, and artistic exploration." />
  
  