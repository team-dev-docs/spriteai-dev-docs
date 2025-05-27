# getUniqueColors Documentation

## Brief Description
🎨 `getUniqueColors` is a powerful function that dissects an image and extracts an array of unique colors, excluding those sneaky fully transparent pixels. It's like a color detective, uncovering the hidden palette of your images!

## Usage
Ready to unleash the color magic? First, summon `getUniqueColors` from its mystical module:

```javascript
import { getUniqueColors } from './path/to/module';
```

Then, prepare to embark on a colorful journey with your chosen image!

## Parameters
- `imagePath` (string, required): The sacred scroll (file path) leading to your image treasure.
- `options` (object, optional): A mystical artifact for future enhancements (currently dormant, but full of potential).

## Return Value
Behold! The function bestows upon you a Promise, which, when fulfilled, reveals an array of integers. Each integer is a unique color disguised as RGBA, waiting to be decoded by your keen eye.

## Examples

### Basic Usage
```javascript
const imagePath = './path/to/your/image.png';
const uniqueColors = await getUniqueColors(imagePath);
console.log(uniqueColors);
// Output: [16777215, 0, 16711680, ...] (a rainbow of possibilities!)
```

### Using with Options (for future wizardry)
```javascript
const imagePath = './path/to/your/image.png';
const options = {}; // An empty spellbook, ready for future enchantments
const uniqueColors = await getUniqueColors(imagePath, options);
console.log(uniqueColors);
```

## Notes or Considerations
- 🧙‍♂️ This function harnesses the power of the Jimp library. Ensure Jimp is in your magical toolbox (project dependencies).
- 👻 Fully transparent pixels (alpha = 0) are like ghosts - unseen and unaccounted for in our color realm.
- 🌈 The returned colors are cloaked as integers (RGBA). You might need to perform a transformation spell to convert them to other formats (like hex) for certain rituals (use cases).
- 🐘 Beware! Large images might slow down the incantation due to the pixel-by-pixel scanning technique.
- ⏳ Remember, this function is asynchronous and yields a Promise. Always use `await` or `.then()` when invoking its powers.

So, are you ready to unlock the chromatic secrets of your images? Let `getUniqueColors` be your guide in this vibrant adventure! 🚀🌈
