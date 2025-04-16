# Changelog

## [Unreleased]

### Added
- New `spriteAI` module with core functionality:
  - `generateCharacterSpritesheet` function to create character spritesheets
  - `fetchAvailableAnimationStates` function to get available animation states
  - `removeBackgroundColor` helper function for image processing
- `package.json` for the `spriteAI` module with dependencies and project metadata
- New utility functions in main `index.js`:
  - `generateEnvironmentSprites` for creating environment tilesets
  - `fetchAvailableSpriteStyles` to get available sprite styles
- `generateLandscapeSprite` function for creating landscape scenes

### Changed
- Refactored and simplified main `index.js`:
  - Removed numerous utility functions and effects
  - Streamlined `generateCharacterSpritesheet` implementation
- Updated `generateCharacterSpritesheet` to use OpenAI's DALL-E 3 model

### Removed
- Numerous utility functions and effects from main `index.js`, including:
  - Particle effects, color cycling, sprite combination
  - Various visual effects (glitch, pixelation, kaleidoscope, etc.)
  - Weather effects, lighting variations, and elemental effects

### Infrastructure
- Added `.github-write-test` file (likely for testing purposes)