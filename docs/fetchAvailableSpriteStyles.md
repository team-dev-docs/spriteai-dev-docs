---
slug: /fetchAvailableSpriteStyles
sidebar_position: 2
---

# Fetch Available Sprite Styles, yo

## Brief Description, yo

The `fetchAvailableSpriteStyles` function is a new addition to our sprite generation module. It retrieves a list of available sprite styles that can be used when generating character or environment sprites.

## Usage, yo

To use `fetchAvailableSpriteStyles`, import it from the sprite module and call it as an asynchronous function.

```javascript
import { fetchAvailableSpriteStyles } from './path/to/sprite/module';

const styles = await fetchAvailableSpriteStyles();
```

## Parameters, yo

This function doesn't take any parameters, yo.

## Return Value, yo

Returns a Promise that resolves to an array of strings, each representing an available sprite style.

## Examples, yo

Here's a simple example of how to use `fetchAvailableSpriteStyles`:

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

## Notes or Considerations, yo

- The available styles may change over time as new styles are added or existing ones are modified.
- The function is asynchronous, so remember to use `await` or `.then()` when calling it.
- If you're using this function in a React component, consider using the `useEffect` hook to fetch the styles when the component mounts.

## Related Functions, yo

- `generateCharacterSpritesheet`: Uses the styles returned by `fetchAvailableSpriteStyles` to generate character sprites.
- `generateEnvironmentSprites`: Can also utilise the available styles for creating environment assets.

Remember to check the documentation for these related functions to see how the sprite styles can be applied in different contexts, yo.