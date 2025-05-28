---
title: fetchAvailableSpriteStyles
description: Fetch available sprite styles for character generation
---

# fetchAvailableSpriteStyles

## Introduction

The `fetchAvailableSpriteStyles` function is part of the SpriteAI module and is used to retrieve a list of available sprite styles that can be used when generating character sprites. This function allows developers to access the supported art styles for sprite generation, enabling them to choose the most appropriate style for their game or application.

## Usage

To use the `fetchAvailableSpriteStyles` function, import it from the SpriteAI module and call it as an asynchronous function.

```javascript
import { fetchAvailableSpriteStyles } from './spriteAI';

async function getStyles() {
  const styles = await fetchAvailableSpriteStyles();
  console.log(styles);
}

getStyles();
```

## Parameters

This function does not take any parameters.

## Return Value

The `fetchAvailableSpriteStyles` function returns a Promise that resolves to an array of strings. Each string in the array represents an available sprite style.

Example return value:

```javascript
['pixel-art', 'vector', '3d', 'hand-drawn', 'anime']
```

## Example

Here's an example of how to use the `fetchAvailableSpriteStyles` function in a React component:

```jsx
import React, { useState, useEffect } from 'react';
import { fetchAvailableSpriteStyles } from './spriteAI';

function SpriteStyleSelector() {
  const [styles, setStyles] = useState([]);

  useEffect(() => {
    async function loadStyles() {
      const availableStyles = await fetchAvailableSpriteStyles();
      setStyles(availableStyles);
    }
    loadStyles();
  }, []);

  return (
    <div>
      <h2>Select a Sprite Style</h2>
      <select>
        {styles.map((style, index) => (
          <option key={index} value={style}>
            {style}
          </option>
        ))}
      </select>
    </div>
  );
}

export default SpriteStyleSelector;
```

## Notes and Considerations

- The list of available styles is predefined in the `fetchAvailableSpriteStyles` function and may be updated in future versions of the SpriteAI module.
- This function is useful for providing users with options when generating sprites, allowing them to choose a style that best fits their project's aesthetic.
- The function is asynchronous to allow for potential future expansion, such as fetching styles from an external API or database.
- When using this function, consider caching the results to avoid unnecessary repeated calls, as the list of styles is unlikely to change frequently during a single session.

## Related Functions

- `generateCharacterSpritesheet`: Uses the sprite styles to generate character spritesheets.
- `generateEnvironmentSprites`: Creates environment sprites that can complement the character sprites.
- `generateItemSprites`: Produces item sprites that can be used alongside character and environment sprites.

By using `fetchAvailableSpriteStyles` in conjunction with these other functions, you can create a cohesive and stylistically consistent set of sprites for your game or application.