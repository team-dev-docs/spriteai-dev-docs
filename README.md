# SpriteAI 🎨 

## Overview

SpriteAI is a powerful library for generating dynamic character, environment, and item spritesheets using AI-powered image generation. This README provides an overview of the library's key features and how to get started.

## New Features 🆕

### Character Generation Functions

SpriteAI now includes convenient functions for generating specific character types:

#### 1. Generate Ninja Sprites
```javascript
const ninjaSprites = await generateNinja({
  states: ['idle', 'walk', 'run', 'attack', 'sneak'],
  style: 'pixel-art',
  framesPerState: 6
});
```

#### 2. Generate Spaceman Sprites
```javascript
const spacemanSprites = await generateSpaceman({
  states: ['idle', 'walk', 'run', 'float'],
  style: 'pixel-art',
  framesPerState: 6
});
```

#### 3. Generate Robot Sprites
```javascript
const robotSprites = await generateRobot({
  states: ['idle', 'walk', 'run', 'attack', 'power-up'],
  style: 'pixel-art',
  framesPerState: 6
});
```

## Quick Start 🚀

### Installation
```bash
npm install spriteai
```

### Basic Usage
Import the specific character generation functions you need:

```javascript
import { 
  generateNinja, 
  generateSpaceman, 
  generateRobot 
} from 'spriteai';
```

## Customization Options

Each character generation function supports the following options:
- `states`: Custom animation states
- `style`: Sprite art style (default: 'pixel-art')
- `framesPerState`: Number of frames for each animation state
- `save`: Option to save generated spritesheet locally

## Additional Methods

- `fetchAvailableAnimationStates()`: Get a list of available animation states
- `fetchAvailableSpriteStyles()`: Get a list of available sprite styles

## Contributing 🤝

We welcome contributions! Please check our GitHub repository for guidelines on how to contribute to SpriteAI.

## License

[Insert License Information]
