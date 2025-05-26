# New Character Generation Functions in SpriteAI

## Introduction

In this developer blog post, we're excited to introduce the latest additions to our SpriteAI library. The recent pull request (PR #91) brings three new convenience functions for generating specific character types: ninjas, spacemen, and robots. These functions build upon our existing `generateCharacterSpritesheet` capability, offering streamlined options for common game character archetypes.

## New Character Generation Functions

### 1. generateNinja()

The `generateNinja` function creates a sprite sheet for a ninja character. Here's a breakdown of its features:

```javascript
export const generateNinja = async function(options = {}) {
  const defaultOptions = {
    states: ['idle', 'walk', 'run', 'attack', 'sneak'],
    style: 'pixel-art',
    framesPerState: 6
  };
  const mergedOptions = { ...defaultOptions, ...options };
  
  return generateCharacterSpritesheet('ninja character with black outfit and mask', mergedOptions);
};
```

- Default animation states: idle, walk, run, attack, and sneak
- Pixel-art style by default
- 6 frames per animation state
- Customizable through the `options` parameter

### 2. generateSpaceman()

The `generateSpaceman` function creates a sprite sheet for an astronaut character:

```javascript
export const generateSpaceman = async function(options = {}) {
  const defaultOptions = {
    states: ['idle', 'walk', 'run', 'float'],
    style: 'pixel-art',
    framesPerState: 6
  };
  const mergedOptions = { ...defaultOptions, ...options };
  
  return generateCharacterSpritesheet('astronaut character with space suit and helmet', mergedOptions);
};
```

- Default animation states: idle, walk, run, and float
- Pixel-art style by default
- 6 frames per animation state
- Customizable through the `options` parameter

### 3. generateRobot()

The `generateRobot` function creates a sprite sheet for a robot character:

```javascript
export const generateRobot = async function(options = {}) {
  const defaultOptions = {
    states: ['idle', 'walk', 'run', 'attack', 'power-up'],
    style: 'pixel-art',
    framesPerState: 6
  };
  const mergedOptions = { ...defaultOptions, ...options };
  
  return generateCharacterSpritesheet('robot character with mechanical limbs and glowing eyes', mergedOptions);
};
```

- Default animation states: idle, walk, run, attack, and power-up
- Pixel-art style by default
- 6 frames per animation state
- Customizable through the `options` parameter

## Usage

These new functions provide a quick way to generate character sprite sheets for common game archetypes. Here's how you can use them in your projects:

```javascript
import { generateNinja, generateSpaceman, generateRobot } from 'spriteAI';

// Generate a ninja sprite sheet
const ninjaSprite = await generateNinja();

// Generate a spaceman sprite sheet with custom options
const spacemanSprite = await generateSpaceman({
  states: ['idle', 'walk', 'float', 'repair'],
  framesPerState: 8
});

// Generate a robot sprite sheet
const robotSprite = await generateRobot();
```

## Customization

Each function accepts an `options` object that allows you to override the default settings. You can customize:

- `states`: An array of animation states
- `style`: The art style (default is 'pixel-art')
- `framesPerState`: The number of frames for each animation state

For example:

```javascript
const customRobot = await generateRobot({
  states: ['idle', 'walk', 'fly', 'shoot'],
  style: 'vector',
  framesPerState: 10
});
```

## Conclusion

These new character generation functions make it even easier to create diverse and engaging game sprites using SpriteAI. By providing pre-configured options for popular character types, developers can quickly generate high-quality sprite sheets for their games.

We encourage you to try out these new functions and let us know how they enhance your game development workflow. As always, we welcome your feedback and suggestions for future improvements to the SpriteAI library.