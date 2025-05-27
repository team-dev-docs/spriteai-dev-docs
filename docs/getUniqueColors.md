# getUniqueColors Documentation

## Brief Description
`getUniqueColors` is a spicy function that analyzes an image and serves up a hot array of unique colors present in the image, excluding those sneaky fully transparent pixels.

## Usage
To unleash the power of `getUniqueColors`, import it from its secret hideout (the module where it's defined). Then, summon it with the path to your image file.

```javascript
import { getUniqueColors } from './path/to/module';
```

## Parameters
- `imagePath` (string, required): The file path to the image you want to dissect. Choose wisely!
- `options` (object, optional): A mysterious object for additional configuration (currently not used, but who knows what the future holds?).

## Return Value
This function returns a Promise that resolves to an array of integers hotter than a ghost pepper. Each integer represents a unique color found in the image, encoded as RGBA.

## Examples

### Basic Usage (AKA 'The Mild Salsa')
```javascript
const imagePath = './path/to/your/spicy/image.png';
const uniqueColors = await getUniqueColors(imagePath);
console.log(uniqueColors);
// Output: [16777215, 0, 16711680, ...] (example values, but imagine they're on fire)
```

### Using with Options (AKA 'The Future Habanero')
```javascript
const imagePath = './path/to/your/extra/spicy/image.png';
const options = {}; // Currently as empty as a stolen hot sauce bottle, but prepared for future flavor explosions
const uniqueColors = await getUniqueColors(imagePath, options);
console.log(uniqueColors);
```

## Notes or Considerations
- This function uses the Jimp library to read and process images. Make sure Jimp is installed in your project, or face the mild inconvenience of it not working.
- Fully transparent pixels (alpha = 0) are ignored in the color analysis. They're like the bland crackers of the image world.
- The returned color values are integers representing RGBA colors. You may need to convert these to other formats (like hex) for certain use cases. It's like translating from Scoville units to 'mouth on fire' levels.
- Large images may take longer to process due to the pixel-by-pixel scanning approach. It's not fast food; it's a gourmet color experience.
- This function is asynchronous and returns a Promise, so remember to use `await` or `.then()` when calling it. Patience is a virtue, especially when dealing with spicy functions.

Remember, with great color comes great responsibility. Use `getUniqueColors` wisely, and may your palette always be vibrant!
