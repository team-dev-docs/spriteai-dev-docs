---
slug: /fetchAvailableSpriteStyles
sidebar_position: 5
---

# fetchAvailableSpriteStyles

## Brief Description

`fetchAvailableSpriteStyles` is a function that retrieves a list of available sprite styles that can be used when generating character sprites.

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

## Examples

```javascript
import { fetchAvailableSpriteStyles } from './path/to/sprite/module';

async function displayAvailableStyles() {
  const styles = await fetchAvailableSpriteStyles();
  console.log('Available sprite styles:', styles);
}

displayAvailableStyles();
// Output: Available sprite styles: ['pixel-art', 'vector', '3d', 'hand-drawn', 'anime']
```

## Notes or Considerations

- The available styles are predefined in the function and may be updated in future versions.
- This function is useful for providing options to users when they are generating character sprites.
- The returned styles can be used as input for the `style` option in the `generateCharacterSpritesheet` function.
- If you need to add or remove styles, you'll need to modify the `fetchAvailableSpriteStyles` function in the source code.

## Related Functions

- `generateCharacterSpritesheet`: Uses the styles returned by this function to generate character spritesheets.
- `fetchAvailableAnimationStates`: Retrieves available animation states for character sprites.