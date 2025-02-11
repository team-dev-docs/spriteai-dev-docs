

  # Advanced Features of spriteAI

spriteAI provides powerful capabilities for creating and manipulating game sprites and animations. This guide covers some of the more advanced features available in the library.

## Generating Character Spritesheets

The `generateCharacterSpritesheet` function allows you to create complete animation spritesheets for game characters.

```javascript
const result = await sprite.generateCharacterSpritesheet("medieval knight", {
  states: ['idle', 'walk', 'attack', 'death'],
  framesPerState: 8,
  size: '1024x1024',
  style: 'pixel-art',
  direction: 'right'
});
```

This generates a spritesheet with multiple animation states, each in its own row. The result includes:
- The original generated image URL
- A base64-encoded spritesheet with padding between frames
- Metadata about the spritesheet structure

Use case: Quickly generate a full set of animations for a game character that can be loaded into a game engine.

## Creating Complex Animation Effects

### Wave Distortion

Apply a wave distortion effect to sprites:

```javascript
const waveResult = await sprite.addWaveEffect("water elemental", {
  amplitude: 20,
  frequency: 0.1,
  animationFrames: 10
});
```

This creates an undulating animation effect, useful for water-based characters or objects.

### Shatter Effect

Create a shattering animation for sprites:

```javascript
const shatterResult = await sprite.addShatterEffect("glass vase", {
  pieces: 20,
  spread: 150,
  frames: 20,
  pattern: 'radial'
});
```

Use case: Implement breaking or destruction animations for objects in your game.

## Weather and Environmental Effects

### Adding Weather

Apply dynamic weather effects to sprites or scenes:

```javascript
const weatherResult = await sprite.addWeatherEffect("forest landscape", {
  type: 'rain',
  intensity: 0.7,
  frames: 15,
  speed: 1.2
});
```

This generates a series of frames with the specified weather effect overlaid on the original sprite. Available weather types include rain, snow, fog, storm, and sandstorm.

### Lighting Variations

Create dramatic lighting effects:

```javascript
const lightingResult = await sprite.createLightingVariation("dungeon room", {
  lightColor: { r: 255, g: 100, b: 0 },  // Warm torch light
  intensity: 0.9,
  direction: 'top-right',
  shadows: true,
  colorize: true
});
```

Use case: Dynamically adjust the mood and atmosphere of game environments or characters based on lighting conditions.

## Elemental Transformations

Transform characters or objects with elemental effects:

```javascript
const fireElemental = await sprite.createElementalVariation("rock golem", "fire", {
  intensity: 0.8
});
```

This applies fire-themed visual effects to the original sprite. Other available elements include water, earth, air, lightning, and ice.

Use case: Create variations of game entities with different elemental themes or powers.

## Advanced Sprite Manipulation

### Pixel Sorting and Glitch Effects

Create glitch art effects:

```javascript
const glitchResult = await sprite.createGlitchArt("cyberpunk character", {
  sortMode: 'brightness',
  noiseAmount: 15
});
```

### Kaleidoscope Effect

Generate mesmerizing kaleidoscopic animations:

```javascript
const kaleidoscopeResult = await sprite.addKaleidoscopeEffect("mandala design", {
  segments: 8,
  rotation: 45,
  zoom: 1.2,
  frames: 30
});
```

Use case: Create psychedelic or abstract visual effects for game backgrounds or special abilities.

## Conclusion

These advanced features of spriteAI enable developers to create rich, dynamic visual assets for games with minimal effort. By combining these effects and transformations, you can generate unique and engaging sprite animations to bring your game worlds to life.

  