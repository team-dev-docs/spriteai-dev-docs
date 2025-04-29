---
slug: /fetchAvailableSpriteStyles
sidebar_position: 2
---

# fetchAvailableSpriteStyles Documentation, yo

## Brief Description, yo

The `fetchAvailableSpriteStyles` function retrieves a list of available sprite styles that can be used when generating character sprites using the AI-powered sprite generation system, yo.

## Usage, yo

To use `fetchAvailableSpriteStyles`, import it from the sprite module and call it as an asynchronous function, yo.

```javascript
import { fetchAvailableSpriteStyles } from './path/to/sprite/module';

const styles = await fetchAvailableSpriteStyles();
```

## Parameters, yo

This function doesn't accept any parameters, yo.

## Return Value, yo

Returns a Promise that resolves to an array of strings, each representing an available sprite style, yo.

## Examples, yo

### Fetching and displaying available sprite styles, yo

```javascript
import { fetchAvailableSpriteStyles } from './path/to/sprite/module';

async function displayAvailableStyles() {
  try {
    const styles = await fetchAvailableSpriteStyles();
    console.log('Available sprite styles:', styles);
    // Output: Available sprite styles: ['pixel-art', 'vector', '3d', 'hand-drawn', 'anime']
  } catch (error) {
    console.error('Error fetching sprite styles:', error);
  }
}

displayAvailableStyles();
```

### Using available styles in a dropdown menu, yo

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
      setSelectedStyle(availableStyles[0]);
    }
    loadStyles();
  }, []);

  return (
    <div>
      <label htmlFor="styleSelector">Choose a sprite style, yo:</label>
      <select
        id="styleSelector"
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

## Notes or Considerations, yo

- The function uses an asynchronous approach, so remember to use `await` or `.then()` when calling it, yo.
- The available styles are predefined in the sprite generation system and may be updated in future versions, yo.
- If no styles are available or an error occurs, the function may return an empty array or throw an error, so it's good practice to handle these cases in your code, yo.
- The returned styles are typically used as options when calling the `generateCharacterSpritesheet` function, allowing users to specify their preferred art style for the generated sprites, yo.