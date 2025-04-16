# Changelog

## [Unreleased]

### Added
- New SDK function `fetchAvailableSpriteStyles()` to get available sprite styles
- New function `generateEnvironmentSprites()` for creating environment sprite tilesets
- New function `generateLandscapeSprite()` for creating landscape scenes
- New function `generateCharacterSpritesheet()` for creating character spritesheets
- Numerous new utility functions for sprite manipulation and effects, including:
  - Rotation, tinting, flipping, and combining sprites
  - Particle effects, color cycling, and outline generation
  - Pixel sorting, noise addition, and palette extraction
  - Various visual effects (e.g., pixelation, mosaic, dissolve, splash, shatter)
  - Weather effects and displacement effects
- Multiple new sprite object methods for applying effects and creating variations, such as:
  - Particle effects, color cycling, and sprite combination
  - Glitch art creation and sprite variation generation
  - Palette optimization and pixel-perfect creation
  - Adding shadows, reflections, and various visual effects
  - Creating elemental and lighting variations

### Changed
- Refactored `generateCharacterSpritesheet()` function for improved flexibility and output
- Enhanced options handling in sprite generation methods

### Fixed
- Minor code improvements and bug fixes throughout the codebase