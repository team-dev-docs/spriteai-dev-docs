---
slug: /
sidebar_position: 1
---

# SpriteAI SDK Documentation

## Brief Description
The SpriteAI SDK is a comprehensive toolkit for generating AI-powered sprite assets for game development. It provides functions to create character spritesheets, environment tilesets, and item collections using advanced AI image generation and processing capabilities.

## Usage
To use the SpriteAI SDK, import the functions from the spriteAI module:

```javascript
import { 
  generateCharacterSpritesheet, 
  generateEnvironmentSprites, 
  generateItemSprites,
  fetchAvailableAnimationStates,
  fetchAvailableSpriteStyles
} from './path/to/spriteAI/module';
```

## Functions

### generateCharacterSpritesheet

Generates animated character spritesheets with multiple animation states.

#### Parameters
- `description` (string, required): A text description of the character to generate.
- `options` (object, optional):
  - `states` (array): Animation states to include (default: `['idle', 'walk', 'run', 'attack']`)
  - `framesPerState` (number): Number of frames per animation state (default: `6`)
  - `size` (string): Size of the generated image (default: `"1024x1024"`)
  - `style` (string): Art style for the sprite (default: `"pixel-art"`)
  - `padding` (number): Padding between frames (default: `1`)
  - `direction` (string): Character facing direction (default: `"right"`)
  - `save` (boolean): Whether to save the generated spritesheet to disk

#### Return Value
Returns an object containing:
- `original`: URL of the original AI-generated image
- `spritesheet`: Base64-encoded processed spritesheet
- `metadata`: Object with detailed information about the spritesheet structure
  - `states`: Array of animation states
  - `framesPerState`: Number of frames per state
  - `totalFrames`: Total number of frames
  - `dimensions`: Width and height of the image
  - `frameData`: Detailed frame information for each animation state

#### Examples

1. Generate a basic character spritesheet:
```javascript
const result = await generateCharacterSpritesheet("A pixelated robot warrior");
console.log(result.metadata.frameData);
// Access the spritesheet image
const img = document.createElement('img');
img.src = result.spritesheet;
```

2. Generate a custom character with specific animations:
```javascript
const customCharacter = await generateCharacterSpritesheet("A mystical wizard", {
  states: ['idle', 'walk', 'cast_spell', 'teleport'],
  framesPerState: 8,
  style: 'hand-drawn',
  direction: 'left',
  save: true
});
```

### generateEnvironmentSprites

Creates environment tilesets for game backgrounds and scenery.

#### Parameters
- `description` (string, required): Description of the environment elements to generate.
- `options` (object, optional):
  - `elements` (number): Number of different environment elements (default: `4`)
  - `size` (string): Size of the generated image (default: `"1024x1024"`)
  - `style` (string): Art style (default: `"pixel-art"`)
  - `padding` (number): Padding between elements (default: `1`)
  - `theme` (string): Environment theme (default: `"fantasy"`)
  - `save` (boolean): Whether to save the tileset to disk

#### Return Value
Returns an object containing:
- `original`: URL of the original AI-generated image
- `tileset`: Base64-encoded processed tileset
- `metadata`: Object with tileset information
  - `elements`: Number of elements
  - `theme`: Environment theme
  - `dimensions`: Image dimensions
  - `tileData`: Grid layout information

#### Examples

1. Generate a forest environment:
```javascript
const forest = await generateEnvironmentSprites("Ancient forest with mystical trees", {
  elements: 6,
  theme: 'fantasy',
  style: 'pixel-art'
});
```

2. Generate a sci-fi environment:
```javascript
const sciFi = await generateEnvironmentSprites("Futuristic space station interior", {
  elements: 8,
  theme: 'sci-fi',
  style: '3d',
  save: true
});
```

### generateItemSprites

Creates collections of game items like weapons, potions, or equipment.

#### Parameters
- `description` (string, required): Description of the items to generate.
- `options` (object, optional):
  - `itemCount` (number): Number of different items (default: `4`)
  - `size` (string): Size of the generated image (default: `"1024x1024"`)
  - `style` (string): Art style (default: `"pixel-art"`)
  - `padding` (number): Padding between items (default: `1`)
  - `itemType` (string): Type of items (default: `"equipment"`)
  - `background` (string): Background color (default: `"white"`)
  - `save` (boolean): Whether to save the item sheet to disk

#### Return Value
Returns an object containing:
- `original`: URL of the original AI-generated image
- `itemSheet`: Base64-encoded processed item sheet
- `metadata`: Object with item information
  - `itemCount`: Number of items
  - `itemType`: Type of items
  - `dimensions`: Image dimensions
  - `itemData`: Grid layout information

#### Examples

1. Generate magical potions:
```javascript
const potions = await generateItemSprites("Colorful magical potions with glowing effects", {
  itemCount: 6,
  itemType: 'consumable',
  style: 'hand-drawn'
});
```

2. Generate weapon collection:
```javascript
const weapons = await generateItemSprites("Medieval fantasy weapons", {
  itemCount: 8,
  itemType: 'weapon',
  background: 'transparent',
  save: true
});
```

### fetchAvailableAnimationStates

Retrieves the list of available animation states for character spritesheets.

#### Return Value
Returns an array of available animation state strings:
```javascript
const states = await fetchAvailableAnimationStates();
// Returns: ['idle', 'walk', 'run', 'attack', 'jump', 'fall', 'hurt', 'die']
```

### fetchAvailableSpriteStyles

Retrieves the list of available art styles for sprite generation.

#### Return Value
Returns an array of available style strings:
```javascript
const styles = await fetchAvailableSpriteStyles();
// Returns: ['pixel-art', 'vector', '3d', 'hand-drawn', 'anime']
```

## Complete Workflow Example

Here's a complete example showing how to create a full game asset pack:

```javascript
import { 
  generateCharacterSpritesheet, 
  generateEnvironmentSprites, 
  generateItemSprites 
} from './spriteAI';

async function createGameAssets() {
  try {
    // Generate main character
    const hero = await generateCharacterSpritesheet("Brave knight in shining armor", {
      states: ['idle', 'walk', 'attack', 'hurt'],
      framesPerState: 6,
      style: 'pixel-art',
      save: true
    });

    // Generate environment
    const castle = await generateEnvironmentSprites("Medieval castle courtyard", {
      elements: 8,
      theme: 'medieval',
      style: 'pixel-art',
      save: true
    });

    // Generate items
    const equipment = await generateItemSprites("Knight's equipment and treasures", {
      itemCount: 6,
      itemType: 'equipment',
      style: 'pixel-art',
      save: true
    });

    console.log('Game assets generated successfully!');
    
    return {
      character: hero,
      environment: castle,
      items: equipment
    };
  } catch (error) {
    console.error('Failed to generate assets:', error);
  }
}

// Use the assets
createGameAssets().then(assets => {
  // Load assets into your game engine
  console.log('Total character frames:', assets.character.metadata.totalFrames);
  console.log('Environment tiles:', assets.environment.metadata.tileData.totalTiles);
  console.log('Item count:', assets.items.metadata.itemCount);
});
```

## Notes or Considerations

- **AI Generation**: All functions use DALL-E 3 for image generation, which may produce varying results for the same input. Results depend on the AI model's interpretation of your description.

- **Processing Time**: Generation can take 30-60 seconds per asset due to AI processing and image manipulation. Consider implementing loading states in your application.

- **File Management**: When using the `save: true` option, files are automatically saved to an `assets` folder in your current working directory with descriptive filenames.

- **Image Quality**: Generated images are optimized for game use but may require additional processing for specific game engines or platforms.

- **API Dependencies**: Requires valid OpenAI API credentials for image generation. Ensure your API key is properly configured.

- **Memory Usage**: Large spritesheets and multiple concurrent generations may consume significant memory. Monitor resource usage in production environments.

- **Style Consistency**: For best results when creating multiple related assets, use consistent descriptions and style parameters across function calls.

- **Background Removal**: The SDK includes background color removal functionality for creating transparent sprites when needed.

## Error Handling

Always implement proper error handling when using the SDK:

```javascript
try {
  const sprite = await generateCharacterSpritesheet("My character");
  // Handle success
} catch (error) {
  if (error.message.includes('API')) {
    console.error('OpenAI API error:', error);
  } else if (error.message.includes('network')) {
    console.error('Network error:', error);
  } else {
    console.error('Unexpected error:', error);
  }
}
```
