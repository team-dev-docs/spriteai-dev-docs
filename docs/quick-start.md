# Quick Start Guide for SpriteAI

## Installation

To get started with SpriteAI, install the package using npm:

```bash
npm install spriteai
```

## Basic Usage

### Importing the Library

```javascript
import { 
  generateCharacterSpritesheet, 
  generateEnvironmentSprites, 
  generateItemSprites 
} from 'spriteai';
```

## Generating Character Spritesheets

Create animated character spritesheets with customizable options:

```javascript
const spritesheet = await generateCharacterSpritesheet('heroic knight', {
  states: ['idle', 'walk', 'attack'],
  framesPerState: 6,
  style: 'pixel-art',
  save: true
});

console.log(spritesheet.spritesheet); // Base64 encoded spritesheet
console.log(spritesheet.metadata); // Sprite metadata
```

### Options for Character Spritesheet

- `states`: Animation states (default: ['idle', 'walk', 'run', 'attack'])
- `framesPerState`: Number of frames per animation state (default: 6)
- `size`: Image size (default: '1024x1024')
- `style`: Art style (default: 'pixel-art')
- `direction`: Character facing direction (default: 'right')
- `save`: Save the spritesheet to assets folder (default: false)

## Generating Environment Sprites

Create environment tilesets for game backgrounds:

```javascript
const environmentSprites = await generateEnvironmentSprites('forest landscape', {
  elements: 4,
  style: 'pixel-art',
  theme: 'fantasy'
});

console.log(environmentSprites.tileset); // Base64 encoded tileset
```

### Environment Sprite Options

- `elements`: Number of environment elements (default: 4)
- `style`: Art style (default: 'pixel-art')
- `theme`: Environment theme (default: 'fantasy')
- `save`: Save the tileset to assets folder (default: false)

## Generating Item Sprites

Create sprite sheets for game items:

```javascript
const itemSprites = await generateItemSprites('magical artifacts', {
  itemCount: 4,
  itemType: 'equipment',
  style: 'pixel-art'
});

console.log(itemSprites.itemSheet); // Base64 encoded item sheet
```

### Item Sprite Options

- `itemCount`: Number of items to generate (default: 4)
- `style`: Art style (default: 'pixel-art')
- `itemType`: Type of items (default: 'equipment')
- `save`: Save the item sheet to assets folder (default: false)

## Available Sprite Styles

SpriteAI supports multiple sprite styles:
- `pixel-art`
- `vector`
- `3d`
- `hand-drawn`
- `anime`

## Available Animation States

Common animation states include:
- `idle`
- `walk`
- `run`
- `attack`
- `jump`
- `fall`
- `hurt`
- `die`

## Error Handling

Always use try-catch blocks when working with asynchronous sprite generation:

```javascript
try {
  const spritesheet = await generateCharacterSpritesheet('hero', options);
} catch (error) {
  console.error('Sprite generation failed:', error);
}
```

## Notes

- Sprite generation requires an active internet connection
- OpenAI API key might be required depending on your configuration
- Generated sprites are based on AI interpretation of your description

## Next Steps

- Explore more advanced sprite generation techniques
- Customize sprite styles and animation states
- Integrate sprites into your game development workflow

## Support

For more information, visit our documentation or join our community forums.
