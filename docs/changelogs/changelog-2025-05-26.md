# Changelog 🌶️🔥

## [Unreleased] - 2025-05-26 🚀

### Added 🎉
- 🌳 New function `generateEnvironmentSprites()` for creating sizzling environment tilesets
  - Supports various spicy options including number of elements, size, style, padding, and theme
  - Generates a hot tileset with multiple environment pieces arranged in a grid
  - Returns both the original image URL and the processed tileset, fresh out of the oven
  - Includes metadata about the generated environment sprites, because knowledge is power!

- 🎁 New function `generateItemSprites()` for creating game item sprite collections that pop
  - Supports fiery options such as item count, size, style, padding, item type, and background
  - Generates a sprite sheet with multiple items arranged in a grid, like a buffet of pixel goodness
  - Returns both the original image URL and the processed item sheet, ready to spice up your game
  - Includes metadata about the generated item sprites, for those who like to know their pixels

- 🕺 New SDK function `fetchAvailableAnimationStates()` to get available animation states
  - Returns an array of predefined animation states that'll make your characters come alive (e.g., 'idle', 'walk', 'run', 'attack', 'dance', etc.)

- 🎨 New SDK function `fetchAvailableSpriteStyles()` to get available sprite styles
  - Returns an array of supported sprite styles to add extra flavor to your game (e.g., 'pixel-art', 'vector', '3d', 'hand-drawn', 'anime', 'neon-retro')

### Changed 🔄
- 🦸‍♂️ Enhanced `generateCharacterSpritesheet()` function, now with extra superpowers
  - Supports customizable animation states and frames per state, because why settle for less?
  - Improved prompt generation for more consistent results, like a well-oiled machine
  - Added metadata to the returned object, including frame data for each animation state, for the data nerds out there

### Updated 📚
- `spriteAI/README.md` with examples for new functions, hot off the press
- Test file `tests/sprite.test.js` with new test cases for the added functions, because we like our code well-tested and crispy

### Developer Notes 🧠
- These new functions expand the capabilities of the spriteAI SDK, allowing for more diverse asset generation. It's like a buffet of pixel perfection!
- The addition of environment and item sprite generation opens up possibilities for creating complete game asset sets. One-stop-shop for all your spriting needs!
- New utility functions for fetching available options will improve the developer experience and SDK flexibility. We're all about that smooth dev life!

Remember, with great sprite power comes great sprite responsibility. Use these new features wisely, and may your games be forever spicy! 🌶️🎮
