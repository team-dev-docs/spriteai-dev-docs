
  
  # **Jimp Plugin Cover**

High Level

This is a plugin for the Jimp library, which is a Node.js library for image processing. The `@jimp/plugin-cover` plugin allows you to apply a cover (overlay) to an image. It is typically used in conjunction with the Jimp library, which you can install from NPM and import like this:

```
import Jimp from 'jimp';
import cover from '@jimp/plugin-cover';

Jimp.prototype.cover = cover();
```

## Why should I use this plugin?

The `@jimp/plugin-cover` plugin is useful when you need to apply an overlay or watermark to an image. It provides a convenient way to add a cover image on top of an existing image, with options to control the position, opacity, and other properties of the cover.

## What are the parameters or arguments required?

The `cover` method provided by this plugin accepts the following parameters:

1. `coverImage`: This is the image that will be used as the cover or overlay. It can be a Jimp instance, a Buffer, or a path to an image file.
2. `options` (optional): An object that allows you to configure the behavior of the cover operation. The following options are available:
   - `x`: The horizontal position of the cover image (default: 0).
   - `y`: The vertical position of the cover image (default: 0).
   - `mode`: The mode for positioning the cover image (default: 'cover'). Possible values are:
     - 'cover': The cover image will be resized to cover the entire area while preserving its aspect ratio.
     - 'contain': The cover image will be resized to fit within the area while preserving its aspect ratio.
     - 'manual': The cover image will be positioned and sized according to the provided `width` and `height` options.
   - `width`: The width of the cover image (only used when `mode` is 'manual').
   - `height`: The height of the cover image (only used when `mode` is 'manual').
   - `opacitySource`: The opacity value (0-1) to be applied to the source image.
   - `opacityTarget`: The opacity value (0-1) to be applied to the cover image.

## Prerequisites

Before using the `@jimp/plugin-cover` plugin, make sure you have the following prerequisites:

1. Node.js installed on your system.
2. The Jimp library installed (`npm install jimp`).
3. The `@jimp/plugin-cover` plugin installed (`npm install @jimp/plugin-cover`).

## How do I use this plugin?

Here's an example of how you can use the `@jimp/plugin-cover` plugin:

```javascript
import Jimp from 'jimp';
import cover from '@jimp/plugin-cover';

Jimp.prototype.cover = cover();

Jimp.read('source.jpg')
  .then(image => {
    return Jimp.read('cover.png')
      .then(coverImage => {
        return image.cover(coverImage, {
          x: 10,
          y: 10,
          opacitySource: 0.5,
          opacityTarget: 1
        });
      });
  })
  .then(image => {
    image.write('output.jpg');
  })
  .catch(err => {
    console.error(err);
  });
```

In this example, we first import the Jimp library and the `@jimp/plugin-cover` plugin. We then register the `cover` plugin with Jimp using `Jimp.prototype.cover = cover()`.

Next, we load the source image (`source.jpg`) and the cover image (`cover.png`) using `Jimp.read()`. Once both images are loaded, we apply the `cover` method to the source image, passing in the cover image and an options object.

The options object specifies the position of the cover image (`x: 10, y: 10`), the opacity of the source image (`opacitySource: 0.5`), and the opacity of the cover image (`opacityTarget: 1`).

Finally, we write the resulting image to a file (`output.jpg`) using `image.write()`.

By following this example and adjusting the options according to your needs, you can easily apply a cover or overlay to your images using the `@jimp/plugin-cover` plugin.
  
  