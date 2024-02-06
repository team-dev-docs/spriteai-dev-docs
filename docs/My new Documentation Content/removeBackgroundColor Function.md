
  
  

# removeBackgroundColor

This is a function that removes the background color from an image by making pixels with colors similar to the target color transparent.

## Why should I use this function?

You should use this function when you want to remove a solid background color from an image to isolate the main subject or make the background transparent. 

## What are the parameters required?

- `inputPath` - The file path to the image  
- `outputPath` - The file path to save the output image 
- `targetColor` - The background color to remove, specified as a CSS color name (e.g. 'white')
- `colorThreshold` (optional) - How close a color needs to be to the target color to be replaced (default: 0)

## Prerequisites

- Jimp image library installed
- Image with a solid background color to remove

## How to use this function

```js
import { sprite } from sprite;

const inputImage = 'image.png';
const outputImage = 'image-no-bg.png';

await sprite.removeBackgroundColor(inputImage, outputImage, 'white'); 
```

This loads the image, calculates the color difference between each pixel and true white, and makes nearly white pixels transparent before saving the output image.


  
  