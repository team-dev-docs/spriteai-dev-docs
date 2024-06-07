
  
  # **Get Unique Colors from an Image**

**High Level**

This is an asynchronous function exported from a Node.js SDK that allows you to extract all unique colors present in an image. It utilizes the `jimp` library for image processing. You can import and use this function from the `sprite` object after installing the SDK from NPM.

```javascript
import { sprite } from 'sprite';
```

**Why should I use this function?**

This function can be useful in various scenarios where you need to analyze the color composition of an image. Some potential use cases include:

1. **Color Palette Extraction**: Extract the unique colors present in an image to create a color palette for design or branding purposes.
2. **Image Similarity Analysis**: Compare the unique colors of two images to determine their similarity based on color composition.
3. **Image Filtering**: Filter images based on their color composition, for instance, to find images with specific color combinations or to remove images with certain colors.
4. **Image Editing**: Modify an image by applying effects or adjustments based on its unique colors.

**What are the required parameters or arguments?**

1. `imagePath` (string, required): The file path or URL of the image you want to analyze.
2. `options` (object, optional): An optional object that can be used to pass additional options or configurations to the function. Currently, no options are specified in the provided code.

**Prerequisites**

To use this function, you need to have the following prerequisites:

1. The `jimp` library installed and imported in your project. `jimp` is a Node.js library for image processing.
2. A valid image file accessible at the specified `imagePath`.

**How do I use this function?**

Here's an example of how you can use this function:

```javascript
import { sprite } from 'sprite';

const imagePath = '/path/to/your/image.jpg';

sprite.getUniqueColors(imagePath)
  .then(uniqueColors => {
    console.log('Unique colors in the image:', uniqueColors);
    // Process the unique colors as needed
  })
  .catch(error => {
    console.error('Error:', error);
  });
```

1. Import the `sprite` object from the installed SDK.
2. Provide the file path or URL of the image you want to analyze as the `imagePath` argument.
3. Call the `getUniqueColors` function with the `imagePath` and optional `options` object (if needed).
4. The function returns a Promise that resolves with an array of unique color integers.
5. Use the resolved unique color integers as needed in your application, such as creating a color palette, filtering images, or applying image effects.

Please note that this function ignores fully transparent pixels (pixels with an alpha value of 0) when determining the unique colors.
  
  