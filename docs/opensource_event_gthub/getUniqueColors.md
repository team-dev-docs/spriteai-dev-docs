
  
  # **getUniqueColors Utility**

High Level

This is an asynchronous function exported from our Node.js SDK that allows you to retrieve an array of unique colors present in an image. It leverages the `jimp` library for image processing. You can import it from the `sprite` object like this:

```javascript
import { sprite } from 'sprite';
```

## Why should I use this function?

The `getUniqueColors` function is useful when you need to analyze the color palette of an image programmatically. It can be particularly helpful in scenarios such as:

1. **Image Filtering**: If you need to filter or categorize images based on their color composition, this function can provide the necessary data.

2. **Color Palette Generation**: When you want to generate a color palette from an image, knowing the unique colors present can be invaluable.

3. **Image Analysis**: This function can aid in various image analysis tasks, such as identifying dominant colors, detecting color trends, or performing color-based clustering.

## What are the parameters or arguments required?

The `getUniqueColors` function accepts two parameters:

1. `imagePath` (string, required): The file path or URL of the image you want to analyze.

2. `options` (object, optional): An optional object that can be used to pass additional options to the function. Currently, no specific options are defined, but this parameter allows for future extensibility.

## Prerequisites

To use this function, you need to have the following prerequisites:

1. **Node.js**: This function is designed to run in a Node.js environment.

2. **jimp**: The `jimp` library, which is used for image processing, must be installed. You can install it via npm:

```
npm install jimp
```

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

1. Import the `sprite` object from the SDK.
2. Provide the file path or URL of the image you want to analyze as the `imagePath` argument.
3. Call the `getUniqueColors` function with the `imagePath` and optionally pass an `options` object if needed.
4. The function returns a Promise that resolves to an array of unique colors present in the image, represented as integer values.
5. Handle any potential errors that might occur during the image processing or analysis.

By using this function, you can efficiently retrieve the unique colors present in an image, which can be useful for various image processing tasks and analyses.
  
  