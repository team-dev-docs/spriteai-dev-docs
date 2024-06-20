
  
  # **@jimp/core**

High Level

This is a core module of the Jimp image processing library for Node.js. It provides essential functionality for loading, manipulating, and saving images in various formats. You can install it from NPM and import it into your project as follows:

```javascript
const Jimp = require('@jimp/core');
```

## Why should I use this module?

The `@jimp/core` module offers a comprehensive set of tools for working with images in Node.js. It allows you to:

- Load images from files, URLs, or buffers
- Perform various image manipulation operations (e.g., resize, crop, rotate, flip, blur, and more)
- Convert between different image formats (e.g., PNG, JPEG, BMP, TIFF)
- Apply effects and filters to images
- Draw shapes, text, and other elements on images
- Combine multiple images into one
- Extract metadata and EXIF data from images

This module provides a powerful and efficient way to handle image processing tasks in Node.js, making it a valuable tool for building applications that involve image manipulation or generation.

## What are the required arguments or parameters?

The `@jimp/core` module itself does not require any arguments or parameters. However, when using specific methods or functions within the module, you may need to provide relevant arguments or parameters. For example, when loading an image, you need to specify the source (file path, URL, or buffer). When manipulating an image, you may need to provide parameters like the dimensions for resizing or the angle for rotation.

## Prerequisites

Before using the `@jimp/core` module, ensure that you have the following prerequisites:

1. Node.js installed on your machine
2. The `@jimp/core` module installed in your project (via `npm install @jimp/core` or `yarn add @jimp/core`)

Additionally, some image manipulation operations may require specific dependencies. For example, converting images to or from certain formats may require additional codecs to be installed.

## How do I use this function?

Here's a basic example of how to use the `@jimp/core` module:

```javascript
const Jimp = require('@jimp/core');

// Load an image
Jimp.read('path/to/image.jpg')
  .then(image => {
    // Resize the image
    image.resize(500, 500)
         .quality(80) // Set the quality of the output image
         .write('path/to/output.jpg'); // Save the image to a file
  })
  .catch(err => {
    console.error('Error occurred:', err);
  });
```

In this example, we first import the `@jimp/core` module and load an image using `Jimp.read`. Once the image is loaded, we can perform various operations on it, such as resizing it using the `resize` method. Finally, we save the modified image to a file using the `write` method.

The `@jimp/core` module provides a wide range of methods and properties to manipulate images, including `composite` for combining multiple images, `blur` for applying a blur effect, `brightness` for adjusting brightness, `contrast` for adjusting contrast, and many more.

Remember to consult the official documentation for detailed information on available methods, their parameters, and usage examples.
  
  