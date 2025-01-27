# Sprite Effects

This documentation covers the newly added sprite effect methods in the `sprite` object. These methods allow you to create various visual effects and manipulations for your sprite images.

## generateParticleEffect

Generates a particle effect based on a given sprite.

### Usage

```javascript
const result = await sprite.generateParticleEffect(description, particleCount, options);
```

### Parameters

- `description` (string): A text description of the sprite to generate.
- `particleCount` (number, optional): The number of particles to generate. Default is 10.
- `options` (object, optional): Additional options for sprite generation.

### Return Value

Returns an object containing:
- `baseSprite`: Base64-encoded image data URL of the original sprite.
- `particles`: An array of Base64-encoded image data URLs for each particle.

### Example

```javascript
const particleEffect = await sprite.generateParticleEffect("A glowing orb", 20);
console.log(particleEffect.baseSprite);
console.log(particleEffect.particles.length); // 20
```

## createColorCycle

Creates a color cycling animation for a given sprite.

### Usage

```javascript
const result = await sprite.createColorCycle(description, options);
```

### Parameters

- `description` (string): A text description of the sprite to generate.
- `options` (object, optional): Additional options for sprite generation.

### Return Value

Returns an object containing:
- `baseSprite`: Base64-encoded image data URL of the original sprite.
- `frames`: An array of Base64-encoded image data URLs for each frame of the color cycle animation.

### Example

```javascript
const colorCycle = await sprite.createColorCycle("A shimmering crystal");
console.log(colorCycle.baseSprite);
console.log(colorCycle.frames.length);
```

## combineSprites

Combines two sprites into a single image.

### Usage

```javascript
const result = await sprite.combineSprites(description1, description2, position, options);
```

### Parameters

- `description1` (string): A text description of the first sprite to generate.
- `description2` (string): A text description of the second sprite to generate.
- `position` (string, optional): The position to combine the sprites. Can be 'overlay', 'side-by-side', or 'stacked'. Default is 'overlay'.
- `options` (object, optional): Additional options for sprite generation.

### Return Value

Returns an object containing:
- `image`: Base64-encoded image data URL of the combined sprite.

### Example

```javascript
const combined = await sprite.combineSprites("A fierce dragon", "A knight in armor", "side-by-side");
console.log(combined.image);
```

## Notes

- These methods utilize AI-powered image generation and processing, so results may vary for the same input.
- The generated sprites are in PNG format and use base64 encoding for easy integration into web applications.
- When using these methods, consider the processing time required, especially for complex sprites or effects with many particles or frames.