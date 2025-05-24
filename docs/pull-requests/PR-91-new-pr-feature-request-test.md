# PR-91: New Convenience Functions for Character Generation

## Overview

This pull request (PR #91) introduces three new convenience functions to the SpriteAI library for generating specific character types: ninjas, spacemen, and robots. These functions build upon the existing `generateCharacterSpritesheet` function, providing pre-configured options for common character archetypes.

## New Functions

### generateNinja

```javascript
export const generateNinja = async function(options = {}) {
  // ... implementation details
};
```

Generates a ninja character sprite sheet with the following default options:
- States: idle, walk, run, attack, sneak
- Style: pixel-art
- Frames per state: 6

### generateSpaceman

```javascript
export const generateSpaceman = async function(options = {}) {
  // ... implementation details
};
```

Generates a spaceman (astronaut) character sprite sheet with the following default options:
- States: idle, walk, run, float
- Style: pixel-art
- Frames per state: 6

### generateRobot

```javascript
export const generateRobot = async function(options = {}) {
  // ... implementation details
};
```

Generates a robot character sprite sheet with the following default options:
- States: idle, walk, run, attack, power-up
- Style: pixel-art
- Frames per state: 6

## Usage

Each of these new functions accepts an optional `options` object that can override the default settings. They return a promise that resolves to the generated sprite sheet data.

Example usage:

```javascript
import { generateNinja, generateSpaceman, generateRobot } from 'spriteAI';

// Generate a ninja sprite sheet with default options
const ninjaSprite = await generateNinja();

// Generate a spaceman sprite sheet with custom options
const spacemanSprite = await generateSpaceman({
  framesPerState: 8,
  style: 'vector'
});

// Generate a robot sprite sheet with custom options
const robotSprite = await generateRobot({
  states: ['idle', 'walk', 'run', 'attack', 'power-up', 'shutdown'],
  framesPerState: 4
});
```

## Benefits

These new functions provide several benefits:
1. Simplified API for common character types
2. Consistent default settings for each character archetype
3. Ability to easily override defaults for customization
4. Reduced boilerplate code when generating specific character types

## Implementation Details

Each function uses the existing `generateCharacterSpritesheet` function, passing a specific character description and merged options. This approach ensures consistency with the existing API while providing a more tailored experience for these common character types.

For more information on the underlying `generateCharacterSpritesheet` function and its options, please refer to the main SpriteAI documentation.