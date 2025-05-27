# Changelog

## [Unreleased]

### Added
- 🔥 New SDK function `fetchAvailableSpriteStyles()` to get available sprite styles
  - Returns an array of sizzling sprite styles (e.g., 'pixel-art', 'vector', '3d', 'hand-drawn', 'anime')
- 🌟 New function `generateEnvironmentSprites()` for creating environment sprite tilesets
  - Supports various options including number of elements, size, style, padding, and theme
  - Generates a tileset with multiple environment pieces arranged in a grid
  - Returns both the original image URL and the processed tileset
  - Includes metadata about the generated environment sprites
- 🏞️ New function `generateLandscapeSprite()` for creating landscape scenes
- 🦸‍♂️ New function `generateCharacterSpritesheet()` for creating character spritesheets
  - Now supports customizable animation states and frames per state
  - Improved prompt generation for more consistent results
  - Added metadata to the returned object, including frame data for each animation state
- 🛠️ New utility functions:
  - `rotateSpritesheet()`
  - `tintSprite()`
  - `calculateOptimalAnimationSpeed()`
  - `generateSpriteMetadata()`
  - `createParticleEffect()`
  - `flipSprite()`
  - `createColorCyclingAnimation()`
  - `combineSprites()`
  - `generateOutline()`
  - `pixelSort()`
  - `addNoise()`
  - `extractPalette()`
  - `pixelPerfectScale()`
  - `generateShadow()`
  - `createMirrorEffect()`
  - `interpolateFrames()`
  - `createReflection()`
  - `createWaveDistortion()`
  - `createPixelationEffect()`
  - `createMosaicEffect()`
  - `createDissolveEffect()`
  - `createSplashEffect()`
  - `createShatterEffect()`
  - `createKaleidoscopeEffect()`
  - `createGlitchWaveEffect()`
  - `createDisplacementEffect()`
  - `createWeatherEffect()`
- 🎨 New sprite object methods:
  - `generateParticleEffect()`
  - `createColorCycle()`
  - `combineSprites()`
  - `addOutline()`
  - `createGlitchArt()`
  - `generateSpriteVariations()`
  - `optimizePalette()`
  - `createPixelPerfect()`
  - `addShadow()`
  - `createMirrorSprite()`
  - `createSpriteAnimation()`
  - `addReflectionEffect()`
  - `addWaveEffect()`
  - `addPixelationEffect()`
  - `addMosaicEffect()`
  - `addDissolveEffect()`
  - `addSplashEffect()`
  - `addShatterEffect()`
  - `addKaleidoscopeEffect()`
  - `addGlitchWaveEffect()`
  - `addDisplacementEffect()`
  - `createMechaSpriteVariation()`
  - `createElementalVariation()`
  - `createLightingVariation()`
  - `addWeatherEffect()`
  - `generateSpriteWithBorder()`
- 🎮 New function `generateItemSprites()` for creating game item sprite collections
  - Supports options such as item count, size, style, padding, item type, and background
  - Generates a sprite sheet with multiple items arranged in a grid
  - Returns both the original image URL and the processed item sheet
  - Includes metadata about the generated item sprites
- 🕺 New SDK function `fetchAvailableAnimationStates()` to get available animation states
  - Returns an array of predefined animation states (e.g., 'idle', 'walk', 'run', 'attack', etc.)

### Changed
- 🚀 Refactored `generateCharacterSpritesheet()` function for improved flexibility and output
- 💪 Enhanced options handling in sprite generation methods

### Fixed
- 🐛 Minor code improvements and bug fixes throughout the codebase

### Developer Notes
- 🌈 These new functions expand the capabilities of the spriteAI SDK, allowing for more diverse asset generation
- 🏙️ The addition of environment and item sprite generation opens up possibilities for creating complete game asset sets
- 🧰 New utility functions for fetching available options will improve the developer experience and SDK flexibility
