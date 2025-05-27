# Changelog

## [Unreleased] - 2025-04-18

### Added
- 🔥 New function `generateItemSprites()` for creating sizzling game item sprite collections 🎮
  - Supports a smorgasbord of options including item count, size, style, padding, item type, and background
  - Conjures up a sprite sheet with multiple items arranged in a mind-blowing grid
  - Returns both the original image URL and the processed item sheet (double the fun!)
  - Includes juicy metadata about the generated sprites

- 🌟 Introducing the spicy new `generateEnvironmentSprites()` function for crafting jaw-dropping environment tilesets
  - Unleash your creativity with options for number of elements, size, style, padding, and theme
  - Creates a tileset with multiple environment pieces arranged in a tantalizing grid
  - Serves up both the original image URL and the processed tileset
  - Comes with a side of metadata about the generated environment sprites

### Changed
- 🚀 Supercharged `generateCharacterSpritesheet()` function
  - Now with customizable animation states and frames per state (go wild!)
  - Improved prompt generation for results so consistent, they'll make your head spin
  - Added metadata to the returned object, including frame data for each animation state (because knowledge is power)

### New Superpowers
- 💪 Flex your dev muscles with `fetchAvailableAnimationStates()`
  - Returns an array of predefined animation states (e.g., 'idle', 'walk', 'run', 'attack', and more!)

- 🎨 Unleash your inner artist with `fetchAvailableSpriteStyles()`
  - Returns an array of supported sprite styles (e.g., 'pixel-art', 'vector', '3d', 'hand-drawn', 'anime')

### Other
- Added a test file `.github-write-test` (because we're responsible devs who test our code!)

### Developer Notes
- These new functions are like a toolbox full of magic wands for your game asset generation needs
- Environment and item sprite generation opens up a whole new world of possibilities - it's like Aladdin's Cave of Wonders for game assets!
- New utility functions will make your dev experience smoother than a freshly waxed slide
