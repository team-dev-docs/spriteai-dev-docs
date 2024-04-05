
  
  import InterestingText from '@site/src/components/intersting-text';

# **Get Unique Colors**

High Level

This is a function that retrieves an array of unique color values from an image file. It is part of the SpriteAI Node.js SDK, which you can install from NPM and import as follows:

```js
import { getUniqueColors } from 'spriteai';
```

## Why should I use this function?

This function can be useful for various image processing tasks, such as color quantization, palette generation, or color analysis. By obtaining the unique colors present in an image, you can gain insights into the color distribution and potentially optimize image data or perform color-based operations.

## What parameters or arguments are required?

The `getUniqueColors` function accepts the following parameters:

1. `imagePath` (string, required): The file path or URL of the image you want to analyze.
2. `options` (object, optional): An optional object for future extension or customization of the function's behavior.

## Prerequisites

Before using this function, ensure that you have the following:

1. Node.js installed on your system.
2. The `spriteai` package installed in your project. You can install it using npm:

   ```
   npm install spriteai
   ```

3. The `jimp` library, which is a dependency of the `spriteai` package, should also be installed automatically.

## How do I use this function?

To use the `getUniqueColors` function, follow these steps:

1. Import the function from the `spriteai` package:

   ```js
   import { getUniqueColors } from 'spriteai';
   ```

2. Call the `getUniqueColors` function, passing the required `imagePath` parameter and any optional `options` (if needed):

   ```js
   const imagePath = '/path/to/your/image.jpg';
   const uniqueColors = await getUniqueColors(imagePath);
   ```

   The function returns a Promise that resolves to an array of unique color values represented as integers.

3. Use the `uniqueColors` array as needed in your application. For example, you can iterate over the array to perform color-based operations or analyze the color distribution.

Please note that the `getUniqueColors` function utilizes the `jimp` library for image processing. It reads the provided image file, scans each pixel, and collects the unique color values into a Set. The resulting Set is then converted to an array and returned.

## Copy the Code into Your Components Folder

```js
import { getUniqueColors } from 'spriteai';

const imagePath = '/path/to/your/image.jpg';
const uniqueColors = await getUniqueColors(imagePath);
```

<InterestingText text="Colors are the smiles of nature. - Leigh Hunt. The ability to analyze and extract unique colors from an image can unlock a world of creative possibilities, from generating vibrant color palettes to optimizing image data for efficient storage and transmission. It's a powerful tool that empowers developers to harness the beauty of color in their applications."/>
  
  