---
slug: /fetchAvailableSpriteStyles
sidebar_position: 2
---

# fetchAvailableSpriteStyles

## Brief Description

`fetchAvailableSpriteStyles` is an asynchronous function that retrieves a list of available sprite styles for use in sprite generation.

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
import { fetchAvailableSpriteStyles } from './path/to/sprite/module';

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

- 'pixel-art'
- 'vector'
- '3d'
- 'hand-drawn'
- 'anime'

## Notes and Considerations

- The list of available styles is predefined and may be updated in future versions of the SDK.
- This function is useful for providing users with options when generating sprites, allowing them to choose a specific visual style for their characters or objects.
- The returned styles can be used as input for the `style` option in other sprite generation functions, such as `generateCharacterSpritesheet`.
- As this is an asynchronous function, remember to use `await` or `.then()` when calling it to properly handle the returned Promise.
- If you need to extend or modify the list of available styles, you would need to update the `fetchAvailableSpriteStyles` function in the SDK source code.