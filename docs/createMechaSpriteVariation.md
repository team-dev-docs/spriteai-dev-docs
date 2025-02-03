# createMechaSpriteVariation

## Brief Description

`createMechaSpriteVariation` is a method that generates a mechanical variation of a given sprite using AI-powered image processing techniques. This function is part of the sprite object and allows for the creation of robotic or mechanical versions of existing pixel art sprites.

## Usage

To use `createMechaSpriteVariation`, import it from the sprite module and call it with a description of the character you want to generate and optional mecha customization options.

```javascript
import { sprite } from './path/to/sprite/module';

const result = await sprite.createMechaSpriteVariation(description, mechaOptions, options);
```

## Parameters

- `description` (string, required): A text description of the character to generate.
- `mechaOptions` (object, optional):
  - `armorLevel` (number): Amount of mechanical armor coverage (0-1, default: 0.5).
  - `glowEffects` (boolean): Add energy/tech glow effects (default: true).
  - `colorScheme` (string): Color scheme for the mecha variation ('chrome', 'neon', or 'industrial', default: 'chrome').
  - `appendages` (number): Number of additional mechanical parts (default: 2).
  - `techLevel` (string): Technological advancement level ('basic', 'advanced', or 'futuristic', default: 'advanced').
- `options` (object, optional): Additional options for sprite generation (same as `generatePixelArt`).

## Return Value

Returns a Promise that resolves to an object containing:

- `original`: Base64-encoded image data URL of the original sprite.
- `mechaVariation`: Base64-encoded image data URL of the generated mecha variation.
- `settings`: Object containing the applied mecha transformation settings.

## Examples

1. Generate a basic mecha variation:

```javascript
const result = await sprite.createMechaSpriteVariation("A cartoon robot");
console.log(result.original);
console.log(result.mechaVariation);
console.log(result.settings);
```

2. Generate a customized mecha variation:

```javascript
const mechaOptions = {
  armorLevel: 0.8,
  glowEffects: true,
  colorScheme: 'neon',
  appendages: 4,
  techLevel: 'futuristic'
};

const result = await sprite.createMechaSpriteVariation("A medieval knight", mechaOptions);
console.log(result.mechaVariation);
```

## Notes and Considerations

- The function uses AI models to generate and process images, which may result in varying outputs for the same input.
- The mecha transformation applies various effects such as color inversion, metallic textures, and glow effects to create a mechanical appearance.
- The `armorLevel` parameter controls the intensity of the mechanical transformation, with higher values resulting in more robotic appearances.
- Different `colorScheme` options provide distinct visual styles:
  - 'chrome': Metallic, reflective appearance
  - 'neon': Bright, glowing cyber aesthetic
  - 'industrial': Muted, utilitarian look
- The `techLevel` parameter influences the complexity and detailing of the mechanical elements added to the sprite.
- This function builds upon the `generatePixelArt` method, so all options available for that method can also be used here.
- Processing time may vary depending on the complexity of the original sprite and the selected mecha options.