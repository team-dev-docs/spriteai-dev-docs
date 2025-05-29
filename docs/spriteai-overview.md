# SpriteAI Overview

SpriteAI is a powerful tool for generating game assets, particularly focused on creating character spritesheets, environmental sprites, and item sprites using AI-powered image generation. This overview will introduce you to the main features and functions of SpriteAI.

## Key Features

- Generate character spritesheets with customizable animation states
- Create environmental sprites for game worlds
- Produce item sprites for in-game objects
- Supports various art styles, including pixel art
- Easy integration with OpenAI's DALL-E for image generation

## Main Functions

### generateCharacterSpritesheet

This function allows you to create a character spritesheet based on a text description. It supports multiple animation states and customizable options.

```javascript
const result = await generateCharacterSpritesheet(description, options);
```

Key options include:
- `states`: Array of animation states (e.g., ['idle', 'walk', 'run'])
- `framesPerState`: Number of frames for each animation state
- `size`: Dimensions of the output image
- `style`: Art style (e.g., 'pixel-art')

### generateEnvironmentSprites

Use this function to create environmental elements for your game world.

```javascript
const result = await generateEnvironmentSprites(description, options);
```

Options include:
- `elements`: Number of distinct environment pieces to generate
- `theme`: The overall theme of the environment (e.g., 'fantasy')

### generateItemSprites

This function helps you create sprites for various in-game items.

```javascript
const result = await generateItemSprites(description, options);
```

Notable options:
- `itemCount`: Number of items to generate
- `itemType`: Category of items (e.g., 'equipment')

## Utility Functions

SpriteAI also provides utility functions to enhance your workflow:

- `fetchAvailableAnimationStates()`: Retrieves a list of available animation states
- `fetchAvailableSpriteStyles()`: Gets a list of supported sprite styles

## Getting Started

To use SpriteAI, you'll need to have the necessary dependencies installed and an OpenAI API key configured. Refer to the README file in the project repository for detailed setup instructions.

## Best Practices

1. Provide clear and detailed descriptions when generating sprites for best results.
2. Experiment with different art styles and options to find the perfect fit for your game.
3. Use the utility functions to explore available options and customize your sprite generation.

## Next Steps

Explore the specific documentation for each function to learn more about their capabilities and options:

- [Generate Character Spritesheet](./generateSprite.md)
- [Generate Pixel Art](./generatePixelArt.md)
- [Generate Animated Emoji](./generateAnimatedEmoji.md)
- [Generate Isometric Sprites](./generateIsometric.md)

SpriteAI offers a comprehensive solution for game developers looking to quickly generate high-quality sprite assets. Whether you're creating characters, environments, or items, SpriteAI can help streamline your asset creation process.