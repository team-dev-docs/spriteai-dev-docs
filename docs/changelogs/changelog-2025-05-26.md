# Changelog 🌶️

## [Unreleased] - 2025-05-26 🚀

### Added 🎉
- New function `generateEnvironmentSprites()` for creating sizzling environment tilesets 🌴🏙️
  - Supports various options including number of elements, size, style, padding, and theme
  - Generates a tileset with multiple environment pieces arranged in a grid
  - Returns both the original image URL and the processed tileset
  - Includes metadata about the generated environment sprites

- New function `generateItemSprites()` for creating hot game item sprite collections 🎁🔥
  - Supports options such as item count, size, style, padding, item type, and background
  - Generates a sprite sheet with multiple items arranged in a grid
  - Returns both the original image URL and the processed item sheet
  - Includes metadata about the generated item sprites

- New SDK function `fetchAvailableAnimationStates()` to get available animation states 🕺💃
  - Returns an array of predefined animation states (e.g., 'idle', 'walk', 'run', 'attack', etc.)

- New SDK function `fetchAvailableSpriteStyles()` to get available sprite styles 🎨
  - Returns an array of supported sprite styles (e.g., 'pixel-art', 'vector', '3d', 'hand-drawn', 'anime')

### Changed 🔥
- Enhanced `generateCharacterSpritesheet()` function
  - Now supports customizable animation states and frames per state
  - Improved prompt generation for more consistent results
  - Added metadata to the returned object, including frame data for each animation state

### Updated 📚
- `spriteAI/README.md` with spicy examples for new functions
- Test file `tests/sprite.test.js` with fiery new test cases for the added functions

### Developer Notes 🧑‍💻
- These new functions expand the capabilities of the spriteAI SDK, allowing for more diverse and flavorful asset generation
- The addition of environment and item sprite generation opens up possibilities for creating complete game asset sets with extra zest
- New utility functions for fetching available options will spice up the developer experience and SDK flexibility

🌶️ Get ready to create some sizzling hot game assets with these spicy new features! 🌶️
