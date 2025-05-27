# getUniqueColors Documentation

## Brief Description
`getUniqueColors` is a spicy function that dives deep into your image, extracting a rainbow of unique colors while ghosting those pesky transparent pixels. It's like a color detective, uncovering the hidden palette of your digital masterpiece!

## Usage
Ready to unleash the color beast? Import `getUniqueColors` and let it feast on your image file:

```javascript
import { getUniqueColors } from './path/to/module';
```

## Parameters
- `imagePath` (string, required): The treasure map leading to your image file. Choose wisely!
- `options` (object, optional): A secret spice blend for future enhancements. Currently unused, but stay tuned for upcoming flavor explosions!

## Return Value
Buckle up! This function returns a Promise that resolves to an array of integers, each one a unique color encoded as RGBA. It's like getting the genetic code of your image's color palette!

## Examples

### Basic Usage
```javascript
const imagePath = './path/to/your/image.png';
const uniqueColors = await getUniqueColors(imagePath);
console.log(uniqueColors);
// Output: [16777215, 0, 16711680, ...] (A symphony of color codes!)
```

### Using with Options (for future flavor enhancements)
```javascript
const imagePath = './path/to/your/image.png';
const options = {}; // Currently as bland as unflavored tofu, but watch this space!
const uniqueColors = await getUniqueColors(imagePath, options);
console.log(uniqueColors);
```

## Notes or Considerations
- This function is powered by the Jimp library. Make sure you've got Jimp in your pantry (err... project)!
- Fully transparent pixels are given the cold shoulder. No color for you, invisible pixel!
- The returned colors are integer-encoded RGBA values. They're like secret color codes waiting to be deciphered!
- Got a massive image? Grab a coffee - this pixel-by-pixel analysis might take a hot minute.
- Remember, this function is asynchronous. Use `await` or `.then()` unless you enjoy unresolved promises and existential crises.
- Pro tip: Convert these integer values to hex for a more colorful life (and easier use in some cases).
