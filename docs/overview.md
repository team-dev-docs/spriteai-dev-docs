# SpriteAI Overview

## Introduction

SpriteAI is a powerful tool designed to generate and manipulate game assets, particularly focused on creating character spritesheets, environment sprites, and item sprites using AI-powered image generation. This overview will introduce you to the main features and components of SpriteAI.

## Key Features

1. **Character Spritesheet Generation**: Create animated character spritesheets with customizable states and frames.
2. **Environment Sprite Generation**: Generate tileset sprites for game environments.
3. **Item Sprite Generation**: Create sprites for in-game items and equipment.
4. **Background Removal**: Remove specific background colors from images.
5. **Support for Various Art Styles**: Generate sprites in pixel-art, vector, 3D, hand-drawn, and anime styles.
6. **Customizable Output**: Control the size, style, and other parameters of generated sprites.

## Main Components

### generateCharacterSpritesheet

This function generates a character spritesheet based on a given description and set of options. It supports multiple animation states and customizable frame counts.

### generateEnvironmentSprites

Use this function to create environmental tilesets for your game, with customizable themes and element counts.

### generateItemSprites

Generate a collection of item sprites suitable for game inventories or pickup icons.

### removeBackgroundColor

A utility function to remove specific background colors from images, useful for creating transparent sprites.

## Getting Started

To start using SpriteAI, you'll need to:

1. Install the necessary dependencies (OpenAI, axios, sharp, and Jimp).
2. Set up your OpenAI API credentials.
3. Import the required functions from the SpriteAI module.

For detailed usage instructions and examples, please refer to the individual function documentation pages.

## Additional Resources

- [Getting Started Guide](./getting-started.md)
- [Generate Sprite Documentation](./generateSprite.md)
- [Generate Pixel Art Documentation](./generatePixelArt.md)
- [Generate Isometric Documentation](./generateIsometric.md)
- [Generate Animated Emoji Documentation](./generateAnimatedEmoji.md)

SpriteAI offers a range of powerful features to enhance your game asset creation workflow. Explore the documentation to learn how to leverage these tools in your projects.