

  # Advanced Sprite Techniques in spriteAI

This guide covers advanced techniques for working with sprites in spriteAI, including creating animations, applying elemental variations, adding lighting effects, and using displacement maps.

## Creating Sprite Animations

To create a sprite animation:

1. Generate multiple sprite frames
2. Interpolate between frames
3. Combine into an animation

Example code:

```javascript
const animationResult = await sprite.createSpriteAnimation("running knight", 4, {
  steps: 5 // Number of interpolated frames between each key frame
});

console.log(`Generated ${animationResult.totalFrames} total frames`);
console.log("Original frames:", animationResult.originalFrames);
console.log("Interpolated frames:", animationResult.interpolatedFrames);
```

## Applying Elemental Variations 

Add elemental effects to sprites:

1. Choose an element type (fire, water, earth, air, etc.)
2. Apply color tinting and particle effects
3. Add element-specific animations

Example for a fire elemental sprite:

```javascript
const fireSprite = await sprite.createElementalVariation("warrior", "fire", {
  intensity: 0.8,
  particleCount: 20
});

console.log("Original sprite:", fireSprite.original);
console.log("Fire variation:", fireSprite.elementalFrames);
```

## Adding Lighting Effects

Enhance sprites with dynamic lighting:

1. Set light properties (color, intensity, direction)
2. Apply shading and shadows
3. Optionally colorize the lighting

Example:

```javascript
const lightedSprite = await sprite.createLightingVariation("cave troll", {
  lightColor: { r: 255, g: 200, b: 100 }, // Warm torch light
  intensity: 0.9,
  direction: "top-right",
  shadows: true,
  colorize: true
});

console.log("Original sprite:", lightedSprite.original);
console.log("Lighted sprite:", lightedSprite.lighted);
```

## Using Displacement Maps

Create distortion effects with displacement maps:

1. Generate or provide a displacement map
2. Apply the map to shift pixel positions
3. Animate the displacement for dynamic effects

Example of a wave distortion effect:

```javascript
const displacedSprite = await sprite.addDisplacementEffect("ocean background", {
  intensity: 20,
  displacementMap: "waves",
  frames: 10,
  frequency: 0.08
});

console.log("Original sprite:", displacedSprite.original);
console.log("Displaced frames:", displacedSprite.displacementFrames);
```

## Combining Techniques

For more complex effects, combine multiple techniques:

```javascript
// Create a stormy elemental warrior
const stormWarrior = await sprite.createElementalVariation("warrior", "lightning");
const animatedStorm = await sprite.createSpriteAnimation(stormWarrior.elemental, 3);
const weatherEffect = await sprite.addWeatherEffect(animatedStorm.interpolatedFrames[0], {
  type: "storm",
  intensity: 0.7,
  frames: 10
});

console.log("Final storm warrior animation:", weatherEffect.weatherFrames);
```

These advanced techniques allow you to create rich, dynamic sprite effects in spriteAI. Experiment with different combinations and settings to achieve unique visual styles for your sprites.

  