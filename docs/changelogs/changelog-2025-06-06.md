Here's the generated changelog based on the provided commits:

<response>
# Changelog

## [Unreleased] - 2025-06-06

### Added
- New function `generateItemSprites()` for creating game item sprite collections
  - Supports various options including item count, size, style, padding, item type, and background
  - Generates a sprite sheet with multiple items arranged in a grid
  - Returns both the original image URL and the processed item sheet
  - Includes metadata about the generated sprites
- New function `generateLandscapeSprite()` for creating landscape scenes
  - Supports various options like size, style, time of day, weather conditions, and perspective
  - Generates a landscape image suitable for game backgrounds
  - Includes option to remove background and save the generated image

### Changed
- Enhanced `generateEnvironmentSprites()` function with additional options and improved functionality
- Refactored `generateCharacterSpritesheet()` function for improved flexibility and output
- Enhanced options handling in sprite generation methods

### Features
- New SDK function `fetchAvailableSpriteStyles()` to get available sprite styles
- Added numerous utility functions for sprite manipulation:
  - `rotateSpritesheet()`, `tintSprite()`, `flipSprite()`, `combineSprites()`
  - `createColorCyclingAnimation()`, `generateOutline()`, `pixelSort()`, `addNoise()`
  - `extractPalette()`, `pixelPerfectScale()`, `generateShadow()`, `createMirrorEffect()`
  - `interpolateFrames()`, `createReflection()`, `createWaveDistortion()`
  - Various effect generators (pixelation, mosaic, dissolve, splash, shatter, kaleidoscope, glitch wave, displacement)
- Added new methods to the sprite object for advanced sprite manipulation:
  - Particle effects, color cycling, glitch art, sprite variations
  - Palette optimization, pixel perfect scaling, shadow and reflection effects
  - Various visual effects (wave, pixelation, mosaic, dissolve, splash, shatter, kaleidoscope, glitch wave)
  - Elemental variations, mecha sprite variations, lighting variations, weather effects

### Improvements
- Added `calculateOptimalAnimationSpeed()` function for smoother animations
- Implemented `generateSpriteMetadata()` for better sprite information handling

### Other
- Added a test file `.github-write-test`
- Minor code improvements and bug fixes throughout the codebase

</response># Changelog

## [Unreleased] - 2025-06-06

### Added
- New function `generateItemSprites()` for creating game item sprite collections
  - Supports various options including item count, size, style, padding, item type, and background
  - Generates a sprite sheet with multiple items arranged in a grid
  - Returns both the original image URL and the processed item sheet
  - Includes metadata about the generated sprites
- New function `generateLandscapeSprite()` for creating landscape scenes
  - Supports various options like size, style, time of day, weather conditions, and perspective
  - Generates a landscape image suitable for game backgrounds
  - Includes option to remove background and save the generated image

### Changed
- Enhanced `generateEnvironmentSprites()` function with additional options and improved functionality
- Refactored `generateCharacterSpritesheet()` function for improved flexibility and output
- Enhanced options handling in sprite generation methods

### Features
- New SDK function `fetchAvailableSpriteStyles()` to get available sprite styles
- Added numerous utility functions for sprite manipulation:
  - `rotateSpritesheet()`, `tintSprite()`, `flipSprite()`, `combineSprites()`
  - `createColorCyclingAnimation()`, `generateOutline()`, `pixelSort()`, `addNoise()`
  - `extractPalette()`, `pixelPerfectScale()`, `generateShadow()`, `createMirrorEffect()`
  - `interpolateFrames()`, `createReflection()`, `createWaveDistortion()`
  - Various effect generators (pixelation, mosaic, dissolve, splash, shatter, kaleidoscope, glitch wave, displacement)
- Added new methods to the sprite object for advanced sprite manipulation:
  - Particle effects, color cycling, glitch art, sprite variations
  - Palette optimization, pixel perfect scaling, shadow and reflection effects
  - Various visual effects (wave, pixelation, mosaic, dissolve, splash, shatter, kaleidoscope, glitch wave)
  - Elemental variations, mecha sprite variations, lighting variations, weather effects

### Improvements
- Added `calculateOptimalAnimationSpeed()` function for smoother animations
- Implemented `generateSpriteMetadata()` for better sprite information handling

### Other
- Added a test file `.github-write-test`
- Minor code improvements and bug fixes throughout the codebase