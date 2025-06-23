---
title: fetchAvailableSpriteStyles
description: Learn how to use the fetchAvailableSpriteStyles function to get available sprite styles in your game development project.
---

# fetchAvailableSpriteStyles

## Introduction

The `fetchAvailableSpriteStyles` function is a new addition to our sprite generation toolkit. It allows developers to retrieve a list of available sprite styles that can be used when generating character spritesheets. This function is particularly useful for creating dynamic user interfaces or for validating user input when working with sprite generation.

## Usage

To use the `fetchAvailableSpriteStyles` function, you need to import it from the sprite module and call it asynchronously.

```javascript
import { fetchAvailableSpriteStyles } from './path/to/sprite/module';

async function getStyles() {
  const styles = await fetchAvailableSpriteStyles();
  console.log(styles);
}
```

## Parameters

The `fetchAvailableSpriteStyles` function doesn't take any parameters.

## Return Value

The function returns a Promise that resolves to an array of strings. Each string represents an available sprite style.

Example return value:

```javascript
['pixel-art', 'vector', '3d', 'hand-drawn', 'anime']
```

## Example

Here's a complete example of how you might use the `fetchAvailableSpriteStyles` function in a React component:

```javascript
import React, { useState, useEffect } from 'react';
import { fetchAvailableSpriteStyles } from './path/to/sprite/module';

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
```

## Notes and Considerations

- The `fetchAvailableSpriteStyles` function is asynchronous, so remember to use `await` or `.then()` when calling it.
- The available styles may change in future updates, so it's a good practice to always fetch the latest styles rather than hardcoding them in your application.
- If you're using this function in a server-side environment, make sure your runtime supports top-level await or use an asynchronous wrapper function.

## Related Functions

- `generateCharacterSpritesheet`: Use this function to generate a character spritesheet using one of the available styles.
- `fetchAvailableAnimationStates`: This function fetches available animation states for character sprites.

By using `fetchAvailableSpriteStyles` in conjunction with other sprite-related functions, you can create a robust and flexible sprite generation system for your game or application.