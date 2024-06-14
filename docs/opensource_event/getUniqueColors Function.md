
  
  # **getUniqueColors**

**High Level**

The `getUniqueColors` function is an asynchronous function that takes an image file path and an optional options object as input parameters. It reads the image file, scans through all the pixels, and returns an array of unique color integer values present in the image. This function is part of the sprite SDK, which can be installed from NPM and imported into your project as shown below:

```javascript
import { getUniqueColors } from 'sprite';
```

**Why should I use this function?**

The `getUniqueColors` function can be useful in various image processing and analysis tasks, such as:

1. **Image Optimization**: By identifying the unique colors in an image, you can optimize the color palette and potentially reduce the file size without significantly affecting the visual quality.
2. **Color Analysis**: This function allows you to analyze the color distribution and diversity within an image, which can be helpful in areas like image classification, color-based image retrieval, or artistic applications.
3. **Palette Generation**: The unique color array can be used as a starting point for generating color palettes or extracting dominant colors from an image.

**Parameters/Arguments**

1. **imagePath** (string, required): The file path of the image you want to analyze.
2. **options** (object, optional): An optional object that can be used to pass additional configuration options to the function. Currently, no options are documented for this function.

**Prerequisites**

To use the `getUniqueColors` function, you need to have the following:

1. Node.js installed on your system.
2. The `sprite` package installed in your project. You can install it using npm:

```
npm install sprite
```

3. An image file in a supported format (e.g., PNG, JPEG, BMP) that you want to analyze.

**How to use this function?**

Here's an example of how to use the `getUniqueColors` function:

```javascript
import { getUniqueColors } from 'sprite';

const imagePath = 'path/to/your/image.jpg';

async function analyzeImage() {
  try {
    const uniqueColors = await getUniqueColors(imagePath);
    console.log('Unique colors in the image:', uniqueColors);
    // Do something with the unique color array
  } catch (error) {
    console.error('Error:', error);
  }
}

analyzeImage();
```

In this example:

1. The `getUniqueColors` function is imported from the `sprite` package.
2. The file path of the image you want to analyze is specified in the `imagePath` variable.
3. The `analyzeImage` async function is defined to call the `getUniqueColors` function and handle the result.
4. Inside the `analyzeImage` function, `getUniqueColors` is called with the `imagePath` argument, and the returned promise resolves to an array of unique color integer values.
5. The `uniqueColors` array is logged to the console, and you can perform any further processing or analysis on this array as needed.

**Note:** Make sure to handle errors and catch any exceptions that may occur during the image reading or processing operations.
  
  