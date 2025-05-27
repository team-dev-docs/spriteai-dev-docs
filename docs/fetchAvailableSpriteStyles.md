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
Returns a Promise that resolves to an array of strings, each representing an available sprite style.

## Examples

### Basic Usage
```javascript
const availableStyles = await fetchAvailableSpriteStyles();
console.log(availableStyles);
// Output: ['pixel-art', 'vector', '3d', 'hand-drawn', 'anime']
```

### Using with Sprite Generation
```javascript
import { generateCharacterSpritesheet, fetchAvailableSpriteStyles } from './path/to/sprite/module';

const availableStyles = await fetchAvailableSpriteStyles();
const selectedStyle = availableStyles[0]; // Choose the first available style

const sprite = await generateCharacterSpritesheet('A heroic warrior', {
  style: selectedStyle
});
```

## Notes or Considerations
- The available styles are predefined in the module and may be updated in future versions.
- This function is useful for providing users with a list of valid style options when generating sprites.
- The returned styles are compatible with the `style` option in the `generateCharacterSpritesheet` function.
- If no styles are available or an error occurs, the function will return an empty array.
- Consider caching the result of this function if you need to use it frequently, as the available styles are unlikely to change during runtime.