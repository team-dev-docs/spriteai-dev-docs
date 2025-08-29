---
title: fetchAvailableSpriteStyles
description: A function to retrieve available sprite styles for character generation.
---

# fetchAvailableSpriteStyles

## Introduction

The `fetchAvailableSpriteStyles` function is a part of the SpriteAI module, designed to provide developers with a list of available sprite styles that can be used when generating character spritesheets. This function is particularly useful when you want to offer users a selection of style options for their sprite generation requests.

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

The function returns a Promise that resolves to an array of strings. Each string represents an available sprite style.

Example return value:

```javascript
['pixel-art', 'vector', '3d', 'hand-drawn', 'anime']
```

## Example

Here's a more comprehensive example of how you might use the `fetchAvailableSpriteStyles` function in a React component:

```javascript
import React, { useState, useEffect } from 'react';
import { fetchAvailableSpriteStyles, generateCharacterSpritesheet } from './spriteAI';

function SpriteGenerator() {
  const [styles, setStyles] = useState([]);
  const [selectedStyle, setSelectedStyle] = useState('');
  const [description, setDescription] = useState('');

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const spritesheet = await generateCharacterSpritesheet(description, { style: selectedStyle });
    // Handle the generated spritesheet...
  };

  return (
    <form onSubmit={handleSubmit}>
      <select value={selectedStyle} onChange={(e) => setSelectedStyle(e.target.value)}>
        {styles.map(style => (
          <option key={style} value={style}>{style}</option>
        ))}
      </select>
      <input 
        type="text" 
        value={description} 
        onChange={(e) => setDescription(e.target.value)} 
        placeholder="Describe your character"
      />
      <button type="submit">Generate Sprite</button>
    </form>
  );
}
```

## Notes

- The available styles are predetermined and may be updated in future versions of the SpriteAI module.
- This function is useful for providing a dynamic list of options to users, ensuring that only valid and supported styles are selected.
- The function is asynchronous to allow for potential future enhancements, such as fetching styles from a remote server or database.

## See Also

- [generateCharacterSpritesheet](./generateCharacterSpritesheet.md) - For generating character spritesheets using the styles fetched by this function.
- [fetchAvailableAnimationStates](./fetchAvailableAnimationStates.md) - To get a list of available animation states for sprite generation.