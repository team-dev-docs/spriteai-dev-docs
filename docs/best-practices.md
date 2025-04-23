# Best Practices for SpriteAI

This guide outlines the best practices for using SpriteAI, a library for generating game sprites and assets using AI. Following these practices will help you create high-quality assets efficiently and effectively.

## API Key Management

Always keep your OpenAI API key secure:

- Store your API key as an environment variable:
  ```bash
  export OPENAI_API_KEY=your_api_key_here
  ```
- Never hardcode your API key in your source code
- Use a .env file for local development and secure environment variables for production

## Efficient Asset Generation

### Use Descriptive Prompts

When generating assets, use clear and specific descriptions:

```javascript
// Good
const knight = await generateCharacterSpritesheet('medieval knight with silver armor and a longsword');

// Avoid
const character = await generateCharacterSpritesheet('person');
```

### Optimize for Performance

Generate assets at the resolution you need to avoid unnecessary processing:

```javascript
const smallCharacter = await generateCharacterSpritesheet('elf archer', {
  size: '256x256' // Use smaller sizes for mobile or low-res games
});
```

### Batch Generation

When creating multiple assets, use batch operations where possible:

```javascript
const items = await generateItemSprites('fantasy weapons set', {
  itemCount: 10, // Generate multiple items in one call
  itemType: 'weapons'
});
```

## Consistent Style

Maintain a consistent style across your game assets:

```javascript
const commonOptions = {
  style: 'pixel-art',
  theme: 'fantasy'
};

const character = await generateCharacterSpritesheet('wizard', commonOptions);
const environment = await generateEnvironmentSprites('magic forest', commonOptions);
const items = await generateItemSprites('magical artifacts', commonOptions);
```

## Error Handling

Always implement proper error handling:

```javascript
try {
  const result = await generateCharacterSpritesheet('space marine');
  // Process the result
} catch (error) {
  console.error('Asset generation failed:', error.message);
  // Implement appropriate fallback or retry logic
}
```

## Caching and Asset Management

Implement caching to avoid unnecessary API calls:

```javascript
const cachedAssets = {};

async function getOrGenerateAsset(description, options) {
  const cacheKey = `${description}_${JSON.stringify(options)}`;
  if (cachedAssets[cacheKey]) {
    return cachedAssets[cacheKey];
  }
  const asset = await generateCharacterSpritesheet(description, options);
  cachedAssets[cacheKey] = asset;
  return asset;
}
```

## Customization

Leverage customization options for unique assets:

```javascript
const customCharacter = await generateCharacterSpritesheet('steampunk inventor', {
  states: ['idle', 'tinker', 'present', 'frustrated'],
  framesPerState: 6,
  style: 'hand-drawn',
  direction: 'right'
});
```

## Metadata Utilization

Make full use of the returned metadata:

```javascript
const character = await generateCharacterSpritesheet('ninja warrior');
const { dimensions, frameData } = character.metadata;

// Use dimensions for sprite positioning
console.log(`Sprite dimensions: ${dimensions.width}x${dimensions.height}`);

// Use frameData for animation setup
for (const state in frameData) {
  const { row, frames, startFrame, endFrame } = frameData[state];
  console.log(`${state} animation: row ${row}, frames ${startFrame}-${endFrame}`);
}
```

## Version Control

When saving generated assets, use version control:

```javascript
const timestamp = Date.now();
const assetName = `character_${timestamp}`;

await generateCharacterSpritesheet('futuristic cyborg', {
  save: true,
  fileName: assetName
});
```

## Testing

Regularly test your asset generation pipeline:

- Create unit tests for your asset generation functions
- Implement visual regression tests to ensure consistency across generations
- Test with various prompts and options to ensure robustness

## Performance Monitoring

Monitor API usage and generation times:

```javascript
const startTime = performance.now();
const asset = await generateEnvironmentSprites('underwater city');
const endTime = performance.now();

console.log(`Asset generation took ${endTime - startTime} milliseconds`);
```

By following these best practices, you'll be able to create high-quality game assets efficiently and maintain a robust development workflow with SpriteAI.