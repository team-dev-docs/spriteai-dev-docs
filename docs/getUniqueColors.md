# getUniqueColors Documentation

## Brief Description
🌈 Unleash the power of color detection with `getUniqueColors`! This magical function dives deep into your image, extracting an array of unique colors while cleverly ignoring those sneaky fully transparent pixels.

## Usage
Ready to embark on a colorful adventure? First, summon the `getUniqueColors` function from its mystical module:

```javascript
import { getUniqueColors } from './path/to/module';
```

## Parameters
- `imagePath` (string, required): The sacred path to your image file. Choose wisely!
- `options` (object, optional): A mysterious object for future enchantments (currently dormant, but full of potential).

## Return Value
Prepare for a chromatic revelation! This function returns a Promise that, when fulfilled, bestows upon you an array of integers. Each integer is a unique color found in your image, encoded as RGBA – truly a rainbow in number form!

## Examples

### Basic Usage
```javascript
const imagePath = './path/to/your/magical-image.png';
const uniqueColors = await getUniqueColors(imagePath);
console.log(uniqueColors);
// Output: [16777215, 0, 16711680, ...] (A numerical feast for the eyes!)
```

### Using with Options (for future wizardry)
```javascript
const imagePath = './path/to/your/enchanted-image.png';
const options = {}; // An empty cauldron, ready for future color-brewing recipes
const uniqueColors = await getUniqueColors(imagePath, options);
console.log(uniqueColors);
```

## Notes or Considerations
- 📚 This function harnesses the power of the Jimp library. Make sure you've summoned Jimp into your project!
- 👻 Fully transparent pixels (alpha = 0) are like ghosts – unseen and unaccounted for in our color quest.
- 🎨 The colors returned are integer representations of RGBA. You might need to wave your wand (i.e., use a conversion function) to transform them into other magical formats like hex.
- 🐘 Beware of gargantuan images! They might take a while to process, as our function examines each pixel with meticulous care.
- ⏳ Remember, this function is asynchronous and returns a Promise. Always use `await` or `.then()` when calling it, lest you fall into the void of unresolved promises!

Now go forth and paint your projects with the vibrant palette of `getUniqueColors`! 🎉🖌️
