# New SpriteAI Convenience Functions

This document covers the new convenience functions added to the SpriteAI library for generating specific character types. These functions build upon the existing `generateCharacterSpritesheet` function, providing pre-configured options for common character archetypes.

## Overview

The following new functions have been added:

1. `generateNinja`
2. `generateSpaceman`
3. `generateRobot`

Each function is designed to quickly generate a character spritesheet with predefined settings suitable for the specific character type.

## Common Features

All new functions share these characteristics:

- They are asynchronous functions that return a Promise.
- They accept an optional `options` object to customize the output.
- They use the `generateCharacterSpritesheet` function internally.
- Default options include 'pixel-art' style and 6 frames per state.

## generateNinja

Generates a spritesheet for a ninja character.

### Usage

```javascript
import { generateNinja } from './path/to/spriteAI';

const ninjaSprite = await generateNinja(options);
```

### Default Options

```javascript
{
  states: ['idle', 'walk', 'run', 'attack', 'sneak'],
  style: 'pixel-art',
  framesPerState: 6
}
```

### Description

The `generateNinja` function creates a spritesheet for a ninja character with a black outfit and mask. It includes states for idle, walking, running, attacking, and sneaking.

## generateSpaceman

Generates a spritesheet for an astronaut character.

### Usage

```javascript
import { generateSpaceman } from './path/to/spriteAI';

const spacemanSprite = await generateSpaceman(options);
```

### Default Options

```javascript
{
  states: ['idle', 'walk', 'run', 'float'],
  style: 'pixel-art',
  framesPerState: 6
}
```

### Description

The `generateSpaceman` function creates a spritesheet for an astronaut character with a space suit and helmet. It includes states for idle, walking, running, and floating.

## generateRobot

Generates a spritesheet for a robot character.

### Usage

```javascript
import { generateRobot } from './path/to/spriteAI';

const robotSprite = await generateRobot(options);
```

### Default Options

```javascript
{
  states: ['idle', 'walk', 'run', 'attack', 'power-up'],
  style: 'pixel-art',
  framesPerState: 6
}
```

### Description

The `generateRobot` function creates a spritesheet for a robot character with mechanical limbs and glowing eyes. It includes states for idle, walking, running, attacking, and powering up.

## Customizing Options

For all functions, you can override the default options by passing an options object:

```javascript
const customNinja = await generateNinja({
  states: ['idle', 'attack', 'disappear'],
  style: 'cartoon',
  framesPerState: 8
});
```

This allows you to tailor the output to your specific needs while still benefiting from the pre-configured character descriptions.

## Note

These convenience functions are built on top of the `generateCharacterSpritesheet` function. They provide a quicker way to generate common character types with predefined settings. For more control or custom character types, you may still use the `generateCharacterSpritesheet` function directly.