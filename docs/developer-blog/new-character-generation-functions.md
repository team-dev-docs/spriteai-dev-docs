# New Character Generation Functions

In this developer blog post, we'll explore the latest additions to our SpriteAI library: three new convenience functions for generating specific character types. These functions build upon our existing `generateCharacterSpritesheet` function to provide quick and easy ways to create ninjas, spacemen, and robots for your game projects.

## Overview of New Functions

The latest pull request introduces three new functions:

1. `generateNinja()`
2. `generateSpaceman()`
3. `generateRobot()`

Each of these functions is designed to streamline the process of creating character spritesheets for common game character types.

## Function Details

### generateNinja()

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

This function generates a ninja character spritesheet with the following default characteristics:
- 5 animation states: idle, walk, run, attack, and sneak
- Pixel-art style
- 6 frames per animation state

### generateSpaceman()

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

This function creates a spaceman (astronaut) character spritesheet with:
- 4 animation states: idle, walk, run, and float
- Pixel-art style
- 6 frames per animation state

### generateRobot()

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

This function generates a robot character spritesheet featuring:
- 5 animation states: idle, walk, run, attack, and power-up
- Pixel-art style
- 6 frames per animation state

## Usage and Customization

Each of these new functions is built on top of the existing `generateCharacterSpritesheet` function, allowing for easy customization. You can override any of the default options by passing an options object to the function.

For example, to create a ninja character with a different style and number of frames:

```javascript
const customNinja = await generateNinja({
  style: 'vector',
  framesPerState: 8
});
```

This will generate a vector-style ninja character with 8 frames per animation state, while keeping the default animation states.

## Benefits and Use Cases

These new functions offer several advantages:

1. **Rapid Prototyping**: Quickly generate common character types for game prototypes or placeholders.
2. **Consistency**: Ensure a consistent style and set of animations for specific character archetypes across your projects.
3. **Customization**: While providing sensible defaults, the functions still allow for easy customization to fit specific needs.

## Conclusion

The addition of these character-specific generation functions to our SpriteAI library significantly streamlines the process of creating game character spritesheets. By providing tailored defaults for ninjas, spacemen, and robots, developers can quickly generate high-quality character assets while still maintaining the flexibility to customize as needed.

We encourage you to try out these new functions in your projects and look forward to seeing the creative ways you'll use them in your games!