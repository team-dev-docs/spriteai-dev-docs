# createLightingVariation

The `createLightingVariation` function applies dynamic lighting effects to sprites in the game.

## Usage

```javascript
createLightingVariation(sprite, intensity, color)
```

## Parameters

- `sprite` (Phaser.GameObjects.Sprite): The sprite object to apply the lighting effect to.
- `intensity` (number): The intensity of the lighting effect, ranging from 0 (no effect) to 1 (maximum effect).
- `color` (number): The color of the lighting effect in hexadecimal format (e.g., 0xFFFFFF for white).

## Description

This function creates a dynamic lighting variation effect on the specified sprite. It uses a custom shader to modify the sprite's appearance based on the given intensity and color parameters. This can be used to simulate different lighting conditions, create mood lighting, or highlight specific objects in the game.

## Example

```javascript
// Create a sprite
let player = this.add.sprite(400, 300, 'player');

// Apply a red lighting effect with medium intensity
createLightingVariation(player, 0.5, 0xFF0000);
```

## Notes

- The lighting effect is applied in real-time and may impact performance if used on many sprites simultaneously.
- The effect can be updated dynamically by calling the function again with new parameters.
- Make sure to include the necessary shader code in your game's assets or preload it before using this function.

## See Also

- [Phaser.GameObjects.Sprite](https://photonstorm.github.io/phaser3-docs/Phaser.GameObjects.Sprite.html)
- [Phaser Shader Tutorial](https://phaser.io/examples/v3/category/shader)