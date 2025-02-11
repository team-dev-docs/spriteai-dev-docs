

  # Sprite Manipulation Techniques

The SpriteAI library offers a wide range of sprite manipulation techniques to enhance and customize your game assets. This guide covers various methods for adding effects, creating variations, and generating animations.

## Adding Effects

### Outlines

Add outlines to your sprites to make them stand out or create a specific visual style.

```javascript
const result = await sprite.addOutline('character', {
  color: { r: 255, g: 0, b: 0, alpha: 255 }, // Red outline
  thickness: 2
});
console.log(result.outlined); // Base64 encoded image with outline
```

### Glows

Create a glowing effect around your sprites for magical or energized appearances.

```javascript
const result = await sprite.addShadow('magical orb', {
  opacity: 0.7,
  blur: 5,
  color: { r: 0, g: 255, b: 255 } // Cyan glow
});
console.log(result.withShadow); // Base64 encoded image with glow effect
```

### Pixelation

Apply a pixelation effect to create a more retro or low-resolution look.

```javascript
const result = await sprite.addPixelationEffect('character', {
  pixelSize: 8,
  mode: 'average'
});
console.log(result.pixelated); // Base64 encoded pixelated image
```

## Creating Variations

### Elemental Variations

Transform your sprites into elemental versions with special effects.

```javascript
const fireSprite = await sprite.createElementalVariation('warrior', 'fire');
console.log(fireSprite.elemental); // Base64 encoded fire elemental sprite

const iceSprite = await sprite.createElementalVariation('mage', 'ice');
console.log(iceSprite.elemental); // Base64 encoded ice elemental sprite
```

### Mechanical Variations

Convert organic sprites into mechanical or robotic versions.

```javascript
const mechaSprite = await sprite.createMechaSpriteVariation('animal', {
  armorLevel: 0.7,
  glowEffects: true,
  colorScheme: 'chrome',
  techLevel: 'advanced'
});
console.log(mechaSprite.mechaVariation); // Base64 encoded mechanical sprite variation
```

### Lighting Variations

Apply dynamic lighting effects to your sprites.

```javascript
const lightedSprite = await sprite.createLightingVariation('character', {
  lightColor: { r: 255, g: 200, b: 100 }, // Warm light
  intensity: 0.8,
  direction: 'top-left',
  shadows: true
});
console.log(lightedSprite.lighted); // Base64 encoded sprite with lighting effects
```

## Generating Animations

### Wave Distortion

Create wave-like animations for fluid or magical effects.

```javascript
const waveAnimation = await sprite.addWaveEffect('water elemental', {
  intensity: 20,
  frequency: 0.1,
  frames: 10
});
console.log(waveAnimation.waveFrames); // Array of Base64 encoded animation frames
```

### Dissolve Effect

Generate dissolve animations for transitions or special effects.

```javascript
const dissolveAnimation = await sprite.addDissolveEffect('character', {
  steps: 15,
  pattern: 'cellular',
  direction: 'in'
});
console.log(dissolveAnimation.dissolveFrames); // Array of Base64 encoded dissolve animation frames
```

### Sprite Animation

Create smooth animations between different sprite frames.

```javascript
const walkAnimation = await sprite.createSpriteAnimation('character walking', 4, {
  steps: 3 // Number of interpolated frames between each key frame
});
console.log(walkAnimation.interpolatedFrames); // Array of Base64 encoded animation frames
```

### Weather Effects

Add dynamic weather animations to your sprites or scenes.

```javascript
const rainEffect = await sprite.addWeatherEffect('outdoor scene', {
  type: 'rain',
  intensity: 0.7,
  frames: 10,
  speed: 1.2
});
console.log(rainEffect.weatherFrames); // Array of Base64 encoded frames with rain effect
```

## Advanced Techniques

### Kaleidoscope Effect

Create mesmerizing kaleidoscopic animations from your sprites.

```javascript
const kaleidoscopeAnimation = await sprite.addKaleidoscopeEffect('geometric pattern', {
  segments: 8,
  rotation: 45,
  zoom: 1.2,
  frames: 20
});
console.log(kaleidoscopeAnimation.kaleidoscopeFrames); // Array of Base64 encoded kaleidoscope animation frames
```

### Glitch Wave Effect

Apply a glitchy, distorted wave effect to your sprites for a digital or corrupted look.

```javascript
const glitchAnimation = await sprite.addGlitchWaveEffect('digital entity', {
  intensity: 25,
  glitchAmount: 0.4,
  scanlines: true,
  frames: 8
});
console.log(glitchAnimation.glitchWaveFrames); // Array of Base64 encoded glitch wave animation frames
```

### Displacement Effect

Create dynamic displacement animations for various visual effects.

```javascript
const displacementAnimation = await sprite.addDisplacementEffect('landscape', {
  intensity: 20,
  displacementMap: 'waves',
  frames: 15,
  frequency: 0.08
});
console.log(displacementAnimation.displacementFrames); // Array of Base64 encoded displacement animation frames
```

These sprite manipulation techniques offer a wide range of creative possibilities for enhancing your game assets. Experiment with different combinations and parameters to achieve unique visual effects tailored to your game's aesthetic.

  