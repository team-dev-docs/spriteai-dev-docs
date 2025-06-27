# Quick Start Guide for SpriteAI

## Installation

First, install the SpriteAI package using npm:

```bash
npm install spriteai
```

## Basic Usage

### Importing SpriteAI

```javascript
import { 
  generateCharacterSpritesheet, 
  generatePixelArt, 
  generateLandscapeSprite 
} from 'spriteai';
```

## Generating Character Spritesheets

Create a character spritesheet with multiple animation states:

```javascript
const result = await generateCharacterSpritesheet('heroic warrior', {
  states: ['idle', 'walk', 'run', 'attack'],
  framesPerState: 6,
  style: 'pixel-art',
  direction: 'right'
});

console.log(result.spritesheet); // Base64 encoded sprite image
console.log(result.metadata); // Detailed sprite information
```

### Generating Pixel Art

Create a simple pixel art sprite:

```javascript
const pixelArt = await generatePixelArt('a brave knight', {
  size: '256x256',
  style: 'retro'
});

console.log(pixelArt.image); // Base64 encoded image
```

## Generating Landscape Sprites

Create a game background or environment:

```javascript
const landscape = await generateLandscapeSprite('mystical forest', {
  style: 'pixel-art',
  timeOfDay: 'sunset',
  weather: 'misty',
  perspective: 'side-scrolling',
  removeBackground: true
});

console.log(landscape.landscape); // Base64 encoded landscape image
```

## Advanced Options

### Character Spritesheet Customization

```javascript
const customSpritesheet = await generateCharacterSpritesheet('wizard', {
  states: ['cast', 'walk', 'teleport'], 
  framesPerState: 4,
  size: '512x512',
  style: 'pixel-art',
  padding: 2
});
```

## Error Handling

Always wrap AI-generated image calls in try/catch:

```javascript
try {
  const sprite = await generatePixelArt('space explorer');
} catch (error) {
  console.error('Sprite generation failed:', error);
}
```

## Best Practices

- Use descriptive and clear prompts
- Specify desired style and perspective
- Handle potential generation errors
- Experiment with different states and frame counts

## Supported Styles

- `pixel-art`
- `retro`
- `modern`
- `minimalist`

## Performance Tips

- Generate sprites in advance when possible
- Cache generated images to reduce API calls
- Use appropriate image sizes for your game

## Next Steps

1. Explore advanced sprite manipulation methods
2. Join the SpriteAI community for inspiration
3. Check out our comprehensive API documentation

## Requirements

- Node.js 16.x or later
- OpenAI API key configured
- Active internet connection for AI image generation

## Contributing

We welcome contributions! Check out our GitHub repository for more information on how to get involved.
