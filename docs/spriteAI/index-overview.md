# SpriteAI Overview HEY

SpriteAI is a powerful JavaScript library for generating game assets using AI. This overview provides an introduction to the main features and functions of the SpriteAI library.

## Key Features

* Generate character spritesheets

* Create environment sprites

* Produce item sprites

* Fetch available animation states and sprite styles

## Main Functions

### generateCharacterSpritesheet

This function generates a character spritesheet based on a given description and options.

```javascript
async function generateCharacterSpritesheet(description, options = {})
```

#### Parameters:

* `description`: A string describing the character

* `options`: An object containing optional parameters such as:

  * `states`: Array of animation states (default: \['idle', 'walk', 'run', 'attack'])

  * `framesPerState`: Number of frames per animation state (default: 6)

  * `size`: Image size (default: '1024x1024')

  * `style`: Art style (default: 'pixel-art')

  * `padding`: Padding between frames (default: 1)

  * `direction`: Character facing direction (default: 'right')

#### Returns:

An object containing:

* `original`: URL of the original generated image

* `spritesheet`: Base64-encoded PNG of the processed spritesheet

* `metadata`: Object with spritesheet details (states, dimensions, frame data, etc.)

### generateEnvironmentSprites

This function creates environment sprites based on a description and options.

```javascript
async function generateEnvironmentSprites(description, options = {})
```

#### Parameters:

* `description`: A string describing the environment

* `options`: An object containing optional parameters such as:

  * `elements`: Number of different elements to generate (default: 4)

  * `size`: Image size (default: '1024x1024')

  * `style`: Art style (default: 'pixel-art')

  * `padding`: Padding between elements (default: 1)

  * `theme`: Environment theme (default: 'fantasy')

#### Returns:

An object containing:

* `original`: URL of the original generated image

* `tileset`: Base64-encoded PNG of the processed tileset

* `metadata`: Object with tileset details (elements, theme, dimensions, etc.)

### generateItemSprites

This function generates item sprites for game inventory or pickups.

```javascript
async function generateItemSprites(description, options = {})
```

#### Parameters:

* `description`: A string describing the items

* `options`: An object containing optional parameters such as:

  * `itemCount`: Number of items to generate (default: 4)

  * `size`: Image size (default: '1024x1024')

  * `style`: Art style (default: 'pixel-art')

  * `padding`: Padding between items (default: 1)

  * `itemType`: Type of items (default: 'equipment')

  * `background`: Background color (default: 'white')

#### Returns:

An object containing:

* `original`: URL of the original generated image

* `itemSheet`: Base64-encoded PNG of the processed item sheet

* `metadata`: Object with item sheet details (item count, type, dimensions, etc.)

### Utility Functions

#### fetchAvailableAnimationStates

Retrieves a list of available animation states.

```javascript
async function fetchAvailableAnimationStates()
```

#### Returns:

An array of animation state strings.

#### fetchAvailableSpriteStyles

Retrieves a list of available sprite styles.

```javascript
async function fetchAvailableSpriteStyles()
```

#### Returns:

An array of sprite style strings.

## Usage

To use SpriteAI, import the desired functions and call them with appropriate parameters. For example:

```javascript
import { generateCharacterSpritesheet } from 'spriteAI';

const characterSprite = await generateCharacterSpritesheet('A brave knight in armor', {
  states: ['idle', 'walk', 'attack'],
  style: 'pixel-art'
});

console.log(characterSprite.spritesheet); // Base64-encoded PNG
console.log(characterSprite.metadata); // Spritesheet metadata
```

For more detailed information on each function and its options, please refer to the specific function documentation.
