# getUniqueColors

## Overview

The `getUniqueColors` function analyzes an image and returns an array of unique colors present in the image, excluding fully transparent pixels. This function has been updated with new default options for enhanced flexibility.

## Usage

To use `getUniqueColors`, import it from the module where it's defined and call it with the path to your image file.

```javascript
import { getUniqueColors } from './path/to/module';

const uniqueColors = await getUniqueColors(imagePath, options);
```

## Parameters

- `imagePath` (string, required): The file path to the image you want to analyze.
- `options` (object, optional): An optional configuration object with the following properties:
  - `maxColors` (number, default: 256): The maximum number of unique colors to return.
  - `colorSpace` (string, default: "rgb"): The color space to use for analysis. Currently only supports "rgb".

## Return Value

The function returns a Promise that resolves to an array of integers. Each integer represents a unique color found in the image, encoded as RGBA.

## Examples

### Basic Usage

```javascript
const imagePath = './path/to/your/image.png';
const uniqueColors = await getUniqueColors(imagePath);
console.log(uniqueColors);
// Output: [16777215, 0, 16711680, ...] (example values)
```

### Using Custom Options

```javascript
const imagePath = './path/to/your/image.png';
const options = {
  maxColors: 100,
  colorSpace: "rgb"
};
const uniqueColors = await getUniqueColors(imagePath, options);
console.log(uniqueColors);
```

## Notes and Considerations

- The function uses the Jimp library to read and process images. Ensure that Jimp is installed in your project.
- Fully transparent pixels (alpha = 0) are ignored in the color analysis.
- The returned color values are integers representing RGBA colors. You may need to convert these to other formats (like hex) for certain use cases.
- Large images may take longer to process due to the pixel-by-pixel scanning approach.
- This function is asynchronous and returns a Promise, so remember to use `await` or `.then()` when calling it.
- The `maxColors` option can be used to limit the number of colors returned, which may be useful for performance optimization or color palette generation.
- Currently, only the "rgb" color space is supported. Future updates may include support for additional color spaces.