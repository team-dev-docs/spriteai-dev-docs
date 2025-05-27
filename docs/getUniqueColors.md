# getUniqueColors Documentation 🌈

## 🚀 Brief Description
`getUniqueColors` is a sizzling function that analyzes an image and returns an array of unique colors present in the image, excluding those sneaky fully transparent pixels. It's like a color detective, but for your pixels!

## 🔥 Usage
To unleash the power of `getUniqueColors`, you need to import it from its secret lair (the module where it's defined). Then, you can summon it with the path to your image file.

```javascript
import { getUniqueColors } from './path/to/module';
```

## 🎭 Parameters
- `imagePath` (string, required): The file path to the image you want to scrutinize. Choose wisely!
- `options` (object, optional): An optional object for additional configuration (currently not used, but who knows what the future holds?).

## 🎁 Return Value
The function returns a Promise that resolves to an array of integers. Each integer represents a unique color found in the image, encoded as RGBA. It's like unwrapping a colorful present!

## 🎨 Examples

### Basic Usage (AKA The Color Explosion)
```javascript
const imagePath = './path/to/your/image.png';
const uniqueColors = await getUniqueColors(imagePath);
console.log(uniqueColors);
// Output: [16777215, 0, 16711680, ...] (example values)
// Boom! Colors everywhere!
```

### Using with Options (for future awesomeness)
```javascript
const imagePath = './path/to/your/image.png';
const options = {}; // Currently not used, but prepared for future color-bending features
const uniqueColors = await getUniqueColors(imagePath, options);
console.log(uniqueColors);
// Get ready for even more color madness in the future!
```

## 🧠 Notes or Considerations
- The function uses the Jimp library to read and process images. Make sure Jimp is installed in your project, or face the wrath of undefined errors!
- Fully transparent pixels (alpha = 0) are ignored in the color analysis. They're like the ninjas of the pixel world.
- The returned color values are integers representing RGBA colors. You may need to convert these to other formats (like hex) for certain use cases. It's like color alchemy!
- Large images may take longer to process due to the pixel-by-pixel scanning approach. Patience, young color padawan!
- This function is asynchronous and returns a Promise, so remember to use `await` or `.then()` when calling it. Don't let those colors escape before you catch them!

Get ready to dive into a world of vibrant hues and dazzling shades with `getUniqueColors`! May your code be as colorful as your imagination! 🌈✨
