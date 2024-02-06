
  
  

# removeBackgroundColor

This is a function that removes a specific background color from an image by making pixels with that color transparent.

## Why should I use this function?

This function is useful when you want to remove a solid color background from an image to make the foreground content stand out more. For example, removing a white background from a product photo.

## What params or arguments are required?

The function takes the following parameters:

- `inputPath` - The file path to the image file
- `outputPath` - The file path to save the output image 
- `targetColor` - The color to remove, specified as a CSS color name (e.g. 'white')
- `colorThreshold` (optional) - How close a color needs to be to the target color to be replaced. Defaults to 0.

## Prerequisites

- The `Jimp` module needs to be installed and imported
- The image file needs to exist at `inputPath`

## How do I use this function?

Import the function:

```js
const { removeBackgroundColor } = require('sprite'); 
```

Then call it:

```js 
await removeBackgroundColor('./image.jpg', './image-no-bg.png', 'white'); 
```

This will remove the white background from image.jpg and save the resulting image to image-no-bg.png.

You can optionally specify a `colorThreshold` to control how similar a color needs to be to white before it is removed:

```js
await removeBackgroundColor('./image.jpg', './image-no-bg.png', 'white', 10); 
```


  
  