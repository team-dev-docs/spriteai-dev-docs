{
  "newDocument": "# SpriteAI API Reference

## Overview

The SpriteAI API provides a comprehensive set of functions for generating, manipulating, and transforming sprites across various styles and use cases.

## Core Sprite Generation Functions

### generateSprite()
Generates a basic sprite based on a text description.

```javascript
const result = await spriteAI.generateSprite(description, options);
```

#### Parameters
- `description` (string, required): Textual description of the sprite
- `options` (object, optional):
  - `iterations` (number): Number of sprite variations to generate
  - `size` (string): Sprite image size (default: "1024x1024")
  - `save` (boolean): Whether to save the generated image

#### Returns
- `messages`: Sprite metadata (frame dimensions)
- `image`: Base64-encoded sprite sheet

### generatePixelArt()
Generates pixel art sprites with specialized processing.

```javascript
const pixelArtSprite = await spriteAI.generatePixelArt(description, options);
```

#### Parameters
- `description` (string, required): Pixel art sprite description
- `options` (object, optional):
  - `save` (boolean): Save generated image

#### Returns
- `image`: Base64-encoded pixel art sprite
- `url`: Direct image URL

### generateIsometric()
Creates isometric sprite images for game graphics.

```javascript
const isometricSprite = await spriteAI.generateIsometric(description, options);
```

#### Parameters
- `description` (string, required): Isometric sprite description
- `options` (object, optional):
  - `save` (boolean): Save generated image

#### Returns
- `image`: Base64-encoded isometric sprite
- `url`: Direct image URL

## Advanced Sprite Generation Functions

### New Functions Added (as of April 2025)

#### Character and Environment Sprite Generation
- `generateCharacterSpritesheet()`: Create character sprite collections
- `generateEnvironmentSprites()`: Generate environment and landscape sprite tilesets
- `generateItemSprites()`: Create game item sprite collections
- `generateLandscapeSprite()`: Generate landscape scene sprites

#### Utility Functions
- `rotateSpritesheet()`
- `tintSprite()`
- `calculateOptimalAnimationSpeed()`
- `generateSpriteMetadata()`
- `createParticleEffect()`
- `flipSprite()`

## Sprite Object Methods

### Transformation Methods
- `addOutline()`
- `createColorCycle()`
- `combineSprites()`
- `createGlitchArt()`
- `generateSpriteVariations()`
- `optimizePalette()`
- `createPixelPerfect()`
- `addShadow()`

### Advanced Effects
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

## Specialized Variations
- `createMechaSpriteVariation()`
- `createElementalVariation()`
- `createLightingVariation()`

## Usage Example

```javascript
const spriteAI = require('spriteai');

// Generate a complex sprite with multiple transformations
const sprite = await spriteAI.generateSprite('Futuristic robot character')
  .addOutline()
  .createSpriteAnimation()
  .addGlitchWaveEffect();
```

## Notes
- Requires valid API credentials for OpenAI services
- Generation time varies based on complexity of sprite
- Outputs may differ between generations due to AI model variations

## Best Practices
1. Provide clear, detailed descriptions
2. Experiment with different options
3. Save and version your generated sprites
4. Use specialized generation functions for specific sprite types"
}