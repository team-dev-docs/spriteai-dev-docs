# generateSpriteWithBorder Documentation

## Brief Description
`generateSpriteWithBorder` is a function that generates a sprite image with a customizable border. It builds upon the existing `generatePixelArt` function to create a sprite and then adds a border around it.

## Usage
To use `generateSpriteWithBorder`, import it from the sprite module and call it with a description of the character you want to generate, along with border options.

```javascript
import { sprite } from './path/to/sprite/module';

const result = await sprite.generateSpriteWithBorder(description, borderColor, borderThickness, options);
```

## Parameters
- `description` (string, required): A text description of the character to generate.
- `borderColor` (object, optional): An object specifying the border color with r, g, b, and alpha properties. Default is black (rgba(0, 0, 0, 255)).
- `borderThickness` (number, optional): The thickness of the border in pixels. Default is 1.
- `options` (object, optional): Additional options for sprite generation (same as `generatePixelArt`).

## Return Value
Returns an object containing:
- `original`: Base64-encoded image data URL of the original generated sprite without a border.
- `bordered`: Base64-encoded image data URL of the sprite with the added border.

## Examples

1. Generate a sprite with a default black border:
```javascript
const result = await sprite.generateSpriteWithBorder("A pixelated robot");
console.log(result.original);
console.log(result.bordered);
```

2. Generate a sprite with a custom red border:
```javascript
const borderColor = { r: 255, g: 0, b: 0, alpha: 255 };
const borderThickness = 2;
const result = await sprite.generateSpriteWithBorder("A cartoon cat", borderColor, borderThickness);
console.log(result.bordered);
```

3. Generate a sprite with a semi-transparent blue border and custom options:
```javascript
const borderColor = { r: 0, g: 0, b: 255, alpha: 128 };
const borderThickness = 3;
const options = { size: "512x512", save: true };
const result = await sprite.generateSpriteWithBorder("A magical wizard", borderColor, borderThickness, options);
console.log(result.bordered);
```

## Notes or Considerations
- The function uses the `generatePixelArt` function internally, so all options and considerations for that function also apply here.
- The border is added using the Sharp image processing library, which ensures high-quality results.
- The border is added equally on all sides of the sprite, potentially increasing its overall dimensions.
- When using a semi-transparent border, the original sprite may be visible through the border.
- The function returns both the original and bordered versions of the sprite, allowing for easy comparison or use of either version.
- As with other sprite generation functions, this process involves API calls and image processing, which may take some time to complete.