# generateSpriteWithBorder

## Brief Description

`generateSpriteWithBorder` is a function that generates a sprite image with a customizable border around it. It builds upon the existing `generatePixelArt` function to create a sprite and then adds a border of specified color and thickness.

## Usage

To use `generateSpriteWithBorder`, import it from the sprite module and call it with a description of the sprite you want to generate, along with border specifications.

```javascript
import { sprite } from './path/to/sprite/module';

const result = await sprite.generateSpriteWithBorder(description, borderColor, borderThickness, options);
```

## Parameters

- `description` (string, required): A text description of the sprite to generate.
- `borderColor` (object, optional): An object specifying the RGBA values for the border color. Default is black (`{ r: 0, g: 0, b: 0, alpha: 255 }`).
- `borderThickness` (number, optional): The thickness of the border in pixels. Default is 1.
- `options` (object, optional): Additional options for sprite generation (same as `generatePixelArt`).

## Return Value

Returns an object containing:
- `original`: Base64-encoded image data URL of the original generated sprite without a border.
- `bordered`: Base64-encoded image data URL of the sprite with the added border.

## Examples

1. Generate a sprite with default black border:

```javascript
const result = await sprite.generateSpriteWithBorder("A pixelated robot");
console.log(result.original);  // Original sprite without border
console.log(result.bordered);  // Sprite with default black border
```

2. Generate a sprite with a custom red border of 2 pixels:

```javascript
const borderColor = { r: 255, g: 0, b: 0, alpha: 255 };
const borderThickness = 2;
const result = await sprite.generateSpriteWithBorder("A cartoon cat", borderColor, borderThickness);
console.log(result.bordered);  // Sprite with 2px red border
```

3. Generate a sprite with a semi-transparent blue border and custom options:

```javascript
const borderColor = { r: 0, g: 0, b: 255, alpha: 128 };
const borderThickness = 3;
const options = { size: "512x512", save: true };
const result = await sprite.generateSpriteWithBorder("A magical wand", borderColor, borderThickness, options);
console.log(result.bordered);  // Sprite with 3px semi-transparent blue border
```

## Notes and Considerations

- The function uses AI models to generate the base sprite, so results may vary for the same input.
- The border is added after the sprite generation, ensuring it doesn't interfere with the sprite's design.
- The function preserves the original sprite without a border, allowing for easy comparison or use of both versions.
- When using a semi-transparent border, ensure the alpha value is between 0 (fully transparent) and 255 (fully opaque).
- The border is added equally on all sides of the sprite, which may affect the overall dimensions of the final image.
- If you're using the sprite in a game or application, remember to account for the additional border pixels in your layout or collision detection logic.