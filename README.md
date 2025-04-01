# SpriteAI SDK Documentation

## Introduction

SpriteAI is a powerful SDK for generating character spritesheets and processing images using the OpenAI API. This SDK allows you to create high-quality, animated character sprites for your games and applications.

## Key Features

- Generate character spritesheets with customizable animation states and frame counts
- Fetch available animation states and sprite styles
- Generate environment sprites with multiple elements and themes
- Automatically remove background colors from generated images
- Save generated spritesheets and environment tilesets to disk

## Getting Started

To get started with SpriteAI, follow these steps:

1. Install the required dependencies by running `npm install` in your project directory.
2. Import the necessary functions from the SpriteAI SDK:

```javascript
import { generateCharacterSpritesheet, fetchAvailableAnimationStates, fetchAvailableSpriteStyles, generateEnvironmentSprites } from 'spriteAI';
```

3. Explore the available functions and their options to generate character spritesheets, fetch animation states, fetch sprite styles, and generate environment sprites.

## API Reference

### `generateCharacterSpritesheet(description, options)`

Generates a character spritesheet based on the provided description and options.

**Parameters:**
- `description` (string): A description of the character to be generated.
- `options` (object, optional):
  - `states` (array, optional): An array of animation states to include in the spritesheet. Default: `['idle', 'walk', 'run', 'attack']`.
  - `framesPerState` (number, optional): The number of frames per animation state. Default: `6`.
  - `size` (string, optional): The size of the generated spritesheet. Default: `'1024x1024'`.
  - `style` (string, optional): The art style of the generated spritesheet. Default: `'pixel-art'`.
  - `padding` (number, optional): The amount of padding between frames in the spritesheet. Default: `1`.
  - `direction` (string, optional): The direction the character should face. Default: `'right'`.
  - `save` (boolean, optional): Whether to save the generated spritesheet to disk. Default: `false`.

**Returns:**
An object containing the original image URL, the generated spritesheet as a data URL, and metadata about the spritesheet.

### `fetchAvailableAnimationStates()`

Fetches a list of available animation states that can be used with the `generateCharacterSpritesheet` function.

**Returns:**
An array of available animation states.

### `fetchAvailableSpriteStyles()`

Fetches a list of available sprite styles that can be used with the `generateCharacterSpritesheet` function.

**Returns:**
An array of available sprite styles.

### `generateEnvironmentSprites(description, options)`

Generates a tileset of environment sprites based on the provided description and options.

**Parameters:**
- `description` (string): A description of the environment to be generated.
- `options` (object, optional):
  - `elements` (number, optional): The number of distinct environment pieces to generate. Default: `4`.
  - `size` (string, optional): The size of the generated tileset. Default: `'1024x1024'`.
  - `style` (string, optional): The art style of the generated tileset. Default: `'pixel-art'`.
  - `padding` (number, optional): The amount of padding between tiles in the tileset. Default: `1`.
  - `theme` (string, optional): The theme of the generated environment. Default: `'fantasy'`.
  - `save` (boolean, optional): Whether to save the generated tileset to disk. Default: `false`.

**Returns:**
An object containing the original image URL, the generated tileset as a data URL, and metadata about the tileset.

## Changelog

**Version 1.1.0:**
- Added `fetchAvailableAnimationStates` and `fetchAvailableSpriteStyles` functions to the SDK.
- Updated the `generateCharacterSpritesheet` function to support more animation states and sprite styles.
- Added the `generateEnvironmentSprites` function to generate environment tilesets.

**Version 1.0.0:**
- Initial release of the SpriteAI SDK.
