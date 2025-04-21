# fetchAvailableSpriteStyles Documentation

## Brief Description
`fetchAvailableSpriteStyles` is a function that retrieves the available sprite style options that can be used with the sprite generation functions.

## Usage
To use `fetchAvailableSpriteStyles`, import it from the sprite module and call it to get a list of available style options.

```javascript
import { sprite } from './path/to/sprite/module';

const availableStyles = await sprite.fetchAvailableSpriteStyles();
```

## Parameters
This function does not require any parameters.

## Return Value
Returns an array of strings, each representing an available sprite style option that can be used with functions like `generateCharacterSpritesheet` and `generateLandscapeSprite`.

Possible style values include:
- 'pixel-art' (default)
- Other available styles based on the current implementation

## Examples

1. Fetch available styles and use them in a dropdown menu:
```javascript
const styles = await sprite.fetchAvailableSpriteStyles();

// Populate a dropdown with available styles
const dropdown = document.getElementById('styleSelector');
styles.forEach(style => {
  const option = document.createElement('option');
  option.value = style;
  option.textContent = style;
  dropdown.appendChild(option);
});
```

2. Fetch available styles and use one for sprite generation:
```javascript
const styles = await sprite.fetchAvailableSpriteStyles();
const selectedStyle = styles[0]; // Select first available style

const result = await sprite.generateCharacterSpritesheet("warrior", {
  style: selectedStyle
});
```

## Notes or Considerations
- The default style is 'pixel-art' if no style is specified in the generation functions
- Available styles may change with updates to the library
- Different styles may produce significantly different visual results for the same description
- Consider testing different styles to find the one that best matches your desired aesthetic for your project