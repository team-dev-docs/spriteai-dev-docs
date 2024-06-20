
  
  # **getUniqueColors**

High Level

This is an asynchronous function that reads an image file and returns an array of unique color integers present in the image. It is a utility function exported from the Sprite SDK, which can be installed from NPM and imported like this:

```javascript
import { getUniqueColors } from 'sprite';
```

## Why should I use this function?

The `getUniqueColors` function is useful when you need to analyze the color palette of an image. It can be used to:

- Extract a list of unique colors present in an image
- Identify the dominant colors in an image
- Perform color-based image processing or analysis

By providing an efficient way to retrieve the unique color values, this function simplifies tasks such as color quantization, palette generation, and color-based image segmentation.

## What are the parameters or arguments required?

The `getUniqueColors` function takes the following parameters:

1. **`imagePath`** (string, required): The file path or URL of the image you want to analyze.
2. **`options`** (object, optional): An optional object that can be used to pass additional options or settings to the function. Currently, no options are implemented, but this parameter allows for future extensibility.

## Prerequisites

To use this function, you need to have the following:

1. Node.js installed on your system.
2. The `sprite` package installed in your project. You can install it using the following command:

   ```
   npm install sprite
   ```

3. The `jimp` package installed as a dependency. The `getUniqueColors` function uses the `jimp` library for image processing.

## How do I use this function?

Here's an example of how to use the `getUniqueColors` function:

```javascript
import { getUniqueColors } from 'sprite';

const imagePath = '/path/to/your/image.jpg';

getUniqueColors(imagePath)
  .then(uniqueColors => {
    console.log('Unique colors in the image:', uniqueColors);
    // Process the unique colors array as needed
  })
  .catch(error => {
    console.error('Error getting unique colors:', error);
  });
```

In this example, the `getUniqueColors` function is called with the file path of the image you want to analyze. The function returns a Promise that resolves with an array of unique color integers present in the image.

Each color integer represents an RGBA (Red, Green, Blue, Alpha) value packed into a 32-bit integer. You can use the `Jimp.intToRGBA` function from the `jimp` library to convert the color integer back to its individual RGBA components if needed.

Note that the function ignores fully transparent pixels (those with an alpha value of 0) when calculating the unique colors.
  
  