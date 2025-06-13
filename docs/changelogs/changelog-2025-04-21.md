# Changelog - 2025-04-21

## [1.1.0] - 2025-04-21

### Added
- New function `fetchAvailableAnimationStates()` to retrieve a list of available animation states for character spritesheets
- New function `fetchAvailableSpriteStyles()` to retrieve a list of available sprite styles
- New function `generateEnvironmentSprites()` for creating environment sprite tilesets
  - Supports generating tileset with multiple environment elements
  - Configurable options including elements, size, style, padding, and theme
- New function `generateItemSprites()` for creating game item sprite collections
  - Supports generating sprite sheets with multiple items
  - Configurable options including item count, size, style, padding, item type, and background

### Changed
- Enhanced `generateCharacterSpritesheet()` function with more flexible options
- Improved SDK documentation and example implementations

### Improvements
- Added test cases for new SDK functions in `tests/sprite.test.js`
- Updated README and documentation to reflect new functions and capabilities
- Expanded SDK functionality for more creative sprite generation

### SDK Functions Overview
- `fetchAvailableAnimationStates()`: Returns an array of available animation states
- `fetchAvailableSpriteStyles()`: Returns an array of available sprite styles
- `generateEnvironmentSprites()`: Creates environment sprite tilesets
- `generateItemSprites()`: Generates item sprite collections

## Breaking Changes
- None in this version