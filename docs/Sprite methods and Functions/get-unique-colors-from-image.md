
  
  # **Get Unique Colors from an Image**

High Level

`getUniqueColors` is a function exported from our Node.js SDK that allows you to retrieve a list of unique colors present in an image. You can import it from the `sprite` object like this:

```javascript
import { sprite } from 'sprite';
```

## Why should I use this function?

This function can be useful in various scenarios, such as:

1. **Image Analysis**: Analyzing the color composition of an image can provide valuable insights into its content, style, and overall aesthetics.
2. **Color Palette Generation**: By extracting the unique colors from an image, you can create a custom color palette tailored to that specific image, which can be used for design purposes or further image processing tasks.
3. **Image Compression**: Identifying and optimizing the color palette of an image can aid in efficient image compression techniques, reducing file size without compromising quality significantly.

## What are the parameters or arguments required?

The `getUniqueColors` function takes the following parameters:

1. `imagePath` (required): A string representing the file path or URL of the image you want to analyze.
2. `options` (optional): An object that can be used to pass additional options or configuration settings to the function. Currently, no specific options are defined in the provided code.

## Prerequisites

To use this function, you need to have the following:

1. **Node.js** installed on your machine.
2. The **Jimp** library installed in your project. Jimp is a JavaScript library for image processing that is used internally by this function.

## How do I use this function?

Here's an example of how you can use the `getUniqueColors` function:

```javascript
import { sprite } from 'sprite';

const imagePath = './path/to/your/image.jpg';

sprite.getUniqueColors(imagePath)
  .then(uniqueColors => {
    console.log('Unique Colors:', uniqueColors);
    // Process the unique colors array as needed
  })
  .catch(error => {
    console.error('Error:', error);
  });
```

1. Import the `sprite` object from the SDK.
2. Provide the file path or URL of the image you want to analyze as the `imagePath` argument.
3. Call the `getUniqueColors` function with the `imagePath` and any necessary options.
4. The function returns a Promise that resolves with an array of unique colors represented as integers. Each integer value encodes the RGBA values of a color.
5. You can then process the `uniqueColors` array as needed, such as converting the integer values to human-readable color formats or performing further analysis.

Keep in mind that reading and processing images can be resource-intensive, so it's recommended to handle large images or high-volume operations with appropriate optimization techniques.
  
  