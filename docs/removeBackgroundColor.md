# removeBackgroundColor Documentation

## Brief Description
The `removeBackgroundColor` function removes a specified color from an image, making it transparent.

## Usage
Import the function from the appropriate module and call it with the required parameters.

## Parameters
- `inputPath` (string, required): Path to the input image file.
- `outputPath` (string, required): Path where the processed image will be saved.
- `targetColor` (string, required): CSS color value of the background to be removed (e.g., '#FFFFFF').
- `colorThreshold` (number, optional): Tolerance for color matching. Default is 0.
- `options` (object, optional): Additional options for image processing.

## Return Value
Returns a Promise that resolves with the result of the image processing operation.

## Examples

```javascript
import { removeBackgroundColor } from './imageProcessing';

// Basic usage
removeBackgroundColor('input.png', 'output.png', '#FFFFFF')
  .then(() => console.log('Background removed successfully'))
  .catch(err => console.error('Error:', err));

// With color threshold
removeBackgroundColor('input.jpg', 'output.jpg', '#000000', 10)
  .then(() => console.log('Background removed with threshold'))
  .catch(err => console.error('Error:', err));
```

## Notes or Considerations
- The function uses the Jimp library for image processing.
- Color matching is based on the difference between the target color and each pixel's color.
- Higher color threshold values will remove more colors similar to the target color.
- Ensure the input file exists and the output path is writable.
- This function works best with images that have a distinct background color.