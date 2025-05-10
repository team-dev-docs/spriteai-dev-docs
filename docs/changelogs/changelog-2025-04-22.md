# Changelog - April 22, 2025

## New Features

### Added SDK Utility Functions

#### fetchAvailableAnimationStates
The SDK now provides a utility function to retrieve all available animation states for character sprites.

```javascript
import { fetchAvailableAnimationStates } from 'sprite-ai';

// Fetch all available animation states
const states = await fetchAvailableAnimationStates();
console.log(states); 
// Output: ['idle', 'walk', 'run', 'attack', 'jump', 'fall', 'hurt', 'die']
```

#### fetchAvailableSpriteStyles
A new utility function has been added to list all supported sprite art styles.

```javascript
import { fetchAvailableSpriteStyles } from 'sprite-ai';

// Fetch all available sprite styles
const styles = await fetchAvailableSpriteStyles();
console.log(styles); 
// Output: ['pixel-art', 'vector', '3d', 'hand-drawn', 'anime']
```

### New Sprite Generation Functions

#### generateEnvironmentSprites
Generate environment sprites and tilesets for game backgrounds and scenes.

```javascript
import { generateEnvironmentSprites } from 'sprite-ai';

// Generate a forest environment tileset
const result = await generateEnvironmentSprites('forest', {
  elements: 6,
  style: 'pixel-art',
  theme: 'fantasy',
  save: true
});

console.log(result.metadata); // Contains information about the generated tileset
```

Parameters:
- `description` (string, required): Description of the environment to generate
- `options` (object, optional):
  - `elements` (number): Number of distinct environment elements to generate (default: 4)
  - `size` (string): Size of the output image (default: '1024x1024')
  - `style` (string): Art style to use (default: 'pixel-art')
  - `padding` (number): Padding between elements (default: 1)
  - `theme` (string): Theme of the environment (default: 'fantasy')
  - `save` (boolean): Whether to save the generated image to disk

#### generateItemSprites
Generate item sprites for game inventories, collectibles, and equipment.

```javascript
import { generateItemSprites } from 'sprite-ai';

// Generate weapon item sprites
const result = await generateItemSprites('medieval weapons', {
  itemCount: 8,
  style: 'pixel-art',
  itemType: 'weapons',
  save: true
});

console.log(result.metadata); // Contains information about the generated items
```

Parameters:
- `description` (string, required): Description of the items to generate
- `options` (object, optional):
  - `itemCount` (number): Number of distinct items to generate (default: 4)
  - `size` (string): Size of the output image (default: '1024x1024')
  - `style` (string): Art style to use (default: 'pixel-art')
  - `padding` (number): Padding between items (default: 1)
  - `itemType` (string): Type of items to generate (default: 'equipment')
  - `background` (string): Background color (default: 'white')
  - `save` (boolean): Whether to save the generated image to disk

## Improvements

### Enhanced Background Color Removal
The internal `removeBackgroundColor` function has been improved to better handle transparent backgrounds in generated sprites.

### Expanded Character Animation States
The default character spritesheet generator now supports additional animation states including 'jump', 'fall', 'hurt', and 'die'.

## Documentation Updates
- Added examples and improved parameter descriptions for all new functions
- Updated SDK integration guide with the new utility functions