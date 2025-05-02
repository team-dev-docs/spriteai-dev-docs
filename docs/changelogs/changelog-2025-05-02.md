# Changelog

## [Version 1.2.0] - 2025-05-02

### Added
- New function `generateItemSprites()` for creating game item sprite collections
  - Supports various options including item count, size, style, padding, item type, and background
  - Generates a sprite sheet with multiple items arranged in a grid
  - Returns both the original image URL and the processed item sheet
  - Includes metadata about the generated sprites

### Enhanced
- Improved `generateEnvironmentSprites()` function with additional features and options
- Enhanced `generateCharacterSpritesheet()` function for improved flexibility and output

### New Utility Functions
- Added `fetchAvailableSpriteStyles()` to retrieve available sprite styles
- Implemented `rotateSpritesheet()` for rotating sprite sheets
- Added `tintSprite()` for applying color tints to sprites
- Created `calculateOptimalAnimationSpeed()` for determining ideal animation frame rates
- Implemented `generateSpriteMetadata()` for producing detailed sprite information

### Visual Effects
- Added `createParticleEffect()` for generating particle-based visual effects
- Implemented `flipSprite()` for horizontal or vertical sprite flipping
- Created `createColorCyclingAnimation()` for color palette animations
- Added `combineSprites()` for merging multiple sprites
- Implemented `generateOutline()` for adding outlines to sprites
- Created `pixelSort()` and `addNoise()` for artistic sprite modifications

### Sprite Manipulation
- Added `extractPalette()` for color palette optimization
- Implemented `pixelPerfectScale()` for clean sprite scaling
- Created `generateShadow()` for adding dynamic shadows to sprites
- Added `createMirrorEffect()` for sprite reflection effects
- Implemented `interpolateFrames()` for smooth animation transitions
- Created `createReflection()` for adding reflective surfaces to sprites

### Advanced Effects
- Added various advanced effect functions including:
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

### New Sprite Object Methods
- Added numerous methods to the sprite object for easy access to new functionalities, including:
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

### Other Improvements
- Enhanced options handling across various sprite generation methods
- Refactored and optimized existing codebase for improved performance and maintainability
- Added a test file `.github-write-test` for GitHub write operations

### Documentation
- Updated documentation to reflect new functions and methods
- Improved inline comments and function descriptions for better code understanding