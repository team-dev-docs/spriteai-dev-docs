
  
  Here's the updated documentation based on the provided code:

# **@jimp/gif**

High Level

The `@jimp/gif` package is a dependency used within the SpriteAI Node.js SDK. It provides functionality for working with GIF images, such as encoding, decoding, and manipulating GIF files.

## Why should I use this package?

The `@jimp/gif` package is a part of the Jimp library, which is a powerful image processing library for Node.js. It allows you to seamlessly work with GIF images within your application, enabling you to perform various operations like resizing, cropping, and applying filters.

## Prerequisites

Before using this package, ensure that you have the following prerequisites installed:

1. Node.js (version X.X.X or higher)
2. The SpriteAI Node.js SDK installed (version X.X.X or higher)

## How do I use this package?

You don't need to import or use this package directly in your application. It is a dependency automatically included and managed by the SpriteAI Node.js SDK. When you import and use the SpriteAI SDK, the functionality provided by `@jimp/gif` will be available for handling GIF images within your application.

Here's an example of how you might use the SpriteAI SDK to work with GIF images:

```javascript
import { spriteAI } from 'spriteai';

const gifImage = await spriteAI.loadGIF('path/to/your/gif.gif');
// Perform operations on the GIF image using the SpriteAI SDK methods
const resizedGif = gifImage.resize(300, 200);
await resizedGif.writeAsync('path/to/output/resized.gif');
```

In this example, the `loadGIF` method from the SpriteAI SDK is used to load a GIF image. The loaded GIF image can then be manipulated using various methods provided by the SDK, such as `resize`. Finally, the modified GIF image can be saved to a file using the `writeAsync` method.

The specific methods and functionality available will depend on the version of the SpriteAI SDK you are using. Please refer to the official documentation for more details and examples.
  
  