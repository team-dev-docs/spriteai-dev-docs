
  
  # **Gaussian Blur Plugin**

High Level

The `@jimp/plugin-gaussian` is a plugin for the Jimp image processing library that provides a Gaussian blur effect. It is not a function exported from an SDK but rather a plugin that extends the functionality of the Jimp library.

## Why should I use this plugin?

The Gaussian blur effect is a widely used image processing technique that helps to reduce noise and detail in an image, creating a smooth and blurred appearance. This can be useful for various purposes, such as creating artistic effects, reducing image compression artifacts, or preparing images for further processing.

## What are the required parameters?

The `@jimp/plugin-gaussian` plugin extends the `Jimp` class with a new method called `gaussian()`. This method accepts an optional configuration object with the following properties:

- `radius` (number, default: 1): The radius of the Gaussian blur. A higher value will result in a stronger blur effect.
- `kernelSize` (number, optional): The size of the kernel used for the Gaussian blur. If not provided, it will be calculated based on the `radius`.
- `opaque` (boolean, default: false): Whether to apply the blur effect to the entire image, including transparent areas.

## Prerequisites

To use the `@jimp/plugin-gaussian` plugin, you need to have the following:

1. The `jimp` library installed in your project.
2. The `@jimp/plugin-gaussian` plugin installed in your project.

## How do I use this plugin?

Here's an example of how to use the `@jimp/plugin-gaussian` plugin with Jimp:

```javascript
import jimp from 'jimp';
import gaussian from '@jimp/plugin-gaussian';

// Load the plugin
jimp.prototype.gaussian = gaussian;

// Load an image
jimp.read('path/to/image.jpg')
  .then(image => {
    // Apply Gaussian blur with a radius of 5
    image.gaussian({ radius: 5 })
      .then(blurredImage => {
        // Save the blurred image
        blurredImage.write('path/to/blurred-image.jpg');
      });
  })
  .catch(err => {
    console.error(err);
  });
```

In this example, we first import the `jimp` library and the `@jimp/plugin-gaussian` plugin. Then, we load the plugin by assigning it to the `jimp.prototype.gaussian` property.

Next, we load an image using `jimp.read()`. Once the image is loaded, we apply the Gaussian blur effect by calling the `gaussian()` method with a `radius` of 5. The `gaussian()` method returns a Promise that resolves with the blurred image.

Finally, we save the blurred image to a file using the `write()` method.
  
  