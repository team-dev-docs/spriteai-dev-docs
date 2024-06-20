
  
  # **Jimp Plugin Invert**

High Level

This is a plugin for the Jimp library, which is a library for image processing in Node.js. The `@jimp/plugin-invert` plugin provides the functionality to invert the colors of an image.

## Why should I use this plugin?

You should use this plugin if you need to invert the colors of an image programmatically. Inverting colors can be useful for various purposes, such as creating negative effects, adjusting image contrast, or creating artistic effects.

## What are the required arguments?

This plugin does not require any arguments. It is a standalone plugin that adds the `invert()` method to the Jimp instance.

## Prerequisites

To use this plugin, you need to have the following:

1. Node.js installed on your system.
2. The `jimp` library installed in your project.

## How do I use this plugin?

1. Install the `@jimp/plugin-invert` plugin by running the following command:

```
npm install @jimp/plugin-invert
```

2. Import the plugin in your Node.js script:

```javascript
import jimp from 'jimp';
import invert from '@jimp/plugin-invert';

jimp.plugins.push(invert);
```

3. Load an image using Jimp's `read` method:

```javascript
jimp.read('path/to/image.jpg', (err, image) => {
  if (err) throw err;

  // Invert the image colors
  image.invert();

  // Save the inverted image
  image.write('path/to/inverted_image.jpg');
});
```

In this example, the `invert()` method is called on the `image` instance to invert the colors of the loaded image. The inverted image is then saved to a new file using the `write` method.

By using this plugin, you can easily invert the colors of an image in your Node.js application without having to write complex image processing code yourself.
  
  