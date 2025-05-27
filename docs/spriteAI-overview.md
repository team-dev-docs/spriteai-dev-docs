# SpriteAI Overview

## Introduction

SpriteAI is a powerful Node.js library designed to streamline the process of generating game assets using AI. It leverages OpenAI's DALL-E 3 model to create character spritesheets, environment tiles, and item sprites based on text descriptions. This overview document will introduce you to the main features and functions of SpriteAI.

## Key Features

1. Character Spritesheet Generation
2. Environment Sprite Generation
3. Item Sprite Generation
4. Animation State and Style Fetching

## Main Functions

### generateCharacterSpritesheet

This function creates a character spritesheet based on a text description and various options.

```javascript
async function generateCharacterSpritesheet(description, options = {})
```

#### Parameters:
- `description`: A string describing the character
- `options`: An object containing customization options such as:
  - `states`: Array of animation states (default: ['idle', 'walk', 'run', 'attack'])
  - `framesPerState`: Number of frames per animation state (default: 6)
  - `size`: Image size (default: '1024x1024')
  - `style`: Art style (default: 'pixel-art')
  - `padding`: Padding between frames (default: 1)
  - `direction`: Character facing direction (default: 'right')

#### Returns:
An object containing:
- `original`: URL of the original generated image
- `spritesheet`: Base64 encoded PNG of the processed spritesheet
- `metadata`: Object with detailed information about the spritesheet

### generateEnvironmentSprites

This function creates environment sprites based on a description and options.

```javascript
async function generateEnvironmentSprites(description, options = {})
```

#### Parameters:
- `description`: A string describing the environment
- `options`: An object containing customization options such as:
  - `elements`: Number of environment elements (default: 4)
  - `size`: Image size (default: '1024x1024')
  - `style`: Art style (default: 'pixel-art')
  - `padding`: Padding between elements (default: 1)
  - `theme`: Environment theme (default: 'fantasy')

#### Returns:
An object containing:
- `original`: URL of the original generated image
- `tileset`: Base64 encoded PNG of the processed tileset
- `metadata`: Object with detailed information about the tileset

### generateItemSprites

This function generates item sprites based on a description and options.

```javascript
async function generateItemSprites(description, options = {})
```

#### Parameters:
- `description`: A string describing the items
- `options`: An object containing customization options such as:
  - `itemCount`: Number of items to generate (default: 4)
  - `size`: Image size (default: '1024x1024')
  - `style`: Art style (default: 'pixel-art')
  - `padding`: Padding between items (default: 1)
  - `itemType`: Type of items (default: 'equipment')
  - `background`: Background color (default: 'white')

#### Returns:
An object containing:
- `original`: URL of the original generated image
- `itemSheet`: Base64 encoded PNG of the processed item sheet
- `metadata`: Object with detailed information about the item sheet

### fetchAvailableAnimationStates

This function returns an array of available animation states.

```javascript
async function fetchAvailableAnimationStates()
```

#### Returns:
An array of strings representing available animation states.

### fetchAvailableSpriteStyles

This function returns an array of available sprite styles.

```javascript
async function fetchAvailableSpriteStyles()
```

#### Returns:
An array of strings representing available sprite styles.

## Utility Functions

### removeBackgroundColor

This internal function removes the background color from an image.

```javascript
async function removeBackgroundColor(inputPath, outputPath, targetColor, colorThreshold = 0, options = {})
```

## Conclusion

SpriteAI provides a robust set of tools for game developers to quickly generate high-quality assets using AI. By leveraging the power of DALL-E 3, it offers flexibility in creating character spritesheets, environment tiles, and item sprites with various customization options. This library can significantly speed up the asset creation process for game development projects.

For more detailed information on using each function, please refer to the specific function documentation or explore the example usage in the codebase.