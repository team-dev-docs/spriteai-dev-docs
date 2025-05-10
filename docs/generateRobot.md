---
slug: /generateRobot
sidebar_position: 6
---

# Generate Robot

## Brief Description
`generateRobot` is a function that allows you to create mecha or robot versions of existing sprite images, applying transformations that give them a mechanical or robotic appearance.

## Usage
To use `generateRobot`, import it from the sprite module and call it with a base sprite and options.

```javascript
import { sprite } from './path/to/sprite/module';

const result = await sprite.generateRobot(baseSprite, options);
```

## Parameters
- `baseSprite` (string or Buffer, required): A base64-encoded image string or Buffer containing the original sprite to transform.
- `options` (object, optional):
  - `armorLevel` (number): Control how heavily armored the robot appears, from 1-10 (default: 5).
  - `colorScheme` (string): Color scheme for the robot ("silver", "gold", "bronze", "blue", "red", etc.).
  - `techLevel` (number): How advanced the robot should appear, from 1-10 (default: 5).

## Return Value
Returns an object containing:
- `original`: Base64-encoded image data URL of the original sprite.
- `robot`: Base64-encoded image data URL of the generated robot sprite.
- `settings`: Object containing the settings used to generate the robot.

## Examples

1. Generate a robot version of a sprite with default settings:
```javascript
// Assume baseSprite is a base64-encoded image string or Buffer
const result = await sprite.generateRobot(baseSprite);
console.log(result.robot); // The robot version as base64 data URL
```

2. Generate a robot with custom options:
```javascript
const result = await sprite.generateRobot(baseSprite, {
  armorLevel: 8,
  colorScheme: "blue",
  techLevel: 7
});
```

3. Using with a previously generated sprite:
```javascript
// First generate a sprite
const characterSprite = await sprite.generateSprite("A warrior with a sword");

// Then create a robot version of that sprite
const robotVersion = await sprite.generateRobot(characterSprite.image, {
  colorScheme: "silver",
  armorLevel: 6
});
```

## Implementation Details
The robot generation applies a series of transformations to the input sprite:

1. Color inversion and tinting based on the selected color scheme
2. Sharpness adjustments to create a more mechanical appearance
3. Outline generation to define mechanical parts
4. Gamma adjustments for a metallic appearance
5. Optional glow effects for higher tech levels

The intensity and nature of these effects are controlled by the options provided, allowing for customization of the robot's appearance.

## Notes or Considerations
- The function works best with clear, distinct sprites against transparent backgrounds.
- Very detailed or complex sprites may not transform as effectively.
- The transformation is purely visual and does not alter the dimensions or frame structure of the original sprite.
- Higher armor levels will make the sprite appear bulkier and more heavily plated.
- Higher tech levels will add more glowing effects and sophisticated-looking details.
