# Getting Started with SpriteAI

Welcome to SpriteAI! This guide will walk you through the process of integrating the SpriteAI npm package into your projects and using its powerful sprite generation capabilities.

## Installation

To begin using SpriteAI, you'll need to install it in your project directory. Simply run the following command:

```bash
npm install spriteai
```

## Basic Usage

Once SpriteAI is installed, you can start leveraging its powerful features in your project. Here's a quick example demonstrating the main functionalities:

```javascript
const { generateCharacterSpritesheet, generateLandscapeSprite } from 'spriteai';

// Generate a character spritesheet
generateCharacterSpritesheet('a cute robot')
  .then(result => {
    console.log('Character spritesheet generated:', result.spritesheet);
    console.log('Metadata:', result.metadata);
  })
  .catch(error => {
    console.error('Spritesheet generation encountered an error:', error);
  });

// Generate a landscape sprite
generateLandscapeSprite('a lush forest', { timeOfDay: 'sunset', weather: 'clear' })
  .then(result => {
    console.log('Landscape sprite generated:', result.landscape);
    console.log('Metadata:', result.metadata);
  })
  .catch(error => {
    console.error('Landscape sprite generation encountered an error:', error);
  });
```

## Key Features

SpriteAI offers a range of powerful features to enhance your sprite creation:

1. **Character Spritesheet Generation**: Utilize `generateCharacterSpritesheet(description, options)` to create detailed character spritesheets with multiple animation states.
2. **Landscape Sprite Generation**: Use `generateLandscapeSprite(description, options)` to generate beautiful landscape sprites for game backgrounds.
3. **Customizable Options**: Both functions accept various options to tailor the output to your needs, including art style, size, and more.

## Advanced Techniques

### Customizing Character Spritesheets

You can customize your character spritesheets by specifying animation states, frames per state, and other options:

```javascript
generateCharacterSpritesheet('a fierce dragon', {
  states: ['idle', 'fly', 'breathe-fire', 'roar'],
  framesPerState: 8,
  size: '2048x2048',
  style: 'pixel-art',
  direction: 'left'
})
  .then(result => {
    console.log('Custom dragon spritesheet generated:', result.spritesheet);
  });
```

### Creating Diverse Landscapes

Experiment with different landscape types, time of day, and weather conditions:

```javascript
generateLandscapeSprite('a snowy mountain range', {
  timeOfDay: 'night',
  weather: 'snowy',
  perspective: 'side-scrolling',
  style: 'pixel-art',
  size: '1024x512'
})
  .then(result => {
    console.log('Night-time snowy landscape generated:', result.landscape);
  });
```

## Best Practices

1. **Descriptive Prompts**: Provide clear and detailed descriptions for best results.
2. **Experiment with Options**: Try different styles, sizes, and settings to achieve the desired look.
3. **Error Handling**: Always include error handling to manage potential API or processing issues.
4. **Asset Management**: When saving generated sprites, implement a proper asset management system in your project.

## Next Steps

To truly master SpriteAI, we recommend:

1. Exploring the full API documentation for detailed parameter descriptions.
2. Experimenting with different character types and animation states.
3. Creating a variety of landscapes for diverse game environments.
4. Integrating generated sprites into your game development workflow.

For in-depth information and advanced usage scenarios, please refer to our extensive API documentation.

Thank you for choosing SpriteAI. We're excited to see the amazing sprites you'll create with our package!
