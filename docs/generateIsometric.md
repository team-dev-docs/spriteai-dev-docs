# SpriteAI Documentation

## Feature Updates: 2025-04-18 Release

### New Function: generateItemSprites()

#### Description
The `generateItemSprites()` function allows developers to create game item sprite collections with advanced customization options.

#### Usage
```javascript
const itemSprites = await sprite.generateItemSprites(options);
```

#### Parameters
- `options` (object):
  - `itemCount` (number): Number of items to generate
  - `size` (string): Size of individual sprites
  - `style` (string): Visual style of the sprites
  - `padding` (number): Space between items in the sprite sheet
  - `itemType` (string): Type of items to generate (e.g., 'weapons', 'potions')
  - `background` (string): Background style for the sprite sheet

#### Return Value
Returns an object containing:
- Original image URL
- Processed item sprite sheet
- Metadata about generated sprites

#### Example
```javascript
const result = await sprite.generateItemSprites({
  itemCount: 6,
  size: '64x64',
  style: 'pixel',
  itemType: 'weapons'
});
```

## Environment Sprite Enhancements

The `generateEnvironmentSprites()` function has been updated with improved flexibility and generation capabilities.

## Additional Updates

### New Utility Functions
Several new utility functions have been added to enhance sprite manipulation, including:
- `rotateSpritesheet()`
- `tintSprite()`
- `calculateOptimalAnimationSpeed()`
- `generateSpriteMetadata()`

### Performance Improvements
- Enhanced options handling in sprite generation methods
- Improved sprite sheet generation algorithms

## Compatibility

These new features are compatible with the latest version of SpriteAI and require the most recent SDK version.

## Best Practices

- Always specify detailed options to get the most accurate sprite generation
- Use the new utility functions to fine-tune sprite appearance and behavior
- Check sprite metadata for additional generation information

## Upcoming Features

Stay tuned for more advanced sprite generation and manipulation features in future releases!
