
  
  # **getUniqueColors**

**High Level**

This is an asynchronous function that takes an image file path and optional options as input, and returns an array of unique color values present in the image. It is part of a Node.js SDK that can be installed from NPM and imported using the `sprite` object.

```javascript
import { sprite } from 'sprite';
```

**Why should I use this function?**

This function is useful when you need to analyze the color palette of an image and extract the unique color values present in it. This can be helpful in various scenarios, such as:

- Generating color palettes or color schemes based on an image.
- Identifying dominant colors in an image for use in design or branding.
- Performing image analysis or processing tasks that require color information.

**What are the parameters or arguments required?**

1. `imagePath` (string, required): The file path of the image you want to analyze.
2. `options` (object, optional): An optional object that can be used to pass additional options or configuration settings to the function. Currently, there are no options specified in the provided code.

**Prerequisites**

To use this function, you need to have the following:

1. A Node.js environment set up on your machine.
2. The `sprite` module installed, which likely includes the `jimp` library for image processing.

**How do I use this function?**

Using this function is straightforward. Here's an example:

```javascript
import { sprite } from 'sprite';

const imagePath = '/path/to/your/image.jpg';

sprite.getUniqueColors(imagePath)
  .then(uniqueColors => {
    console.log('Unique colors in the image:', uniqueColors);
    // Do something with the unique colors array
  })
  .catch(error => {
    console.error('Error:', error);
  });
```

1. Import the `sprite` module in your Node.js script.
2. Provide the file path of the image you want to analyze as the `imagePath` argument.
3. Call the `getUniqueColors` function with the `imagePath` argument.
4. The function returns a Promise that resolves with an array of unique color values present in the image.
5. In the Promise's `then` callback, you can access the `uniqueColors` array and perform any desired operations with it.
6. If an error occurs during the execution of the function, it will be caught in the Promise's `catch` callback.

**Important Notes**

- The function uses the `jimp` library to read and process the image data.
- It scans through each pixel of the image and adds the unique color values (represented as integers) to a `Set` to eliminate duplicates.
- Fully transparent pixels (alpha value of 0) are ignored during the color extraction process.
- The returned array contains the unique color values represented as integers, which can be converted to other color formats (e.g., hexadecimal) if needed.
  
  