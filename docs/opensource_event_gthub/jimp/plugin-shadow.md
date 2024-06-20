
  
  # **@jimp/plugin-shadow**

High Level

The `@jimp/plugin-shadow` is a plugin for the Jimp image processing library that adds the ability to create drop shadows for images. It is a dependency specified in the `package-lock.json` file, which means it is required for the project to run correctly.

## Why should I use this plugin?

Adding drop shadows to images can enhance their visual appeal and make them stand out from the background. This plugin allows you to easily create drop shadows with various customization options, such as adjusting the offset, blur radius, and color of the shadow.

## What are the required parameters or arguments?

The `@jimp/plugin-shadow` plugin exposes a method called `shadow` that can be called on a Jimp image instance. The `shadow` method accepts an options object as its argument, which can include the following properties:

- `offsetX` (number): The horizontal offset of the shadow in pixels.
- `offsetY` (number): The vertical offset of the shadow in pixels.
- `blur` (number): The blur radius of the shadow in pixels.
- `color` (Jimp.CSS color or hex color string): The color of the shadow.
- `opacitySource` (number): The opacity of the source image, between 0 and 1.
- `opacityShadow` (number): The opacity of the shadow, between 0 and 1.

## Prerequisites

To use the `@jimp/plugin-shadow` plugin, you need to have the following:

1. Node.js and npm (Node Package Manager) installed on your system.
2. The Jimp library installed in your project. You can install it by running `npm install jimp` or `npm install jimp@latest`.

## How do I use this plugin?

Here's an example of how you can use the `@jimp/plugin-shadow` plugin in your Node.js project:

```javascript
const Jimp = require('jimp');
const shadowPlugin = require('@jimp/plugin-shadow');

// Load the plugin
Jimp.loadPlugin(shadowPlugin);

// Load an image
Jimp.read('path/to/your/image.jpg')
  .then(image => {
    // Add a drop shadow
    image.shadow({
      offsetX: 10,
      offsetY: 10,
      blur: 5,
      color: 0x000000, // Black shadow
      opacitySource: 0.7,
      opacityShadow: 0.5
    });

    // Save the image with shadow
    image.write('path/to/output/image-with-shadow.jpg');
  })
  .catch(err => {
    console.error(err);
  });
```

In this example, we first load the `@jimp/plugin-shadow` plugin using `Jimp.loadPlugin(shadowPlugin)`. Then, we load an image using `Jimp.read('path/to/your/image.jpg')`. After the image is loaded, we call the `shadow` method on the image instance and pass an options object with the desired shadow settings.

Finally, we save the image with the applied shadow using `image.write('path/to/output/image-with-shadow.jpg')`.

By following these steps, you can easily add drop shadows to your images using the `@jimp/plugin-shadow` plugin in your Node.js project.
  
  