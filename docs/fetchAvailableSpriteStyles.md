---
slug: /fetchAvailableSpriteStyles
sidebar_position: 4
---

# fetchAvailableSpriteStyles

## Brief Description

`fetchAvailableSpriteStyles` is an asynchronous function that retrieves a list of available sprite styles supported by the spriteAI module.

## Usage

To use `fetchAvailableSpriteStyles`, import it from the spriteAI module and call it as an asynchronous function.

```javascript
import { fetchAvailableSpriteStyles } from './path/to/spriteAI';

const styles = await fetchAvailableSpriteStyles();
```

## Parameters

This function does not take any parameters.

## Return Value

Returns a Promise that resolves to an array of strings, where each string represents an available sprite style.

## Examples

### Basic Usage

```javascript
import { fetchAvailableSpriteStyles } from './spriteAI';

async function displayAvailableStyles() {
  const styles = await fetchAvailableSpriteStyles();
  console.log('Available sprite styles:', styles);
}

displayAvailableStyles();
```

### Using with UI

```javascript
import React, { useState, useEffect } from 'react';
import { fetchAvailableSpriteStyles } from './spriteAI';

function StyleSelector() {
  const [styles, setStyles] = useState([]);

  useEffect(() => {
    async function loadStyles() {
      const availableStyles = await fetchAvailableSpriteStyles();
      setStyles(availableStyles);
    }
    loadStyles();
  }, []);

  return (
    <select>
      {styles.map((style, index) => (
        <option key={index} value={style}>
          {style}
        </option>
      ))}
    </select>
  );
}
```

## Notes or Considerations

- The function is asynchronous and returns a Promise, so it should be used with `await` or `.then()`.
- The available styles are predefined in the spriteAI module and may be updated in future versions.
- Current available styles include: 'pixel-art', 'vector', '3d', 'hand-drawn', and 'anime'.
- This function can be useful when providing style options to users in a UI or when validating user input for sprite generation functions.
- The order of styles in the returned array is not guaranteed and may change between calls or in different versions of the module.