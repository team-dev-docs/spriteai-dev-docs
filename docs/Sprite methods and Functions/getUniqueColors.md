
  
  # **Get Unique Colors from an Image**

High Level

This function is a part of the SpriteAI Node.js SDK, which can be installed from NPM and imported using the following line of code:

```
import { getUniqueColors } from 'spriteai';
```

## Why should I use this function?

The `getUniqueColors` function is useful when you need to analyze an image and extract all the unique colors present in it. This can be helpful in scenarios such as color palette analysis, image processing, or any other application that requires a list of distinct colors in an image.

## What are the required parameters or arguments?

The function accepts two parameters:

1. `imagePath` (string, required): The file path or URL of the image you want to analyze.
2. `options` (object, optional): An optional object that can be used to pass additional configuration options. Currently, no specific options are documented for this function.

## Prerequisites

To use this function, you need to have the following prerequisites:

1. Node.js installed on your machine.
2. The SpriteAI Node.js SDK installed. You can install it using the following command:

```
npm install spriteai
```

3. The `jimp` library, which is a dependency for image processing. It should be installed automatically when you install the SpriteAI SDK.

## How do I use this function?

Here's an example of how you can use the `getUniqueColors` function:

```javascript
import { getUniqueColors } from 'spriteai';

const imagePath = '/path/to/your/image.jpg';

getUniqueColors(imagePath)
  .then(uniqueColors => {
    console.log('Unique colors in the image:', uniqueColors);
    // Further process the uniqueColors array as needed
  })
  .catch(error => {
    console.error('Error getting unique colors:', error);
  });
```

In this example, the `getUniqueColors` function is called with the `imagePath` parameter, which is the file path or URL of the image you want to analyze. The function returns a Promise that resolves with an array of unique colors present in the image.

Each color in the `uniqueColors` array is represented as an integer value, which can be converted to an RGB or hexadecimal color code if needed.

Note that this function ignores fully transparent pixels (those with an alpha value of 0) when calculating the unique colors.
  
  