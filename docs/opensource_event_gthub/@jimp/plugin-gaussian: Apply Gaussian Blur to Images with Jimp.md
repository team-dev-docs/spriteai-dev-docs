
  
  # **@jimp/plugin-gaussian**

**High Level**

This is a plugin for the Jimp image processing library that provides a Gaussian blur filter. It can be installed from NPM and imported into your project like this:

```javascript
import jimpGaussian from '@jimp/plugin-gaussian';
```

**Why should I use this plugin?**

The Gaussian blur filter is a widely used image processing technique that helps reduce noise and detail in an image, creating a smooth, blurred effect. This can be useful for various purposes, such as:

- Creating depth-of-field effects
- Reducing image noise
- Enhancing artistic styles
- Preparing images for further processing or analysis

**Prerequisites**

To use this plugin, you need to have the following installed:

1. Node.js and NPM (Node Package Manager)
2. The `jimp` library, which is a powerful image processing library for Node.js

**How do I use this plugin?**

Here's an example of how you can use the `@jimp/plugin-gaussian` plugin with the `jimp` library:

```javascript
import Jimp from 'jimp';
import jimpGaussian from '@jimp/plugin-gaussian';

// Load the plugin
Jimp.plugins.extend(jimpGaussian);

// Load an image
Jimp.read('path/to/image.jpg')
  .then(image => {
    // Apply the Gaussian blur filter
    image.gaussian(radius, sigma, isMultiplied)
      .then(blurredImage => {
        // Save the blurred image
        blurredImage.write('path/to/blurred-image.jpg');
      });
  })
  .catch(err => {
    console.error(err);
  });
```

The `gaussian` method accepts three parameters:

1. `radius` (number): The radius of the Gaussian blur effect. A higher value will result in a stronger blur.
2. `sigma` (number, optional): The sigma value used in the Gaussian calculation. If not provided, it will be calculated based on the `radius` value.
3. `isMultiplied` (boolean, optional): Whether the sigma value should be multiplied by the radius value or not. Defaults to `true`.

By using this plugin, you can easily apply a Gaussian blur effect to your images, enhancing their visual quality or preparing them for further processing or analysis tasks.
  
  