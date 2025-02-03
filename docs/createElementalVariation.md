# createElementalVariation

## Brief Description

`createElementalVariation` is a method that generates an elemental variation of a sprite based on a given description and element type. It applies various visual effects to create a unique elemental-themed sprite.

## Usage

To use `createElementalVariation`, import it from the sprite module and call it with a description of the character and the desired element type.

```javascript
import { sprite } from './path/to/sprite/module';

const result = await sprite.createElementalVariation(description, elementType, options);
```

## Parameters

- `description` (string, required): A text description of the character to generate.
- `elementType` (string, required): The type of elemental effect to apply. Options include:
  - "fire"
  - "water"
  - "earth"
  - "air"
  - "lightning"
  - "ice"
- `options` (object, optional): Additional configuration options for sprite generation.

## Return Value

Returns an object containing:

- `original`: Base64-encoded image data URL of the original sprite.
- `elemental` or `elementalFrames`: Base64-encoded image data URL(s) of the elemental variation(s).
- `withGlow`: Base64-encoded image data URL of the sprite with added glow effect.
- `settings`: Object containing the applied elemental effect settings.

## Examples

1. Generate a fire elemental variation:

```javascript
const result = await sprite.createElementalVariation("A warrior", "fire");
console.log(result.elemental);
console.log(result.settings);
```

2. Generate a water elemental variation with custom options:

```javascript
const options = { size: "512x512" };
const result = await sprite.createElementalVariation("A mermaid", "water", options);
console.log(result.elementalFrames);
```

## Element-Specific Effects

- **Fire**: Applies a reddish tint, adds flame-like particles, and creates a wave distortion effect.
- **Water**: Applies a blue tint, adds water droplet particles, and creates a flowing wave effect.
- **Earth**: Applies an earthy brown tint and uses a cellular displacement pattern.
- **Air**: Applies a light blue tint, adds a blur effect, and generates numerous small particles.
- **Lightning**: Applies a yellow tint and creates a glitch-like effect with rapid color shifts.
- **Ice**: Applies a light blue tint, adds crystallization effects, and optionally applies a shatter effect.

## Notes and Considerations

- The function uses AI-generated base sprites, which may result in varying outputs for the same input.
- Elemental effects are applied using various image processing techniques, which may take some time to compute.
- The resulting images are optimized for use in game development or digital art projects.
- Some elemental variations (e.g., fire and water) produce animated frames, while others generate static images.
- The glow effect is applied to enhance the elemental appearance of the sprite.
- When using custom options, refer to the `generatePixelArt` method documentation for available parameters.