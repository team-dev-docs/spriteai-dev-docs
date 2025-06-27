# generateItemSprites

## Brief Description
`generateItemSprites()` is a function designed to create sprite collections for game items with flexible configuration options. It generates a sprite sheet containing multiple items arranged in a grid, providing developers with a powerful tool for game asset creation.

## Usage

To use `generateItemSprites()`, import it from the sprite module and call it with the desired parameters:

```javascript
import { sprite } from './path/to/sprite/module';

const result = await sprite.generateItemSprites(description, options);
```

## Parameters

- `description` (string, required): A text description of the items to generate.
- `options` (object, optional):
  - `itemCount` (number): Total number of items to generate in the sprite sheet.
  - `size` (number): Pixel dimensions of each item sprite.
  - `style` (string): Desired sprite art style (e.g., 'pixel', 'isometric', 'realistic').
  - `padding` (number): Space between items in the sprite sheet.
  - `itemType` (string): Specific category of items (e.g., 'weapons', 'potions', 'tools').
  - `background` (string): Background style for the sprite sheet.

## Return Value

Returns an object containing:
- `image`: Base64-encoded image data URL of the generated item sprite sheet.
- `url`: Direct URL to the generated sprite sheet.
- `metadata`: Additional information about the generated sprites:
  - `frameWidth`: Width of individual item sprites
  - `frameHeight`: Height of individual item sprites
  - `totalItems`: Number of items in the sprite sheet

## Examples

### Basic Item Sprite Generation
```javascript
// Generate a collection of weapon sprites
const weaponSprites = await sprite.generateItemSprites('Fantasy RPG weapons', {
  itemCount: 6,
  size: 64,
  style: 'pixel',
  itemType: 'weapons'
});

console.log(weaponSprites.url);
console.log(weaponSprites.metadata);
```

### Advanced Item Sprite Configuration
```javascript
// Generate a detailed item sprite sheet with custom configuration
const craftingItems = await sprite.generateItemSprites('Crafting materials', {
  itemCount: 12,
  size: 32,
  style: 'isometric',
  padding: 4,
  itemType: 'crafting',
  background: 'transparent'
});

// Save the generated sprite sheet
writeFile('crafting_items.png', craftingItems.image);
```

## Notes and Considerations

- The function leverages AI-powered image generation for creating diverse and unique item sprites.
- Generated sprites are optimized for game development use cases.
- Item generation may vary between calls due to AI model creativity.
- Performance and generation time depend on the complexity of the request and selected options.

## Related Documentation
- [generateSprite](/generateSprite)
- [generatePixelArt](/generatePixelArt)
- [Sprite Generation Overview](/getting-started)

## Changelog

### Added in Version 2025.04.18
- Introduced `generateItemSprites()` function
- Supports multiple configuration options
- Generates grid-based sprite sheets
- Provides comprehensive metadata about generated sprites