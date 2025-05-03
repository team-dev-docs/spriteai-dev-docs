<response>
# Changelog

## [Version 1.2.0] - 2025-05-03

### Added
- New function `generateItemSprites()` for creating game item sprite collections
  - Supports various options including item count, size, style, padding, item type, and background
  - Generates a sprite sheet with multiple items arranged in a grid
  - Returns both the original image URL and the processed item sheet
  - Includes metadata about the generated sprites

### Enhanced
- Improved `generateEnvironmentSprites()` function
  - Added support for specifying the number of elements, size, style, padding, and theme
  - Implemented generation of tileset for environment sprites
  - Added metadata output including element count, theme, dimensions, and tile data

### Changed
- Refactored `generateCharacterSpritesheet()` function
  - Moved from the main file to `/spriteAI/index.js`
  - Enhanced flexibility with more customizable options
  - Improved output format with additional metadata

### New Utility Functions
- Added `fetchAvailableSpriteStyles()` to retrieve available sprite styles
- Implemented `generateLandscapeSprite()` for creating landscape scenes
  - Supports various options like size, style, time of day, weather, and perspective
  - Includes option to remove background and save generated image

### Project Structure
- Created new directory `spriteAI` with its own `index.js` and `package.json`
- Moved and refactored sprite generation code into the new `spriteAI` module

### Other
- Added a test file `.github-write-test`

</response># Changelog

## [Version 1.2.0] - 2025-05-03

### Added
- New function `generateItemSprites()` for creating game item sprite collections
  - Supports various options including item count, size, style, padding, item type, and background
  - Generates a sprite sheet with multiple items arranged in a grid
  - Returns both the original image URL and the processed item sheet
  - Includes metadata about the generated sprites

### Enhanced
- Improved `generateEnvironmentSprites()` function
  - Added support for specifying the number of elements, size, style, padding, and theme
  - Implemented generation of tileset for environment sprites
  - Added metadata output including element count, theme, dimensions, and tile data

### Changed
- Refactored `generateCharacterSpritesheet()` function
  - Moved from the main file to `/spriteAI/index.js`
  - Enhanced flexibility with more customizable options
  - Improved output format with additional metadata

### New Utility Functions
- Added `fetchAvailableSpriteStyles()` to retrieve available sprite styles
- Implemented `generateLandscapeSprite()` for creating landscape scenes
  - Supports various options like size, style, time of day, weather, and perspective
  - Includes option to remove background and save generated image

### Project Structure
- Created new directory `spriteAI` with its own `index.js` and `package.json`
- Moved and refactored sprite generation code into the new `spriteAI` module

### Other
- Added a test file `.github-write-test`