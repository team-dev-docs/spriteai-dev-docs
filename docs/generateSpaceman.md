# Generate Spaceman Sprite 🚀

## Overview

The `generateSpaceman` function is a stellar convenience method provided by the SpriteAI library to quickly generate a spritesheet for an out-of-this-world astronaut character. This cosmic function simplifies the process of creating animated sprites for space-themed games or applications that are truly out of this world! 🌠

## Function Signature

```javascript
export const generateSpaceman = async function(options = {}) {
  // Function implementation that's light-years ahead
}
```

## Parameters

The function accepts an optional `options` object with the following gravity-defying properties:

- `states` (array of strings): Animation states for the character, ready for any space mission. Default: `['idle', 'walk', 'run', 'float']`
- `style` (string): The art style of the sprite, from retro-futuristic to cutting-edge. Default: `'pixel-art'`
- `framesPerState` (number): Number of frames for each animation state, ensuring smooth movements in zero gravity. Default: `6`

Any additional options will be launched to the underlying `generateCharacterSpritesheet` function.

## Default Options

If not specified, the function uses the following default options that are cleared for launch:

```javascript
const defaultOptions = {
  states: ['idle', 'walk', 'run', 'float'],
  style: 'pixel-art',
  framesPerState: 6
};
```

## Usage

To generate a spaceman sprite that's ready to explore the cosmos, you can call the function like this:

```javascript
import { generateSpaceman } from 'spriteAI';

const spaceman = await generateSpaceman();
```

You can also customize the options for a truly unique space adventure:

```javascript
const customSpaceman = await generateSpaceman({
  states: ['idle', 'walk', 'float', 'repair', 'moonwalk'],
  framesPerState: 8,
  style: 'vector'
});
```

## Return Value

The function returns a promise that resolves to an object containing interstellar data:

- `original`: URL of the original generated image, straight from the space station
- `spritesheet`: Base64-encoded PNG data of the processed spritesheet, ready for deployment
- `metadata`: Object containing information about the generated spritesheet, like a space mission log

## Internal Implementation

The `generateSpaceman` function uses the `generateCharacterSpritesheet` function internally, passing it a description of an astronaut character along with the merged options, like a well-coordinated space mission:

```javascript
return generateCharacterSpritesheet('astronaut character with space suit and helmet, ready for cosmic adventures', mergedOptions);
```

## Notes

- The spaceman sprite is designed with a default set of animation states suitable for space-themed games, including a unique 'float' state that's truly out of this world! 🌍
- The function uses pixel art style by default, which is common in retro-style or indie games, perfect for that nostalgic space invaders feel.
- You can easily extend the functionality by passing additional options supported by the `generateCharacterSpritesheet` function, allowing for endless cosmic possibilities.
- Remember, in space, no one can hear you code – but they can see your awesome sprites!

For more detailed information on the underlying sprite generation process that powers this cosmic creation, blast off to the `generateCharacterSpritesheet` documentation. 🚀
