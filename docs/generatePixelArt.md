# generateItemSprites Documentation

## Brief Description
`generateItemSprites` is a function that creates game item sprite collections with advanced configuration and generation capabilities.

## Usage
To use `generateItemSprites`, import it from the sprite module and call it with desired item specifications.

```javascript
import { sprite } from './path/to/sprite/module';

const result = await sprite.generateItemSprites(options);
```

## Parameters
- `options` (object, optional):
  - `itemCount` (number): Number of items to generate in the sprite sheet.
  - `size` (string): Size of each sprite in the sheet (default: "64x64").
  - `style` (string): Visual style of the sprites (e.g., "pixel", "cartoon", "realistic").
  - `padding` (number): Spacing between items in the sprite sheet.
  - `itemType` (string): Type of items to generate (e.g., "weapons", "potions", "tools").
  - `background` (string): Background style for the sprite sheet.

## Return Value
Returns an object containing:
- `image`: Base64-encoded image data URL of the generated item sprite sheet.
- `metadata`: Detailed information about the generated sprites, including individual item details.

## Examples

1. Generate a weapon sprite sheet:
```javascript
const result = await sprite.generateItemSprites({
  itemCount: 6,
  itemType: "weapons",
  style: "pixel"
});
console.log(result.metadata);
```

2. Generate a potion sprite sheet with custom configuration:
```javascript
const result = await sprite.generateItemSprites({
  itemCount: 4,
  itemType: "potions",
  size: "32x32",
  padding: 8,
  background: "wooden"
});
console.log(result.image);
```

## Notes and Considerations
- The function uses AI models to generate diverse and unique item sprites.
- Generated sprite sheets follow a grid-based layout for consistent presentation.
- Item variations are procedurally generated based on the specified parameters.
- The function supports multiple game art styles and item types.
- Generation may vary slightly between calls due to AI-powered creation.

## Performance Considerations
- Image generation might take several seconds depending on complexity.
- Higher item counts and more detailed styles increase processing time.
- Ensure stable internet connection for optimal results.

## Best Practices
- Use consistent sprite sizes for uniform game design.
- Experiment with different styles and item types to find the best fit.
- Consider caching generated sprite sheets for performance optimization.

## Error Handling
```javascript
try {
  const result = await sprite.generateItemSprites(options);
} catch (error) {
  console.error('Item sprite generation failed:', error);
}
```
