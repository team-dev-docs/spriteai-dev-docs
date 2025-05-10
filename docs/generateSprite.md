---
slug: /
sidebar_position: 1
---
# SpriteAI Documentation

## Brief Description
The SpriteAI module provides functions to generate sprite sheets for game development using AI-powered image generation.

## Core Functions

### generateCharacterSpritesheet

```javascript
generateCharacterSpritesheet(description, options)
```

Generates a character sprite sheet with multiple animation states.

#### Parameters
- `description` (string, required): A text description of the character to generate.
- `options` (object, optional):
  - `states` (array): Animation states to include (default: ['idle', 'walk', 'run', 'attack']).
  - `framesPerState` (number): Number of frames per animation state (default: 6).
  - `size` (string): Size of the generated image (default: "1024x1024").
  - `style` (string): Art style to use (default: "pixel-art").
  - `padding` (number): Padding between frames (default: 1).
  - `direction` (string): Direction character faces (default: "right").
  - `save` (boolean): Whether to save the generated image to disk.

#### Return Value
Returns an object containing:
- `original`: URL of the original generated image.
- `spritesheet`: Base64-encoded image data URL of the processed sprite sheet.
- `metadata`: Object with detailed information about the sprite sheet structure.

#### Example
```javascript
const result = await generateCharacterSpritesheet("medieval warrior with sword and shield", {
  states: ['idle', 'walk', 'attack', 'die'],
  style: 'pixel-art',
  save: true
});
console.log(result.metadata.frameData.idle);
```

### generateEnvironmentSprites

```javascript
generateEnvironmentSprites(description, options)
```

Generates environment tile sets for game backgrounds and levels.

#### Parameters
- `description` (string, required): Description of the environment to generate.
- `options` (object, optional):
  - `elements` (number): Number of environment elements to generate (default: 4).
  - `size` (string): Size of the generated image (default: "1024x1024").
  - `style` (string): Art style to use (default: "pixel-art").
  - `padding` (number): Padding between elements (default: 1).
  - `theme` (string): Environment theme (default: "fantasy").
  - `save` (boolean): Whether to save the generated image to disk.

#### Return Value
Returns an object containing:
- `original`: URL of the original generated image.
- `tileset`: Base64-encoded image data URL of the processed tileset.
- `metadata`: Object with detailed information about the tileset structure.

### generateItemSprites

```javascript
generateItemSprites(description, options)
```

Generates item sprites for game inventories, pickups, etc.

#### Parameters
- `description` (string, required): Description of the items to generate.
- `options` (object, optional):
  - `itemCount` (number): Number of items to generate (default: 4).
  - `size` (string): Size of the generated image (default: "1024x1024").
  - `style` (string): Art style to use (default: "pixel-art").
  - `padding` (number): Padding between items (default: 1).
  - `itemType` (string): Type of items to generate (default: "equipment").
  - `background` (string): Background color (default: "white").
  - `save` (boolean): Whether to save the generated image to disk.

#### Return Value
Returns an object containing:
- `original`: URL of the original generated image.
- `itemSheet`: Base64-encoded image data URL of the processed item sheet.
- `metadata`: Object with detailed information about the item sheet structure.

## Utility Functions

### fetchAvailableAnimationStates

```javascript
fetchAvailableAnimationStates()
```

Returns an array of available animation states that can be used with the generateCharacterSpritesheet function.

### fetchAvailableSpriteStyles

```javascript
fetchAvailableSpriteStyles()
```

Returns an array of available sprite styles that can be used with the generation functions.

## Convenience Functions

The following functions provide pre-configured character generation for common game character types:

### generateNinja

```javascript
generateNinja(options)
```

Generates a ninja character with default settings that can be overridden.

### generateSpaceman

```javascript
generateSpaceman(options)
```

Generates a spaceman/astronaut character with default settings that can be overridden.

### generateRobot

```javascript
generateRobot(options)
```

Generates a robot character with default settings that can be overridden.

## Notes or Considerations
- All generator functions use the DALL-E 3 AI model, which may result in varying outputs for the same input.
- Generated sprites are saved to an 'assets' folder with filenames based on the description when the save option is enabled.
- The functions may take some time to complete due to API calls and image processing.
- All returned sprite sheets include metadata for easy integration into game engines.
