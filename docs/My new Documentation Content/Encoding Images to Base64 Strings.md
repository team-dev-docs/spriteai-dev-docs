
  
  

# **encodeImage**

This is a function that is exported from the sprite SDK that you can import like:

```
import { encodeImage } from 'sprite';
```

## Why should I use this function?

The encodeImage function allows you to encode an image file into a base64 string representation. This is useful if you need to send image data over the network or embed it into a text format.

## What params or arguments are required?

encodeImage takes one parameter:

- `imagePath` - The file path to the image file you want to encode

## Prerequisites

- The `fs` module needs to be imported to access the file system 
- An image file that exists on the file system

## How do I use this function?

Just pass the file path to the image you want to encode:

```
const encoded = encodeImage('/path/to/image.png');
```

The function will read the image file, convert it to base64 encoding, and return the encoded string. You can then send or store that encoded string and decode it back into an image on the other end.


  
  