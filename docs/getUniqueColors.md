# getUniqueColors Documentation

## Brief Description
`getUniqueColors` is a powerful function that dissects an image, extracting its unique color palette while ignoring those sneaky fully transparent pixels. It's like a color detective, uncovering the hidden hues in your digital masterpiece!

## Usage
To unleash the color-hunting prowess of `getUniqueColors`, first summon it from its module lair. Then, set it loose on your unsuspecting image file!

```javascript
import { getUniqueColors } from './path/to/module';
```

## Parameters
- `imagePath` (string, required): The treasure map leading to your image file. Choose wisely!
- `options` (object, optional): A mystical object for future enhancements. Currently dormant, but who knows what secrets it may unlock in future updates?

## Return Value
This function returns a Promise that, when fulfilled, bestows upon you an array of integers. Each integer is a unique color found in your image, cleverly disguised as RGBA code. It's like receiving a secret message from your image!

## Examples

### Basic Usage
```javascript
const imagePath = './path/to/your/image.png';
const uniqueColors = await getUniqueColors(imagePath);
console.log(uniqueColors);
// Output: [16777215, 0, 16711680, ...] (example values)
// Behold! The sacred numbers of your image's color palette!
```

### Using with Options (for future extensibility)
```javascript
const imagePath = './path/to/your/image.png';
const options = {}; // An empty vessel, awaiting future magical properties
const uniqueColors = await getUniqueColors(imagePath, options);
console.log(uniqueColors);
// The same output, but with a hint of mystery for what the future holds!
```

## Notes or Considerations
- This function harnesses the mighty Jimp library to read and process images. Make sure you've invited Jimp to your project party!
- Fully transparent pixels (alpha = 0) are like chameleons - they're there, but they don't count in our color roundup.
- The returned color values are integers representing RGBA colors. They're like secret codes - you might need to decipher them into other formats (like hex) for certain missions.
- Beware! Large images might make this function ponder a bit longer. It's scanning every pixel like a meticulous detective, after all.
- Remember, this function is asynchronous and returns a Promise. Always use `await` or `.then()` when calling it, lest you fall into the pit of unresolved promises!
