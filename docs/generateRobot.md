# generateRobot

## Overview

The `generateRobot` function is a convenience method for generating a robot character spritesheet using the SpriteAI library. It provides a pre-configured setup for creating robot-themed character sprites with specific animation states.

## Function Signature

```javascript
export const generateRobot = async function(options = {})
```

## Parameters

- `options` (optional): An object containing custom options to override the default settings.

## Default Options

The function uses the following default options:

```javascript
const defaultOptions = {
  states: ['idle', 'walk', 'run', 'attack', 'power-up'],
  style: 'pixel-art',
  framesPerState: 6
};
```

These options can be overridden by passing custom values in the `options` parameter.

## Functionality

1. The function merges the default options with any custom options provided.
2. It then calls the `generateCharacterSpritesheet` function with a specific description for a robot character and the merged options.

## Usage

Here's an example of how to use the `generateRobot` function:

```javascript
import { generateRobot } from './path/to/spriteAI';

// Generate a robot spritesheet with default options
const robotSprite = await generateRobot();

// Generate a robot spritesheet with custom options
const customRobotSprite = await generateRobot({
  states: ['idle', 'walk', 'run', 'attack', 'power-up', 'shutdown'],
  framesPerState: 8,
  style: 'cartoon'
});
```

## Return Value

The function returns a Promise that resolves to an object containing:

- `original`: URL of the original generated image
- `spritesheet`: Base64-encoded string of the processed spritesheet
- `metadata`: Object containing information about the generated spritesheet

## Notes

- The robot character is described as having "mechanical limbs and glowing eyes" in the spritesheet generation process.
- The function uses pixel art style by default, which is suitable for retro-style games or pixel art projects.
- The default animation states include 'idle', 'walk', 'run', 'attack', and 'power-up', which are common actions for a robot character in games.

Remember that this function is a wrapper around `generateCharacterSpritesheet`, so any limitations or requirements of that underlying function will also apply here.