
  
  

# removeBackgroundColor

Removes the background color from an image based on a specified target color. This function is exported from the Sprite SDK and can be imported and used as follows:

```js
import { sprite } from 'sprite';

sprite.removeBackgroundColor(/* params */); 
```

## Why use this function?

This function is useful when you want to remove a solid background color from an image to make the foreground subjects stand out more. For example, removing a white background from a product photo.

## What parameters are required?

- `inputPath` - The file path to the input image
- `outputPath`- The file path to save the output image 
- `targetColor` - The background color to remove, specified as a CSS color name (e.g. 'white')
- `colorThreshold` (optional) - The color difference threshold used to replace pixels. Defaults to 0.

## Prerequisites

- Node.js installed
- Sprite SDK installed via npm
- Input image file with a solid background color

## How to use

Import the `removeBackgroundColor` function from the Sprite SDK. Provide the input image path, output image path, and target background color name. Can also provide an optional `colorThreshold` value to control the color difference for replacing pixels.

The function handles opening the image, scanning pixels, removing those within the threshold of the target color, saving the output image, and returning a Promise.


  
  