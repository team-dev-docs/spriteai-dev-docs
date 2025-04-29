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

This function does not take any parameters, yo.

## Return Value, yo

Returns a Promise that resolves to an array of strings, each representing an available sprite style.

## Examples, yo

```javascript
// Fetch and log available sprite styles
const availableStyles = await fetchAvailableSpriteStyles();
console.log('Available sprite styles:', availableStyles);

// Use the fetched styles in a dropdown menu
const selectElement = document.getElementById('styleSelector');
availableStyles.forEach(style => {
  const option = document.createElement('option');
  option.value = style;
  option.textContent = style;
  selectElement.appendChild(option);
});
```

## Notes or Considerations, yo

- The function is asynchronous and returns a Promise, so remember to use `await` or `.then()` when calling it.
- The available styles may be updated in future versions, so it's recommended to fetch the styles dynamically rather than hardcoding them.
- If you need to use a specific style, ensure it's available in the returned list before using it in sprite generation functions.
- The current implementation returns a fixed set of styles: ['pixel-art', 'vector', '3d', 'hand-drawn', 'anime'].

## Related Functions, yo

- `generateCharacterSpritesheet`: Uses the sprite styles fetched by this function.
- `generateEnvironmentSprites`: Also utilises the available sprite styles.
- `generateItemSprites`: Can make use of the fetched sprite styles for consistent item appearances.

Remember to check the documentation for these related functions to see how the sprite styles can be applied in different contexts, yo.