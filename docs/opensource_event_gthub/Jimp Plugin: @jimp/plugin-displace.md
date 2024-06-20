
  
  # **@jimp/plugin-displace**

**High Level**

This is a plugin for the Jimp image processing library that provides a method to displace or distort an image based on another image. It can be used to create interesting visual effects or image manipulations. The plugin is installed from the NPM package `@jimp/plugin-displace`.

```javascript
import Jimp from 'jimp';
import displace from '@jimp/plugin-displace';

Jimp.plugins.extend(displace);
```

**Why should I use this plugin?**

The `@jimp/plugin-displace` plugin allows you to create distorted or displaced versions of an image based on the pixel values of another image. This can be useful for creating various artistic effects, image glitches, or implementing image processing techniques like image warping or displacement mapping.

**What are the required parameters or arguments?**

The `displace` method provided by this plugin takes the following arguments:

1. `map`: A Jimp image object representing the displacement map. The pixel values of this image will be used to determine the displacement of pixels in the original image.
2. `offsetX` (optional): A number representing the horizontal offset of the displacement map. Default is 0.
3. `offsetY` (optional): A number representing the vertical offset of the displacement map. Default is 0.
4. `maskOpacity` (optional): A number between 0 and 1 representing the opacity of the displacement effect. A value of 1 means the displacement effect is fully applied, while a value of 0 means no displacement. Default is 1.

**Prerequisites**

Before using the `@jimp/plugin-displace` plugin, you need to have the following:

1. The `jimp` library installed and imported into your project.
2. The `@jimp/plugin-displace` plugin installed and imported into your project.
3. An image to be displaced (the original image).
4. A displacement map image, which will determine how the original image is distorted.

**How do I use this plugin?**

Here's an example of how to use the `@jimp/plugin-displace` plugin:

```javascript
import Jimp from 'jimp';
import displace from '@jimp/plugin-displace';

Jimp.plugins.extend(displace);

// Load the original image
Jimp.read('original.jpg')
  .then(image => {
    // Load the displacement map image
    return Jimp.read('displacement_map.jpg')
      .then(map => {
        // Apply the displacement effect
        image.displace(map, 20, 10, 0.8);

        // Save the displaced image
        image.write('displaced_image.jpg');
      });
  })
  .catch(err => {
    console.error(err);
  });
```

In this example, we first load the original image and the displacement map image using `Jimp.read`. Then, we apply the `displace` method to the original image, passing in the displacement map image, horizontal offset of 20 pixels, vertical offset of 10 pixels, and a mask opacity of 0.8. Finally, we save the displaced image using `image.write`.

The displacement effect is determined by the pixel values of the displacement map image. Lighter pixels in the map will displace the corresponding pixels in the original image more, while darker pixels will displace them less or not at all.
  
  