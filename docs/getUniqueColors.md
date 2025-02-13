# getUniqueColors Documentation

## Brief Description
`getUniqueColors` is a function that extracts unique colors from an image file, ignoring fully transparent pixels.

## Usage
To use `getUniqueColors`, you need to import it from the module where it's defined. Then, call the function with the path to your image file.

```javascript
import { getUniqueColors } from './path/to/module';
```

## Parameters
- `imagePath` (string, required): The file path to the image you want to analyze.
- `options` (object, optional): An optional object for additional configuration (currently unused).

## Return Value
Returns a Promise that resolves to an array of unique color integers representing the colors found in the image.

## Examples

Basic usage:
```javascript
const uniqueColors = await getUniqueColors('path/to/your/image.png');
console.log(uniqueColors);
```

Using with options (though they don't affect the function currently):
```javascript
const uniqueColors = await getUniqueColors('path/to/your/image.png', {});
console.log(uniqueColors);
```

## Notes or Considerations
- This function uses the Jimp library to process images, so make sure it's installed in your project.
- Fully transparent pixels are ignored in the color extraction process.
- The function returns color values as integers. You may need to convert these to a more readable format (like hex) for display or further processing.
- Large images may take longer to process, so consider performance implications when using this function on very large files.
- The function doesn't currently use the `options` parameter, but it's included for potential future expansions.