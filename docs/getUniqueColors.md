# getUniqueColors Documentation

## Brief Description
`getUniqueColors` is a powerful function that analyzes an image and returns an array of unique colors present in the image, excluding fully transparent pixels. It's your go-to tool for extracting the color palette from any image!

## Usage
To unleash the color-detecting magic of `getUniqueColors`, import it from the module where it's defined. Then, you can call it with the path to your image file and watch the colors unfold!

```javascript
import { getUniqueColors } from './path/to/module';
```

## Parameters
- `imagePath` (string, required): The file path to the image you want to analyze. Think of it as the treasure map to your color goldmine!
- `options` (object, optional): An optional object for additional configuration (currently not used in the function, but stay tuned for future enhancements!).

## Return Value
The function returns a Promise that resolves to an array of integers. Each integer represents a unique color found in the image, encoded as RGBA. It's like getting a secret code for each color in your image!

## Examples

### Basic Usage
```javascript
const imagePath = './path/to/your/image.png';
const uniqueColors = await getUniqueColors(imagePath);
console.log(uniqueColors);
// Output: [16777215, 0, 16711680, ...] (example values)
// Look at all those lovely color codes!
```

### Using with Options (for future extensibility)
```javascript
const imagePath = './path/to/your/image.png';
const options = {}; // Currently not used, but prepared for future features
const uniqueColors = await getUniqueColors(imagePath, options);
console.log(uniqueColors);
// Get ready for even more colorful possibilities in the future!
```

## Notes or Considerations
- The function uses the Jimp library to read and process images. Make sure Jimp is installed in your project, or you'll be seeing gray instead of vibrant colors!
- Fully transparent pixels (alpha = 0) are ignored in the color analysis. We don't count invisible colors!
- The returned color values are integers representing RGBA colors. You may need to convert these to other formats (like hex) for certain use cases. It's like translating from color-speak to human-speak!
- Large images may take longer to process due to the pixel-by-pixel scanning approach. Patience is a virtue when dealing with color masterpieces!
- This function is asynchronous and returns a Promise, so remember to use `await` or `.then()` when calling it. Don't let your colors get ahead of you!

Get ready to dive into the colorful world of image analysis with `getUniqueColors`! It's not just a function, it's your ticket to unlocking the hidden palette in every pixel!
