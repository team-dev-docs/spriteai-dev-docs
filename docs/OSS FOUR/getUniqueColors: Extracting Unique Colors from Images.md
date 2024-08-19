

  # **getUniqueColors Function**

High Level

This is an asynchronous function that analyzes an image to extract unique colors. It's part of our Node.js SDK, which you can install from NPM and import from the sprite object as follows:

```javascript
import { sprite } from 'sprite'
```

## Why should I use this function?

The `getUniqueColors` function is useful when you need to identify and extract all unique colors present in an image. This can be particularly helpful for:

1. Color palette generation
2. Image analysis and processing
3. Optimizing sprite sheets by reducing color redundancy

## What parameters or arguments are required?

The function accepts two parameters:

1. `imagePath` (required): A string representing the path to the image file you want to analyze.
2. `options` (optional): An object for additional configuration (currently unused in the provided code).

## Prerequisites

Before using this function, ensure you have:

1. Installed the sprite SDK in your Node.js project
2. The Jimp library available (it's used internally for image processing)

## How do I use this function?

Here's a step-by-step guide to using the `getUniqueColors` function:

1. Import the sprite SDK in your JavaScript file:

```javascript
import { sprite } from 'sprite'
```

2. Call the function with the path to your image:

```javascript
const imagePath = './path/to/your/image.png';
sprite.getUniqueColors(imagePath)
  .then(uniqueColors => {
    console.log('Unique colors:', uniqueColors);
  })
  .catch(error => {
    console.error('Error:', error);
  });
```

3. The function returns a Promise that resolves to an array of unique colors found in the image. Each color is represented as an integer value.

4. You can then process or use these unique colors as needed in your application.

Note: The function ignores fully transparent pixels (alpha = 0) when analyzing the image.

  