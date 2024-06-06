
  
  # **getUniqueColors Function**

High Level

The `getUniqueColors` function is an asynchronous method provided by the Sprite SDK, which allows you to retrieve a list of unique colors present in an image file. It is designed to be imported and used within your Node.js applications.

```javascript
import { sprite } from 'sprite';
```

## Why should I use this function?

The `getUniqueColors` function is useful when you need to analyze the color palette of an image or perform operations based on the unique colors present in the image. It can be particularly helpful in scenarios such as:

1. **Color Analysis**: Obtain a comprehensive list of unique colors used in an image, which can aid in color palette generation, color scheme analysis, or image processing tasks.

2. **Image Compression**: Identify the unique colors in an image to optimize color quantization or palette-based compression techniques, potentially reducing file size while preserving visual quality.

3. **Image Segmentation**: Use the unique colors as a starting point for image segmentation algorithms, where different regions of the image are identified based on their color characteristics.

4. **Image Filtering**: Apply filters or transformations to an image based on specific color values, by targeting the unique colors identified by this function.

## What parameters or arguments are required?

The `getUniqueColors` function accepts two parameters:

1. `imagePath` (required): A string representing the file path or URL of the image you want to analyze.

2. `options` (optional): An object that can be used to pass additional options or configurations to the function. Currently, no specific options are documented, but this parameter allows for future extensibility.

## Prerequisites

To use the `getUniqueColors` function, you need to have the following prerequisites:

1. **Node.js** installed on your system, as the Sprite SDK is designed to run in a Node.js environment.

2. The **Sprite SDK** installed in your project. You can install it via npm by running `npm install sprite` in your project's directory.

3. **Jimp** library, which is a dependency used by the Sprite SDK for image processing. The Jimp library is automatically installed when you install the Sprite SDK.

## How do I use this function?

Here's an example of how you can use the `getUniqueColors` function:

```javascript
import { sprite } from 'sprite';

const imagePath = '/path/to/your/image.jpg';

try {
  const uniqueColors = await sprite.getUniqueColors(imagePath);
  console.log('Unique colors:', uniqueColors);
} catch (error) {
  console.error('Error:', error);
}
```

1. Import the `sprite` object from the Sprite SDK.
2. Provide the file path or URL of the image you want to analyze as the `imagePath` parameter.
3. Call the `getUniqueColors` function with the `imagePath` and any additional options (if needed).
4. The function returns a Promise that resolves with an array of unique color values represented as integers.
5. Handle the resolved Promise value to access the unique colors, or catch any potential errors that may occur during the process.

The `getUniqueColors` function scans through all the pixels of the provided image and builds a set of unique color values. It ignores fully transparent pixels (alpha value of 0) during the process. The resulting set is then converted to an array and returned.
  
  