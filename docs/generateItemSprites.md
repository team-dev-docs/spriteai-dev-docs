---
slug: /generateItemSprites
sidebar_position: 4
---

# generateItemSprites Documentation

## Brief Description
`generateItemSprites` is a function that generates a collection of game item sprites based on a description, using AI-powered image generation. It creates multiple items arranged in a grid layout, perfect for game inventories, pickup icons, or item collections.

## Usage
To use `generateItemSprites`, import it from the spriteAI module and call it with a description of the items you want to generate.

```javascript
import { generateItemSprites } from './path/to/spriteAI';

const result = await generateItemSprites(description, options);
```

## Parameters
- `description` (string, required): A text description of the items to generate (e.g., "medieval weapons", "magical potions").
- `options` (object, optional):
  - `itemCount` (number): Number of items to generate (default: 4).
  - `size` (string): Size of the generated image (default: "1024x1024").
  - `style` (string): Art style for the items (default: "pixel-art").
  - `padding` (number): Padding between items in the grid (default: 1).
  - `itemType` (string): Type category for the items (default: "equipment").
  - `background` (string): Background color for the item sheet (default: "white").
  - `save` (boolean): Whether to save the generated image to disk.

## Return Value
Returns an object containing:
- `original`: URL of the original AI-generated image.
- `itemSheet`: Base64-encoded image data URL of the processed item sheet.
- `metadata`: Object with detailed information about the generated items:
  - `itemCount`: Number of items generated.
  - `itemType`: Type category of the items.
  - `dimensions`: Width and height of the image.
  - `itemData`: Grid layout information (rows, columns, total items).

## Examples

### Generate Basic Item Collection
```javascript
const result = await generateItemSprites("fantasy swords");
console.log(result.metadata.itemCount); // 4
console.log(result.itemSheet); // Base64 image data
```

### Generate Custom Potion Collection
```javascript
const potions = await generateItemSprites("magical potions", {
  itemCount: 6,
  style: "hand-drawn",
  itemType: "consumable",
  background: "transparent"
});

console.log(potions.metadata.itemData);
// Output: { rows: 3, columns: 2, totalItems: 6 }
```

### Generate and Save Item Collection
```javascript
const weapons = await generateItemSprites("medieval weapons", {
  itemCount: 8,
  style: "pixel-art",
  itemType: "weapon",
  save: true
});

// Items saved to: ./assets/medieval_weapons_items.png
console.log(weapons.metadata.itemType); // "weapon"
```

### Generate Items with Custom Styling
```javascript
const gems = await generateItemSprites("precious gems", {
  itemCount: 12,
  size: "512x512",
  style: "3d",
  itemType: "treasure",
  background: "black",
  padding: 2
});

console.log(gems.metadata.itemData.rows); // 6
console.log(gems.metadata.itemData.columns); // 2
```

## Notes or Considerations
- The function uses DALL-E 3 for AI image generation, which may result in varying outputs for the same input.
- Items are automatically arranged in a 2-column grid layout with the specified number of rows.
- Each item is centered in its grid cell for consistent appearance.
- Generated items are optimized for use as game inventory icons or pickup sprites.
- When saving images, they are stored in an 'assets' folder with a filename based on the description.
- The function may take some time to complete due to API calls and image processing.
- Consider the `itemType` parameter to get more contextually appropriate items (e.g., "equipment", "consumable", "treasure", "weapon").
- Different art styles ("pixel-art", "vector", "3d", "hand-drawn", "anime") will produce different visual aesthetics.