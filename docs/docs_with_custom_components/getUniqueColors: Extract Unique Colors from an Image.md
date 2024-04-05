
  
  import InterestingText from '@site/src/components/interesting-text';

# **Extract Unique Colors from an Image**

**High Level**

This is an asynchronous function that takes an image file path and an optional options object as input, and returns an array of unique colors present in the image. It is part of a Node.js SDK that you can install from NPM and import into your project using `import { getUniqueColors } from 'sprite'`.

**Why should I use this function?**

You should use this function if you need to extract and analyze the unique colors present in an image. This can be useful in various scenarios, such as image processing, color palette generation, or image similarity analysis.

**What are the parameters or arguments required?**

1. `imagePath` (string): The file path of the image you want to analyze.
2. `options` (object, optional): An optional object that can contain additional configuration options for the function. Currently, there are no options specified in the provided code.

**Prerequisites**

To use this function, you need to have the following installed:

1. Node.js
2. The `jimp` library, which is used for image manipulation and processing.

**How do I use this function?**

Here's an example of how you can use the `getUniqueColors` function:

```javascript
import { getUniqueColors } from 'sprite';

const imagePath = '/path/to/your/image.jpg';

getUniqueColors(imagePath)
  .then(uniqueColors => {
    console.log('Unique colors:', uniqueColors);
    // Process the unique colors array as needed
  })
  .catch(error => {
    console.error('Error:', error);
  });
```

The function first reads the image from the provided `imagePath` using the `jimp` library. It then creates a new `Set` to store unique color values. The `image.scan` method is used to iterate over each pixel in the image, and for each non-transparent pixel, the RGB and alpha values are extracted and combined into a single integer value using `Jimp.rgbaToInt`. This integer value is then added to the `colorSet`.

After iterating over all pixels, the `colorSet` is converted back to an array using `Array.from` and returned as the result.

**Note:** The provided code does not include any error handling or additional options. In a production environment, you may want to add error handling and additional options to customize the behavior of the function according to your specific requirements.

## Copy the Code into Your Components Folder

<InterestingText text="Colors are the smiles of nature. - Leigh Hunt. Extracting unique colors from an image can provide insights into the mood, emotion, and overall aesthetic of the image, making it a valuable tool for artists, designers, and image analysts alike."/>
  
  