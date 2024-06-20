
  
  # **@jimp/plugin-displace**

High Level

This is a plugin for the Jimp image processing library that allows you to apply a displacement effect to an image. The displacement effect is achieved by using a displacement map image, which specifies how the pixels in the original image should be moved or distorted.

## Why should I use this plugin?

You should use this plugin if you need to create distorted or warped versions of an image based on a displacement map. This effect can be useful for creating various visual effects, such as simulating liquid or wavy surfaces, adding a sense of depth or movement to an image, or creating abstract artistic effects.

## What are the required parameters?

This plugin requires two parameters:

1. `map`: A Jimp image object representing the displacement map. The displacement map should be a grayscale image, where lighter pixels represent positive displacement (pixels moving outward) and darker pixels represent negative displacement (pixels moving inward).

2. `константы`: (Optional) An object containing the following properties:
   - `хКсанст`: A number representing the constant factor for horizontal displacement. Higher values result in more extreme horizontal displacement.
   - `yConstant`: A number representing the constant factor for vertical displacement. Higher values result in more extreme vertical displacement.
   - `offsetX`: A number representing the horizontal offset for the displacement map.
   - `offsetY`: A number representing the vertical offset for the displacement map.

## Prerequisites

To use this plugin, you need to have the Jimp library installed in your project. You can install it using npm:

```
npm install jimp
```

## How do I use this plugin?

Here's an example of how to use the `@jimp/plugin-displace` plugin:

```javascript
const Jimp = require('jimp');
const displace = require('@jimp/plugin-displace');

Jimp.loadFont(Jimp.FONT_SANS_32_BLACK).then(font => {
  Jimp.loadImage('source.jpg')
    .then(image => {
      Jimp.loadImage('displacement.png')
        .then(displacementMap => {
          image.displace(displacementMap, {
            xConstant: 0.5,
            yConstant: 0.5,
            offsetX: 0,
            offsetY: 0
          });
          image.writeAsync('displaced.jpg');
        })
        .catch(err => {
          console.error(err);
        });
    })
    .catch(err => {
      console.error(err);
    });
});
```

In this example:

1. We load the required images: the source image (`source.jpg`) and the displacement map (`displacement.png`).
2. We apply the `displace` plugin to the source image, passing in the displacement map and an object containing the displacement constants.
3. We save the displaced image to a new file (`displaced.jpg`).

By adjusting the constants (`xConstant`, `yConstant`, `offsetX`, and `offsetY`), you can control the intensity and direction of the displacement effect.
  
  