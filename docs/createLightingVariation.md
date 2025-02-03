# createLightingVariation

## Brief Description

The `createLightingVariation` method is part of the sprite object and is used to generate a lighting variation of a given sprite. This method applies various lighting effects to a pixel art image, allowing for dynamic and customizable lighting in 2D games or applications.

## Usage

To use `createLightingVariation`, import it from the sprite module and call it with a description of the sprite you want to generate and apply lighting to.

```javascript
import { sprite } from './path/to/sprite/module';

const result = await sprite.createLightingVariation(description, lightingOptions, options);
```

## Parameters

- `description` (string, required): A text description of the character or object to generate as a pixel art sprite.
- `lightingOptions` (object, optional): An object containing lighting effect parameters.
  - `lightColor` (object): RGB values for the light color (default: `{ r: 255, g: 255, b: 200 }`).
  - `intensity` (number): Light strength, ranging from 0 to 1 (default: 0.8).
  - `direction` (string): Light source direction (default: 'top-left').
  - `ambient` (number): Ambient light level, ranging from 0 to 1 (default: 0.2).
  - `shadows` (boolean): Enable dynamic shadows (default: true).
  - `colorize` (boolean): Apply color tinting to the light (default: false).
- `options` (object, optional): Additional options for sprite generation (same as `generatePixelArt` method).

## Return Value

Returns a Promise that resolves to an object containing:
- `original`: Base64-encoded image data URL of the original generated sprite.
- `lighted`: Base64-encoded image data URL of the sprite with applied lighting effects.
- `settings`: An object containing the lighting settings used.

## Examples

1. Generate a sprite with default lighting:

```javascript
const result = await sprite.createLightingVariation("A pixelated warrior");
console.log(result.original);
console.log(result.lighted);
console.log(result.settings);
```

2. Generate a sprite with custom lighting options:

```javascript
const lightingOptions = {
  lightColor: { r: 255, g: 100, b: 100 },
  intensity: 0.6,
  direction: 'top-right',
  ambient: 0.3,
  shadows: true,
  colorize: true
};

const result = await sprite.createLightingVariation("A pixelated forest", lightingOptions);
console.log(result.lighted);
```

## Notes and Considerations

- The method first generates a pixel art sprite using the `generatePixelArt` method before applying lighting effects.
- Lighting effects are applied using a pixel-by-pixel approach, which may impact performance for very large images.
- The `direction` parameter accepts values like 'top', 'top-right', 'right', 'bottom-right', 'bottom', 'bottom-left', 'left', and 'top-left'.
- Shadows are simulated by darkening edges without neighboring pixels in the light direction.
- The `colorize` option, when true, tints the light with the specified `lightColor`.
- This method is useful for creating dynamic lighting effects in 2D games or for generating variations of sprites for different lighting conditions.
- Experiment with different lighting options to achieve the desired visual effect for your specific use case.