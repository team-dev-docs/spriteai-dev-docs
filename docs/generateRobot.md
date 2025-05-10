# generateRobot

The `generateRobot` function creates a sprite sheet animation for a robot character, optimized for use in gaming projects that support animated sprites.

## Brief Description
`generateRobot` is a function that generates pixel art sprites of a robot based on a given description, using AI-powered image generation and processing.

## Usage
To use `generateRobot`, import it from the sprite module and call it with a description of the robot you want to generate.

```javascript
import { sprite } from './path/to/sprite/module';

const result = await sprite.generateRobot(description, options);
```

## Parameters
- `description` (string, required): A text description of the robot sprite to generate.
- `options` (object, optional):
  - `save` (boolean): Whether to save the generated image to disk.
  - `iterations` (number): Number of different robot designs to generate.
  - Other options inherited from the base generate function.

## Return Value
Returns an object containing:
- `image`: Base64-encoded image data URL of the generated robot sprite.
- `url`: Direct URL to the generated image.
- `metadata` (object): Contains information about the sprite frames:
  - `frameWidth`: Width of each animation frame in pixels.
  - `frameHeight`: Height of each animation frame in pixels.
  - `frameCount`: Total number of animation frames.
  - `animationSpeed`: Recommended frames per second for smooth animation.

If the `iterations` option is used, returns an array of such objects.

## Examples

1. Generate a simple robot sprite:
```javascript
const result = await sprite.generateRobot("A friendly robot assistant with glowing eyes");
console.log(result.image);
console.log(result.metadata.frameCount); // Number of animation frames
```

2. Generate multiple robot variations:
```javascript
const robots = await sprite.generateRobot("A battle robot with tank treads", { iterations: 3 });
robots.forEach((robot, index) => {
  console.log(`Robot variation ${index+1}:`, robot.url);
});
```

3. Generate and save a robot sprite:
```javascript
const result = await sprite.generateRobot("A steampunk robot with brass gears", { save: true });
console.log("Saved robot sprite:", result.url);
```

## Notes or Considerations
- The function uses AI models (DALL-E 3) to generate robot sprite sheets with multiple frames for animation.
- Robot sprites include walking, idle, and action animations in the generated spritesheet.
- The function analyzes the generated image to determine appropriate frame dimensions.
- When saving images, they are stored with a timestamp-based filename.
- The function may take some time to complete due to API calls and image processing.
- The visual style will be pixel art unless specified otherwise in the description.
- Ensure you have the necessary permissions and API keys set up for using the OpenAI image generation service.