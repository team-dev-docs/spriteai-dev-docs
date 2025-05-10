---
slug: /fetchAvailableSpriteStyles
sidebar_position: 2
---

# Fetch Available Sprite Styles, yo

## Brief Description, yo

The `fetchAvailableSpriteStyles` function retrieves a list of available sprite styles that can be used when generating character sprites or environment assets.

## Usage, yo

To use `fetchAvailableSpriteStyles`, import it from the sprite module and call it as an asynchronous function.

```javascript
import { fetchAvailableSpriteStyles } from './path/to/sprite/module';

const styles = await fetchAvailableSpriteStyles();
```

## Parameters, yo

This function does not take any parameters.

## Return Value, yo

Returns a Promise that resolves to an array of strings, each representing an available sprite style.

## Examples, yo

### Fetching and displaying available styles

```javascript
import { fetchAvailableSpriteStyles } from './path/to/sprite/module';

async function displayAvailableStyles() {
  const styles = await fetchAvailableSpriteStyles();
  console.log('Available sprite styles:', styles);
}

displayAvailableStyles();
```

### Using available styles in a dropdown menu

```javascript
import { fetchAvailableSpriteStyles } from './path/to/sprite/module';
import { generateCharacterSpritesheet } from './path/to/sprite/module';

async function createStyleDropdown() {
  const styles = await fetchAvailableSpriteStyles();
  const dropdown = document.createElement('select');
  
  styles.forEach(style => {
    const option = document.createElement('option');
    option.value = style;
    option.textContent = style;
    dropdown.appendChild(option);
  });

  dropdown.addEventListener('change', (event) => {
    generateCharacterSpritesheet('A wizard', { style: event.target.value });
  });

  document.body.appendChild(dropdown);
}

createStyleDropdown();
```

## Notes or Considerations, yo

- The available styles are predefined in the SDK and may be updated in future versions.
- The function is asynchronous to allow for potential future expansion, such as fetching styles from a remote server.
- When using the returned styles, ensure that they are supported by the sprite generation functions you're using.
- The current implementation returns a fixed array of styles, but this may change in future updates to provide more dynamic style options.