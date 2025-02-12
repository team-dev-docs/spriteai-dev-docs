# generateSpriteWithBorder

## Brief Description

`generateSpriteWithBorder` is a function that generates a pixel art sprite with a customizable border around it. It builds on the existing `generatePixelArt` function to create a sprite and then adds a border of specified color and thickness.

## Usage

To use `generateSpriteWithBorder`, import it from the sprite module and call it with a description of the character you want to generate, along with border options.

```javascript
import { sprite } from './path/to/sprite/module';

const result = await sprite.generateSpriteWithBorder(description, borderColor, borderThickness, options);
```

## Parameters

- `description` (string, required): A text description of the character to generate.
- `borderColor` (object, optional): An object specifying the RGBA values for the border color. Default is black (r: 0, g: 0, b: 0, alpha: 255).
- `borderThickness` (number, optional): The thickness of the border in pixels. Default is 1.
- `options` (object, optional): Additional options passed to the underlying `generatePixelArt` function.

## Return Value

Returns an object containing:
- `original`: Base64-encoded image data URL of the original generated sprite without a border.
- `bordered`: Base64-encoded image data URL of the sprite with the added border.

## Examples

1. Generate a sprite with default black border:

```javascript
const result = await sprite.generateSpriteWithBorder("A pixelated robot");
console.log(result.original);
console.log(result.bordered);
```

2. Generate a sprite with a custom red border of 2 pixels:

```javascript
const borderColor = { r: 255, g: 0, b: 0, alpha: 255 };
const borderThickness = 2;
const result = await sprite.generateSpriteWithBorder("A cartoon cat", borderColor, borderThickness);
console.log(result.bordered);
```

3. Generate a sprite with a semi-transparent blue border and custom options:

```javascript
const borderColor = { r: 0, g: 0, b: 255, alpha: 128 };
const borderThickness = 1;
const options = { size: "512x512" };
const result = await sprite.generateSpriteWithBorder("A fantasy dragon", borderColor, borderThickness, options);
console.log(result.bordered);
```

## Notes or Considerations

- The function uses AI models to generate the initial sprite, so results may vary for the same input.
- The border is added after the sprite generation, ensuring it doesn't interfere with the original pixel art.
- The border color can be fully or partially transparent by adjusting the alpha value.
- The function returns both the original and bordered versions, allowing for comparison or further processing if needed.
- Ensure that the border thickness is appropriate for the sprite size to avoid obscuring too much of the original image.