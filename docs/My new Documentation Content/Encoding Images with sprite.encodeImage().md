
  
  

# encodeImage

encodeImage is a function exported from the sprite SDK that allows you to encode an image file into a base64 encoded string.

## Why should I use this function?

You should use this function when you need to send an image file over the network or save an image in a database as a string rather than raw binary. Encoding the image as base64 makes it transportable as a string.

## What params or arguments are required?

encodeImage takes one parameter:

- imagePath - The file path to the image file you want to encode

## Prerequisites

- Node.js installed
- sprite SDK installed via NPM
- An image file you want to encode

## How do I use this function?

Import the sprite SDK:

```js
import { sprite } from sprite;
```

Then call the encodeImage method, passing the file path to your image:

```js
const encodedImage = sprite.encodeImage('./path/to/image.png');
```

The encodedImage variable will now contain a base64 encoded string version of the image that can be transported or saved to a database.


  
  