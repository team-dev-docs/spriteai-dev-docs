# Changelog 🌶️

## [Unreleased] - 2025-05-26 🚀

### Added 🎉
- New function `generateEnvironmentSprites()` for creating sizzling environment tilesets 🌳🏔️
  - Supports a spicy variety of options including number of elements, size, style, padding, and theme
  - Generates a mouth-watering tileset with multiple environment pieces arranged in a grid
  - Returns both the original image URL and the processed tileset, hot off the press!
  - Includes metadata about the generated environment sprites, adding extra flavor to your game development

- New function `generateItemSprites()` for creating game item sprite collections that pack a punch 🎁💥
  - Supports options such as item count, size, style, padding, item type, and background to spice up your inventory
  - Generates a sprite sheet with multiple items arranged in a grid, like a buffet of pixel goodness
  - Returns both the original image URL and the processed item sheet, ready to add some zest to your game
  - Includes metadata about the generated item sprites, giving you all the juicy details

- New SDK function `fetchAvailableAnimationStates()` to get available animation states, because variety is the spice of life 🕺💃
  - Returns an array of predefined animation states that'll make your characters come alive (e.g., 'idle', 'walk', 'run', 'attack', etc.)

- New SDK function `fetchAvailableSpriteStyles()` to get available sprite styles, adding some extra kick to your visuals 🎨🔥
  - Returns an array of supported sprite styles to suit every taste (e.g., 'pixel-art', 'vector', '3d', 'hand-drawn', 'anime')

### Changed 🌶️
- Enhanced `generateCharacterSpritesheet()` function, now with extra oomph!
  - Now supports customizable animation states and frames per state, giving you more control than ever
  - Improved prompt generation for more consistent results, like a well-seasoned recipe
  - Added metadata to the returned object, including frame data for each animation state, serving up all the details you need

### Updated 📚🔥
- `spriteAI/README.md` with sizzling examples for new functions
- Test file `tests/sprite.test.js` with new test cases for the added functions, ensuring your code is as hot as it should be

### Developer Notes 🧑‍💻🌶️
- These new functions expand the capabilities of the spriteAI SDK, allowing for more diverse asset generation that'll spice up your game development
- The addition of environment and item sprite generation opens up possibilities for creating complete game asset sets, like a full course meal for your game
- New utility functions for fetching available options will improve the developer experience and SDK flexibility, adding some extra flavor to your workflow

Get ready to turn up the heat on your game development with these spicy new features! 🔥🎮
