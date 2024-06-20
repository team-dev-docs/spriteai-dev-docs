
  
  # **pixelmatch**

High Level

pixelmatch is a Node.js package that provides a function for comparing two image data objects and generating a third image data object highlighting the differences between them. It is commonly used for image processing tasks such as visual regression testing, image similarity analysis, and image compression.

## Why should I use this function?

The `pixelmatch` function is useful when you need to compare two images pixel-by-pixel and identify the differences between them. It can be used in various scenarios, such as:

1. **Visual Regression Testing**: Ensure that UI components or rendered images have not changed unintentionally after code updates.
2. **Image Similarity Analysis**: Determine the similarity between two images, which can be useful in image search, pattern recognition, or image deduplication tasks.
3. **Image Compression**: Identify and encode only the changed pixels between two images, resulting in more efficient compression.

## What are the parameters or arguments required?

The `pixelmatch` function takes the following arguments:

1. `img1`: The first image data object to be compared.
2. `img2`: The second image data object to be compared.
3. `output` (optional): An optional third image data object to store the result. If not provided, a new image data object will be created.
4. `width`: The width of the images in pixels.
5. `height`: The height of the images in pixels.
6. `options` (optional): An optional object containing additional options:
   - `threshold` (optional): The maximum acceptable square-root of the sum of all squared pixel differences between the two images. If not provided, it defaults to `0.1`.
   - `includeAA` (optional): Whether to check anti-aliased pixels or not. If not provided, it defaults to `true`.

## Prerequisites

To use the `pixelmatch` package, you need to have Node.js installed on your system. You can install the package using npm by running the following command:

```
npm install pixelmatch
```

## How do I use this function?

Here's an example of how to use the `pixelmatch` function:

```javascript
const fs = require('fs');
const PNG = require('pngjs').PNG;
const pixelmatch = require('pixelmatch');

// Load the first image
const img1 = fs.createReadStream('image1.png').pipe(new PNG()).on('parsed', doneReading);

// Load the second image
const img2 = fs.createReadStream('image2.png').pipe(new PNG()).on('parsed', doneReading);

let filesRead = 0;

function doneReading() {
  filesRead++;
  if (filesRead < 2) return;

  const { width, height } = img1;
  const diff = new PNG({ width, height });

  const numDiffPixels = pixelmatch(
    img1.data, img2.data, diff.data, width, height, { threshold: 0.2 }
  );

  fs.writeFileSync('diff.png', PNG.sync.write(diff));
  console.log(`Pixels different: ${numDiffPixels}`);
}
```

In this example, we load two images (`image1.png` and `image2.png`) using the `pngjs` library. Once both images are loaded, we call the `pixelmatch` function, passing the image data objects, the desired output dimensions, and an optional `threshold` option.

The `pixelmatch` function compares the two images pixel-by-pixel and generates a new image data object (`diff.data`) containing the differences between them. The function returns the number of different pixels between the two images.

Finally, we write the `diff.data` image data object to a new file (`diff.png`) using the `pngjs` library, and log the number of different pixels to the console.
  
  