

  # Sprite Effects and Manipulations

This guide covers how to apply various effects and manipulations to sprites using spriteAI. We'll explore features like adding outlines, creating glitch art, generating variations, optimizing palettes, and adding special effects.

## Adding Outlines

You can add outlines to sprites to make them stand out more. Here's how to use the `addOutline` function:

```javascript
const result = await sprite.addOutline('character', {
  color: { r: 0, g: 0, b: 0, alpha: 255 }, // Black outline
  thickness: 1 // Outline thickness in pixels
});

console.log(result.original); // Original sprite image data URL
console.log(result.outlined); // Outlined sprite image data URL
```

## Creating Glitch Art

To create glitch art effects, use the `createGlitchArt` function:

```javascript
const result = await sprite.createGlitchArt('character', {
  sortMode: 'brightness', // Sort pixels by brightness
  noiseAmount: 10 // Amount of noise to add
});

console.log(result.original); // Original sprite image data URL  
console.log(result.glitched); // Glitched sprite image data URL
```

## Generating Sprite Variations

Generate multiple variations of a sprite with `generateSpriteVariations`:

```javascript
const result = await sprite.generateSpriteVariations('character', 3); // Generate 3 variations

console.log(result.variations); // Array of variation image data URLs
console.log(result.count); // Number of variations generated
```

## Optimizing Palettes

Optimize the color palette of a sprite with `optimizePalette`:

```javascript
const result = await sprite.optimizePalette('character', 16); // Limit to 16 colors

console.log(result.original); // Original sprite image data URL
console.log(result.palette); // Optimized color palette
console.log(result.paletteSize); // Number of colors in optimized palette
```

## Adding Reflections

Add a reflection effect to sprites using `addReflectionEffect`:

```javascript
const result = await sprite.addReflectionEffect('character', {
  opacity: 0.5,
  fade: true,
  height: 0.5 // Reflection height as percentage of original
});

console.log(result.original); // Original sprite image data URL
console.log(result.withReflection); // Sprite with reflection image data URL
```

## Adding Shadows

Add dynamic shadows to sprites with `addShadow`:

```javascript
const result = await sprite.addShadow('character', {
  opacity: 0.5,
  blur: 3,
  offsetX: 5,
  offsetY: 5,
  color: { r: 0, g: 0, b: 0 } // Shadow color
});

console.log(result.original); // Original sprite image data URL
console.log(result.withShadow); // Sprite with shadow image data URL
```

## Adding Weather Effects

Create weather effects like rain, snow, or fog using `addWeatherEffect`:

```javascript
const result = await sprite.addWeatherEffect('landscape', {
  type: 'rain', // Options: rain, snow, fog, storm, sandstorm
  intensity: 0.5,
  frames: 10,
  speed: 1.0
});

console.log(result.original); // Original sprite image data URL
console.log(result.weatherFrames); // Array of weather effect frame image data URLs
console.log(result.settings); // Applied weather effect settings
```

## Other Special Effects

spriteAI offers many other special effects you can apply to sprites:

- `createColorCycle`: Create color cycling animations
- `createWaveEffect`: Apply wave distortions to sprites
- `createPixelationEffect`: Add pixelation effects
- `createMosaicEffect`: Create mosaic-style transformations
- `createDissolveEffect`: Apply dissolve transitions
- `createSplashEffect`: Add splash/ripple effects
- `createShatterEffect`: Create a shattering animation
- `createKaleidoscopeEffect`: Apply kaleidoscope-like transformations
- `createGlitchWaveEffect`: Combine glitch and wave effects
- `createDisplacementEffect`: Use displacement maps for interesting distortions

Refer to the API documentation for detailed usage instructions for each of these effects.

By combining these effects and manipulations, you can create unique and dynamic sprite animations and transformations for your projects.

  