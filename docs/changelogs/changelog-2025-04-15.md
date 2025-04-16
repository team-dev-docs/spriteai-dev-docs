# Changelog

## [Unreleased]

### Added
- New function `generateSpriteWithBorder` to add borders to sprites
- `generateCharacterSpritesheet` function for creating character spritesheets
- `fetchAvailableAnimationStates` function to get available animation states
- `generateLandscapeSprite` function for creating landscape sprites
- `generateEnvironmentSprites` function for generating environment tilesets
- `fetchAvailableSpriteStyles` function to get available sprite styles
- New utility functions for sprite manipulation:
  - `rotateSpritesheet`
  - `tintSprite`
  - `calculateOptimalAnimationSpeed`
  - `generateSpriteMetadata`
  - `createParticleEffect`
  - `flipSprite`
  - `createColorCyclingAnimation`
  - `combineSprites`
  - `generateOutline`
  - `pixelSort`
  - `addNoise`
  - `extractPalette`
  - `pixelPerfectScale`
  - `generateShadow`
  - `createMirrorEffect`
  - `interpolateFrames`
  - `createReflection`
  - `createWaveDistortion`
- New effect functions:
  - `createPixelationEffect`
  - `createMosaicEffect`
  - `createDissolveEffect`
  - `createSplashEffect`
  - `createShatterEffect`
  - `createKaleidoscopeEffect`
  - `createGlitchWaveEffect`
  - `createDisplacementEffect`
  - `createWeatherEffect`
- New sprite variation functions:
  - `createMechaSpriteVariation`
  - `createElementalVariation`
  - `createLightingVariation`

### Changed
- Refactored `generateSprite` function to include more options and iterations
- Enhanced `generatePixelArt`, `generateIsometric`, `generateAnimatedEmoji`, and `generateRetroConsole` functions
- Improved `splitSpriteSheet` function with metadata

### Fixed
- Minor bug fixes and code improvements throughout the codebase