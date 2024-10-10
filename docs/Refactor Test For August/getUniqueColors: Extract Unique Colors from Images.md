

  # **getUniqueColors Function**

High Level

This is an asynchronous function that extracts unique colors from an image. It's part of our Node.js SDK, which you can install from NPM and import from the `sprite` object like this:

```javascript
import { sprite } from 'sprite'
```

## Why should I use this function?

Use this function when you need to analyze an image and obtain a list of unique colors it contains. This can be particularly useful for:

- Color palette extraction
- Image analysis and processing
- Sprite sheet optimization

## What parameters are required?

The function takes two parameters:

1. `imagePath` (required): A string representing the path to the image file.
2. `options` (optional): An object for additional configuration (currently unused in the provided code).

## Prerequisites

Before using this function, ensure you have:

1. Installed the Sprite SDK via NPM
2. Imported the necessary modules (Jimp is used internally)
3. Proper read access to the image file specified by `imagePath`

## How do I use this function?

Here's a basic example of how to use the `getUniqueColors` function:

```javascript
import { sprite } from 'sprite'

async function analyzeImage() {
  const imagePath = './path/to/your/image.png'
  try {
    const uniqueColors = await sprite.getUniqueColors(imagePath)
    console.log('Unique colors found:', uniqueColors.length)
    console.log('Color values:', uniqueColors)
  } catch (error) {
    console.error('Error analyzing image:', error)
  }
}

analyzeImage()
```

This function works by:

1. Reading the image file using Jimp
2. Scanning each pixel of the image
3. Collecting unique color values, ignoring fully transparent pixels
4. Returning an array of unique color integers

Note that the function returns color values as integers. You may need to convert these to a more readable format (like hexadecimal) for further use.

  