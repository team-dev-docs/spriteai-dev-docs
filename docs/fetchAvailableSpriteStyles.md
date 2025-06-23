---
title: fetchAvailableSpriteStyles
description: Retrieve available sprite styles for character generation
---

# fetchAvailableSpriteStyles

## Introduction

The `fetchAvailableSpriteStyles` function is part of the Sprite AI module. It allows developers to retrieve a list of available sprite styles that can be used when generating character spritesheets. This function is useful for providing users with style options or for validating style inputs before generating sprites.

## Usage

To use the `fetchAvailableSpriteStyles` function, import it from the Sprite AI module and call it as an asynchronous function.

```javascript
import { fetchAvailableSpriteStyles } from 'spriteAI';

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

The function returns a Promise that resolves to an array of strings. Each string represents an available sprite style.

Example return value:

```javascript
['pixel-art', 'vector', '3d', 'hand-drawn', 'anime']
```

## Example

Here's a complete example of how to use the `fetchAvailableSpriteStyles` function in a React component:

```javascript
import React, { useState, useEffect } from 'react';
import { fetchAvailableSpriteStyles } from 'spriteAI';

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

- The available styles may change in future updates, so it's recommended to always fetch the latest styles rather than hardcoding them.
- This function is asynchronous and returns a Promise, so remember to use `await` or `.then()` when calling it.
- If no styles are available or an error occurs, the function will return an empty array.

## See Also

- [generateCharacterSpritesheet](./generateCharacterSpritesheet.md) - For generating character spritesheets using the available styles.
- [fetchAvailableAnimationStates](./fetchAvailableAnimationStates.md) - To get available animation states for character sprites.