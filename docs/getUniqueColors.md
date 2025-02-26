# getUniqueColors

`getUniqueColors` is a function that analyzes an image and returns an array of unique colors present in the image, excluding fully transparent pixels.

## Usage

Import the function from the module where it's defined:

```javascript
import { getUniqueColors } from './path/to/module';
```

Then call it with the path to your image file:

```javascript
const imagePath = './path/to/your/image.png';
const uniqueColors = await getUniqueColors(imagePath);
```

## Parameters

- `imagePath` (string, required): The file path to the image you want to analyze.

## Return Value

The function returns a Promise that resolves to an array of integers. Each integer represents a unique color found in the image, encoded as RGBA.

## Example

```javascript
const imagePath = './assets/logo.png';
const uniqueColors = await getUniqueColors(imagePath);
console.log(uniqueColors);
// Output: [16777215, 0, 16711680, ...] (example values)
```

## Notes

- The function uses the Jimp library to read and process images. Ensure Jimp is installed in your project.
- Fully transparent pixels (alpha = 0) are ignored in the color analysis.
- The returned color values are integers representing RGBA colors. You may need to convert these to other formats (like hex) for certain use cases.
- Large images may take longer to process due to the pixel-by-pixel scanning approach.
- This function is asynchronous and returns a Promise, so remember to use `await` or `.then()` when calling it.