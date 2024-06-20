
  
  # **@jimp/plugin-contain**

High Level

This is a plugin for the Jimp library, which is a Node.js library for processing images. The `@jimp/plugin-contain` plugin provides functionality to contain an image within a specified area while preserving its aspect ratio. It is not a function directly exported from the SDK but rather a plugin that needs to be installed and used with the Jimp library.

## Why should I use this plugin?

This plugin is useful when you need to fit an image within a specific area or container while maintaining its aspect ratio. It prevents the image from being stretched or distorted, ensuring it retains its original proportions. This can be particularly useful when displaying images on websites, applications, or in various media where you want to maintain the image's visual integrity.

## What are the dependencies or prerequisites?

To use this plugin, you need to have the following dependencies installed:

1. `@jimp/custom`: A Jimp plugin that provides a custom implementation of the Jimp library.
2. `@jimp/plugin-blit`: A Jimp plugin that provides functionality for blitting (copying) image data from one image to another.
3. `@jimp/plugin-resize`: A Jimp plugin that provides functionality for resizing images.
4. `@jimp/plugin-scale`: A Jimp plugin that provides functionality for scaling images.

## How do I use this plugin?

To use the `@jimp/plugin-contain` plugin, you need to follow these steps:

1. Install the required dependencies:

```
npm install @jimp/custom @jimp/plugin-blit @jimp/plugin-resize @jimp/plugin-scale
```

2. Import the necessary plugins and the Jimp library in your code:

```javascript
import Jimp from 'jimp';
import plugins from 'jimp-compact-plugins';

Jimp.decoders = [...Jimp.decoders, ...plugins];
Jimp.encoders = [...Jimp.encoders, ...plugins];
```

3. Load an image using Jimp:

```javascript
const image = await Jimp.read('path/to/image.jpg');
```

4. Use the `contain` method provided by the `@jimp/plugin-contain` plugin:

```javascript
const containerWidth = 800;
const containerHeight = 600;

image.contain(containerWidth, containerHeight);
```

The `contain` method will resize the image to fit within the specified container dimensions (`containerWidth` and `containerHeight`) while preserving its aspect ratio.

5. You can then save the modified image or perform additional operations as needed.

By using the `@jimp/plugin-contain` plugin, you can easily fit images within specified dimensions without distorting their aspect ratios, ensuring a consistent and visually appealing display of your images across different platforms and contexts.
  
  