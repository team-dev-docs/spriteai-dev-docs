---
slug: /fetchAvailableSpriteStyles
sidebar_position: 4
---

# fetchAvailableSpriteStyles

## Brief Description
`fetchAvailableSpriteStyles` is an asynchronous function that retrieves a list of available sprite styles supported by the Dev-Docs sprite generation system.

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

### Fetching Available Styles
```javascript
import { fetchAvailableSpriteStyles } from './spriteAI';

async function displayAvailableStyles() {
  try {
    const styles = await fetchAvailableSpriteStyles();
    console.log('Available sprite styles:', styles);
  } catch (error) {
    console.error('Error fetching sprite styles:', error);
  }
}

displayAvailableStyles();
```

## Notes or Considerations
- The available styles are hardcoded in the function and include 'pixel-art', 'vector', '3d', 'hand-drawn', and 'anime'.
- This function is useful for providing users with a list of valid style options when generating sprites.
- Future updates may expand the list of available styles or fetch them dynamically from a configuration or API.
- Consider caching the result if you need to call this function frequently, as the list of styles is not expected to change during runtime.