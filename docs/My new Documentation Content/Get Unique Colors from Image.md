
  
  

# Get Unique Colors from Image

This is a function that is exported from the Sprite SDK and can be imported like:

```js
import { sprite } from 'sprite';
```

## Why should I use this function?

This function allows you to get a set of unique color values from a given image file. It can be useful for analyzing the predominant colors in an image.

## What parameters are required?

The function takes one parameter:

- `imagePath` - The file path to the image file to analyze

## Prerequisites

- The `Sprite` SDK needs to be installed
- The image file needs to exist at the given file path

## How do I use this function?

Import the `getUniqueColors` function from the `sprite` SDK:

```js 
import { sprite } from 'sprite';
```

Then call the function, passing in the file path to your image:

```js
const colors = await sprite.getUniqueColors('/path/to/image.png');
```

This will return an array of unique color integer values found in the image. You can then process or display these colors as needed.

The function scans every pixel in the image and collects each unique RGBA color combo into a Set. It omits fully transparent pixels. This allows you to see the variety of colors present in the image.


  
  