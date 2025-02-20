# getUniqueColors Documentation

## Brief Description
`getUniqueColors` is a function that extracts and returns an array of unique colors from an image file.

## Usage
To use `getUniqueColors`, you need to import it from the appropriate module and call it with the path to an image file.

```javascript
import { getUniqueColors } from './path/to/module';
```

## Parameters
- `imagePath` (string, required): The file path to the image from which to extract colors.
- `options` (object, optional): An optional object for additional configuration (currently unused).

## Return Value
Returns a Promise that resolves to an array of unique color integers representing the colors found in the image.

## Examples

Basic usage:
```javascript
const imagePath = './path/to/image.png';
const uniqueColors = await getUniqueColors(imagePath);
console.log(uniqueColors);
```

Using with options (though they currently have no effect):
```javascript
const imagePath = './path/to/image.png';
const options = {};
const uniqueColors = await getUniqueColors(imagePath, options);
console.log(uniqueColors);
```

## Notes or Considerations
- The function uses the Jimp library to process images, so ensure it's installed in your project.
- Fully transparent pixels (alpha = 0) are ignored in color extraction.
- Colors are returned as integer values. You may need to convert them to other formats (like hex) for specific use cases.
- The function is asynchronous and returns a Promise, so remember to use `await` or `.then()` when calling it.
- Large images may take longer to process and consume more memory.