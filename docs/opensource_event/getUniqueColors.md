
  
  # **getUniqueColors**

**High Level**

The `getUniqueColors` function is an asynchronous function exported from the Sprite SDK. It allows you to get an array of unique RGBA color values present in an image. This function can be useful when you need to analyze the color distribution or generate a color palette from an image.

**Why should I use this function?**

You should use this function if you need to:

1. Identify the unique colors present in an image.
2. Generate a color palette from an image for various purposes, such as creating a consistent design theme or applying color filters.
3. Analyze the color distribution in an image, which can be helpful for image processing tasks like color quantization or color reduction.

**What are the parameters or arguments required?**

The `getUniqueColors` function accepts the following parameters:

1. `imagePath` (required): A string representing the file path or URL of the image you want to analyze.
2. `options` (optional): An object that can be used to pass additional options or configuration settings to the function. Currently, there are no configurable options available.

**Prerequisites**

To use this function, you need to have the following:

1. Node.js installed on your machine.
2. The Sprite SDK installed via npm or yarn.
3. The `jimp` library installed, as it is used internally by the `getUniqueColors` function for image processing.

**How do I use this function?**

Here's an example of how you can use the `getUniqueColors` function:

```javascript
import { sprite } from 'sprite';

async function processImage(imagePath) {
  try {
    const uniqueColors = await sprite.getUniqueColors(imagePath);
    console.log('Unique colors in the image:', uniqueColors);
    // Do something with the unique colors, e.g., generate a color palette
  } catch (error) {
    console.error('Error getting unique colors:', error);
  }
}

// Call the function with the path to your image
processImage('/path/to/your/image.jpg');
```

In this example, the `getUniqueColors` function is called with the path to the image you want to analyze. The function returns an array of unique RGBA color values present in the image, which you can then use for further processing or analysis.

Please note that the `getUniqueColors` function is asynchronous, so you need to use the `await` keyword or handle the returned promise accordingly.
  
  