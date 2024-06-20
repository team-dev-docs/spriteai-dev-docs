
  
  # **@jimp/plugin-mask**

**High Level**

This is a plugin for the Jimp image processing library that provides functionality for masking images. It is a dependency of the Jimp library and is installed automatically when you install Jimp.

**Why should I use this plugin?**

The `@jimp/plugin-mask` plugin allows you to apply a mask to an image, which can be useful for various image manipulation tasks, such as:

- Applying a transparent overlay to specific areas of an image
- Cropping an image using a custom shape or pattern
- Creating composite images by combining multiple images with different transparency levels

**Prerequisites**

To use this plugin, you need to have the Jimp library installed in your project. You can install it using npm or yarn:

```
npm install jimp
```

or

```
yarn add jimp
```

**How do I use this plugin?**

Here's an example of how you can use the `@jimp/plugin-mask` plugin with Jimp:

```javascript
const Jimp = require('jimp');

// Load the image
Jimp.read('source.jpg')
  .then(image => {
    // Load the mask image
    return Jimp.read('mask.png')
      .then(maskImage => {
        // Apply the mask to the original image
        image.mask(maskImage, 0, 0);

        // Save the masked image
        image.write('output.jpg');
      });
  })
  .catch(err => {
    console.error(err);
  });
```

In this example, the `mask` method is used to apply a mask image (`mask.png`) to the original image (`source.jpg`). The mask image should be a grayscale image, where black areas represent fully transparent regions, and white areas represent fully opaque regions. You can also use semi-transparent grayscale values for partial transparency.

The `mask` method takes three arguments:

1. The mask image (`maskImage` in the example)
2. The x-coordinate of the top-left corner of the mask image on the original image
3. The y-coordinate of the top-left corner of the mask image on the original image

After applying the mask, the `write` method is used to save the masked image to a file (`output.jpg`).

**Note:** This documentation is based on the provided code snippet and context. Ensure that you refer to the official Jimp documentation for the most up-to-date information and additional examples.
  
  