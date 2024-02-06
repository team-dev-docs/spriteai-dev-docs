
  
  

# removeBackgroundColor

This is a function that removes a specific background color from an image. It is exported from the Sprite SDK.

## Why should I use this function?

You should use this function when you want to remove a solid background color from an image, making the background transparent. This is useful for removing white or other solid color backgrounds.

## What params or arguments are required?

The function takes the following parameters:

- `inputPath` - The file path to the image file to process
- `outputPath` - The file path to save the output image with transparent background 
- `targetColor` - The color to remove, specified as a CSS color name (e.g. 'white')
- `colorThreshold` (optional) - How close a color needs to match to be replaced. Defaults to 0.

## Prerequisites

- Node.js and NPM need to be installed
- The Sprite SDK needs to be installed via NPM
- The image file needs to exist at `inputPath`

## How do I use this function?

Import the function from the Sprite SDK:

```js
import { sprite } from 'sprite';
```

Then call the function, passing the required parameters:

```js 
await sprite.removeBackgroundColor('input.png', 'output.png', 'white'); 
```

This will remove the white background from `input.png`, save the output to `output.png`, and make the background transparent.

You can optionally pass a fourth parameter `colorThreshold` to control how similar a color needs to be to white before being removed:

```js
sprite.removeBackgroundColor('input.png', 'output.png', 'white', 10); 
```


  
  