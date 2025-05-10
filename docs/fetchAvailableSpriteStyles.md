---
slug: /fetchAvailableSpriteStyles
sidebar_position: 2
---

# fetchAvailableSpriteStyles

## Brief Description

`fetchAvailableSpriteStyles` is a function that retrieves a list of available sprite styles that can be used when generating character or environment sprites.

## Usage

To use `fetchAvailableSpriteStyles`, import it from the sprite module and call it as an asynchronous function.

```javascript
import { fetchAvailableSpriteStyles } from './path/to/sprite/module';

const styles = await fetchAvailableSpriteStyles();
```

## Parameters

This function does not take any parameters.

## Return Value

Returns a Promise that resolves to an array of strings, where each string represents an available sprite style.

## Example

```javascript
import { fetchAvailableSpriteStyles } from './spriteAI';

async function displayAvailableStyles() {
  try {
    const styles = await fetchAvailableSpriteStyles();
    console.log('Available sprite styles:', styles);
  } catch (error) {
    console.error('Error fetching sprite styles:', error);
  }
}

displayAvailableStyles();
```

## Available Styles

The function currently returns the following sprite styles:

1. pixel-art
2. vector
3. 3d
4. hand-drawn
5. anime

## Notes and Considerations

- The list of available styles is predefined in the function and may be updated in future versions to include more options.
- This function is useful when you want to provide users with a list of style options for sprite generation.
- The styles returned by this function can be used as input for the `style` option in other sprite generation functions like `generateCharacterSpritesheet` or `generateEnvironmentSprites`.

## Related Functions

- `generateCharacterSpritesheet`: Generates a character spritesheet based on a given description and style.
- `generateEnvironmentSprites`: Creates environment sprites based on a description and style.
- `fetchAvailableAnimationStates`: Retrieves a list of available animation states for character sprites.

## Example: Using fetchAvailableSpriteStyles with generateCharacterSpritesheet

Here's an example of how you might use `fetchAvailableSpriteStyles` in conjunction with `generateCharacterSpritesheet`:

```javascript
import { fetchAvailableSpriteStyles, generateCharacterSpritesheet } from './spriteAI';

async function generateRandomStyleSprite(description) {
  const styles = await fetchAvailableSpriteStyles();
  const randomStyle = styles[Math.floor(Math.random() * styles.length)];

  console.log(`Generating sprite with random style: ${randomStyle}`);

  const spritesheet = await generateCharacterSpritesheet(description, {
    style: randomStyle,
    save: true
  });

  return spritesheet;
}

generateRandomStyleSprite('A heroic knight with shining armor')
  .then(result => console.log('Generated spritesheet:', result))
  .catch(error => console.error('Error generating spritesheet:', error));
```

This example demonstrates how to fetch available styles, select a random style, and use it to generate a character spritesheet with a specific description.