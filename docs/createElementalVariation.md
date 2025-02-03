# createElementalVariation

## Brief Description
The `createElementalVariation` method generates an elemental variation of a sprite based on a given description and element type. It applies various visual effects to create an elemental-themed version of the original sprite.

## Usage
To use `createElementalVariation`, import it from the sprite module and call it with a description of the character and the desired element type.

```javascript
import { sprite } from './path/to/sprite/module';

const result = await sprite.createElementalVariation(description, elementType, options);
```

## Parameters
- `description` (string, required): A text description of the character to generate.
- `elementType` (string, required): The type of elemental effect to apply. Valid options are: "fire", "water", "earth", "air", "lightning", and "ice".
- `options` (object, optional): Additional options for sprite generation.

## Return Value
Returns an object containing:
- `original`: Base64-encoded image data URL of the original sprite.
- `elemental`: Base64-encoded image data URL of the elemental variation (for static results).
- `elementalFrames`: Array of Base64-encoded image data URLs (for animated results).
- `withGlow`: Base64-encoded image data URL of the sprite with added glow effect.
- `settings`: Object containing the applied elemental effect settings.

## Examples

1. Generate a fire elemental variation:
```javascript
const result = await sprite.createElementalVariation("A warrior", "fire");
console.log(result.elemental); // Base64-encoded image data URL
console.log(result.settings); // Applied effect settings
```

2. Generate a water elemental variation with custom options:
```javascript
const options = { size: "512x512" };
const result = await sprite.createElementalVariation("A mage", "water", options);
console.log(result.elementalFrames); // Array of Base64-encoded image data URLs
```

## Notes and Considerations
- The function uses AI models to generate the base sprite, which may result in varying outputs for the same input.
- Different element types apply unique visual effects:
  - Fire and Water: Wave distortion and particle effects
  - Earth: Displacement effect
  - Air: Blur effect
  - Lightning: Glitch wave effect
  - Ice: Crystallization and potential shattering effect
- The method may take some time to complete due to image processing and effect application.
- Animated results (e.g., for fire and water) will return an array of frames in `elementalFrames`.
- The `withGlow` property provides an additional variation with a glow effect applied.