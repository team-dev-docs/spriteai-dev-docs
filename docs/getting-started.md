# Getting Started with SpriteAI

Welcome to SpriteAI! This guide will walk you through the process of integrating the SpriteAI npm package into your projects and using its powerful sprite generation capabilities.

## Installation

To begin using SpriteAI, you'll need to install it in your project directory. Run the following command:

```bash
npm install spriteai
```

## Basic Usage

Once SpriteAI is installed, you can start leveraging its features in your project. Here's a quick example demonstrating the main functionality:

```javascript
import { generateCharacterSpritesheet } from 'spriteai';

// Generate a character spritesheet
generateCharacterSpritesheet('a cute robot')
  .then(result => {
    console.log('Spritesheet successfully generated:', result.spritesheet);
    console.log('Metadata:', result.metadata);
  })
  .catch(error => {
    console.error('Spritesheet generation encountered an error:', error);
  });
```

## Key Features

SpriteAI offers powerful features to enhance your sprite creation:

1. **Character Spritesheet Generation**: Utilize `generateCharacterSpritesheet(description, options)` to programmatically create character spritesheets with multiple animation states.
2. **Customizable Options**: Adjust various parameters such as animation states, number of frames, size, and art style.
3. **Metadata Generation**: Receive detailed metadata about the generated spritesheet, including frame dimensions and animation state information.

## Advanced Usage

### Customizing Spritesheet Generation

You can customize the spritesheet generation process by providing options:

```javascript
const options = {
  states: ['idle', 'walk', 'run', 'jump'],
  framesPerState: 8,
  size: '2048x2048',
  style: 'pixel-art',
  padding: 2,
  direction: 'right',
  save: true
};

generateCharacterSpritesheet('a fierce dragon', options)
  .then(result => {
    console.log('Custom spritesheet generated:', result.spritesheet);
    console.log('Metadata:', result.metadata);
  })
  .catch(error => {
    console.error('Error:', error);
  });
```

### Saving Spritesheets

When the `save` option is set to `true`, the generated spritesheet will be saved to the `assets` folder in your current working directory.

## Why Use This Function?

The `generateCharacterSpritesheet` function offers several advantages:

1. **Rapid Prototyping**: Quickly generate character spritesheets for game development or animation projects.
2. **Consistency**: Ensure consistent sprite sizes and animation states across multiple characters.
3. **Customization**: Easily adjust parameters to fit your specific project needs.
4. **Integrated AI**: Leverage advanced AI models to create diverse and unique character designs.

## Prerequisites

Before using SpriteAI, ensure you have:

1. Node.js installed on your system
2. An OpenAI API key (the package uses DALL-E 3 for image generation)
3. Basic knowledge of JavaScript and async/await syntax

## API Reference

### generateCharacterSpritesheet(description, options)

Generates a character spritesheet based on the provided description and options.

#### Parameters

- `description` (string): A description of the character to generate.
- `options` (object, optional): Configuration options for the spritesheet generation.
  - `states` (string[]): Animation states to generate (default: ['idle', 'walk', 'run', 'attack'])
  - `framesPerState` (number): Number of frames per animation state (default: 6)
  - `size` (string): Output image size (default: '1024x1024')
  - `style` (string): Art style to use (default: 'pixel-art')
  - `padding` (number): Padding between sprites (default: 1)
  - `direction` (string): Base direction the character faces (default: 'right')
  - `save` (boolean): Whether to save the generated spritesheet to disk (default: false)

#### Return Value

Returns a Promise that resolves to an object containing:

- `original` (string): URL of the original generated image
- `spritesheet` (string): Base64-encoded PNG data URI of the processed spritesheet
- `metadata` (object): Metadata about the generated spritesheet

## Next Steps

To make the most of SpriteAI, we recommend:

1. Experimenting with different character descriptions and options
2. Integrating generated spritesheets into your game or animation projects
3. Exploring the metadata to automate sprite handling in your applications
4. Joining our community forums for tips, inspiration, and support

For more detailed information and advanced usage scenarios, please refer to our comprehensive API documentation.

Thank you for choosing SpriteAI. We're excited to see the amazing sprites you'll create with our package!
