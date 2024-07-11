
  
  # **Image Color Replacement**

High Level

This function is part of our Node.js SDK for image processing. It allows you to replace a specific color in an image with transparency. You can import it from the `sprite` object after installing our package from NPM:

```javascript
import { sprite } from 'sprite'
```

## Why should I use this function?

Use this function when you need to remove a specific background color from an image, creating transparency. It's particularly useful for:
- Preparing sprites for game development
- Cleaning up images for web design
- Creating cutout effects in digital art

## What parameters are required?

The function requires the following parameters:
1. `image`: A Jimp image object
2. `colorToReplace`: The color to be replaced (in integer format)
3. `colorThreshold`: A threshold value for color matching (optional)

## Prerequisites

Before using this function, ensure you have:
1. Installed our SDK and Jimp library
2. Loaded your image into a Jimp object

## How do I use this function?

Here's a step-by-step guide to using the color replacement function:

1. Load your image using Jimp
2. Call the function, passing the Jimp image object, the color to replace, and optionally, a color threshold
3. The function will scan the image pixel by pixel
4. For each pixel, it calculates the color difference between the pixel and the color to replace
5. If the difference is within the threshold, the pixel is made transparent
6. The resulting image will have the specified color replaced with transparency

Example usage:
```javascript
import Jimp from 'jimp';
import { sprite } from 'sprite';

Jimp.read('path/to/your/image.png')
  .then(image => {
    const colorToReplace = Jimp.rgbaToInt(255, 0, 0, 255); // Replace red
    const colorThreshold = 50; // Adjust as needed
    sprite.replaceColor(image, colorToReplace, colorThreshold);
    return image.writeAsync('output.png');
  })
  .catch(err => {
    console.error(err);
  });
```

This function provides a powerful tool for image manipulation, allowing you to easily create transparent backgrounds or remove specific colors from your images programmatically.
  
  