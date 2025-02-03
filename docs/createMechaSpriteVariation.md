# createMechaSpriteVariation

## Brief Description

`createMechaSpriteVariation` is a method of the sprite object that generates a mechanized variation of a given sprite using AI-powered image processing techniques.

## Usage

To use `createMechaSpriteVariation`, import it from the sprite module and call it with a description of the character you want to generate, along with optional mecha options and general options.

```javascript
import { sprite } from './path/to/sprite/module';

const result = await sprite.createMechaSpriteVariation(description, mechaOptions, options);
```

## Parameters

- `description` (string, required): A text description of the character to generate.
- `mechaOptions` (object, optional):
  - `armorLevel` (number): Amount of mechanical armor coverage (0-1, default: 0.5).
  - `glowEffects` (boolean): Whether to add energy/tech glow effects (default: true).
  - `colorScheme` (string): Color scheme for the mecha variation ('chrome', 'neon', or 'industrial', default: 'chrome').
  - `appendages` (number): Number of additional mechanical parts (default: 2).
  - `techLevel` (string): Technology level of the mecha ('basic', 'advanced', or 'futuristic', default: 'advanced').
- `options` (object, optional): General options for sprite generation (same as `generateSprite`).

## Return Value

Returns an object containing:

- `original`: Base64-encoded image data URL of the original generated sprite.
- `mechaVariation`: Base64-encoded image data URL of the mechanized variation.
- `settings`: Object containing the applied mecha transformation settings.

## Examples

1. Generate a basic mecha variation:

```javascript
const result = await sprite.createMechaSpriteVariation("A humanoid robot");
console.log(result.original);
console.log(result.mechaVariation);
console.log(result.settings);
```

2. Generate a futuristic neon mecha variation:

```javascript
const mechaOptions = {
  armorLevel: 0.8,
  glowEffects: true,
  colorScheme: 'neon',
  appendages: 4,
  techLevel: 'futuristic'
};

const result = await sprite.createMechaSpriteVariation("A cyborg warrior", mechaOptions);
console.log(result.mechaVariation);
```

## Notes or Considerations

- The function uses AI models to generate and process images, which may result in varying outputs for the same input.
- The mecha transformation applies various effects such as color inversion, metallic texturing, and glow effects based on the specified options.
- The function may take some time to complete due to image processing operations.
- Ensure that you have the necessary dependencies (sharp, Jimp) installed in your project.
- The quality and consistency of the mecha variations may depend on the initial sprite generation and the complexity of the description.