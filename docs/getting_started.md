

  # Getting Started with spriteAI

This guide will walk you through installing and using spriteAI to generate pixel art sprites programmatically.

## Installation

1. Make sure you have Node.js installed on your system.

2. Create a new directory for your project and navigate to it in the terminal:

```bash
mkdir my-spriteai-project
cd my-spriteai-project
```

3. Initialize a new Node.js project:

```bash
npm init -y
```

4. Install spriteAI and its dependencies:

```bash
npm install spriteai axios jimp openai sharp
```

5. Create a new file called `index.js` in your project directory.

## Basic Usage

Here's a simple example of how to generate a sprite using spriteAI:

```javascript
import { sprite } from 'spriteai';

async function generateSimpleSprite() {
  const result = await sprite.generateSprite("a cute cat");
  console.log(result.image); // Base64 encoded image data
}

generateSimpleSprite();
```

This will generate a pixel art sprite of a cute cat.

## Main Features

spriteAI offers a wide range of features for sprite generation and manipulation:

### Sprite Generation

- `generateSprite(description, options)`: Generate a basic sprite
- `generatePixelArt(description, options)`: Generate pixel art style sprites
- `generateIsometric(description, options)`: Create isometric view sprites
- `generateAnimatedEmoji(description, options)`: Generate animated emoji sprites
- `generateRetroConsole(description, consoleType, options)`: Create sprites in retro console styles

### Sprite Effects and Variations

- `addOutline(description, outlineOptions, options)`: Add outlines to sprites
- `createGlitchArt(description, glitchOptions, options)`: Apply glitch effects
- `optimizePalette(description, maxColors, options)`: Optimize sprite color palettes
- `createPixelPerfect(description, scale, options)`: Create pixel-perfect scaled sprites
- `addShadow(description, shadowOptions, options)`: Add shadow effects to sprites
- `createMirrorSprite(description, direction, options)`: Create mirrored versions of sprites
- `addReflectionEffect(description, reflectionOptions, options)`: Add reflection effects
- `addWaveEffect(description, waveOptions, options)`: Apply wave distortion effects
- `addPixelationEffect(description, pixelationOptions, options)`: Apply pixelation effects
- `addMosaicEffect(description, mosaicOptions, options)`: Create mosaic-style sprites
- `addDissolveEffect(description, dissolveOptions, options)`: Apply dissolve transition effects
- `addSplashEffect(description, splashOptions, options)`: Add splash effects to sprites
- `addShatterEffect(description, shatterOptions, options)`: Create shatter animation effects
- `addKaleidoscopeEffect(description, kaleidoscopeOptions, options)`: Apply kaleidoscope effects
- `addGlitchWaveEffect(description, glitchWaveOptions, options)`: Combine glitch and wave effects
- `addDisplacementEffect(description, displacementOptions, options)`: Apply displacement map effects
- `createMechaSpriteVariation(description, mechaOptions, options)`: Generate mecha-style sprite variations
- `createElementalVariation(description, elementType, options)`: Create elemental variations of sprites
- `createLightingVariation(description, lightingOptions, options)`: Apply dynamic lighting effects
- `addWeatherEffect(description, weatherOptions, options)`: Add weather effects to sprites

### Animation and Composition

- `createSpriteAnimation(description, frameCount, options)`: Generate sprite animations
- `splitSpriteSheet(imageBuffer, columns, rows, options)`: Split sprite sheets into individual frames
- `generateParticleEffect(description, particleCount, options)`: Create particle effects
- `createColorCycle(description, options)`: Generate color cycling animations
- `combineSprites(description1, description2, position, options)`: Combine multiple sprites

## Advanced Usage Example

Here's a more advanced example that demonstrates some of spriteAI's features:

```javascript
import { sprite } from 'spriteai';

async function createComplexSprite() {
  // Generate a base sprite
  const baseSprite = await sprite.generatePixelArt("a warrior");
  
  // Add an outline
  const outlinedSprite = await sprite.addOutline("a warrior", { color: { r: 255, g: 0, b: 0, alpha: 255 } });
  
  // Apply a lighting effect
  const lightedSprite = await sprite.createLightingVariation("a warrior", { 
    lightColor: { r: 255, g: 200, b: 100 },
    intensity: 0.7,
    direction: 'top-right'
  });
  
  // Create an elemental variation
  const fireWarrior = await sprite.createElementalVariation("a warrior", "fire");
  
  console.log("Base sprite:", baseSprite.image);
  console.log("Outlined sprite:", outlinedSprite.outlined);
  console.log("Lighted sprite:", lightedSprite.lighted);
  console.log("Fire warrior sprite:", fireWarrior.elemental);
}

createComplexSprite();
```

This example generates a warrior sprite, adds an outline, applies lighting effects, and creates a fire elemental variation.

Remember to handle promises appropriately and use error handling in your actual implementation.

For more detailed information on each method and its options, refer to the API documentation.

  