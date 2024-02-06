
  
  

# Image Background Removal

This is a function that removes the background from an image based on a specified color similarity threshold. It is exported from the Sprite SDK that you can install via NPM.

```js
import { sprite } from 'sprite';
```

## Why should I use this function?

You should use this function when you want to programmatically remove the background from an image by specifying a color to replace with transparency. 

## What parameters or arguments are required?

The function accepts the following parameters:

- `image` - The Jimp image instance to process
- `colorToReplace` - The color to replace with transparency, passed to Jimp as an integer RGB value 
- `colorThreshold` - The color similarity threshold - colors closer to `colorToReplace` than this will be made transparent

## Prerequisites

- The `jimp` module needs to be installed
- An image loaded into a Jimp image instance

## How do I use this function?

You would use it like this:

```js
import Jimp from 'jimp';
import { sprite } from 'sprite';

const image = await Jimp.read('image.png');

const colorToReplace = Jimp.rgbaToInt(255, 255, 255); // replace white
const colorThreshold = 60; 

sprite.removeBackground(image, colorToReplace, colorThreshold);
```

This scans every pixel in the image. If a pixel's color is within 60 units of white, it will be made transparent.


  
  