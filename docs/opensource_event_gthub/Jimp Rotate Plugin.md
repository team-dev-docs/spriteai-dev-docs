
  
  # **Rotate Plugin for Jimp**

High Level

This is a plugin for the Jimp image processing library that provides rotation functionality. It is not a standalone function but rather a plugin that extends the capabilities of the Jimp library. You can install it via npm, along with other required Jimp plugins, and import it into your project.

```javascript
import Jimp from 'jimp';
import rotate from '@jimp/plugin-rotate';

Jimp.prototype.rotate = rotate;
```

## Why should I use this plugin?

The Rotate plugin allows you to rotate images in your application. Image rotation is a common requirement in many applications, such as photo editing, graphic design, and image processing pipelines. This plugin provides a convenient way to rotate images without having to implement the rotation functionality yourself.

## What are the required dependencies?

The `@jimp/plugin-rotate` plugin has the following peer dependencies:

- `@jimp/custom`: Required for using custom Jimp instances.
- `@jimp/plugin-blit`: Required for blitting (copying) image data.
- `@jimp/plugin-crop`: Required for cropping images.
- `@jimp/plugin-resize`: Required for resizing images.

## Prerequisites

1. You need to have Jimp installed in your project.
2. Install the required peer dependencies mentioned above.

## How do I use this plugin?

1. Import the Jimp library and the `@jimp/plugin-rotate` plugin.
2. Attach the rotate plugin to the Jimp prototype using `Jimp.prototype.rotate = rotate;`.
3. Load an image using `Jimp.read(imagePath)`.
4. Call the `rotate` method on the loaded image instance, passing in the desired rotation angle (in degrees).
5. Optionally, you can provide additional options, such as the rotation mode (e.g., `'opaque'` or `'transparent'`).
6. Handle the rotated image as needed (e.g., write it to a file, display it on a canvas, etc.).

Example usage:

```javascript
import Jimp from 'jimp';
import rotate from '@jimp/plugin-rotate';

Jimp.prototype.rotate = rotate;

Jimp.read('path/to/image.jpg')
  .then(image => {
    return image.rotate(90, true); // Rotate 90 degrees clockwise, with resize
  })
  .then(rotatedImage => {
    return rotatedImage.write('path/to/output.jpg');
  })
  .catch(err => {
    console.error(err);
  });
```

This plugin simplifies the process of rotating images by providing a convenient method that handles the rotation logic and any necessary resizing or cropping. It is an essential tool for applications that require image manipulation capabilities.
  
  