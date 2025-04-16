# Changelog

## [Unreleased]

### Added
- New function `fetchAvailableSpriteStyles()` to fetch available sprite styles
- New function `generateEnvironmentSprites()` for creating environment tilesets
  - Supports options for elements, size, style, padding, and theme
  - Generates a tileset with multiple environment elements
  - Returns original image URL, tileset as base64, and metadata

### Modified
- Enhanced `spriteAI/index.js` with new functionality for environment sprite generation

### Other
- Added a test file `.github-write-test`