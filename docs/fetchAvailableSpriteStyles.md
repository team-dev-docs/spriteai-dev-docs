---
title: fetchAvailableSpriteStyles
description: A function that returns an array of available sprite styles for use in sprite generation.
---

# fetchAvailableSpriteStyles

The `fetchAvailableSpriteStyles` function is part of the SpriteAI module and provides a list of available sprite styles that can be used when generating character or environment sprites.

## Usage

To use the `fetchAvailableSpriteStyles` function, import it from the SpriteAI module and call it as an asynchronous function:

```javascript
import { fetchAvailableSpriteStyles } from './path/to/spriteAI';

async function getStyles() {
  const styles = await fetchAvailableSpriteStyles();
  console.log(styles);
}

getStyles();
```

## Return Value

The function returns a Promise that resolves to an array of strings, each representing an available sprite style. The current available styles are:

- 'pixel-art'
- 'vector'
- '3d'
- 'hand-drawn'
- 'anime'

Example return value:

```javascript
['pixel-art', 'vector', '3d', 'hand-drawn', 'anime']
```

## Use Cases

1. **Style Selection**: Use this function to populate a dropdown menu or list of options for users to choose a sprite style when generating sprites.

2. **Validation**: Check if a user-provided style is valid before passing it to sprite generation functions.

3. **Dynamic UI**: Update your application's UI based on the available styles, ensuring that only supported options are displayed.

## Example

Here's an example of how you might use `fetchAvailableSpriteStyles` in conjunction with the `generateCharacterSpritesheet` function:

```javascript
import { fetchAvailableSpriteStyles, generateCharacterSpritesheet } from './path/to/spriteAI';

async function generateSpriteWithStyle(description) {
  const availableStyles = await fetchAvailableSpriteStyles();
  
  // Randomly select a style from the available options
  const randomStyle = availableStyles[Math.floor(Math.random() * availableStyles.length)];
  
  const options = {
    style: randomStyle,
    // ... other options
  };
  
  const result = await generateCharacterSpritesheet(description, options);
  return result;
}

// Usage
generateSpriteWithStyle("A cute dragon")
  .then(result => console.log(`Generated sprite with style: ${result.metadata.style}`))
  .catch(error => console.error("Error generating sprite:", error));
```

## Notes

- The list of available styles may be updated in future versions of the SpriteAI module. Always use this function to get the most up-to-date list of styles.
- If you need to support a specific style, ensure that it's included in the returned array before using it in your sprite generation options.
- The function is asynchronous to allow for potential future implementations where the styles might be fetched from a remote source or configuration file.