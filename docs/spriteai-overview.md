# SpriteAI Overview

## Introduction

SpriteAI is a powerful and flexible Node.js library designed to streamline the process of generating game assets, particularly character sprites, environment elements, and item sprites. By leveraging the capabilities of AI-powered image generation through OpenAI's DALL-E 3 model, SpriteAI offers game developers and artists a unique tool to quickly create high-quality, customizable sprite assets for their projects.

## Key Features

1. **Character Spritesheet Generation**: Create animated character spritesheets with customizable states and frames.
2. **Environment Sprite Creation**: Generate tileset-style environment sprites for game backgrounds and levels.
3. **Item Sprite Generation**: Produce collections of item sprites suitable for game inventories or pickups.
4. **Customizable Outputs**: Control various aspects of the generated sprites, including size, style, and animation states.
5. **Background Removal**: Ability to remove specific background colors from generated images.
6. **Metadata Generation**: Automatically generate useful metadata for each sprite or spritesheet.

## Main Components

### Character Spritesheet Generation

The `generateCharacterSpritesheet` function is the core of SpriteAI's character creation capabilities. It allows you to:

- Define multiple animation states (e.g., idle, walk, run, attack)
- Specify the number of frames per animation state
- Customize the output size and art style
- Control character direction and padding between frames

### Environment Sprite Generation

Use the `generateEnvironmentSprites` function to create sets of environmental elements. Features include:

- Specifying the number of distinct elements
- Choosing the theme (e.g., fantasy, sci-fi)
- Customizing the output size and art style

### Item Sprite Generation

The `generateItemSprites` function helps create collections of item sprites. It offers:

- Control over the number of items generated
- Specification of item types (e.g., equipment, consumables)
- Customization of background color and layout

## Getting Started

To begin using SpriteAI in your project:

1. Install the package:
   ```
   npm install spriteai
   ```

2. Import the desired functions:
   ```javascript
   import { generateCharacterSpritesheet, generateEnvironmentSprites, generateItemSprites } from 'spriteai';
   ```

3. Use the functions in your code:
   ```javascript
   const characterSprite = await generateCharacterSpritesheet('a cute dragon', {
     states: ['idle', 'walk', 'run'],
     framesPerState: 4,
     size: '512x512',
     style: 'pixel-art'
   });
   ```

## Advanced Usage

SpriteAI also provides utility functions to enhance your workflow:

- `fetchAvailableAnimationStates()`: Get a list of predefined animation states.
- `fetchAvailableSpriteStyles()`: Retrieve available art styles for sprite generation.
- `removeBackgroundColor()`: Remove specific background colors from generated images.

## Conclusion

SpriteAI offers a powerful suite of tools for game developers and artists to rapidly prototype and generate game assets. By combining AI-powered image generation with customizable parameters, SpriteAI streamlines the asset creation process, allowing developers to focus more on game design and less on the intricacies of sprite creation.

For more detailed information on each function and its parameters, please refer to the individual function documentation pages.