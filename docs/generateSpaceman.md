---
slug: /generate-spaceman
sidebar_position: 3
---

# Generate Character Spritesheet

## Brief Description
`generateCharacterSpritesheet` is a function that generates an animated character spritesheet based on a given description, using AI-powered image generation and customizable animation states.

## Usage
To use `generateCharacterSpritesheet`, import it and call it with a description of the character you want to generate.

```javascript
import { generateCharacterSpritesheet } from './path/to/module';

const result = await generateCharacterSpritesheet("space explorer in a blue suit", options);
```

## Parameters
- `description` (string, required): A text description of the character to generate.
- `options` (object, optional):
  - `states` (array): Animation states to generate (default: ['idle', 'walk', 'run', 'attack']).
  - `framesPerState` (number): Number of frames per animation state (default: 6).
  - `size` (string): Size of the generated image (default: "1024x1024").
  - `style` (string): Art style for the character (default: "pixel-art").
  - `padding` (number): Padding between sprites (default: 1).
  - `direction` (string): Base direction of character (default: "right").
  - `save` (boolean): Whether to save the generated image to disk.

## Return Value
Returns an object containing:
- `original`: URL to the original generated image.
- `spritesheet`: Base64-encoded image data URL of the processed spritesheet.
- `metadata`: Object containing detailed information about the spritesheet:
  - `states`: Array of animation states.
  - `framesPerState`: Number of frames per state.
  - `totalFrames`: Total number of frames in the spritesheet.
  - `dimensions`: Object containing width and height.
  - `frameData`: Object with detailed information for each animation state.

## Examples

1. Generate a character spritesheet with default options:
```javascript
const result = await generateCharacterSpritesheet("space explorer in a blue suit");
console.log(result.metadata);
```

2. Generate a custom character spritesheet:
```javascript
const options = {
  states: ['idle', 'jump', 'attack', 'die'],
  framesPerState: 8,
  style: 'cartoon',
  direction: 'left',
  save: true
};

const result = await generateCharacterSpritesheet("ninja warrior", options);
```

## Generate Landscape Sprite

In addition to character spritesheets, you can also generate landscape sprites using the `generateLandscapeSprite` function.

### Usage
```javascript
import { generateLandscapeSprite } from './path/to/module';

const result = await generateLandscapeSprite("forest with mountains", options);
```

### Parameters
- `description` (string, required): A text description of the landscape to generate.
- `options` (object, optional):
  - `size` (string): Size of the generated image (default: "1024x1024").
  - `style` (string): Art style for the landscape (default: "pixel-art").
  - `timeOfDay` (string): Time of day setting (default: "day", options: "day", "night", "sunset", "dawn").
  - `weather` (string): Weather conditions (default: "clear", options: "clear", "rainy", "foggy", "snowy").
  - `perspective` (string): Perspective view (default: "side-scrolling", options: "side-scrolling", "top-down", "isometric").
  - `save` (boolean): Whether to save the generated image to disk.
  - `removeBackground` (boolean): Whether to remove the background color.
  - `backgroundColor` (string): Target background color to remove (when removeBackground is true).
  - `colorThreshold` (number): Threshold for color removal (when removeBackground is true).

### Return Value
Returns an object containing:
- `original`: URL to the original generated image.
- `landscape`: Base64-encoded image data URL of the processed landscape sprite.
- `metadata`: Object containing detailed information about the landscape sprite.

### Examples

1. Generate a landscape sprite with default options:
```javascript
const result = await generateLandscapeSprite("desert with pyramids");
```

2. Generate a custom landscape sprite:
```javascript
const options = {
  style: 'watercolor',
  timeOfDay: 'sunset',
  weather: 'foggy',
  perspective: 'isometric',
  save: true,
  removeBackground: true,
  backgroundColor: '#FFFFFF',
  colorThreshold: 0.1
};

const result = await generateLandscapeSprite("medieval village", options);
```

## Notes or Considerations
- The function uses DALL-E 3 to generate images, which may result in varying outputs for the same input.
- Generated spritesheets organize different animation states in separate rows.
- When saving images, they are stored in an 'assets' folder with a filename based on the description.
- The landscape generation includes options for different times of day, weather conditions, and perspective views.
- Background removal is available for landscape sprites to create transparent elements.
- The functions may take some time to complete due to API calls and image processing.
