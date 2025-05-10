---
slug: /generateRobot
sidebar_position: 2
---

# generateRobot

## Brief Description
`generateRobot` is a function that generates a robot sprite image based on a given description, using AI-powered image generation and applying mechanical/robotic styling effects.

## Usage
To use `generateRobot`, import it from the sprite module and call it with a description of the robot you want to generate.

```javascript
import { sprite } from './path/to/sprite/module';

const result = await sprite.generateRobot(description, options);
```

## Parameters
- `description` (string, required): A text description of the robot character to generate.
- `options` (object, optional):
  - `armorLevel` (number): Level of armor/mechanical parts (1-10, default: 5).
  - `colorScheme` (string): Color scheme for the robot (e.g., "silver", "gold", "rusty", etc.).
  - `techLevel` (number): Technological advancement level (1-10, default: 5).
  - `save` (boolean): Whether to save the generated image to disk.

## Return Value
Returns an object containing:
- `baseSprite`: Base64-encoded image data URL of the original sprite before robot transformation.
- `roboticSprite`: Base64-encoded image data URL of the robot sprite with applied mechanical effects.
- `settings`: Object containing the settings used for the transformation.
  - `armorLevel`: The armor level used.
  - `colorScheme`: The color scheme used.
  - `techLevel`: The tech level used.

## Examples

1. Generate a simple robot sprite:
```javascript
const result = await sprite.generateRobot("A humanoid robot assistant");
console.log(result.roboticSprite); // Use this for your game sprite
```

2. Generate a heavily armored robot with specific color scheme:
```javascript
const result = await sprite.generateRobot("A battle robot", {
  armorLevel: 9,
  colorScheme: "rusty red",
  techLevel: 7
});
```

3. Save the generated robot to disk:
```javascript
const result = await sprite.generateRobot("Friendly robot companion", { save: true });
```

## How It Works
The `generateRobot` function works in two main steps:

1. First, it generates a base pixel art sprite using AI generation based on your description.

2. Then it applies a series of mechanical transformations to give the sprite a robotic appearance:
   - Applies color shifts based on the chosen color scheme
   - Adds mechanical details based on the armor level
   - Creates tech-appropriate highlights and shadows
   - Enhances edges to create a mechanical look

## Notes and Considerations
- Higher armor levels result in more heavily mechanized appearances.
- The color scheme significantly affects the final look of the robot.
- The tech level influences the sophistication of the mechanical details.
- For best results, include descriptive terms like "robot", "mechanical", or "android" in your description.
- The original sprite is also returned in case you want to compare or use both versions.
