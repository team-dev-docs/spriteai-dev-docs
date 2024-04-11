
  
  # **Get Unique Colors from Image**

High Level

This is a function that retrieves all unique colors from an image file. It is part of the sprite SDK, which you can install from NPM and import into your project like this:

```javascript
import { getUniqueColors } from 'sprite';
```

## Why should I use this function?

When working with images, it can be useful to identify the distinct colors present in the image. This function provides a convenient way to obtain an array of all unique color values (represented as integers) in a given image file. This information can be valuable for various image processing tasks, such as color analysis, palette extraction, or image segmentation.

## What parameters or arguments are required?

The `getUniqueColors` function takes two arguments:

1. `imagePath` (string, required): The file path or URL of the image you want to process.
2. `options` (object, optional): An optional object that can be used to pass additional configuration options to the function. Currently, no options are supported, but this argument is included for future extensibility.

## Prerequisites

To use this function, you need to have the following prerequisites:

- Node.js installed on your system.
- The `sprite` package installed in your project. You can install it using npm:

```
npm install sprite
```

- The `jimp` library, which is a dependency of the `sprite` package. This library is used for image processing operations within the `getUniqueColors` function.

## How do I use this function?

Here's an example of how you can use the `getUniqueColors` function:

```javascript
import { getUniqueColors } from 'sprite';

const imagePath = 'path/to/your/image.jpg';

getUniqueColors(imagePath)
  .then(uniqueColors => {
    console.log('Unique colors in the image:', uniqueColors);
    // Further processing or analysis of unique colors
  })
  .catch(error => {
    console.error('Error:', error);
  });
```

In this example, the `getUniqueColors` function is called with the path to the image file you want to process. It returns a Promise that resolves to an array of unique color values (integers) found in the image.

The function scans through each pixel of the image, ignoring fully transparent pixels. It converts the RGB(A) values of each non-transparent pixel to an integer color value and adds it to a `Set` to ensure uniqueness. Finally, the `Set` is converted back to an array and returned.

With the array of unique colors, you can perform further analysis or processing based on your specific requirements, such as generating a color palette, identifying dominant colors, or applying color-based filters or transformations to the image.
  
  