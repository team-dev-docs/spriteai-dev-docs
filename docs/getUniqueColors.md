# getUniqueColors Documentation

## Brief Description
`getUniqueColors` is a function that analyzes an image and returns an array of unique colors present in the image, excluding fully transparent pixels.

## Usage
To use `getUniqueColors`, you need to import it from the module where it's defined. Then, you can call it with the path to your image file.

```javascript
import { getUniqueColors } from './path/to/module';
```

## Parameters
- `imagePath` (string, required): The file path to the image you want to analyze.
- `options` (object, optional): An optional object for additional configuration (currently not used in the function).

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

### Using with Options (for future extensibility)
```javascript
const imagePath = './path/to/your/image.png';
const options = {}; // Currently not used, but prepared for future features
const uniqueColors = await getUniqueColors(imagePath, options);
console.log(uniqueColors);
```

## Notes or Considerations
- The function uses the Jimp library to read and process images, so make sure Jimp is installed in your project.
- Fully transparent pixels (alpha = 0) are ignored in the color analysis.
- The returned color values are integers representing RGBA colors. You may need to convert these to other formats (like hex) for certain use cases.
- Large images may take longer to process due to the pixel-by-pixel scanning approach.
- This function is asynchronous and returns a Promise, so remember to use `await` or `.then()` when calling it.