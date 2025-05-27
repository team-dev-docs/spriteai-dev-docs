# getUniqueColors Documentation

## Brief Description
🎨 `getUniqueColors` is a magical function that dives deep into the pixel playground of your image, emerging with a treasure trove of unique colors! It's like a color-hunting superhero, ignoring those sneaky fully transparent pixels.

## Usage
Ready to unleash the power of `getUniqueColors`? First, summon it from its module lair:

```javascript
import { getUniqueColors } from './path/to/module';
```

## Parameters
- `imagePath` (string, required): The mystical path to your image file. Choose wisely!
- `options` (object, optional): A secret scroll for future enchantments (currently dormant, but full of potential).

## Return Value
Prepare for a colorful surprise! This function returns a Promise that resolves to an array of integers. Each integer is a unique color found in your image, disguised as RGBA. It's like decoding a rainbow!

## Examples

### Basic Usage
Let's embark on a color-finding quest:
```javascript
const imagePath = './path/to/your/epic-image.png';
const uniqueColors = await getUniqueColors(imagePath);
console.log(uniqueColors);
// Output: [16777215, 0, 16711680, ...] (Behold, the colors of your realm!)
```

### Using with Options (for future magical upgrades)
```javascript
const imagePath = './path/to/your/magical-scene.png';
const options = {}; // An empty spellbook, ready for future incantations
const uniqueColors = await getUniqueColors(imagePath, options);
console.log(uniqueColors);
```

## Notes or Considerations
- This function harnesses the power of the Jimp library. Make sure you've summoned Jimp into your project!
- Fully transparent pixels (alpha = 0) are like invisible ninjas - we pretend they don't exist.
- The returned color values are integers representing RGBA colors. They're like secret codes - you might need to translate them into other formats (like hex) for certain magical rituals.
- Beware! Giant images might make this function ponder for a while. It's scanning every pixel like a diligent detective.
- Remember, this function is asynchronous and returns a Promise. Always use `await` or `.then()` when calling it, or risk getting tangled in the space-time continuum!

## Pro Tips
- 🚀 For lightning-fast color analysis, try using smaller images or cropped sections.
- 🌈 Combine `getUniqueColors` with other image processing functions for ultimate creative power!
- 🧙‍♂️ Experiment with different image types to see how the color palette changes.

Now go forth and paint the digital world with your newly discovered colors!
