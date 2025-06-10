---
title: fetchAvailableSpriteStyles
description: Retrieve available sprite styles for character generation
---

# fetchAvailableSpriteStyles

## Introduction

The `fetchAvailableSpriteStyles` function is a part of the SpriteAI module, designed to retrieve a list of available sprite styles that can be used when generating character spritesheets. This function is useful for developers who want to provide users with style options for their generated sprites.

## Usage

To use the `fetchAvailableSpriteStyles` function, import it from the SpriteAI module and call it as an asynchronous function.

```javascript
import { fetchAvailableSpriteStyles } from './path/to/spriteAI';

async function getStyles() {
  const styles = await fetchAvailableSpriteStyles();
  console.log(styles);
}

getStyles();
```

## Function Signature

```javascript
async function fetchAvailableSpriteStyles(): Promise<string[]>
```

## Return Value

The function returns a Promise that resolves to an array of strings. Each string in the array represents an available sprite style.

Example return value:

```javascript
['pixel-art', 'vector', '3d', 'hand-drawn', 'anime']
```

## Example

Here's a more comprehensive example of how to use the `fetchAvailableSpriteStyles` function in a React component:

```javascript
import React, { useState, useEffect } from 'react';
import { fetchAvailableSpriteStyles } from './path/to/spriteAI';

function SpriteStyleSelector() {
  const [styles, setStyles] = useState([]);
  const [selectedStyle, setSelectedStyle] = useState('');

  useEffect(() => {
    async function loadStyles() {
      const availableStyles = await fetchAvailableSpriteStyles();
      setStyles(availableStyles);
      if (availableStyles.length > 0) {
        setSelectedStyle(availableStyles[0]);
      }
    }
    loadStyles();
  }, []);

  return (
    <div>
      <h2>Select Sprite Style</h2>
      <select 
        value={selectedStyle} 
        onChange={(e) => setSelectedStyle(e.target.value)}
      >
        {styles.map((style) => (
          <option key={style} value={style}>
            {style}
          </option>
        ))}
      </select>
    </div>
  );
}

export default SpriteStyleSelector;
```

## Notes

- The `fetchAvailableSpriteStyles` function is asynchronous, so remember to use `await` or `.then()` when calling it.
- The available styles may change in future updates, so it's recommended to always use this function to get the most up-to-date list of styles.
- If you're using this function in a server-side environment, make sure you have the necessary dependencies installed and configured.

## See Also

- [generateCharacterSpritesheet](./generateCharacterSpritesheet.md) - Function for generating character spritesheets
- [fetchAvailableAnimationStates](./fetchAvailableAnimationStates.md) - Function for retrieving available animation states