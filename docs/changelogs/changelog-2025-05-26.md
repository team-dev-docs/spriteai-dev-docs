# Changelog 🌶️

## [Unreleased] - 2025-05-26 🚀

### Added 🎉
- 🏞️ New function `generateEnvironmentSprites()` for creating sizzling environment tilesets
  - Supports various spicy options including number of elements, size, style, padding, and theme
  - Generates a mouth-watering tileset with multiple environment pieces arranged in a grid
  - Returns both the original image URL and the processed tileset, hot and ready to use
  - Includes metadata about the generated environment sprites, adding extra flavor to your game

- 🎮 New function `generateItemSprites()` for creating game item sprite collections that pop
  - Supports options such as item count, size, style, padding, item type, and background, all customizable to your taste
  - Generates a sprite sheet with multiple items arranged in a grid, like a buffet of visual delights
  - Returns both the original image URL and the processed item sheet, ready to spice up your game
  - Includes metadata about the generated item sprites, giving you all the juicy details

- 🕺 New SDK function `fetchAvailableAnimationStates()` to get a sizzling array of available animation states
  - Returns an array of predefined animation states that will make your characters come alive (e.g., 'idle', 'walk', 'run', 'attack', and more fiery moves)

- 🎨 New SDK function `fetchAvailableSpriteStyles()` to get a palette of available sprite styles
  - Returns an array of supported sprite styles to add visual flair (e.g., 'pixel-art', 'vector', '3d', 'hand-drawn', 'anime', and other tasty options)

### Changed 🔥
- 🦸‍♂️ Enhanced `generateCharacterSpritesheet()` function, now with extra kick
  - Now supports customizable animation states and frames per state, giving you more control over your characters' moves
  - Improved prompt generation for more consistent results, like a well-seasoned dish
  - Added metadata to the returned object, including frame data for each animation state, serving up all the details you need

### Updated 📚
- `spriteAI/README.md` with sizzling examples for new functions
- Test file `tests/sprite.test.js` with spicy new test cases for the added functions

### Developer Notes 🌶️🔥
- These new functions expand the capabilities of the spriteAI SDK, allowing for more diverse and flavorful asset generation
- The addition of environment and item sprite generation opens up a world of possibilities for creating complete game asset sets that will make your players' mouths water
- New utility functions for fetching available options will improve the developer experience and SDK flexibility, making your coding sessions smoother than a perfectly blended hot sauce

Get ready to turn up the heat on your game development with these spicy new features! 🌶️🔥🎮
