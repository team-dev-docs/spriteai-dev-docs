---
slug: /fetchAvailableSpriteStyles
sidebar_position: 3
---

# fetchAvailableSpriteStyles

## Brief Description

`fetchAvailableSpriteStyles` is a function that retrieves a list of available sprite styles supported by the sprite generation system.

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

### Fetching and displaying available styles

```javascript
import { fetchAvailableSpriteStyles } from './path/to/sprite/module';

async function displayAvailableStyles() {
  const styles = await fetchAvailableSpriteStyles();
  console.log('Available sprite styles:', styles);
  
  // Display styles in a UI component
  const styleList = document.getElementById('style-list');
  styles.forEach(style => {
    const listItem = document.createElement('li');
    listItem.textContent = style;
    styleList.appendChild(listItem);
  });
}

displayAvailableStyles();
```

### Using available styles with sprite generation

```javascript
import { fetchAvailableSpriteStyles, generateCharacterSpritesheet } from './path/to/sprite/module';

async function generateRandomStyledSprite(description) {
  const styles = await fetchAvailableSpriteStyles();
  const randomStyle = styles[Math.floor(Math.random() * styles.length)];
  
  const spritesheet = await generateCharacterSpritesheet(description, {
    style: randomStyle
  });
  
  console.log(`Generated sprite in ${randomStyle} style:`, spritesheet);
  return spritesheet;
}

generateRandomStyledSprite('A heroic warrior');
```

## Notes or Considerations

- The available styles are predefined in the sprite generation system and may be updated in future versions.
- This function is useful for providing users with a list of style options when generating sprites.
- The returned styles are typically used as input for the `style` option in the `generateCharacterSpritesheet` function.
- As this is an asynchronous function, remember to use `await` or `.then()` when calling it.
- The list of available styles may include: 'pixel-art', 'vector', '3d', 'hand-drawn', and 'anime', but this can vary based on the current implementation.