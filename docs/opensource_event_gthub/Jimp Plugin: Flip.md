
  
  # **Jimp Plugin: Flip**

High Level

The `@jimp/plugin-flip` is a plugin for the Jimp image processing library. It provides a method to flip an image horizontally or vertically. This plugin is typically installed alongside the main Jimp library, which is a Node.js library for reading, writing, and manipulating images.

## Why should I use this plugin?

You should use this plugin when you need to flip an image horizontally or vertically. This functionality can be useful in various scenarios, such as:

1. **User Interface**: Flipping images based on user interactions or preferences in web or mobile applications.
2. **Image Editing**: Providing image flipping capabilities in image editing tools or applications.
3. **Data Augmentation**: Flipping images as a data augmentation technique in machine learning and computer vision tasks.

## What are the arguments required?

The `@jimp/plugin-flip` plugin adds a new method to the Jimp instance, which is `flip(flip, opaque)`. The arguments are:

1. **flip** (string or boolean, required): Specifies the direction of the flip. Accepted values are:
   - `'horizontal'`: Flips the image horizontally.
   - `'vertical'`: Flips the image vertically.
   - `true`: Aliases for `'horizontal'`.
   - `false`: Aliases for `'vertical'`.

2. **opaque** (boolean, optional): Determines whether to create a new image or modify the original. If set to `true`, a new image will be created; if set to `false` (default), the original image will be modified.

## Prerequisites

To use the `@jimp/plugin-flip` plugin, you need to have the following:

1. Node.js installed on your system.
2. The Jimp library installed. You can install it via npm:

```
npm install jimp
```

3. The `@jimp/plugin-flip` plugin installed. You can install it via npm:

```
npm install @jimp/plugin-flip
```

## How do I use this plugin?

Here's an example of how to use the `@jimp/plugin-flip` plugin with Jimp:

```javascript
import Jimp from 'jimp';
import flip from '@jimp/plugin-flip';

// Load the flip plugin
Jimp.prototype.flip = flip;

// Load an image
Jimp.read('path/to/image.jpg')
  .then(image => {
    // Flip the image horizontally
    image.flip('horizontal');

    // Or, flip the image vertically and create a new image
    const flippedImage = image.flip('vertical', true);

    // Save the modified image
    image.write('path/to/flipped-image.jpg');

    // Save the new flipped image
    flippedImage.write('path/to/new-flipped-image.jpg');
  })
  .catch(err => {
    console.error(err);
  });
```

In the example above, we first import the Jimp library and the `@jimp/plugin-flip` plugin. We then load the plugin by assigning it to the `Jimp.prototype.flip` property.

Next, we load an image using `Jimp.read`. Once the image is loaded, we can call the `flip` method with the desired flip direction (`'horizontal'` or `'vertical'`). If we want to create a new image instead of modifying the original, we can pass `true` as the second argument.

Finally, we save the modified image or the new flipped image using the `write` method.
  
  