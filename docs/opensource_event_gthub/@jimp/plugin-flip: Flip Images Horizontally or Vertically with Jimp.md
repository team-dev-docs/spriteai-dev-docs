
  
  # **@jimp/plugin-flip**

High Level

This is a plugin for the Jimp image processing library that provides functionality to flip images horizontally or vertically. It can be installed from npm and imported into your project.

## Why should I use this plugin?

The `@jimp/plugin-flip` plugin allows you to easily flip images horizontally or vertically with Jimp. This can be useful in various scenarios, such as:

- Mirroring images for visual effects
- Correcting the orientation of images that were captured or processed incorrectly
- Applying transformations to images as part of a larger image processing pipeline

## What are the required parameters or arguments?

This plugin does not directly require any parameters or arguments. However, it is typically used in conjunction with the `@jimp/plugin-rotate` plugin, which provides the `flip()` method to images processed with Jimp.

The `flip()` method accepts a boolean value or a string argument that determines the direction of the flip:

- `true` or `'horizontal'`: Flips the image horizontally
- `false` or `'vertical'`: Flips the image vertically

## Prerequisites

To use this plugin, you need to have the following:

1. **Jimp**: The core Jimp library installed in your project.
2. **@jimp/custom**: A peer dependency that provides the ability to extend Jimp with custom plugins.
3. **@jimp/plugin-rotate**: A peer dependency that provides the `flip()` method, which is used in conjunction with this plugin.

## How do I use this function?

Here's an example of how you can use the `@jimp/plugin-flip` plugin with Jimp:

```javascript
import Jimp from 'jimp';
import plugins from '@jimp/plugins';

// Load the required plugins
plugins.extend(Jimp, [
  plugins.flip,
  plugins.rotate
]);

// Load an image
Jimp.read('path/to/image.jpg')
  .then(image => {
    // Flip the image horizontally
    image.flip(true);

    // Or, flip the image vertically
    image.flip(false);

    // Save the flipped image
    image.writeAsync('path/to/flipped-image.jpg');
  })
  .catch(err => {
    console.error(err);
  });
```

In this example, we first load the `@jimp/plugin-flip` and `@jimp/plugin-rotate` plugins using `plugins.extend()`. Then, we load an image using `Jimp.read()`. Once the image is loaded, we can call the `flip()` method on the image object, passing either `true` for a horizontal flip or `false` for a vertical flip. Finally, we save the flipped image using `image.writeAsync()`.
  
  