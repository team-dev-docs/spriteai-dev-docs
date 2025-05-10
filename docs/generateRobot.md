---
slug: /generateRobot
sidebar_position: 3
---

# generateRobot Functions

## generateCharacterSpritesheet

The `generateCharacterSpritesheet` function generates a character spritesheet with multiple animation states using AI-powered image generation.

### Usage

```javascript
import { generateCharacterSpritesheet } from './path/to/sprite/module';

const result = await generateCharacterSpritesheet('a robot warrior with laser sword', options);
```

### Parameters

- `description` (string, required): A text description of the character to generate.
- `options` (object, optional):
  - `states` (array): Animation states to generate (default: ['idle', 'walk', 'run', 'attack']).
  - `framesPerState` (number): Number of frames per animation state (default: 6).
  - `size` (string): Size of the generated image (default: "1024x1024").
  - `style` (string): Art style for the character (default: "pixel-art").
  - `padding` (number): Padding between sprites (default: 1).
  - `direction` (string): Base direction of character (default: "right").
  - `save` (boolean): Whether to save the generated image to disk.

### Return Value

Returns an object containing:
- `original`: URL of the original generated image.
- `spritesheet`: Base64-encoded image data URL of the processed spritesheet.
- `metadata`: Object containing:
  - `states`: Array of animation states.
  - `framesPerState`: Number of frames per state.
  - `totalFrames`: Total number of frames in the spritesheet.
  - `dimensions`: Object with width and height of the spritesheet.
  - `frameData`: Object mapping each state to its row, frames, start frame, and end frame.

### Example

```javascript
const result = await generateCharacterSpritesheet("A robot warrior", {
  states: ['idle', 'walk', 'attack', 'die'],
  framesPerState: 8,
  style: 'cyberpunk-pixel-art',
  save: true
});

console.log(result.metadata.frameData);
// Use the spritesheet in your game
const spriteImage = new Image();
spriteImage.src = result.spritesheet;
```

## generateLandscapeSprite

The `generateLandscapeSprite` function generates landscape or background scenes for games using AI-powered image generation.

### Usage

```javascript
import { generateLandscapeSprite } from './path/to/sprite/module';

const result = await generateLandscapeSprite('futuristic city with flying cars', options);
```

### Parameters

- `description` (string, required): A text description of the landscape to generate.
- `options` (object, optional):
  - `size` (string): Size of the generated image (default: "1024x1024").
  - `style` (string): Art style for the landscape (default: "pixel-art").
  - `timeOfDay` (string): Time of day setting (default: "day", options: "day", "night", "sunset", "dawn").
  - `weather` (string): Weather conditions (default: "clear", options: "clear", "rainy", "foggy", "snowy").
  - `perspective` (string): Visual perspective (default: "side-scrolling", options: "side-scrolling", "top-down", "isometric").
  - `save` (boolean): Whether to save the generated image to disk (default: false).
  - `removeBackground` (boolean): Whether to remove the background color (optional).
  - `backgroundColor` (string): Target background color to remove if removeBackground is true (default: "#FFFFFF").
  - `colorThreshold` (number): Threshold for color matching when removing background (default: 0.1).

### Return Value

Returns an object containing:
- `original`: URL of the original generated image.
- `landscape`: Base64-encoded image data URL of the processed landscape image.
- `metadata`: Object containing:
  - `description`: The original description.
  - `style`: The art style used.
  - `timeOfDay`: Time of day setting.
  - `weather`: Weather conditions.
  - `perspective`: Visual perspective.
  - `dimensions`: Object with width and height of the image.

### Example

```javascript
const result = await generateLandscapeSprite("A dystopian cyberpunk city", {
  style: "pixel-art",
  timeOfDay: "night",
  weather: "rainy",
  perspective: "side-scrolling",
  save: true,
  removeBackground: true
});

// Use the landscape in your game
const backgroundImage = new Image();
backgroundImage.src = result.landscape;
```

## Notes and Considerations

- Both functions use OpenAI's DALL-E 3 model for image generation, which may result in varying outputs for the same input.
- When saving images, they are stored in an 'assets' folder with a filename based on the description.
- The functions may take some time to complete due to API calls and image processing.
- The removeBackground option in generateLandscapeSprite uses color-based transparency and works best with solid color backgrounds.
- For best results, provide detailed descriptions that specify the character's appearance and style.
- The generated spritesheets follow consistent frame sizing to enable easy animation implementation.
