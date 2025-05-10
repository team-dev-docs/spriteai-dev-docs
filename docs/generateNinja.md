# Generate Ninja

Generate Ninja is a powerful tool for creating and manipulating sprite images for use in game development, particularly with Phaser.js. It leverages AI image generation alongside advanced image processing techniques to create high-quality, customizable game assets.

## Features

- Generate pixel art sprites using AI
- Apply various effects to sprites (outline, shadow, reflection, etc.)
- Create animated sprites with smooth transitions
- Generate specialized variations (elemental, mecha, retro console)
- Process and optimize sprite sheets

## Core Functions

### Sprite Generation

- `generatePixelArt(description, options)`: Creates pixel art based on text descriptions
- `generateSprite(description, options)`: Generates sprite sheets with frame data for animations
- `generateIsometric(description, options)`: Creates isometric game assets
- `generateRetroConsole(description, options)`: Generates sprites in specific retro console styles
- `generateAnimatedEmoji(description, options)`: Creates 4-frame animated emoji sprites
- `generateCharacterSpritesheet(description, options)`: Produces character sprite sheets with multiple animation states

### Effect Functions

- `addOutline(description, outlineOptions, options)`: Adds an outline effect to sprites
- `addShadow(description, shadowOptions, options)`: Applies shadow effects
- `addReflectionEffect(description, reflectionOptions, options)`: Creates reflection effects
- `addGlitchWaveEffect(description, glitchOptions, options)`: Applies glitch/wave distortion effects
- `addDisplacementEffect(description, displacementOptions, options)`: Creates displacement distortion
- `addDissolveEffect(description, dissolveOptions, options)`: Applies dissolve transition effects
- `addKaleidoscopeEffect(description, kaleidoscopeOptions, options)`: Creates kaleidoscope-style effects
- `addMosaicEffect(description, mosaicOptions, options)`: Applies mosaic/tiling effects
- `addSplashEffect(description, splashOptions, options)`: Creates water splash animation effects
- `addShatterEffect(description, shatterOptions, options)`: Produces shatter animation effects
- `addWaveEffect(description, waveOptions, options)`: Applies wave distortion effects
- `addWeatherEffect(description, weatherOptions, options)`: Adds weather effects (rain, snow, etc.)

### Sprite Variations

- `createElementalVariation(description, element, options)`: Creates elemental variations (fire, water, etc.)
- `createMechaSpriteVariation(description, mechaOptions, options)`: Generates robotic/mechanical variations
- `createMirrorSprite(description, mirrorOptions, options)`: Creates mirrored versions of sprites
- `createPixelPerfect(description, scale, options)`: Applies pixel-perfect scaling
- `createSpriteAnimation(description, frameCount, options)`: Generates multi-frame animations
- `createGlitchArt(description, options)`: Creates glitch art effects
- `createLightingVariation(description, lightingOptions, options)`: Applies directional lighting effects
- `createColorCycle(description, options)`: Creates color cycling animations

### Utility Functions

- `optimizePalette(description, options)`: Extracts and optimizes color palettes
- `splitSpriteSheet(imageBuffer, columns, rows)`: Splits sprite sheets into individual frames
- `generateSpritesheet(imageBuffer, options)`: Creates sprite sheets from individual frames
- `generateSpriteVariations(description, count, options)`: Generates multiple variations of a sprite
- `generateParticleEffect(description, count, options)`: Creates particle effects from sprites

## Usage Examples

### Basic Sprite Generation

```javascript
import { sprite } from './path/to/sprite/module';

// Generate a simple pixel art sprite
const result = await sprite.generatePixelArt('A pixelated robot');

// Generate a sprite sheet with animation frames
const spriteSheet = await sprite.generateSprite('A knight character with sword', {
  frames: 6 // Generate 6 animation frames
});

// Generate an isometric game asset
const isoAsset = await sprite.generateIsometric('A stone tower');
```

### Applying Effects

```javascript
// Add an outline to a sprite
const outlinedSprite = await sprite.addOutline('A ghost character', {
  outlineColor: '#FF5500',
  outlineWidth: 2
});

// Create a sprite with shadow effect
const shadowedSprite = await sprite.addShadow('A treasure chest', {
  shadowColor: '#000000',
  shadowOpacity: 0.7,
  shadowOffset: 5
});

// Apply a glitch effect
const glitchSprite = await sprite.addGlitchWaveEffect('A computer terminal', {
  intensity: 5,
  speed: 2
});
```

### Creating Variations

```javascript
// Create a fire elemental version of a sprite
const fireSprite = await sprite.createElementalVariation('A golem character', 'fire');

// Create a mechanical version of a character
const mechSprite = await sprite.createMechaSpriteVariation('A wizard character', {
  armorLevel: 3,
  colorScheme: 'blue'
});

// Generate sprite animation with interpolated frames
const animatedSprite = await sprite.createSpriteAnimation('A running wolf', 4, {
  steps: 2 // Add 2 interpolated frames between each main frame
});
```

## Advanced Processing

```javascript
// Extract the optimal color palette from a sprite
const paletteResult = await sprite.optimizePalette('A forest landscape', {
  maxColors: 16
});

// Create a sprite sheet from individual frames
const imageBuffer = /* your image buffer */;
const sheet = await sprite.generateSpritesheet(imageBuffer, {
  frameWidth: 32,
  frameHeight: 32,
  padding: 2
});

// Generate weather effects
const rainEffect = await sprite.addWeatherEffect('A house exterior', {
  type: 'rain',
  intensity: 'heavy'
});
```

## Notes and Considerations

- All image generation functions use OpenAI's DALL-E 3 model and require proper API configuration
- Image processing uses libraries like Sharp for efficient manipulation
- Complex effects may require more processing time
- When saving images, they are stored with descriptive or timestamp-based filenames
- Effects can be combined by applying them sequentially to create complex visual styles
- For optimal results, provide clear and specific descriptions when generating sprites