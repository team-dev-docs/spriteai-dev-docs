
  
  # **Jimp Plugin - Print**

## High Level

The `@jimp/plugin-print` is a plugin for the Jimp image processing library that adds the ability to print images to the console or terminal. It is a dependency that needs to be installed separately and then imported into your project.

## Why should I use this plugin?

- It provides a convenient way to preview or debug images during the image processing pipeline.
- It allows you to quickly inspect the contents of an image without having to save it to a file and open it in an external viewer.
- It can be useful for debugging purposes, as you can print intermediate image states to understand the effects of different operations.

## Prerequisites

- You must have the Jimp library installed in your project. Jimp is a Node.js library for reading, writing, and processing images.
- You need to import the `@jimp/plugin-print` plugin and enable it using `jimp.registerPlugin()`.

## How do I use this plugin?

1. Install the `@jimp/plugin-print` plugin by running the following command:

```bash
npm install @jimp/plugin-print
```

2. Import the plugin and register it with Jimp:

```javascript
import jimp from 'jimp';
import jimpPrint from '@jimp/plugin-print';

jimp.registerPlugin(jimpPrint);
```

3. Load an image using Jimp, and then call the `print` method on the Jimp instance to print the image to the console:

```javascript
jimp.read('path/to/image.jpg')
    .then(image => {
        image.print(/* options */);
    })
    .catch(err => {
        console.error(err);
    });
```

The `print` method accepts an optional options object that allows you to customize the output. For example, you can specify the maximum width or height of the printed image, or enable Unicode characters for better rendering.

```javascript
image.print({
    maxWidth: 80,
    maxHeight: 40,
    enableUnicode: true
});
```

By following these steps, you can easily integrate the `@jimp/plugin-print` plugin into your Jimp-based image processing pipeline and leverage its functionality to preview or debug images during development.
  
  