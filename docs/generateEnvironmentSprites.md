# generateEnvironmentSprites Documentation

## Brief Description
`generateLandscapeSprite` is a function that generates landscape scene sprites for game environments based on a given description using AI-powered image generation.

## Usage
To use `generateLandscapeSprite`, import it and call it with a description of the landscape scene you want to generate.

```javascript
import { generateLandscapeSprite } from './path/to/module';

const result = await generateLandscapeSprite(description, options);
```

## Parameters
- `description` (string, required): A text description of the landscape scene to generate.
- `options` (object, optional):
  - `size` (string): Output size of the generated image. Default: '1024x1024'.
  - `style` (string): Art style of the generated image. Default: 'pixel-art'.
  - `timeOfDay` (string): Time of day setting. Options: 'day', 'night', 'sunset', 'dawn'. Default: 'day'.
  - `weather` (string): Weather conditions. Options: 'clear', 'rainy', 'foggy', 'snowy'. Default: 'clear'.
  - `perspective` (string): View perspective. Options: 'side-scrolling', 'top-down', 'isometric'. Default: 'side-scrolling'.
  - `save` (boolean): Whether to save the generated image to disk. Default: false.
  - `removeBackground` (boolean): Whether to remove the background of the generated image.
  - `backgroundColor` (string): The color to remove if removeBackground is true. Default: '#FFFFFF'.
  - `colorThreshold` (number): Threshold for color removal. Default: 0.1.

## Return Value
Returns an object containing:
- `original`: Direct URL to the originally generated image.
- `landscape`: Base64-encoded image data URL of the processed landscape sprite.
- `metadata`: Object containing metadata about the generated sprite:
  - `description`: The original description provided.
  - `style`: The art style used.
  - `timeOfDay`: The time of day setting.
  - `weather`: The weather conditions.
  - `perspective`: The view perspective.
  - `dimensions`: Object containing width and height of the image.

## Examples

1. Generate a simple landscape sprite:
```javascript
const result = await generateLandscapeSprite("A forest with mountains in the background");
console.log(result.landscape); // Use this in your game
```

2. Generate a landscape with specific settings:
```javascript
const result = await generateLandscapeSprite("A desert oasis", {
  style: 'pixel-art',
  timeOfDay: 'sunset',
  weather: 'clear',
  perspective: 'side-scrolling',
  save: true
});
console.log("Generated landscape metadata:", result.metadata);
```

3. Generate a landscape and remove the background:
```javascript
const result = await generateLandscapeSprite("A medieval castle", {
  removeBackground: true,
  backgroundColor: '#FFFFFF',
  colorThreshold: 0.2
});
```

## Notes or Considerations
- The function uses AI models (DALL-E 3) to generate landscape images, which may result in varying outputs for the same input.
- When saving images, they are stored in an 'assets' directory with a filename based on the description.
- The function automatically creates the assets directory if it doesn't exist.
- The background removal feature uses color comparison with a threshold to determine which pixels to make transparent.
- The function may take some time to complete due to API calls and image processing.
- Ensure you have the necessary permissions and API keys set up for using the OpenAI image generation service.