---
slug: /
sidebar_position: 1
---
# SpriteAI Documentation Updates

## Recent Changes

### New Functions and Utilities

#### generateItemSprites()
- Added support for creating game item sprite collections
- Accepts parameters:
  - `itemCount`: Number of items to generate
  - `size`: Dimensions of sprite sheet
  - `style`: Visual style of items
  - `padding`: Spacing between items
  - `itemType`: Category of items (weapons, potions, etc.)
  - `background`: Optional background configuration

#### Enhanced Environment and Character Sprite Generation
- Expanded `generateEnvironmentSprites()` function
- New `generateCharacterSpritesheet()` with improved flexibility

### Utility Functions Added

#### Sprite Transformation Utilities
- `rotateSpritesheet()`
- `tintSprite()`
- `flipSprite()`
- `createMirrorEffect()`
- `addOutline()`
- `addShadow()`

#### Advanced Effects
- `createParticleEffect()`
- `createColorCyclingAnimation()`
- `createPixelationEffect()`
- `createDissolveEffect()`
- `createShatterEffect()`
- `createKaleidoscopeEffect()`

## Recommended Usage

```javascript
// Generate an item sprite collection
const itemSprites = await sprite.generateItemSprites({
  itemCount: 10,
  size: '512x512',
  style: 'fantasy',
  itemType: 'weapons'
});

// Apply advanced sprite effects
const enhancedSprite = sprite.addShatterEffect(originalSprite);
```

## Performance and Best Practices
- New utility functions are optimized for performance
- Effects can be chained for complex sprite transformations
- Consider memory usage when generating large sprite collections

## Compatibility
- Compatible with existing SpriteAI methods
- Supports latest sprite generation techniques
- Cross-platform support

## Future Development
- Continued expansion of sprite generation capabilities
- Machine learning-enhanced sprite creation
- More granular customization options
