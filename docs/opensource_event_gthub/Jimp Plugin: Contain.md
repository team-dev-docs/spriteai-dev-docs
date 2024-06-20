
  
  # **Jimp Plugin: Contain**

**High Level**

The `"@jimp/plugin-contain"` is a plugin for the Jimp image processing library, which is commonly used in Node.js applications. This plugin provides a method called `contain` that allows you to resize an image while maintaining its aspect ratio and ensuring that the entire image fits within the specified dimensions.

**Why should I use this function?**

You should use the `contain` function when you need to resize an image to fit within a specific area while preserving its aspect ratio. This is particularly useful when you want to display images on websites or applications with consistent dimensions, without distorting or cropping the original image.

**What are the required parameters or arguments?**

The `contain` function takes the following parameters:

1. `w` (number): The desired width of the resized image.
2. `h` (number, optional): The desired height of the resized image. If not provided, the height will be calculated based on the aspect ratio of the original image and the specified width.
3. `mode` (string, optional): The mode to use for resizing the image. Possible values are `"horizontal"`, `"vertical"`, or `"crop"`. The default value is `"vertical"`.

**Prerequisites**

Before using the `contain` function, make sure you have installed the `jimp` library and the `@jimp/plugin-contain` plugin in your Node.js project. You can install them using npm:

```
npm install jimp @jimp/plugin-contain
```

**How do I use this function?**

Here's an example of how you can use the `contain` function:

```javascript
import Jimp from 'jimp';
import plugins from '@jimp/plugins';

// Load the contain plugin
plugins.extend(Jimp);

// Load an image
const image = await Jimp.read('path/to/your/image.jpg');

// Resize the image while maintaining its aspect ratio
const resizedImage = image.contain(800, 600); // Resize to 800px wide, maintaining aspect ratio

// Save the resized image
await resizedImage.writeAsync('path/to/resized/image.jpg');
```

In this example, we first import the `Jimp` library and the `@jimp/plugins` module. We then extend the `Jimp` instance with the `contain` plugin using `plugins.extend(Jimp)`.

Next, we load an image using `Jimp.read()` and call the `contain` method on the loaded image instance. In this case, we're resizing the image to a width of 800 pixels while maintaining its aspect ratio. The height will be calculated automatically based on the specified width and the original aspect ratio.

Finally, we save the resized image using the `writeAsync` method.

**Explanation**

The `contain` function resizes the image while maintaining its aspect ratio and ensuring that the entire image fits within the specified dimensions. If the `mode` parameter is not provided or set to `"vertical"`, the function will resize the image to fit within the specified width and calculate the height based on the aspect ratio. If the `mode` is set to `"horizontal"`, the function will resize the image to fit within the specified height and calculate the width based on the aspect ratio. If the `mode` is set to `"crop"`, the function will resize the image to fit within both the specified width and height, and any excess parts of the image will be cropped.
  
  