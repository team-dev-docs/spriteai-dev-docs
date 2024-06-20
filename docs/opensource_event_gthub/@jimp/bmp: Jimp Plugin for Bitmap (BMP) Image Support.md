
  
  # **@jimp/bmp**

**High Level**

The `@jimp/bmp` package is a dependency used by the Jimp image processing library to handle the Bitmap (BMP) image format. It provides functionality for loading, manipulating, and saving BMP images within the Jimp ecosystem.

**Why should I use this package?**

If you are working with Jimp and need to process BMP images, you should include this package as a dependency. It enables Jimp to read and write BMP files, allowing you to perform various image operations such as resizing, cropping, color manipulation, and more on BMP images.

**Prerequisites**

- You must have the `jimp` package installed, as `@jimp/bmp` is a plugin for Jimp.
- Familiarity with Jimp's API and image processing concepts is recommended.

**How do I use this package?**

1. Install the package by running `npm install @jimp/bmp` or `yarn add @jimp/bmp`.
2. In your Node.js code, import the `@jimp/bmp` plugin and register it with Jimp:

```javascript
import Jimp from 'jimp';
import jimpBmp from '@jimp/bmp';

Jimp.decoders['image/bmp'] = jimpBmp;
```

3. Once registered, you can use Jimp's API to load, manipulate, and save BMP images like any other supported image format:

```javascript
// Load a BMP image
Jimp.read('image.bmp', (err, image) => {
  if (err) throw err;

  // Perform image operations
  image.resize(256, 256)
    .quality(100)
    .write('resized.bmp'); // Save the modified image as a BMP
});
```

By including the `@jimp/bmp` package and registering the BMP decoder, Jimp gains the ability to work with BMP images seamlessly, allowing you to leverage its powerful image processing capabilities on this specific image format.
  
  