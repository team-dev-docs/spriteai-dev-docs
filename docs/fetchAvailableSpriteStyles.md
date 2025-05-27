---
slug: /fetchAvailableSpriteStyles
sidebar_position: 2
---

# fetchAvailableSpriteStyles Documentation

## Brief Description
`fetchAvailableSpriteStyles` is a function that retrieves a list of available sprite styles that can be used when generating character sprites.

## Usage
To use `fetchAvailableSpriteStyles`, import it from the sprite module and call it as an asynchronous function.

```javascript
import { fetchAvailableSpriteStyles } from './path/to/sprite/module';

const availableStyles = await fetchAvailableSpriteStyles();
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
    console.error('Error fetching available styles:', error);
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

## Notes or Considerations
- The list of available styles is predefined in the function and may be updated in future versions to include more options.
- This function is useful for providing users with a list of valid style options when generating sprites using the `generateCharacterSpritesheet` function.
- The function is implemented as an asynchronous operation to allow for potential future enhancements, such as fetching styles from an external API or database.
- When using this function in combination with `generateCharacterSpritesheet`, ensure that you pass one of the returned styles as the `style` option for consistent results.

## Related Functions
- `generateCharacterSpritesheet`: Uses the style information to generate character sprites.
- `fetchAvailableAnimationStates`: Retrieves available animation states for character sprites.