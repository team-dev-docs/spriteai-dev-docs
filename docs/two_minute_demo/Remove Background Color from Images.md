
  
  # **Remove Background Color**

**High Level**

This is a utility function provided by the Sprite Node.js SDK that allows you to remove a specific background color from an image. It utilizes the Jimp library for image processing and manipulation.

```js
import { removeBackgroundColor } from 'sprite';
```

**Why should I use this function?**

You should use this function when you need to remove a specific background color from an image. This can be useful in various scenarios, such as preparing images for use on websites or in applications where a transparent background is preferred. It can also be helpful for creating image assets with consistent backgrounds or removing unwanted background colors.

**What are the required parameters?**

1. `inputPath` (string): The file path of the input image.
2. `outputPath` (string): The file path where the processed image with the removed background color will be saved.
3. `targetColor` (string): The CSS color code (e.g., '#FFFFFF' for white) representing the background color you want to remove.
4. `colorThreshold` (number, optional): The maximum color difference threshold for determining which pixels should be made transparent. The default value is 0, which means only exact color matches will be made transparent.
5. `options` (object, optional): An optional object for passing additional options to the function. Currently, no additional options are supported.

**Prerequisites**

Before using this function, ensure that you have installed the `sprite` package in your Node.js project:

```
npm install sprite
```

Additionally, the function requires the input image file to be present at the specified `inputPath`.

**How do I use this function?**

Here's an example of how you can use the `removeBackgroundColor` function:

```js
import { removeBackgroundColor } from 'sprite';

const inputPath = 'path/to/input/image.jpg';
const outputPath = 'path/to/output/image.png';
const targetColor = '#FFFFFF'; // White background

try {
  const result = await removeBackgroundColor(inputPath, outputPath, targetColor);
  console.log('Background color removal successful:', result);
} catch (error) {
  console.error('Error removing background color:', error);
}
```

In this example, the function will read the image located at `inputPath`, remove the white background color (`#FFFFFF`), and save the processed image with a transparent background at `outputPath`.

If you need to adjust the color threshold, you can pass an additional value for the `colorThreshold` parameter. A higher value will make the function more tolerant of slight color variations, while a lower value will make it more strict.

```js
const colorThreshold = 10; // Adjust this value as needed
const result = await removeBackgroundColor(inputPath, outputPath, targetColor, colorThreshold);
```

This function can be particularly useful when working with images that have a consistent background color that needs to be removed or made transparent.
  
  