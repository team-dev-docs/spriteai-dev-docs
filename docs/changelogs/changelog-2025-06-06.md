<response>
# Changelog

## [Unreleased] - 2025-06-06

### Added
- New function `generateLandscapeSprite()` for creating landscape scenes
  - Supports various options including size, style, time of day, weather conditions, and perspective
  - Generates a detailed landscape sprite suitable for game backgrounds
  - Returns both the original image URL and the processed landscape sprite
  - Includes metadata about the generated landscape

### Changed
- Refactored and enhanced `generateCharacterSpritesheet()` function
  - Now supports customizable animation states, frames per state, and sprite direction
  - Improved spritesheet generation with padding between frames
  - Added detailed metadata for each animation state

### Removed
- Removed standalone `generateSpriteWithBorder()` function
  - Functionality has been integrated into the main sprite object for better consistency

### Optimized
- Improved performance of background removal in sprite generation process

### Other
- Added a test file `.github-write-test`
- Various code cleanup and minor improvements throughout the codebase

</response># Changelog

## [Unreleased] - 2025-06-06

### Added
- New function `generateLandscapeSprite()` for creating landscape scenes
  - Supports various options including size, style, time of day, weather conditions, and perspective
  - Generates a detailed landscape sprite suitable for game backgrounds
  - Returns both the original image URL and the processed landscape sprite
  - Includes metadata about the generated landscape

### Changed
- Refactored and enhanced `generateCharacterSpritesheet()` function
  - Now supports customizable animation states, frames per state, and sprite direction
  - Improved spritesheet generation with padding between frames
  - Added detailed metadata for each animation state

### Removed
- Removed standalone `generateSpriteWithBorder()` function
  - Functionality has been integrated into the main sprite object for better consistency

### Optimized
- Improved performance of background removal in sprite generation process

### Other
- Added a test file `.github-write-test`
- Various code cleanup and minor improvements throughout the codebase