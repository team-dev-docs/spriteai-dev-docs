---
title: fetchAvailableSpriteStyles
description: Fetch available sprite styles for character generation
---

# fetchAvailableSpriteStyles

The `fetchAvailableSpriteStyles` function allows you to retrieve a list of available sprite styles that can be used when generating character spritesheets.

## Usage

```javascript
import { fetchAvailableSpriteStyles } from 'spriteAI';

const styles = await fetchAvailableSpriteStyles();
console.log(styles);
```

## Function Signature

```javascript
async function fetchAvailableSpriteStyles(): Promise<string[]>
```

## Return Value

The function returns a Promise that resolves to an array of strings, where each string represents an available sprite style.

## Available Styles

The following sprite styles are currently available:

- 'pixel-art'
- 'vector'
- '3d'
- 'hand-drawn'
- 'anime'

## Example

```javascript
import { fetchAvailableSpriteStyles, generateCharacterSpritesheet } from 'spriteAI';

async function generateCharacterWithStyle() {
  const availableStyles = await fetchAvailableSpriteStyles();
  console.log('Available styles:', availableStyles);

  const selectedStyle = availableStyles[0]; // Choose the first available style
  const character = await generateCharacterSpritesheet('A brave knight', { style: selectedStyle });

  console.log('Generated character with style:', selectedStyle);
  console.log(character);
}

generateCharacterWithStyle();
```

## Notes

- The available styles may be updated in future versions of the SDK, so it's recommended to use this function to fetch the current list of styles rather than hardcoding them.
- When using the `generateCharacterSpritesheet` function, you can pass one of these styles in the `options` object to specify the desired art style for your character.

## See Also

- [generateCharacterSpritesheet](./generateCharacterSpritesheet.md)
- [fetchAvailableAnimationStates](./fetchAvailableAnimationStates.md)