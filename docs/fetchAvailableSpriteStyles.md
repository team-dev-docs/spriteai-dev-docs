---
title: fetchAvailableSpriteStyles
description: A function to retrieve available sprite styles for character generation.
---

# fetchAvailableSpriteStyles

## Introduction

The `fetchAvailableSpriteStyles` function is part of the SpriteAI module and is designed to retrieve a list of available sprite styles that can be used when generating character sprites. This function is useful for developers who want to provide users with a selection of style options for their generated sprites.

## Usage

To use the `fetchAvailableSpriteStyles` function, import it from the SpriteAI module and call it as an asynchronous function.

```javascript
import { fetchAvailableSpriteStyles } from 'spriteAI';

async function getSpriteStyles() {
  const styles = await fetchAvailableSpriteStyles();
  console.log(styles);
}
```

## Return Value

The function returns a Promise that resolves to an array of strings, where each string represents an available sprite style.

Example return value:

```javascript
['pixel-art', 'vector', '3d', 'hand-drawn', 'anime']
```

## Example

Here's a complete example of how to use the `fetchAvailableSpriteStyles` function in a React component:

```jsx
import React, { useState, useEffect } from 'react';
import { fetchAvailableSpriteStyles } from 'spriteAI';

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
      <h2>Available Sprite Styles</h2>
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

- The `fetchAvailableSpriteStyles` function is asynchronous, so it should be used with `await` or `.then()` to handle the Promise it returns.
- The available styles may change over time as new styles are added or removed from the SpriteAI system. It's recommended to fetch the styles dynamically rather than hardcoding them in your application.
- If you're using this function in a server-side environment, make sure you have the necessary dependencies installed and configured correctly.

## Related Functions

- `generateCharacterSpritesheet`: Use this function to generate a character spritesheet using one of the available styles.
- `fetchAvailableAnimationStates`: Retrieves available animation states for character sprites.

By using `fetchAvailableSpriteStyles` in conjunction with other SpriteAI functions, you can create a comprehensive and flexible sprite generation system for your application or game.