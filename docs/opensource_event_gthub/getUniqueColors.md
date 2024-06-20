
  
  # **Get Unique Colors from an Image**

**High Level**

The `getUniqueColors` function is a utility method provided by the SpriteAI Node.js SDK. It allows you to analyze an image and retrieve a list of unique colors present in the image. This function can be useful in various image processing tasks, such as color analysis, palette generation, and image compression.

**Why should I use this function?**

- **Color Analysis**: By obtaining a list of unique colors, you can gain insights into the color distribution and composition of an image, which can be valuable for various applications like image segmentation, color quantization, and image similarity analysis.
- **Palette Generation**: The unique color list can serve as a basis for generating a color palette for the image, which can be useful in design and artistic workflows.
- **Image Compression**: Some image compression techniques, like color quantization, can benefit from having a list of unique colors, as it allows for more efficient encoding of color information.
- **Image Processing Pipelines**: This function can be integrated into broader image processing pipelines, where knowledge of an image's color makeup is essential for subsequent operations.

**What are the parameters or arguments required?**

The `getUniqueColors` function accepts two arguments:

1. `imagePath` (string, required): The file path or URL of the image you want to analyze.
2. `options` (object, optional): An optional object that can be used to pass additional configuration options for the image processing library (jimp) used by the function. Currently, no specific options are defined.

**Prerequisites**

To use this function, you need to have the SpriteAI Node.js SDK installed in your project. You can install it via npm:

```
npm install @spriteai/sdk
```

**How do I use this function?**

Here's an example of how you can use the `getUniqueColors` function:

```javascript
import { sprite } from '@spriteai/sdk';

const imagePath = '/path/to/your/image.jpg';

sprite.getUniqueColors(imagePath)
  .then(uniqueColors => {
    console.log(`Unique colors in the image: ${uniqueColors.length}`);
    console.log(uniqueColors);
  })
  .catch(error => {
    console.error('Error:', error);
  });
```

In this example, we import the `sprite` object from the SpriteAI SDK. We then call the `getUniqueColors` function, passing the path to the image we want to analyze.

The function returns a Promise that resolves with an array of unique color values. Each color value is represented as an integer calculated by the `Jimp.rgbaToInt` method, which combines the red, green, blue, and alpha (transparency) values into a single integer value.

You can then process the array of unique colors as needed, such as generating a color palette, performing color quantization, or using it as input for other image processing tasks.
  
  