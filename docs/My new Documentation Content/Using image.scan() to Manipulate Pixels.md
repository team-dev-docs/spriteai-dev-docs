
  
  

# image.scan()

This is a method on the image object that allows you to iterate through all the pixels in an image and perform some action on each pixel. It is useful for manipulating pixel data and applying effects to images.

## Why should I use this function?

You would use this function when you need to directly access and modify the pixel data of an image. Some examples:

- Changing colors of pixels
- Making parts of an image transparent
- Detecting particular colors
- Applying filters or effects to an image

## What are the parameters required?

- `x` - The x coordinate of the top left corner to start scanning from
- `y` - The y coordinate of the top left corner to start scanning from  
- `w` - The width of the area to scan
- `h` - The height of the area to scan
- `fn` - The callback function to invoke for each pixel

The callback function is invoked with:

- `x` - The x coordinate of the current pixel
- `y` - The y coordinate of the current pixel
- `idx` - The index in the pixel array for the current pixel

## Prerequisites

- The image object this method is called on, which contains the bitmap data

## How do I use this function?

Basic usage:

```js
const image = await Jimp.read(filepath);

image.scan(0, 0, image.bitmap.width, image.bitmap.height, (x, y, idx) => {
  // pixel manipulation code
});
```

In the provided code example, it iterates through each pixel, gets the color values, calculates the color difference from a target color, and makes pixels transparent if they are close to the target color.

So it's applying a green screen type effect, making pixels that are close to a specified color transparent.


  
  