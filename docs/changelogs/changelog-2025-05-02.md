<response>
# Changelog

## [Unreleased] - 2025-05-02

### Added
- New function `generateItemSprites()` for creating game item sprite collections
  - Supports various options including item count, size, style, padding, item type, and background
  - Generates a sprite sheet with multiple items arranged in a grid
  - Returns both the original image URL and the processed item sheet
  - Includes metadata about the generated sprites

### Changed
- Enhanced `generateEnvironmentSprites()` function with improved functionality and options

### Features
- Added `fetchAvailableSpriteStyles()` function to retrieve available sprite styles
- Implemented `generateLandscapeSprite()` function for creating landscape scenes
  - Supports various options such as size, style, time of day, weather, and perspective
  - Includes option to remove background and save generated image
- Expanded `generateCharacterSpritesheet()` function with more flexible options and improved output
  - Now supports customizable animation states, frames per state, size, style, padding, and direction
  - Returns detailed metadata about the generated spritesheet

### Refactoring
- Moved sprite-related functions from the main index.js to a dedicated spriteAI/index.js file
- Restructured the project to improve organization and maintainability

### Other
- Added a test file `.github-write-test`
- Created a package.json file for the spriteAI module with necessary dependencies and project information

</response># Changelog

## [Unreleased] - 2025-05-02

### Added
- New function `generateItemSprites()` for creating game item sprite collections
  - Supports various options including item count, size, style, padding, item type, and background
  - Generates a sprite sheet with multiple items arranged in a grid
  - Returns both the original image URL and the processed item sheet
  - Includes metadata about the generated sprites

### Changed
- Enhanced `generateEnvironmentSprites()` function with improved functionality and options

### Features
- Added `fetchAvailableSpriteStyles()` function to retrieve available sprite styles
- Implemented `generateLandscapeSprite()` function for creating landscape scenes
  - Supports various options such as size, style, time of day, weather, and perspective
  - Includes option to remove background and save generated image
- Expanded `generateCharacterSpritesheet()` function with more flexible options and improved output
  - Now supports customizable animation states, frames per state, size, style, padding, and direction
  - Returns detailed metadata about the generated spritesheet

### Refactoring
- Moved sprite-related functions from the main index.js to a dedicated spriteAI/index.js file
- Restructured the project to improve organization and maintainability

### Other
- Added a test file `.github-write-test`
- Created a package.json file for the spriteAI module with necessary dependencies and project information