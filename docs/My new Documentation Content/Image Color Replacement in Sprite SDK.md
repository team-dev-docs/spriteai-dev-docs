
  
  

# Image Color Replacement

This is a function that is used to replace colors in an image that are similar to a specified color. It is exported from the Sprite SDK and can be imported like:

```
import { sprite } from 'sprite';
```

## Why should I use this function?

This function is useful when you want to replace a specific color in an image with transparency. For example, if you have an image with a white background, you could use this to remove the background.

## What parameters are required?

The function takes the following parameters:

- `image`: The Jimp image instance to apply the color replacement to 
- `colorToReplace`: The color int value representing the color to replace
- `colorThreshold`: The color difference threshold - colors below this difference from `colorToReplace` will be replaced

## Prerequisites

- The Sprite SDK installed
- A Jimp image instance
- Knowledge of the color values you wish to replace 

## How do I use this function?

You would use it by calling the function and passing in the image, color to replace, and threshold. For example:

```
sprite.imageColorReplace(image, 0xFFFFFFFF, 50); 
```

This scans the image, replaces any colors within 50 difference of 0xFFFFFFFF (white) with transparency, effectively removing white backgrounds.

The function iterates through each pixel in the image. It calculates the color difference between that pixel's color and the `colorToReplace` value. If the difference is less than the `colorThreshold`, it sets the alpha channel of that pixel to 0, making it fully transparent.

So it provides an easy way to remove backgrounds or replace a specific color in an image with transparency.


  
  