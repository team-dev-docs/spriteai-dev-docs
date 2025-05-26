# Changelog

## [Unreleased] - 2025-04-18

### Added
- New function `generateItemSprites()` for creating game item sprite collections
  - Supports various options including item count, size, style, padding, item type, and background
  - Generates a sprite sheet with multiple items arranged in a grid
  - Returns both the original image URL and the processed item sheet
  - Includes metadata about the generated sprites

### Changed
- Enhanced `generateEnvironmentSprites()` function with improved options and functionality
  - Now supports customizable number of elements, size, style, padding, and theme
  - Generates a tileset for environment elements arranged in a grid
  - Returns both the original image URL and the processed tileset
  - Includes metadata about the generated environment sprites

### New Features
- Added `fetchAvailableAnimationStates()` function to retrieve a list of available animation states for character sprites
- Added `fetchAvailableSpriteStyles()` function to retrieve a list of available sprite styles

### Improved
- Updated `generateCharacterSpritesheet()` function to use the latest DALL-E 3 model for improved image generation
- Enhanced error handling and performance optimizations across all sprite generation functions

### Development
- Added new test cases in `tests/sprite.test.js` for the newly introduced functions
- Updated documentation in `misc-spriteai-functions-documentation.md` to reflect new features and changes

### Notes
- This update significantly expands the capabilities of the spriteAI SDK, allowing for more diverse and customizable sprite generation for game development