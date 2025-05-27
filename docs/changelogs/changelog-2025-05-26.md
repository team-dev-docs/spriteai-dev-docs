# Changelog 🌶️

## [Unreleased] - 2025-05-26 🚀

### Added 🎉
- New function `generateEnvironmentSprites()` for creating sizzling environment tilesets 🏞️
  - Supports various spicy options including number of elements, size, style, padding, and theme
  - Generates a mouth-watering tileset with multiple environment pieces arranged in a grid
  - Returns both the original image URL and the processed tileset, hot and fresh! 🔥
  - Includes metadata about the generated environment sprites, for that extra flavor

- New function `generateItemSprites()` for creating game item sprite collections that pop! 💥
  - Supports options such as item count, size, style, padding, item type, and background
  - Generates a sprite sheet with multiple items arranged in a grid, like a buffet of visual delights
  - Returns both the original image URL and the processed item sheet, ready to spice up your game
  - Includes metadata about the generated item sprites, because knowledge is power 💪

- New SDK function `fetchAvailableAnimationStates()` to get available animation states 🕺
  - Returns an array of predefined animation states that'll make your characters come alive
  - (e.g., 'idle', 'walk', 'run', 'attack', 'dance', 'moonwalk', etc.) 🕴️

- New SDK function `fetchAvailableSpriteStyles()` to get available sprite styles 🎨
  - Returns an array of supported sprite styles to suit every taste
  - (e.g., 'pixel-art', 'vector', '3d', 'hand-drawn', 'anime', 'neon-retro', 'kawaii')

### Changed 🔄
- Enhanced `generateCharacterSpritesheet()` function, now with extra oomph! 💪
  - Now supports customizable animation states and frames per state, for ultimate flexibility
  - Improved prompt generation for more consistent results that'll knock your socks off
  - Added metadata to the returned object, including frame data for each animation state, because details matter

### Updated 📚
- `spriteAI/README.md` with examples for new functions that'll make you go "Wow!"
- Test file `tests/sprite.test.js` with new test cases for the added functions, ensuring everything's hot and spicy 🌶️

### Developer Notes 🧠
- These new functions expand the capabilities of the spriteAI SDK, allowing for more diverse asset generation than ever before!
- The addition of environment and item sprite generation opens up a world of possibilities for creating complete game asset sets. The sky's the limit! 🚀
- New utility functions for fetching available options will improve the developer experience and SDK flexibility, making your coding sessions smoother than butter 🧈

Get ready to create some seriously spicy sprites with these hot new features! 🔥🎮✨
