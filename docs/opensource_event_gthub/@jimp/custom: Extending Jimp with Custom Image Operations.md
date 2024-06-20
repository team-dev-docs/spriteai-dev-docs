
  
  # **@jimp/custom**

High Level

This is a package that provides custom functionality for the `@jimp/core` package, which is a part of the Jimp image processing library for Node.js. Jimp is a library for reading, writing, and processing images in JavaScript.

## Why should I use this package?

The `@jimp/custom` package allows developers to extend the functionality of the Jimp library by creating custom image processing operations or filters. It provides a way to implement custom algorithms or transformations on images in a modular and extensible manner.

## What are the dependencies required?

The `@jimp/custom` package relies on the `@jimp/core` package as a dependency. The `@jimp/core` package provides the core functionality for working with images in Jimp.

## Prerequisites

To use the `@jimp/custom` package, you need to have Node.js installed on your system, and you should have a basic understanding of JavaScript and image processing concepts.

## How do I use this package?

To use the `@jimp/custom` package, you typically follow these steps:

1. Install the `@jimp/custom` package and its dependencies using a package manager like npm or yarn.
2. Import the `@jimp/custom` and `@jimp/core` packages in your Node.js script.
3. Create a new instance of the Jimp class from `@jimp/core`.
4. Define your custom image processing operation or filter as a function that takes a Jimp instance and performs the desired transformations.
5. Apply your custom operation or filter to the Jimp instance.
6. Optionally, perform additional operations or transformations using the built-in methods provided by `@jimp/core`.
7. Save or display the processed image using the appropriate methods from `@jimp/core`.

Here's an example of how you might use the `@jimp/custom` package to create a custom operation that applies a sepia tone to an image:

```javascript
import Jimp from '@jimp/core';
import { customOperation } from '@jimp/custom';

// Define a custom sepia tone operation
const sepiaTone = customOperation({
  filter: (image) => {
    // Iterate over each pixel and apply the sepia tone transformation
    image.scan(0, 0, image.bitmap.width, image.bitmap.height, (x, y, idx) => {
      const red = image.bitmap.data[idx + 0];
      const green = image.bitmap.data[idx + 1];
      const blue = image.bitmap.data[idx + 2];

      const brightness = (red * 0.3 + green * 0.59 + blue * 0.11);
      const sepia = brightness * 1.2;

      image.bitmap.data[idx + 0] = Math.min(sepia, 255);
      image.bitmap.data[idx + 1] = Math.min(sepia * 0.9, 255);
      image.bitmap.data[idx + 2] = Math.min(sepia * 0.7, 255);
    });
  }
});

// Load an image
Jimp.read('image.jpg')
  .then((image) => {
    // Apply the sepia tone operation
    image.customOperation(sepiaTone);

    // Save the processed image
    image.write('sepia-image.jpg');
  })
  .catch((err) => {
    console.error(err);
  });
```

In this example, we define a custom `sepiaTone` operation using the `customOperation` function provided by `@jimp/custom`. The `filter` function takes a Jimp instance and performs the sepia tone transformation by iterating over each pixel and adjusting the color values.

We then load an image using `Jimp.read`, apply the `sepiaTone` operation using `image.customOperation`, and save the processed image using `image.write`.
  
  