
  
  

# removeBackgroundColor

Removes a specific background color from an image.

## Why should I use this function?

This function allows you to remove a solid background color from an image, making the background transparent. This is useful for removing white or other solid color backgrounds from images to overlay on different backgrounds.

## What params or arguments are required?

- `inputPath` - The file path to the image
- `outputPath` - The file path to save the output image 
- `targetColor` - The background color to remove, specified as a CSS color name or hex value
- `colorThreshold` - Optional, specifies the allowable color difference. Lower values remove more similar colors.

## Prerequisites

- Jimp image library installed
- Image file with solid background color to remove

## How do I use this function?

Import the `removeBackgroundColor` function from the Sprite SDK. Then call it, passing the input image path, output image path, target background color, and optional color threshold.

For example:

```js
import { sprite } from sprite;

async function processImage() {
  await sprite.removeBackgroundColor('input.jpg', 'output.png', 'white'); 
}

processImage();
```

This will remove the white background from `input.jpg`, saving the processed image to `output.png`.


  
  