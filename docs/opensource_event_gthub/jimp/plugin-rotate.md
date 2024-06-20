
  
  # **Jimp Plugin for Rotating Images**

High Level

The `@jimp/plugin-rotate` is a plugin for the Jimp image processing library that provides a method to rotate images. It is not a function exported from an SDK, but rather a plugin that needs to be included in your project to add rotation functionality to Jimp.

## Why should I use this plugin?

You should use this plugin if you need to rotate images programmatically in your Node.js application. It provides a convenient way to rotate images by a specified angle using the Jimp library.

## Prerequisites

To use this plugin, you need to have the following:

1. Node.js installed on your system.
2. The Jimp library installed in your project. You can install it using npm:

```
npm install jimp
```

## How do I use this plugin?

1. Install the `@jimp/plugin-rotate` plugin using npm:

```
npm install @jimp/plugin-rotate
```

2. In your Node.js code, import the Jimp library and the rotate plugin:

```javascript
const Jimp = require('jimp');
const rotatePlugin = require('@jimp/plugin-rotate');

// Load the rotate plugin
Jimp.loadPlugins([rotatePlugin]);
```

3. Load an image using Jimp and apply the rotate method provided by the plugin:

```javascript
Jimp.read('image.jpg')
    .then(image => {
        image.rotate(90); // Rotate the image by 90 degrees clockwise
        image.writeAsync('rotated-image.jpg'); // Save the rotated image
    })
    .catch(err => {
        console.error(err);
    });
```

The `rotate` method takes an angle (in degrees) as an argument. Positive values rotate the image clockwise, and negative values rotate it counterclockwise.

You can also specify additional options for the rotation, such as the rotation mode and the background color to use for the new areas introduced by the rotation. Refer to the plugin's documentation for more details on available options.
  
  