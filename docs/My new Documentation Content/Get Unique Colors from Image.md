
  
  

# Get Unique Colors from Image

This is a function that is exported from the Sprite SDK that you can import like:

```js
import { sprite } from 'sprite';
```

## Why Use This Function

This function analyzes an image and returns an array of the unique color values found in the non-transparent pixels of that image. 

It can be useful for extracting a palette from a sprite sheet or other image asset to use in your application.

## Parameters

The function takes one parameter:

- `imagePath` - The file path of the image to analyze for colors

## Prerequisites

- The Sprite SDK installed via NPM
- An image file that exists at the provided path

## Usage

Call the `getUniqueColors` function, passing the path to your image:

```js
const colors = await sprite.getUniqueColors('/path/to/image.png');
```

The function returns a Promise that resolves to an array of integer color values.

It scans every pixel in the image, skips fully transparent ones, and adds each unique RGBA color encountered to a Set, before converting to an array. This eliminates duplicates and returns only the distinct colors in the image.

You can then use this array of colors for something like dynamically styling your app to match the image palette.


  
  