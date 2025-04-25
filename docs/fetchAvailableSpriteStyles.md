---
slug: /fetchAvailableSpriteStyles
sidebar_position: 3
---

# fetchAvailableSpriteStyles

## Brief Description
`fetchAvailableSpriteStyles` is an asynchronous function that retrieves a list of available sprite styles supported by the sprite generation system.

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

### Fetching and Displaying Available Styles
```javascript
import { fetchAvailableSpriteStyles } from './path/to/sprite/module';

async function displayAvailableStyles() {
  const styles = await fetchAvailableSpriteStyles();
  console.log("Available sprite styles:", styles);
}

displayAvailableStyles();
```

### Using Available Styles in a Dropdown
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
    generateCharacterSpritesheet("A character", { style: event.target.value });
  });

  document.body.appendChild(dropdown);
}

createStyleDropdown();
```

## Notes or Considerations
- The function is asynchronous and returns a Promise, so remember to use `await` or `.then()` when calling it.
- The available styles may be updated in future versions, so it's recommended to use this function to dynamically fetch the latest available styles rather than hardcoding them.
- The current implementation returns a fixed array of styles: ['pixel-art', 'vector', '3d', 'hand-drawn', 'anime'].
- This function can be useful for providing users with a selection of style options when generating sprites.