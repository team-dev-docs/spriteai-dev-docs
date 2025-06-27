# SpriteAI Generate Functions Documentation

## Overview

SpriteAI provides multiple specialized sprite generation functions to help developers create diverse and dynamic sprites for game development and digital art projects.

## Available Generation Functions

### generateSprite()

#### Description
Generates a comprehensive sprite sheet with AI-powered image generation, optimized for character and game sprite creation.

#### Usage
```javascript
const result = await sprite.generateSprite(description, options);
```

#### Parameters
- `description` (string, required): Detailed text description of the sprite
- `options` (object, optional):
  - `iterations`: Number of sprite variations
  - `size`: Generated image dimensions
  - `save`: Boolean to save generated image

#### Returns
- `messages`: Sprite metadata (frame dimensions)
- `image`: Base64-encoded sprite sheet

### generatePixelArt()

#### Description
Creates pixel art sprites with a retro, low-resolution aesthetic.

#### Usage
```javascript
const result = await sprite.generatePixelArt(description, options);
```

#### Parameters
- `description` (string, required): Pixel art sprite concept
- `options` (object, optional):
  - `save`: Option to save generated pixel art

#### Returns
- `image`: Base64-encoded pixel art sprite
- `url`: Direct image URL

### generateIsometric()

#### Description
Generates isometric sprites for strategy, management, and top-down perspective games.

#### Usage
```javascript
const result = await sprite.generateIsometric(description, options);
```

#### Parameters
- `description` (string, required): Isometric object or character description
- `options` (object, optional):
  - `save`: Option to save generated isometric sprite

#### Returns
- `image`: Base64-encoded isometric sprite
- `url`: Direct image URL

## Notes and Considerations

- AI-powered generation may produce variable results
- Sprites are optimized for game development workflows
- Image processing might modify original input slightly
- Requires appropriate API credentials for image generation

## Best Practices

1. Provide clear, detailed descriptions
2. Experiment with multiple generations
3. Review and potentially refine generated sprites
4. Consider saving variations for future use

## Performance Tips

- Cache generated sprites when possible
- Use specific, concise descriptions
- Limit iterations to manage computational resources

## Compatibility

Supports modern JavaScript environments with async/await support and compatible with major game development frameworks.

## API Requirements

- OpenAI API Key
- Internet Connection
- Node.js (recommended version 14+)

## Example

```javascript
// Generate a character sprite
const heroSprite = await sprite.generateSprite('Medieval knight in plate armor', { 
  iterations: 2, 
  save: true 
});

// Create a pixel art character
const pixelHero = await sprite.generatePixelArt('Retro adventurer with sword', { 
  save: true 
});
```
