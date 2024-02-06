
  
  

# Image Color Replacement

This is a function that is used to replace colors in an image that are similar to a specified color. It is exported from the Sprite SDK and can be imported like:

```js
import { sprite } from 'sprite';
```

## Why should I use this function?

This function is useful when you want to replace a specific color in an image with transparency. For example, if you have an image with a white background, you could use this to remove the background.

## What params or arguments are required?

The function takes the following arguments:

- `image` - The Jimp image instance to apply the color replacement on 
- `colorToReplace` - The color (integer RGB value) that should be made transparent
- `colorThreshold` - The color difference threshold - colors closer to `colorToReplace` than this will be replaced

## Prerequisites

- The Jimp image library must be installed
- A Jimp image instance to apply the processing on

## How do I use this function?

You would use it like:

```js
import Jimp from 'jimp';

// Load image
const image = await Jimp.read('image.png');

// Define color to replace and threshold 
const colorToReplace = 0xFFFFFFFF; // White
const colorThreshold = 60;

// Call function
sprite.imageColorReplace(image, colorToReplace, colorThreshold);

// Save image
await image.writeAsync('new-image.png');
```

This iterates through every pixel in the image. If a pixel's color is within `colorThreshold` of `colorToReplace`, it will be made transparent. So this allows easily replacing a solid color in an image with transparency.


  
  