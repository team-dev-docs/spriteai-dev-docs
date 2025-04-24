esdfdsfdsffddfsImport the required functions from the SpriteAI library:

```javascript
import { 
  generateCharacterSpritesheet, 
  generateEnvironmentSprites, 
  generateItemSprites,
  fetchAvailableAnimationStates,
  fetchAvailableSpriteStyles
} from 'spriteai';
```

### Generating a Character Spritesheet

To create a character spritesheet with various animation states:

```javascript
const characterDescription = 'A brave knight in shining armor';
const options = {
  states: ['idle', 'walk', 'run', 'attack'],
  framesPerState: 6,
  size: '1024x1024',
  style: 'pixel-art',
  direction: 'right',
  save: true
};

const result = await generateCharacterSpritesheet(characterDescription, options);

console.log(result.spritesheet); // Base64-encoded spritesheet
console.log(result.metadata); // Metadata about the spritesheet
```

### Creating Environment Sprites

To generate environment sprites for your game:

```javascript
const environmentDescription = 'A mystical forest with ancient ruins';
const options = {
  elements: 4,
  size: '1024x1024',
  style: 'pixel-art',
  theme: 'fantasy',
  save: true
};

const result = await generateEnvironmentSprites(environmentDescription, options);

console.log(result.tileset); // Base64-encoded tileset
console.log(result.metadata); // Metadata about the environment sprites
```

### Generating Item Sprites

To create a collection of item sprites:

```javascript
const itemDescription = 'Medieval weapons and armor';
const options = {
  itemCount: 4,
  size: '1024x1024',
  style: 'pixel-art',
  itemType: 'equipment',
  save: true
};

const result = await generateItemSprites(itemDescription, options);

console.log(result.itemSheet); // Base64-encoded item sheet
console.log(result.metadata); // Metadata about the item sprites
```

### Fetching Available Options

You can retrieve the available animation states and sprite styles:

```javascript
const animationStates = await fetchAvailableAnimationStates();
console.log('Available animation states:', animationStates);

const spriteStyles = await fetchAvailableSpriteStyles();
console.log('Available sprite styles:', spriteStyles);
```

## Notes

* All generation functions return both the generated image (as a Base64-encoded string) and metadata about the generated assets.

* The `save` option in the configuration objects allows you to automatically save the generated images to your project's `assets` folder.

* The AI models used for generation may produce varying results for the same input.

* Make sure you have the necessary API keys and permissions set up for using the OpenAI service, which is used internally by SpriteAI.

This quickstart guide covers the basic usage of the main functions in the SpriteAI library. For more detailed information on each function and its options, please refer to the specific documentation pages for each feature.
