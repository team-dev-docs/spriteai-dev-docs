# getUniqueColors Documentation

## Brief Description
🎨 `getUniqueColors` is a powerful function that analyzes an image and returns an array of unique colors present in the image, excluding fully transparent pixels. It's like a color detective, sniffing out every distinct hue in your digital masterpiece!

## Usage
To unleash the color-finding prowess of `getUniqueColors`, import it from its cozy module home. Then, call it with the path to your image file and watch the magic unfold!

```javascript
import { getUniqueColors } from './path/to/module';
```

## Parameters
- `imagePath` (string, required): The file path to the image you want to analyze. Think of it as the treasure map to your color goldmine!
- `options` (object, optional): An optional object for additional configuration. Currently not used, but it's like a Swiss Army knife - ready for future adventures!

## Return Value
The function returns a Promise that resolves to an array of integers. Each integer represents a unique color found in the image, encoded as RGBA. It's like getting a secret code for each color!

## Examples

### Basic Usage
```javascript
const imagePath = './path/to/your/image.png';
const uniqueColors = await getUniqueColors(imagePath);
console.log(uniqueColors);
// Output: [16777215, 0, 16711680, ...] (example values)
// Look at all those numbers! Each one is a color in disguise.
```

### Using with Options (for future extensibility)
```javascript
const imagePath = './path/to/your/image.png';
const options = {}; // Currently not used, but prepared for future features
const uniqueColors = await getUniqueColors(imagePath, options);
console.log(uniqueColors);
// Who knows what cool features these options might unlock in the future?
```

## Notes or Considerations
- 📚 The function uses the Jimp library to read and process images. Make sure Jimp is installed in your project, or you'll be seeing more errors than colors!
- 👻 Fully transparent pixels (alpha = 0) are ignored in the color analysis. They're like the ghosts of the color world - present, but unseen.
- 🧮 The returned color values are integers representing RGBA colors. You might need to put on your math hat and convert these to other formats (like hex) for certain use cases.
- 🐢 Large images may take longer to process due to the pixel-by-pixel scanning approach. It's thorough, but not exactly Usain Bolt.
- ⏳ This function is asynchronous and returns a Promise, so remember to use `await` or `.then()` when calling it. Don't let it catch you unprepared!

Happy color hunting! May your palettes be ever vibrant and your transparencies always intentional. 🌈✨
