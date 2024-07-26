
  
  # **Unique Color Extractor for Images**

## What does this do?

This function, `getUniqueColors`, extracts all unique colors from an image file. It processes the image pixel by pixel, identifying distinct colors while ignoring fully transparent pixels.

## Why should I use this?

Use this function when you need to analyze the color palette of an image. It's particularly useful for:
- Creating color palettes from images
- Analyzing color distribution in sprites or pixel art
- Preparing images for color quantization or optimization

## Prerequisites

- Node.js environment
- Jimp library installed (`npm install jimp`)

## How to use this

1. Import the function into your project:
   ```javascript
   const { getUniqueColors } = require('./path/to/uniqueColorExtractor');
   ```

2. Call the function with the path to your image:
   ```javascript
   const imagePath = './path/to/your/image.png';
   getUniqueColors(imagePath)
     .then(uniqueColors => {
       console.log('Unique colors:', uniqueColors);
     })
     .catch(error => {
       console.error('Error:', error);
     });
   ```

3. The function returns a Promise that resolves to an array of unique colors represented as integers.

4. You can convert these color integers back to RGBA values using Jimp's `intToRGBA` method if needed:
   ```javascript
   const Jimp = require('jimp');
   const rgbaColor = Jimp.intToRGBA(colorInt);
   ```

Note: This function uses the Jimp library to read and process images. Ensure you have Jimp installed in your project before using this function.
  
  