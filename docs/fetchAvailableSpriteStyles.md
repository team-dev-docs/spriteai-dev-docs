---
slug: /fetchAvailableSpriteStyles
sidebar_position: 2
---

# Fetch Available Sprite Styles, yo

## Brief Description, yo

The `fetchAvailableSpriteStyles` function is a new addition to our sprite generation module. It allows developers to retrieve a list of available sprite styles that can be used when generating character or environment sprites.

## Usage, yo

To use `fetchAvailableSpriteStyles`, import it from the sprite module and call it as an asynchronous function.

```javascript
import { fetchAvailableSpriteStyles } from './path/to/sprite/module';

const styles = await fetchAvailableSpriteStyles();
console.log(styles);
```

## Parameters, yo

This function does not take any parameters, yo.

## Return Value, yo

Returns a Promise that resolves to an array of strings, where each string represents an available sprite style.

## Examples, yo

### Fetching and displaying available styles

```javascript
import { fetchAvailableSpriteStyles } from './path/to/sprite/module';

async function displayAvailableStyles() {
  try {
    const styles = await fetchAvailableSpriteStyles();
    console.log('Available sprite styles:');
    styles.forEach((style, index) => {
      console.log(`${index + 1}. ${style}`);
    });
  } catch (error) {
    console.error('Error fetching sprite styles:', error);
  }
}

displayAvailableStyles();
```

### Using available styles with generateCharacterSpritesheet

```javascript
import { fetchAvailableSpriteStyles, generateCharacterSpritesheet } from './path/to/sprite/module';

async function generateRandomStyledSprite(description) {
  const styles = await fetchAvailableSpriteStyles();
  const randomStyle = styles[Math.floor(Math.random() * styles.length)];
  
  const spritesheet = await generateCharacterSpritesheet(description, {
    style: randomStyle
  });
  
  console.log(`Generated ${description} sprite in ${randomStyle} style`);
  return spritesheet;
}

generateRandomStyledSprite('A jolly wizard');
```

## Notes or Considerations, yo

- The available styles may be updated in future versions, so it's recommended to fetch the styles dynamically rather than hardcoding them.
- Not all styles may be suitable for all types of sprites. Consider providing guidance on which styles work best for different sprite types (e.g., characters, environments, items).
- The function uses an asynchronous approach, which allows for potential future expansion, such as fetching styles from a remote server or database.
- Remember to handle potential errors when calling this function, as network issues or other factors could affect its execution.