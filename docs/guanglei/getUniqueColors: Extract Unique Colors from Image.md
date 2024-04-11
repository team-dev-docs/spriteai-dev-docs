
  
  # **Sprite AI: Extract Unique Colors from Image**

**High Level**

This is a utility function provided by the Sprite AI Node.js SDK, which allows you to extract all unique colors present in an image file. You can install the SDK from NPM and import the required functions as follows:

```javascript
import { getUniqueColors } from 'sprite-ai';
```

**Why should I use this function?**

The `getUniqueColors` function is useful when you need to analyze the color palette of an image or perform operations based on the unique colors present in the image. It can be particularly helpful in tasks such as image processing, color analysis, palette generation, and image optimization.

**What are the required parameters or arguments?**

1. `imagePath` (string): The file path or URL of the image you want to analyze.
2. `options` (object, optional): An optional object that can be used to pass additional options or configurations to the function. Currently, this function does not accept any specific options.

**Prerequisites**

Before using this function, make sure you have the following:

1. Node.js installed on your system.
2. The Sprite AI Node.js SDK installed via NPM (`npm install sprite-ai`).
3. The `jimp` library installed as a dependency (`npm install jimp`).

**How do I use this function?**

Here's an example of how to use the `getUniqueColors` function:

```javascript
import { getUniqueColors } from 'sprite-ai';

async function processImage(imagePath) {
  try {
    const uniqueColors = await getUniqueColors(imagePath);
    console.log(`Unique colors in the image: ${uniqueColors.length}`);
    console.log(uniqueColors);
    // Perform further operations with the unique colors
  } catch (error) {
    console.error('Error:', error);
  }
}

processImage('/path/to/your/image.jpg');
```

In this example, the `getUniqueColors` function is called with the file path of the image you want to analyze. The function returns a promise that resolves to an array of unique color integers (RGBA values packed into a single integer value).

You can then inspect the length of the `uniqueColors` array to determine the number of unique colors present in the image, and use the array itself for further processing or analysis as needed.

Keep in mind that this function ignores fully transparent pixels (alpha value of 0) when counting unique colors.
  
  