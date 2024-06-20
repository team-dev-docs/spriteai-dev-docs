
  
  # **Jimp GIF Decoder**

## High Level

The `@jimp/gif` package is a plugin for the Jimp library, which is an image processing library for Node.js. This package provides support for decoding and encoding GIF images. It is not directly exportable from the Jimp library itself, but rather a dependency that needs to be installed separately.

## Why should I use this package?

If you are working with GIF images in your Node.js application and using the Jimp library for image processing, you will need to install this package to enable support for GIF image formats. Without this package, Jimp will not be able to handle GIF files.

## Prerequisites

- You should have the Jimp library installed in your project. You can install it using `npm install jimp`.
- Make sure you have the necessary dependencies for Jimp installed, such as `@jimp/core` and `@jimp/types`.

## How do I use this package?

1. Install the `@jimp/gif` package by running `npm install @jimp/gif`.
2. In your Node.js code, import the Jimp library and the `@jimp/gif` plugin:

```javascript
import Jimp from 'jimp';
import gifPlugin from '@jimp/gif';

// Initialize the Jimp instance
const jimpInstance = await Jimp.read('path/to/your/image.gif');

// Load the GIF plugin
jimpInstance.decoders.push(gifPlugin());

// Now you can perform operations on the GIF image using Jimp
// For example:
jimpInstance.resize(200, 200).write('path/to/output.gif');
```

3. After importing the `@jimp/gif` plugin and initializing it with `gifPlugin()`, you can use the regular Jimp methods to read, process, and write GIF images.

Note that the `@jimp/gif` package is specifically for decoding and encoding GIF images. If you need to work with other image formats, you may need to install additional format-specific plugins provided by the Jimp library.
  
  