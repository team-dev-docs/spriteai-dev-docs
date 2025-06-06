---
title: fetchAvailableSpriteStyles
description: Learn how to use the fetchAvailableSpriteStyles function to get a list of available sprite styles for character generation.
---

# fetchAvailableSpriteStyles

## Introduction

The `fetchAvailableSpriteStyles` function is a part of the SpriteAI module, which allows developers to retrieve a list of available sprite styles for character generation. This function is useful when you want to provide users with options for different visual styles when creating character sprites.

## Usage

To use the `fetchAvailableSpriteStyles` function, you need to import it from the SpriteAI module and call it as an asynchronous function.

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

The function doesn't take any parameters and returns a Promise that resolves to an array of strings, where each string represents an available sprite style.

## Return Value

The function returns a Promise that resolves to an array of strings. Each string in the array represents a different sprite style option. For example:

```javascript
['pixel-art', 'vector', '3d', 'hand-drawn', 'anime']
```

## Example

Here's a more detailed example of how you might use the `fetchAvailableSpriteStyles` function in a React component:

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
      <h2>Select a Sprite Style</h2>
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

## Notes and Considerations

- The `fetchAvailableSpriteStyles` function is asynchronous, so remember to use `await` or `.then()` when calling it.
- The available styles may change in future updates, so it's a good practice to always fetch the latest styles rather than hardcoding them in your application.
- If you're using this function in a server-side environment, make sure you have the necessary dependencies installed and configured.

## Related Functions

- `generateCharacterSpritesheet`: Uses the selected style to generate a character spritesheet.
- `fetchAvailableAnimationStates`: Retrieves available animation states for character sprites.

By using `fetchAvailableSpriteStyles` in combination with other SpriteAI functions, you can create a flexible and dynamic character sprite generation system in your application.