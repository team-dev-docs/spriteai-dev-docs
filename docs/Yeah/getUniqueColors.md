
  
  # **Get Unique Colors from an Image**

## High Level

This is an asynchronous function that takes an image file path and an optional options object as input, and returns an array of unique color integer values present in the image. It is part of a Node.js SDK that you can install from NPM and import from the `sprite` object as shown below:

```javascript
import { getUniqueColors } from 'sprite';
```

## Why should I use this function?

You should use this function when you need to analyze the color palette of an image and obtain a list of unique colors used in the image. This can be useful in various scenarios, such as color analysis, image processing, or generating color palettes for design purposes.

## Parameters

1. `imagePath` (string, required): The file path of the image you want to analyze.
2. `options` (object, optional): An optional object that can be used to pass additional configuration options. Currently, this function does not support any specific options.

## Prerequisites

To use this function, you need to have the following dependencies installed:

- `jimp`: A Node.js library for image processing.

## How do I use this function?

Here's an example of how you can use the `getUniqueColors` function:

```javascript
import { getUniqueColors } from 'sprite';

async function main() {
  const imagePath = '/path/to/your/image.jpg';
  const uniqueColors = await getUniqueColors(imagePath);
  console.log(uniqueColors);
}

main();
```

In this example, the `getUniqueColors` function is called with the file path of the image you want to analyze. The function returns an array of unique color integer values present in the image.

Each color integer value represents an RGBA color, where the red, green, blue, and alpha components are packed into a 32-bit integer. You can use the `Jimp.intToRGBA` function to convert the color integer into separate red, green, blue, and alpha values if needed.

Please note that this function ignores fully transparent pixels (pixels with an alpha value of 0) when calculating the unique colors.
  
  