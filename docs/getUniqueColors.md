# getUniqueColors Documentation

## Brief Description
`getUniqueColors` is a spicy function that fires up your image analysis! It's like a color detective, sniffing out every unique hue in your image and serving them up on a silver platter (excluding those sneaky fully transparent pixels).

## Usage
Ready to add some flavor to your code? Import `getUniqueColors` and let the color party begin!

```javascript
import { getUniqueColors } from './path/to/module';
```

## Parameters
- `imagePath` (string, required): The treasure map leading to your image file. X marks the spot!
- `options` (object, optional): A secret sauce for future enhancements. Currently, it's like an empty spice rack, but stay tuned!

## Return Value
This function returns a Promise that resolves to an array of integers. Each integer is a unique color found in your image, encoded as RGBA. It's like a digital color palette, ready for your next masterpiece!

## Examples

### Basic Usage
```javascript
const imagePath = './path/to/your/spicy-image.png';
const uniqueColors = await getUniqueColors(imagePath);
console.log(uniqueColors);
// Output: [16777215, 0, 16711680, ...] (A fiesta of color values!)
```

### Using with Options (for future flavor enhancements)
```javascript
const imagePath = './path/to/your/zesty-image.png';
const options = {}; // Currently as bland as unseasoned tofu, but primed for future spices!
const uniqueColors = await getUniqueColors(imagePath, options);
console.log(uniqueColors);
```

## Notes or Considerations
- This function is powered by the Jimp library. Make sure you've got Jimp in your spice rack (er, project dependencies).
- Fully transparent pixels (alpha = 0) are like ghosts - we can't see 'em, so we ignore 'em!
- The returned color values are integers representing RGBA colors. They're like secret codes for your colors. You might need to decode them (convert to hex) for certain recipes (use cases).
- Big images might take a hot minute to process. It's like counting grains of sand - pixel by pixel!
- This function is asynchronous and returns a Promise. Don't forget to use `await` or `.then()` when calling it, or you might be left hanging like a chef waiting for water to boil!

Remember, with great color power comes great responsibility. Use `getUniqueColors` wisely, and may your code be as colorful as a triple rainbow!
