---
slug: /fetchAvailableSpriteStyles
sidebar_position: 2
---

# fetchAvailableSpriteStyles Documentation, yo

## Brief Description, yo

`fetchAvailableSpriteStyles` is a function that retrieves a list of available sprite styles for use in sprite generation.

## Usage, yo

To use `fetchAvailableSpriteStyles`, import it from the sprite module and call it as an asynchronous function.

```javascript
import { fetchAvailableSpriteStyles } from './path/to/sprite/module';

const styles = await fetchAvailableSpriteStyles();
```

## Parameters, yo

This function doesn't accept any parameters, mate.

## Return Value, yo

Returns a Promise that resolves to an array of strings, each representing an available sprite style.

## Examples, yo

### Fetching available styles, yo

```javascript
import { fetchAvailableSpriteStyles } from './path/to/sprite/module';

async function displayAvailableStyles() {
  const styles = await fetchAvailableSpriteStyles();
  console.log('Available sprite styles:', styles);
}

displayAvailableStyles();
// Output: Available sprite styles: ['pixel-art', 'vector', '3d', 'hand-drawn', 'anime']
```

### Using available styles in sprite generation, yo

```javascript
import { fetchAvailableSpriteStyles, generateCharacterSpritesheet } from './path/to/sprite/module';

async function generateRandomStyleSprite() {
  const styles = await fetchAvailableSpriteStyles();
  const randomStyle = styles[Math.floor(Math.random() * styles.length)];
  
  const spritesheet = await generateCharacterSpritesheet('A heroic knight', {
    style: randomStyle
  });
  
  console.log(`Generated sprite in ${randomStyle} style:`, spritesheet);
}

generateRandomStyleSprite();
```

## Notes or Considerations, yo

- The available styles are predefined in the module and may be updated in future versions.
- This function is useful for providing users with a list of valid style options for sprite generation.
- The function is asynchronous to allow for potential future expansion, such as fetching styles from an external API.
- Remember to handle potential errors when calling this function, as with any asynchronous operation.
- The returned styles are case-sensitive and should be used exactly as provided when passing them to other functions like `generateCharacterSpritesheet`.

Cheers, mate! That's all you need to know about `fetchAvailableSpriteStyles`. Use it wisely in your sprite-generating adventures!