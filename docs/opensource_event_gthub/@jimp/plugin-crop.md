
  
  # **@jimp/plugin-crop**

## High Level

The `@jimp/plugin-crop` is a plugin for the Jimp image processing library that provides functionality for cropping images. It is installed as a dependency from the npm registry and can be imported into your Node.js project.

## Why should I use this plugin?

You should use this plugin if you need to crop or extract a specific region from an image in your Node.js application. Cropping images is a common operation in image processing and manipulation tasks, and this plugin provides an easy way to perform this operation using the Jimp library.

## What are the required parameters or arguments?

The `@jimp/plugin-crop` plugin does not require any specific parameters or arguments to be used. However, when you call the `crop` method provided by this plugin, you need to pass in the coordinates and dimensions of the region you want to crop from the image.

## Prerequisites

To use this plugin, you need to have the following prerequisites:

1. Node.js installed on your system.
2. The Jimp library installed in your project. You can install it using npm by running `npm install jimp`.
3. The `@jimp/plugin-crop` plugin installed in your project. You can install it using npm by running `npm install @jimp/plugin-crop`.

## How do I use this plugin?

Here's an example of how you can use the `@jimp/plugin-crop` plugin in your Node.js code:

```javascript
import Jimp from 'jimp';
import crop from '@jimp/plugin-crop';

// Load the Jimp plugin
Jimp.loadPlugin(crop);

// Load an image
Jimp.read('path/to/image.jpg')
  .then(image => {
    // Crop the image
    const croppedImage = image.crop(100, 100, 200, 200);

    // Save the cropped image
    croppedImage.write('path/to/cropped-image.jpg');
  })
  .catch(err => {
    console.error(err);
  });
```

In the example above, we first import the Jimp library and the `@jimp/plugin-crop` plugin. We then load the plugin using `Jimp.loadPlugin(crop)`.

Next, we load an image using `Jimp.read()`. Once the image is loaded, we call the `crop` method on the image object, passing in the coordinates and dimensions of the region we want to crop (in this case, a 200x200 pixel region starting at x=100, y=100).

Finally, we save the cropped image using the `write` method.

By using this plugin, you can easily crop images in your Node.js application, making it a useful tool for various image processing tasks.
  
  