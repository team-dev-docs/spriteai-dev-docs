
  
   # **Image Processing API**

## What does this do?

The Image Processing API provides a set of functions for manipulating images. These functions can be used to remove backgrounds, encode images to base64, get the unique colors in an image, and generate sprite sheets and 2D assets of houses.

## Why should I use this?

The Image Processing API can be used to improve the quality of your images and make them more suitable for your needs. For example, you can use the removeBackgroundColor function to remove the background of an image, making it easier to use in a variety of contexts. You can also use the encodeImage function to encode an image to base64, which can be useful for storing images in a database or sending them over the internet.

## How to use this

To use the Image Processing API, you can import the `image-processing` module into your project. Once you have imported the module, you can use the functions provided by the API to manipulate your images.

Here are some examples of how to use the Image Processing API:

```
// Remove the background of an image
const inputPath = 'path/to/input.png';
const outputPath = 'path/to/output.png';
const targetColor = '#ffffff'; // white
const colorThreshold = 0; // no threshold

await removeBackgroundColor(inputPath, outputPath, targetColor, colorThreshold);

// Encode an image to base64
const imagePath = 'path/to/image.png';

const base64Image = encodeImage(imagePath);

// Get the unique colors in an image
const imagePath = 'path/to/image.png';

const uniqueColors = await getUniqueColors(imagePath);

// Generate a sprite sheet of a character
const description = 'A walking cat';
const options = {
  size: '1024x1024',
  save: true,
};

const result = await sprite.generateSprite(description, options);

// Generate a 2D asset of a house
const description = 'A small house';
const options = {
  size: '1024x1024',
};

const result = await sprite.generateHouseAsset(description, options);
```

## Conclusion

The Image Processing API provides a powerful set of functions for manipulating images. These functions can be used to improve the quality of your images and make them more suitable for your needs.
  
  