---
sidebar_position: 4
---

# removeBackgroundColor Documentation

## Brief Description
The `removeBackgroundColor` function removes specific background colors from images and makes them transparent. This is particularly useful for creating sprites with transparent backgrounds or removing unwanted solid color backgrounds from generated images.

## Usage
To use `removeBackgroundColor`, you need to import it from the module where it's defined and provide the input image path, output path, and target color to remove.

```javascript
import { removeBackgroundColor } from './path/to/module';
```

## Parameters
- `inputPath` (string, required): The file path to the source image you want to process.
- `outputPath` (string, required): The file path where the processed image will be saved.
- `targetColor` (string, required): The color to remove from the image. Can be in CSS color format (e.g., '#FFFFFF', 'white', 'rgb(255,255,255)').
- `colorThreshold` (number, optional): The tolerance for color matching. Default is 0. Higher values will match similar colors within the threshold range.
- `options` (object, optional): Additional configuration options (currently not used in the function).

## Return Value
The function returns a Promise that resolves when the image processing is complete. The processed image is saved to the specified output path with transparent pixels where the target color was removed.

## Examples

### Basic Usage - Remove White Background
```javascript
const inputPath = './images/sprite_with_white_bg.png';
const outputPath = './images/sprite_transparent.png';
const targetColor = '#FFFFFF'; // White color

await removeBackgroundColor(inputPath, outputPath, targetColor);
console.log('Background removed successfully!');
```

### Using Color Threshold for Similar Colors
```javascript
const inputPath = './images/character_sprite.png';
const outputPath = './images/character_sprite_clean.png';
const targetColor = 'white';
const colorThreshold = 0.1; // Remove white and near-white colors

await removeBackgroundColor(inputPath, outputPath, targetColor, colorThreshold);
```

### Remove Different Background Colors
```javascript
// Remove blue background
await removeBackgroundColor(
  './input/blue_bg_image.png',
  './output/transparent_image.png',
  '#0000FF'
);

// Remove green background with tolerance
await removeBackgroundColor(
  './input/green_bg_image.png',
  './output/clean_image.png',
  'rgb(0, 255, 0)',
  0.15
);
```

### Integration with Sprite Generation
This function is commonly used with the sprite generation functions:

```javascript
import { generateLandscapeSprite, removeBackgroundColor } from './path/to/module';

// Generate a landscape sprite
const landscapeResult = await generateLandscapeSprite("medieval castle", {
  save: true,
  removeBackground: true,
  backgroundColor: '#FFFFFF',
  colorThreshold: 0.1
});

// Or manually remove background from existing image
await removeBackgroundColor(
  './assets/generated_sprite.png',
  './assets/sprite_no_background.png',
  '#FFFFFF',
  0.05
);
```

## Notes or Considerations
- The function uses the Jimp library for image processing, so ensure Jimp is installed in your project.
- Color matching is based on the RGB values of pixels. The `colorThreshold` parameter allows for fuzzy matching to handle slight color variations.
- The function converts CSS color names and formats to hex values internally using `Jimp.cssColorToHex()`.
- Pixels that match the target color (within the threshold) will have their alpha channel set to 0 (fully transparent).
- The function processes images pixel by pixel, so large images may take longer to process.
- This function is asynchronous and returns a Promise, so remember to use `await` or `.then()` when calling it.
- The original image file is not modified; a new image is created at the specified output path.
- Supported image formats depend on Jimp's capabilities (PNG, JPEG, BMP, TIFF, and GIF).
- For best results with transparency, save the output as PNG format which supports alpha channels.

## Common Use Cases
- Removing white backgrounds from AI-generated sprites
- Creating transparent backgrounds for game assets
- Cleaning up screenshots or images with solid color backgrounds
- Preparing images for overlay effects or compositing
- Converting images with colored backgrounds to transparent for web use