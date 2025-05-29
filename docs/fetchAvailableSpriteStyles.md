---
title: fetchAvailableSpriteStyles
description: Fetch available sprite styles for character generation
---

# fetchAvailableSpriteStyles

## Introduction

The `fetchAvailableSpriteStyles` function is a part of the SpriteAI module, designed to retrieve a list of available sprite styles that can be used when generating character sprites. This function is useful for developers who want to provide style options to users or dynamically adjust sprite generation based on available styles.

## Usage

To use the `fetchAvailableSpriteStyles` function, import it from the SpriteAI module and call it as an asynchronous function.

```javascript
import { fetchAvailableSpriteStyles } from 'spriteAI';

async function getStyles() {
  const styles = await fetchAvailableSpriteStyles();
  console.log(styles);
}

getStyles();
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
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadStyles() {
      try {
        const availableStyles = await fetchAvailableSpriteStyles();
        setStyles(availableStyles);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching sprite styles:', error);
        setLoading(false);
      }
    }

    loadStyles();
  }, []);

  if (loading) {
    return <div>Loading available styles...</div>;
  }

  return (
    <div>
      <h2>Select a Sprite Style</h2>
      <select>
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

- The available styles may be updated over time, so it's recommended to fetch the styles dynamically rather than hardcoding them in your application.
- This function is asynchronous and returns a Promise, so remember to use `await` or `.then()` when calling it.
- If you're using this function in a server-side context, make sure your environment supports asynchronous operations.

## Related Functions

- `generateCharacterSpritesheet`: Uses the styles fetched by this function to generate character sprites.
- `fetchAvailableAnimationStates`: Fetches available animation states for sprite generation.

For more information on generating sprites and using different styles, see the [generateCharacterSpritesheet documentation](/docs/generateCharacterSpritesheet).