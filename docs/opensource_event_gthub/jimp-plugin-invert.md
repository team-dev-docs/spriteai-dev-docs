
  
  # **Jimp Plugin: Invert**

**High Level**

The `@jimp/plugin-invert` is a plugin for the Jimp image processing library. It provides a method to invert the colors of an image. This plugin is part of the Jimp ecosystem, and you can install it from NPM and import it into your project.

```js
import Jimp from 'jimp';
import invert from '@jimp/plugin-invert';

Jimp.prototype.invert = invert;
```

**Why should I use this function?**

The `invert` function is useful when you need to create a negative or inverted version of an image. This effect can be used for artistic purposes or to enhance certain image details by inverting the color values.

**What are the parameters or arguments required?**

The `invert` function does not require any arguments. It operates directly on the image instance it is called upon.

**Prerequisites**

Before using the `invert` function, you need to:

1. Install the `jimp` and `@jimp/plugin-invert` packages from NPM.
2. Import the `jimp` library and the `invert` plugin in your code.
3. Initialize a `Jimp` instance with an image.

**How do I use this function?**

Here's an example of how to use the `invert` function:

```js
import Jimp from 'jimp';
import invert from '@jimp/plugin-invert';

Jimp.prototype.invert = invert;

// Load an image
Jimp.read('image.jpg')
  .then(image => {
    // Invert the image colors
    image.invert();

    // Save the inverted image
    image.write('inverted-image.jpg');
  })
  .catch(err => {
    console.error(err);
  });
```

1. Import the required packages: `jimp` and `@jimp/plugin-invert`.
2. Extend the `Jimp` prototype with the `invert` function by assigning it: `Jimp.prototype.invert = invert;`.
3. Load an image using `Jimp.read('image.jpg')`.
4. Once the image is loaded, call the `invert` function on the `image` instance: `image.invert();`.
5. Save the inverted image using `image.write('inverted-image.jpg')`.

The `invert` function inverts the color values of each pixel in the image, creating a negative effect. This can be useful for enhancing certain image details or achieving artistic effects.
  
  