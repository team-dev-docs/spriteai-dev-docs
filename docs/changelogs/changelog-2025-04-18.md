# Changelog for SpriteAI

## [Unreleased] - 2025-04-18

### Added

#### `generateItemSprites()` Function

A powerful new function has been introduced to create comprehensive game item sprite collections. This method provides extensive customization and generation capabilities for item sprites.

**Key Features:**
- Create sprite sheets with multiple game items
- Supports flexible configuration options
- Generates item sprite collections with advanced settings

**Function Options:**
- `itemCount`: Number of items to generate in the sprite sheet
- `size`: Dimensions for individual sprite items
- `style`: Visual style of the sprites
- `padding`: Space between items in the sprite sheet
- `itemType`: Specifies the category or type of items
- `background`: Background configuration for the sprite sheet

**Return Value:**
- Original image URL
- Processed item sprite sheet
- Metadata about generated sprites

**Example Usage:**
```javascript
const itemSprites = await spriteAI.generateItemSprites({
  itemCount: 12,
  size: '64x64',
  style: 'pixel-art',
  itemType: 'fantasy-weapons'
});
```

### Changed
- Enhanced `generateEnvironmentSprites()` function to improve sprite generation flexibility and output quality

### Other
- Added a test file `.github-write-test` for internal testing purposes
