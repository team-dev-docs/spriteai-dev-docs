---
title: fetchAvailableSpriteStyles
description: A function to retrieve available sprite styles for character generation.
---

# fetchAvailableSpriteStyles

## Introduction

The `fetchAvailableSpriteStyles` function is part of the sprite generation module. It allows developers to retrieve a list of available sprite styles that can be used when generating character sprites.

## Usage

To use the `fetchAvailableSpriteStyles` function, import it from the sprite module and call it as an asynchronous function.

```javascript
import { fetchAvailableSpriteStyles } from './path/to/sprite/module';

const styles = await fetchAvailableSpriteStyles();
console.log(styles);
```

## Return Value

The function returns a Promise that resolves to an array of strings, where each string represents an available sprite style.

Example return value:
```javascript
['pixel-art', 'vector', '3d', 'hand-drawn', 'anime']
```

## Example

Here's a complete example of how to use the `fetchAvailableSpriteStyles` function:

```javascript
import { fetchAvailableSpriteStyles } from './path/to/sprite/module';

async function displayAvailableStyles() {
  try {
    const styles = await fetchAvailableSpriteStyles();
    console.log('Available sprite styles:');
    styles.forEach((style, index) => {
      console.log(`${index + 1}. ${style}`);
    });
  } catch (error) {
    console.error('Error fetching available styles:', error);
  }
}

displayAvailableStyles();
```

## Notes and Considerations

- The `fetchAvailableSpriteStyles` function is asynchronous, so remember to use `await` when calling it or handle the returned Promise appropriately.
- The list of available styles may be updated in future versions of the module. Always check the returned array for the most up-to-date list of styles.
- When using the returned styles with other functions like `generateCharacterSpritesheet`, ensure you pass the style string exactly as it appears in the array.

## Related Functions

- `generateCharacterSpritesheet`: Use the styles returned by `fetchAvailableSpriteStyles` to specify the desired style when generating character sprites.

## Next Steps

After fetching the available sprite styles, you can use this information to:

1. Present style options to users in your application's UI.
2. Validate user input when selecting a sprite style.
3. Programmatically generate sprites in different styles for variety in your game or application.

For more information on generating sprites with these styles, refer to the `generateCharacterSpritesheet` documentation.