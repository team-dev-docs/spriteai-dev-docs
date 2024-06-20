
  
  # **Jimp Plugin Scale**

This is a plugin for the Jimp library, which is a JavaScript library for image processing. The `@jimp/plugin-scale` plugin provides functions to scale or resize images.

## Why should I use this plugin?

If you need to resize or scale images in your application, the `@jimp/plugin-scale` plugin offers a convenient way to do so. It allows you to resize images while maintaining their aspect ratio or by specifying a specific width and height.

## What are the required parameters or arguments?

The `@jimp/plugin-scale` plugin exposes the following methods:

1. `scale(factor, mode)`:
   - `factor` (number): The scaling factor to apply to the image.
   - `mode` (optional, string): The scaling mode to use. Possible values are `'mixed'`, `'horizontal'`, `'vertical'`, `'fit'`, `'fill'`, `'cover'`, `'contain'`, `'inside'`, `'outside'`.

2. `resize(w, h, mode)`:
   - `w` (number): The desired width of the resized image.
   - `h` (number): The desired height of the resized image.
   - `mode` (optional, string): The scaling mode to use. Possible values are the same as the `scale` method.

## Prerequisites

To use the `@jimp/plugin-scale` plugin, you need to have the following:

1. Node.js installed on your system.
2. The Jimp library installed in your project. You can install it using npm: `npm install jimp`.
3. The `@jimp/plugin-scale` plugin installed in your project: `npm install @jimp/plugin-scale`.

## How do I use this plugin?

Here's an example of how to use the `@jimp/plugin-scale` plugin:

```javascript
import jimp from 'jimp';
import scale from '@jimp/plugin-scale';

// Load the plugin
jimp.prototype.scale = scale;

// Load an image
jimp.read('path/to/image.jpg')
  .then(image => {
    // Scale the image by a factor of 0.5 (50% of the original size)
    image.scale(0.5)
      .write('path/to/scaled-image.jpg');

    // Resize the image to a specific width and height
    image.resize(800, 600, jimp.RESIZE_BICUBIC)
      .write('path/to/resized-image.jpg');
  })
  .catch(err => {
    console.error(err);
  });
```

In the example above, we first import the `jimp` and `@jimp/plugin-scale` modules. We then load the `scale` plugin using `jimp.prototype.scale = scale`. After that, we can use the `scale` and `resize` methods provided by the plugin.

The `scale` method allows us to scale the image by a specific factor, while the `resize` method allows us to resize the image to a specific width and height. In both cases, we can optionally specify a scaling mode to control how the image is resized or scaled.

Make sure to replace `'path/to/image.jpg'`, `'path/to/scaled-image.jpg'`, and `'path/to/resized-image.jpg'` with the actual paths to your input and output image files.
  
  