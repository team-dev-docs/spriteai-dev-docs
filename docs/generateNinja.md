---
slug: /generateNinja
sidebar_position: 3
---

# GenerateNinja Documentation

## Overview
The GenerateNinja module provides functions for generating game assets using AI. It currently offers two main functions: one for creating character spritesheets with multiple animation states, and another for generating landscape/background sprites.

## Functions

### generateCharacterSpritesheet

Generates a character spritesheet with multiple animation states using AI image generation.

#### Syntax
```javascript
generateCharacterSpritesheet(description, options);
```

#### Parameters
- `description` (string, required): A text description of the character to generate.
- `options` (object, optional):
  - `states` (array): Animation states to generate (default: ['idle', 'walk', 'run', 'attack']).
  - `framesPerState` (number): Number of frames per animation state (default: 6).
  - `size` (string): Size of the generated image (default: "1024x1024").
  - `style` (string): Art style to use (default: "pixel-art").
  - `padding` (number): Padding between sprites (default: 1).
  - `direction` (string): Base direction of character (default: "right").
  - `save` (boolean): Whether to save the generated image to disk.

#### Return Value
Returns an object containing:
- `original`: The URL of the original generated image.
- `spritesheet`: Base64-encoded image data URL of the processed spritesheet.
- `metadata`: An object containing detailed information about the spritesheet:
  - `states`: Array of animation states.
  - `framesPerState`: Number of frames per state.
  - `totalFrames`: Total number of frames in the spritesheet.
  - `dimensions`: Object with width and height of the spritesheet.
  - `frameData`: Object containing data for each animation state, including row, frames, startFrame, and endFrame.

#### Example
```javascript
import { generateCharacterSpritesheet } from './path/to/module';

const result = await generateCharacterSpritesheet("ninja warrior with katana", {
  states: ['idle', 'attack', 'jump'],
  framesPerState: 8,
  style: 'pixel-art',
  save: true
});

console.log(result.metadata);
```

### generateLandscapeSprite

Generates a landscape or background sprite using AI image generation.

#### Syntax
```javascript
generateLandscapeSprite(description, options);
```

#### Parameters
- `description` (string, required): A text description of the landscape to generate.
- `options` (object, optional):
  - `size` (string): Size of the generated image (default: "1024x1024").
  - `style` (string): Art style to use (default: "pixel-art").
  - `timeOfDay` (string): Time of day setting (default: "day", options: "day", "night", "sunset", "dawn").
  - `weather` (string): Weather conditions (default: "clear", options: "clear", "rainy", "foggy", "snowy").
  - `perspective` (string): View perspective (default: "side-scrolling", options: "side-scrolling", "top-down", "isometric").
  - `save` (boolean): Whether to save the generated image to disk.
  - `removeBackground` (boolean): Whether to remove the background from the image.
  - `backgroundColor` (string): Color to identify as background for removal (default: "#FFFFFF").
  - `colorThreshold` (number): Threshold for color difference when removing background.

#### Return Value
Returns an object containing:
- `original`: The URL of the original generated image.
- `landscape`: Base64-encoded image data URL of the processed landscape image.
- `metadata`: An object containing detailed information about the landscape:
  - `description`: The description used to generate the landscape.
  - `style`: The art style used.
  - `timeOfDay`: The time of day setting.
  - `weather`: The weather conditions.
  - `perspective`: The perspective used.
  - `dimensions`: Object with width and height of the image.

#### Example
```javascript
import { generateLandscapeSprite } from './path/to/module';

const result = await generateLandscapeSprite("ancient japanese temple with cherry blossoms", {
  style: 'pixel-art',
  timeOfDay: 'sunset',
  weather: 'clear',
  perspective: 'side-scrolling',
  save: true,
  removeBackground: true
});

console.log(result.metadata);
```

## Notes and Considerations

- Both functions use OpenAI's DALL-E 3 model for image generation.
- When the `save` option is enabled, images are stored in an 'assets' folder with filenames based on the description.
- The `removeBackgroundColor` function can be used to create transparent backgrounds in the generated images.
- Processing may take some time due to API calls and image processing operations.
- The quality and consistency of generated sprites depend on the clarity and specificity of the description provided.
- For character spritesheets, each row represents a different animation state, and each column represents a frame in that animation.