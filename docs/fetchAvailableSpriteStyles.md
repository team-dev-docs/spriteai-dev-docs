---
title: fetchAvailableSpriteStyles
description: A function to retrieve available sprite styles for character generation.
---

# fetchAvailableSpriteStyles

The `fetchAvailableSpriteStyles` function is part of the SpriteAI module and is used to retrieve a list of available sprite styles that can be used when generating character sprites.

## Usage

To use the `fetchAvailableSpriteStyles` function, import it from the SpriteAI module and call it as an asynchronous function:

```javascript
import { fetchAvailableSpriteStyles } from './spriteAI';

async function getStyles() {
  const styles = await fetchAvailableSpriteStyles();
  console.log(styles);
}

getStyles();
```

## Return Value

The function returns a Promise that resolves to an array of strings, where each string represents an available sprite style. The current available styles are:

- 'pixel-art'
- 'vector'
- '3d'
- 'hand-drawn'
- 'anime'

## Example

Here's an example of how to use the `fetchAvailableSpriteStyles` function in conjunction with the `generateCharacterSpritesheet` function:

```javascript
import { fetchAvailableSpriteStyles, generateCharacterSpritesheet } from './spriteAI';

async function generateCharacterWithRandomStyle() {
  const styles = await fetchAvailableSpriteStyles();
  const randomStyle = styles[Math.floor(Math.random() * styles.length)];
  
  const character = await generateCharacterSpritesheet('A wizard', {
    style: randomStyle,
    size: '1024x1024',
    save: true
  });
  
  console.log(`Generated character in ${randomStyle} style:`, character);
}

generateCharacterWithRandomStyle();
```

In this example, we first fetch the available styles, then randomly select one to use when generating a character spritesheet.

## Notes

- The list of available styles is predefined in the function and may be updated in future versions of the SpriteAI module.
- When using the returned styles with the `generateCharacterSpritesheet` function, ensure you pass the style string exactly as returned by `fetchAvailableSpriteStyles`.
- The function is asynchronous and returns a Promise, so remember to use `await` or `.then()` when calling it.