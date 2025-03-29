# SpriteAI Functions Documentation

## Overview
This guide covers the main functions in the SpriteAI module, located in `/index.js`.

## Functions

### 1. removeBackgroundColor
**Location**: `/index.js`

Removes a specified background color from an image.

```javascript
async function removeBackgroundColor(inputPath, outputPath, targetColor, colorThreshold = 0, options = {})
```

### 2. generateCharacterSpritesheet
**Location**: `/index.js`

Generates a character spritesheet based on a description and options.

```javascript
async function generateCharacterSpritesheet(description, options = {})
```

#### Parameters:
- `description` (string): Description of the character to generate.
- `options` (object): Additional options for spritesheet generation.
  - `states` (array): Animation states (default: ['idle', 'walk', 'run', 'attack'])
  - `framesPerState` (number): Number of frames per state (default: 6)
  - `size` (string): Image size (default: '1024x1024')
  - `style` (string): Art style (default: 'pixel-art')
  - `padding` (number): Padding between frames (default: 1)
  - `direction` (string): Character facing direction (default: 'right')
  - `save` (boolean): Whether to save the spritesheet to file

#### Returns:
An object containing:
- `original`: URL of the original generated image
- `spritesheet`: Base64 encoded spritesheet image
- `metadata`: Object with spritesheet information

#### Example Usage:
```javascript
const result = await generateCharacterSpritesheet('a cute dragon', {
  states: ['idle', 'walk', 'run'],
  framesPerState: 4,
  size: '512x512',
  style: 'pixel-art',
  padding: 2,
  direction: 'left',
  save: true
});
console.log(result.spritesheet);
```

### 3. fetchAvailableAnimationStates
**Location**: `/index.js`

Fetches available animation states for character spritesheets.

```javascript
async function fetchAvailableAnimationStates()
```

#### Returns:
An array of available animation states.

### 4. fetchAvailableSpriteStyles
**Location**: `/index.js`

Fetches available sprite styles for character generation.

```javascript
async function fetchAvailableSpriteStyles()
```

#### Returns:
An array of available sprite styles.

### 5. generateEnvironmentSprites
**Location**: `/index.js`

Generates environment sprites based on a description and options.

```javascript
async function generateEnvironmentSprites(description, options = {})
```

#### Parameters:
- `description` (string): Description of the environment to generate.
- `options` (object): Additional options for environment sprite generation.
  - `elements` (number): Number of distinct elements (default: 4)
  - `size` (string): Image size (default: '1024x1024')
  - `style` (string): Art style (default: 'pixel-art')
  - `padding` (number): Padding between elements (default: 1)
  - `theme` (string): Environment theme (default: 'fantasy')
  - `save` (boolean): Whether to save the tileset to file

#### Returns:
An object containing:
- `original`: URL of the original generated image
- `tileset`: Base64 encoded tileset image
- `metadata`: Object with tileset information

#### Example Usage:
```javascript
const result = await generateEnvironmentSprites('forest', {
  elements: 6,
  size: '512x512',
  style: 'pixel-art',
  padding: 2,
  theme: 'fantasy',
  save: true
});
console.log(result.tileset);
```

## How to Extend

1. **Add New Image Processing Function**
   - Create a new function in `/index.js`
   - Use existing libraries like `Jimp` or `sharp`

2. **Enhance Existing Functions**
   - Modify the DALL-E prompt in `generateCharacterSpritesheet` or `generateEnvironmentSprites`
   - Add new options to customize sprite generation

3. **Implement Error Handling**
   - Add try-catch blocks in async functions
   - Create custom error messages for specific scenarios

4. **Optimize Performance**
   - Use caching for repeated operations
   - Implement parallel processing for multiple sprites

5. **Add New AI Model Integration**
   - Import a new AI model in `/index.js`
   - Create a new function to interact with the model

Example:
```javascript
async function newAIFeature(input) {
  const newAIModel = new AIModel();
  const result = await newAIModel.process(input);
  return result;
}
```