
  
  

# encodeImage

This is a function that encodes an image file into a base64 string. It is exported from the sprite SDK.

## Why should I use this function?

You can use this function to encode image files as base64 strings before uploading or sending them to the Sprite API. This allows the image data to be transmitted as a string rather than as a binary file.

## What are the parameters required?

This function takes one parameter:

- `imagePath` - The file path of the image file to encode.

## Prerequisites

- The `fs` and `Buffer` modules from Node.js need to be imported/required.

## How do I use this function?

```js
import { sprite } from "sprite";

const encodedImage = sprite.encodeImage("/path/to/image.png"); 
```

The function returns the base64 encoded string version of the image file contents. This can then be used in Sprite API calls or otherwise transmitted or stored as a string.


  
  