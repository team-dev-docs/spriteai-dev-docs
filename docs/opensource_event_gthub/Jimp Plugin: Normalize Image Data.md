
  
  # **@jimp/plugin-normalize**

High Level

This is a plugin for the Jimp image processing library that provides functionality for normalizing image data. It is a dependency of the `@jimp/custom` package.

## Why should I use this plugin?

The `@jimp/plugin-normalize` plugin allows you to normalize the pixel values of an image, which can be useful in various image processing tasks. Normalization can help enhance contrast, improve color distribution, and prepare the image data for further operations such as machine learning or computer vision tasks.

## What are the required parameters or arguments?

This plugin does not require any direct parameters or arguments. It is automatically loaded and used by Jimp when the `@jimp/custom` package is imported and configured.

## Prerequisites

To use this plugin, you need to have the following installed:

1. Node.js
2. The `@jimp/custom` package, which should be installed as a dependency in your project.

## How do I use this plugin?

You don't need to explicitly import or use this plugin directly. It is automatically loaded and applied when you use the `@jimp/custom` package in your project. Here's an example of how you might use the `@jimp/custom` package, which implicitly uses the `@jimp/plugin-normalize` plugin:

```javascript
import Jimp from '@jimp/custom';

async function processImage() {
  const image = await Jimp.read('path/to/your/image.jpg');
  // Perform image operations using Jimp
  // The normalize plugin will be automatically applied

  image.write('path/to/output/image.jpg');
}

processImage();
```

In this example, when you read an image using `Jimp.read`, the `@jimp/plugin-normalize` plugin is loaded and applied to the image data. Any subsequent operations you perform on the image will benefit from the normalization performed by this plugin.
  
  