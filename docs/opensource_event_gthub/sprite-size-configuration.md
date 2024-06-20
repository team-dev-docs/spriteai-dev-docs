
  
  # **Sprite Size Configuration**

## High Level

The `size` option is a configuration parameter used in the SpriteAI library to set the desired size for the generated image. This function is part of the SpriteAI Node.js SDK, which you can install from NPM and import into your project like this:

```javascript
import { sprite } from 'spriteai';
```

## Why should I use this option?

The `size` option allows you to specify the dimensions of the generated image, ensuring that the output meets your requirements. This is particularly useful when you need to create images with specific dimensions for various use cases, such as web graphics, social media posts, or print materials.

## What are the required parameters?

The `size` option takes a string value representing the desired image dimensions in the format `"width"x"height"`. For example, `"1024x768"` would set the image size to 1024 pixels wide and 768 pixels tall.

If you don't provide a `size` option, the default value `"1024x1024"` will be used, generating a square image with a resolution of 1024 by 1024 pixels.

## Prerequisites

- Make sure you have the SpriteAI Node.js SDK installed in your project.
- Import the necessary functions or objects from the SpriteAI library.

## How do I use this option?

To use the `size` option, you need to pass it as part of the configuration object when calling the appropriate SpriteAI function. Here's an example:

```javascript
import { sprite } from 'spriteai';

const imageOptions = {
  size: "800x600", // Set the image size to 800 pixels wide and 600 pixels tall
  // Other options...
};

const generatedImage = await sprite.generateImage(prompt, imageOptions);
```

In the example above, we create an `imageOptions` object and set the `size` property to `"800x600"`. This configuration object is then passed to the `sprite.generateImage` function, which will generate an image with the specified dimensions based on the given prompt.

By providing the `size` option, you have control over the output image dimensions, ensuring that the generated image meets your specific requirements.
  
  