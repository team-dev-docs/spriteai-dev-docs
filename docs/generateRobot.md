# generateRobot

## Brief Description
`generateRobot` is a function that generates pixel art robot sprites using AI-powered image generation. It creates a robot based on the given description and can apply various customization options.

## Usage
To use `generateRobot`, import it from the sprite module and call it with a description of the robot you want to generate.

```javascript
import { sprite } from './path/to/sprite/module';

const result = await sprite.generateRobot(description, options);
```

## Parameters
- `description` (string, required): A text description of the robot to generate.
- `options` (object, optional):
  - `save` (boolean): Whether to save the generated image to disk.
  - `mechLevel` (number): The mechanical/technological level of the robot (affects appearance).
  - `colorScheme` (string): Color scheme for the robot (e.g., "metallic", "colorful", "rusty").
  - Other options inherited from the base generate function.

## Return Value
Returns an object containing:
- `originalImage`: Base64-encoded image data URL of the original generated sprite.
- `robotImage`: Base64-encoded image data URL of the processed robot sprite with mechanical effects applied.
- `settings`: Object containing the settings used to generate the robot:
  - `mechLevel`: The mechanical/technological level used.
  - `colorScheme`: The color scheme applied.

## Examples

1. Generate a simple robot sprite:
```javascript
const result = await sprite.generateRobot("A friendly helper robot");
console.log(result.robotImage);
```

2. Generate a robot with specific options:
```javascript
const result = await sprite.generateRobot("An ancient rusted robot guardian", { 
  save: true,
  mechLevel: 3,
  colorScheme: "rusty"
});
console.log("Generated robot with settings:", result.settings);
```

## Notes or Considerations
- The function uses AI models to generate the base sprite, then applies mechanical effects to create the robot appearance.
- The `mechLevel` option affects how advanced and detailed the robot appears, with higher values creating more complex mechanical looks.
- The `colorScheme` option determines the color palette applied to the robot.
- Robot generation involves multiple image processing steps to create the mechanical appearance.
- When saving images, they are stored with a timestamp-based filename.
- The function may take some time to complete due to API calls and image processing.
- Ensure you have the necessary permissions and API keys set up for using the OpenAI image generation service.