
  
  # **Image Processing Utilities**

High Level

This is a set of utility functions related to image processing that are exported from our Node.js SDK. You can install it from npm and import the necessary functions from the `sprite` object like this:

```javascript
import { removeBackgroundColor, adjustImageTransparency, encodeImageToBase64, getUniqueColors } from 'sprite';
```

## Why should I use these functions?

These functions provide convenient methods for performing common image processing tasks, such as removing background colors, adjusting image transparency, encoding images to Base64, and getting a list of unique colors in an image. By using these functions, you can streamline your image processing workflow and save time compared to writing the functionality from scratch or using third-party libraries.

## What parameters or arguments are required?

The parameters or arguments required vary depending on the specific function you are using. Here's a brief overview:

1. `removeBackgroundColor(imagePath, backgroundColor)`: This function takes two arguments: `imagePath` (string) representing the path to the input image, and `backgroundColor` (string) representing the color to be removed from the background (e.g., "#FFFFFF" for white).

2. `adjustImageTransparency(imagePath, opacity)`: This function takes two arguments: `imagePath` (string) representing the path to the input image, and `opacity` (number) representing the desired opacity value between 0 (fully transparent) and 1 (fully opaque).

3. `encodeImageToBase64(imagePath)`: This function takes one argument: `imagePath` (string) representing the path to the input image.

4. `getUniqueColors(imagePath)`: This function takes one argument: `imagePath` (string) representing the path to the input image.

## Prerequisites

Before using these functions, make sure you have the following prerequisites:

1. Node.js installed on your system.
2. The `sprite` package installed in your project (e.g., by running `npm install sprite` or `yarn add sprite`).
3. Appropriate image files in a format supported by the image processing library used by the `sprite` package (e.g., PNG, JPEG, GIF).

## How do I use these functions?

Here are some examples of how to use these functions:

1. **Remove Background Color**:

```javascript
import { removeBackgroundColor } from 'sprite';

const imagePath = '/path/to/your/image.png';
const backgroundColor = '#FFFFFF'; // White

removeBackgroundColor(imagePath, backgroundColor)
  .then((result) => {
    console.log('Background color removed successfully');
    // Do something with the result (e.g., save the modified image)
  })
  .catch((error) => {
    console.error('Error removing background color:', error);
  });
```

2. **Adjust Image Transparency**:

```javascript
import { adjustImageTransparency } from 'sprite';

const imagePath = '/path/to/your/image.png';
const opacity = 0.5; // 50% opacity

adjustImageTransparency(imagePath, opacity)
  .then((result) => {
    console.log('Image transparency adjusted successfully');
    // Do something with the result (e.g., save the modified image)
  })
  .catch((error) => {
    console.error('Error adjusting image transparency:', error);
  });
```

3. **Encode Image to Base64**:

```javascript
import { encodeImageToBase64 } from 'sprite';

const imagePath = '/path/to/your/image.png';

encodeImageToBase64(imagePath)
  .then((base64String) => {
    console.log('Image encoded to Base64 successfully:', base64String);
    // Do something with the Base64 string (e.g., store it or send it over the network)
  })
  .catch((error) => {
    console.error('Error encoding image to Base64:', error);
  });
```

4. **Get Unique Colors**:

```javascript
import { getUniqueColors } from 'sprite';

const imagePath = '/path/to/your/image.png';

getUniqueColors(imagePath)
  .then((uniqueColors) => {
    console.log('Unique colors in the image:', uniqueColors);
    // Do something with the array of unique colors
  })
  .catch((error) => {
    console.error('Error getting unique colors:', error);
  });
```

These examples demonstrate how to use each function, passing the required arguments and handling the returned promise. Make sure to replace `/path/to/your/image.png` with the actual path to your image file.
  
  