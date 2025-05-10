# Changelog

## [Version 1.1.0] - 2025-04-15

### Added
- New SDK function `fetchAvailableSpriteStyles()` to retrieve available sprite styles
- New function `generateEnvironmentSprites()` for creating environment sprite tilesets
- New function `generateLandscapeSprite()` for generating landscape scenes
- Enhanced `generateCharacterSpritesheet()` function with improved flexibility and output
- Introduced numerous utility functions for sprite manipulation:
  - `rotateSpritesheet()`, `tintSprite()`, `calculateOptimalAnimationSpeed()`
  - `generateSpriteMetadata()`, `createParticleEffect()`, `flipSprite()`
  - `createColorCyclingAnimation()`, `combineSprites()`, `generateOutline()`
  - `pixelSort()`, `addNoise()`, `extractPalette()`, `pixelPerfectScale()`
  - `generateShadow()`, `createMirrorEffect()`, `interpolateFrames()`
  - `createReflection()`, `createWaveDistortion()`, `createPixelationEffect()`
  - `createMosaicEffect()`, `createDissolveEffect()`, `createSplashEffect()`
  - `createShatterEffect()`, `createKaleidoscopeEffect()`, `createGlitchWaveEffect()`
  - `createDisplacementEffect()`, `createWeatherEffect()`

### Enhanced
- Expanded sprite object with new methods:
  - Effects: `addOutline()`, `addShadow()`, `addReflectionEffect()`, `addWaveEffect()`
  - Variations: `createGlitchArt()`, `generateSpriteVariations()`, `createMechaSpriteVariation()`
  - Animations: `createColorCycle()`, `createSpriteAnimation()`
  - Special effects: `addPixelationEffect()`, `addMosaicEffect()`, `addDissolveEffect()`
  - Environmental: `addWeatherEffect()`, `createElementalVariation()`, `createLightingVariation()`
  - Composition: `combineSprites()`, `generateSpriteWithBorder()`
  - Optimization: `optimizePalette()`, `createPixelPerfect()`

### Improved
- Refactored and enhanced options handling in sprite generation methods
- Implemented more flexible and detailed metadata output for generated sprites

### Fixed
- Various minor code improvements and bug fixes throughout the codebase

### Developer Notes
- This update significantly expands the capabilities of the spriteAI library, providing a wide range of tools for sprite manipulation, animation, and special effects
- New features focus on enhancing creativity and flexibility in sprite generation and modification
- Developers are encouraged to explore the new utility functions and sprite object methods to create more dynamic and diverse sprite assets