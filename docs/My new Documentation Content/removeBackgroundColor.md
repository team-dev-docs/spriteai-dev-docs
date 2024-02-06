
  
  

# removeBackgroundColor

This is a function that removes the background color from an image by making pixels within a certain color threshold transparent.

## Why should I use this function?

You should use this function when you want to remove a solid background color from an image to isolate the main subject or make the background transparent. 

## What are the parameters required?

This function takes in the following parameters:

- `inputPath` - The file path to the image you want to process
- `outputPath` - The file path to save the output image 
- `targetColor` - The color you want to remove, specified as a CSS color name (e.g. 'white')
- `colorThreshold` (optional) - A number from 0-255 that defines the color tolerance, defaults to 0 to match the target color exactly

## Prerequisites

You need to have the `Jimp` module installed to use this function.

## How do I use this function?

You would use it like this:

```js
const sprite = require('sprite');

async function processImage() {
  await sprite.removeBackgroundColor('input.jpg', 'output.png', 'white'); 
}

processImage();
```

This would remove the white background from `input.jpg` and save the processed image to `output.png`.


  
  