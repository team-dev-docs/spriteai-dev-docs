
  
  

# Get Unique Colors from Image

This is a function that is exported from the Sprite SDK that you can import like:

```
import { sprite } from sprite
```

## Why should I use this function?

This function allows you to get a set of unique color values from a given image file. It scans the image pixel by pixel and collects any unique RGBA color values into a Set.

## What params or arguments are required?

The function takes one parameter:

- `imagePath` - The file path to the image file to scan for colors

## Prerequisites

- The `Jimp` module needs to be installed and imported for image processing
- The image file needs to exist at the given file path

## How do I use this function?

You would use it like:

```
const colors = await sprite.getUniqueColors('/path/to/image.png');
```

This will scan the image and return a Array of unique integer color values from the image. You can then process or display the colors as needed.

The function scans every pixel in the image and collects any color where the alpha channel is not fully transparent into a Set, which only stores unique values. This allows efficient collection of all unique colors. The Set is then converted to an Array to return.


  
  