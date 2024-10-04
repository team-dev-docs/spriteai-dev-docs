

  # **getUniqueColors Function**

High Level

This is an asynchronous function that is part of our image processing toolkit. While it's not explicitly shown as being exported from an SDK, it's designed to extract unique colors from an image file.

```javascript
async function getUniqueColors(imagePath, options = {})
```

## Why should I use this function?

Use this function when you need to analyze the color palette of an image. It's particularly useful for:
- Color analysis in graphic design projects
- Optimizing image compression by identifying the color range
- Creating color schemes based on existing images

## What parameters or arguments are required?

1. `imagePath` (required): The path to the image file you want to analyze.
2. `options` (optional): An object for additional configuration (currently unused in the provided code).

## Prerequisites

- Node.js environment
- Jimp library installed (`npm install jimp`)

## How do I use this function?

1. Ensure you have the Jimp library installed in your project.
2. Call the function with the path to your image:

```javascript
const uniqueColors = await getUniqueColors('./path/to/your/image.png');
console.log(uniqueColors);
```

This will return an array of unique color values found in the image, represented as integers.

Note:
- The function ignores fully transparent pixels (alpha = 0).
- Colors are returned as Jimp integer representations. You may need to convert these to other formats (like hex) for further use.
- The function scans every pixel of the image, which may be time-consuming for large images.

Remember to handle potential errors when reading the image file or processing large images.

  