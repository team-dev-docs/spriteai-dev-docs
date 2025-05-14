# 🌶️ Spicy generateSprite Documentation 🌶️

* number): Number of sprite variations to spawn.

  * `size` (string): Dimensions of the generated image (default: "1024x1024").

  * `save` (boolean): Whether to immortalize the generated image on disk.

  * `states` (array): Animation states to breathe life into (default: \['idle', 'walk', 'run', 'attack']).

  * `framesPerState` (number): Number of frames per animation state (default: 6).

  * `style` (string): The artistic flair of the sprite (default: 'pixel-art').

  * `padding` (number): Spacing between frames (default: 1).

  * `direction` (string): The direction your character should face (default: 'right').

## 💎 Return Value

Unleashes an object containing:

* `original`: URL of the pristine generated image.

* `spritesheet`: Base64-encoded image data URL of the processed sprite sheet.

* `metadata`: A treasure trove of information about the sprite sheet, including:

  * `states`: Array of animation states.

  * `framesPerState`: Number of frames per state.

  * `totalFrames`: Total frames in the sprite sheet.

  * `dimensions`: Object with width and height of the sprite sheet.

  * `frameData`: Object with juicy details about each animation state's position in the sprite sheet.

## 🎨 Examples

1. Generate a single, sizzling sprite sheet:

```javascript
const result = await sprite.generateSprite("A pixelated robot with laser eyes");
console.log(result.metadata);
console.log(result.spritesheet);
```

2. Generate a sprite sheet with custom, spicy options:

```javascript
const result = await sprite.generateSprite("A cartoon cat breathing fire", {
  states: ['idle', 'walk', 'jump', 'breathe-fire'],
  framesPerState: 8,
  style: 'vector',
  direction: 'left'
});
console.log(result.metadata);
```

## 🌟 Additional Magical Functions

### 🕺 fetchAvailableAnimationStates

Unveils a list of available animation states.

```javascript
const states = await sprite.fetchAvailableAnimationStates();
console.log(states); // ['idle', 'walk', 'run', 'attack', 'jump', 'fall', 'hurt', 'die', 'dance']
```

### 🎭 fetchAvailableSpriteStyles

Reveals a list of available sprite styles.

```javascript
const styles = await sprite.fetchAvailableSpriteStyles();
console.log(styles); // ['pixel-art', 'vector', '3d', 'hand-drawn', 'anime', 'neon']
```

### 🌳 generateEnvironmentSprites

Conjures a tileset of environment sprites.

```javascript
const result = await sprite.generateEnvironmentSprites("Enchanted Forest", {
  elements: 6,
  size: '1024x1024',
  style: 'pixel-art',
  theme: 'fantasy'
});
console.log(result.tileset);
console.log(result.metadata);
```

### 🗡️ generateItemSprites

Materializes a collection of item sprites.

```javascript
const result = await sprite.generateItemSprites("Legendary Artifacts of Power", {
  itemCount: 8,
  size: '1024x1024',
  style: 'pixel-art',
  itemType: 'equipment'
});
console.log(result.itemSheet);
console.log(result.metadata);
```

## 🌶️ Spicy Notes and Considerations 🌶️

* This function harnesses the power of AI models (DALL-E 3 and GPT) to generate and analyze images, potentially resulting in wildly varied outputs for the same input!

* Generated sprites are optimized for the specified animation states and follow the layout defined by the `framesPerState` option, ensuring a consistent spiciness level.

* When saving images, they are stored in an 'assets' folder with filenames based on the description. Be prepared for some saucy file names!

* The function may take some time to complete due to API calls and image processing. Use this time to prepare for the incoming awesomeness!

* The new convenience functions allow for more specific generation of character types, environments, and items, providing greater flexibility in sprite creation. Let your imagination run wild!

* Remember, with great power comes great responsibility. Use these spicy sprite generation tools wisely, and may your games be ever flavorful! 🎮🔥
