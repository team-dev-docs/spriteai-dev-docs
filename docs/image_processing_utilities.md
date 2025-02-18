# Image Processing Utilities

This document covers the various image processing utility functions available in the sprite generation library. These functions can be used to enhance, modify, and create special effects for sprites.

## Core Utility Functions

### rotateSpritesheet(inputBuffer, degrees)

Rotates the entire spritesheet by the specified number of degrees.

- Parameters:
  - `inputBuffer`: Buffer containing the image data
  - `degrees`: Number of degrees to rotate

- Returns: A promise that resolves to a buffer containing the rotated image

### tintSprite(inputBuffer, color)

Applies a color tint to the sprite.

- Parameters:
  - `inputBuffer`: Buffer containing the image data
  - `color`: Color to apply as tint

- Returns: A promise that resolves to a buffer containing the tinted image

### calculateOptimalAnimationSpeed(frameCount)

Calculates the optimal animation speed based on the number of frames.

- Parameters:
  - `frameCount`: Number of frames in the animation

- Returns: A promise that resolves to the recommended frames per second

### generateSpriteMetadata(imageBuffer, frameWidth, frameHeight)

Generates metadata for a spritesheet, including frame information and dimensions.

- Parameters:
  - `imageBuffer`: Buffer containing the spritesheet image data
  - `frameWidth`: Width of each frame
  - `frameHeight`: Height of each frame

- Returns: A promise that resolves to an object containing metadata about the spritesheet

## Effect Utility Functions

### createParticleEffect(imageBuffer, particleCount = 10)

Creates a particle effect based on the input sprite.

- Parameters:
  - `imageBuffer`: Buffer containing the sprite image data
  - `particleCount`: Number of particles to generate (default: 10)

- Returns: A promise that resolves to an array of buffers, each containing a particle image

### flipSprite(imageBuffer, direction = 'horizontal')

Flips the sprite horizontally or vertically.

- Parameters:
  - `imageBuffer`: Buffer containing the sprite image data
  - `direction`: 'horizontal' or 'vertical' (default: 'horizontal')

- Returns: A promise that resolves to a buffer containing the flipped image

### createColorCyclingAnimation(imageBuffer, colorShift = 30)

Creates a color cycling animation effect.

- Parameters:
  - `imageBuffer`: Buffer containing the sprite image data
  - `colorShift`: Amount of color shift per frame (default: 30)

- Returns: A promise that resolves to an array of buffers, each containing a frame of the color cycling animation

### combineSprites(spriteBufferA, spriteBufferB, position = 'overlay')

Combines two sprites into a single image.

- Parameters:
  - `spriteBufferA`: Buffer containing the first sprite image data
  - `spriteBufferB`: Buffer containing the second sprite image data
  - `position`: How to combine the sprites ('overlay', 'side-by-side', or 'stacked') (default: 'overlay')

- Returns: A promise that resolves to a buffer containing the combined image

## Advanced Effect Functions

### generateOutline(imageBuffer, outlineColor, thickness)

Generates an outline around the sprite.

### pixelSort(imageBuffer, sortMode)

Applies a pixel sorting effect to the sprite.

### addNoise(imageBuffer, noiseAmount)

Adds noise to the sprite image.

### extractPalette(imageBuffer, maxColors)

Extracts a color palette from the sprite.

### pixelPerfectScale(imageBuffer, scale)

Scales the sprite using pixel-perfect scaling.

### generateShadow(imageBuffer, shadowOptions)

Generates a shadow effect for the sprite.

### createMirrorEffect(imageBuffer, direction, fade)

Creates a mirror effect of the sprite.

### interpolateFrames(frame1Buffer, frame2Buffer, steps)

Interpolates between two frames to create in-between frames.

### createReflection(imageBuffer, reflectionOptions)

Creates a reflection effect for the sprite.

### createWaveDistortion(imageBuffer, waveOptions)

Applies a wave distortion effect to the sprite.

### createPixelationEffect(imageBuffer, pixelationOptions)

Applies a pixelation effect to the sprite.

### createMosaicEffect(imageBuffer, mosaicOptions)

Creates a mosaic effect using the sprite.

### createDissolveEffect(imageBuffer, dissolveOptions)

Applies a dissolve effect to the sprite.

### createSplashEffect(imageBuffer, splashOptions)

Creates a splash effect animation for the sprite.

### createShatterEffect(imageBuffer, shatterOptions)

Generates a shatter effect animation for the sprite.

### createKaleidoscopeEffect(imageBuffer, kaleidoscopeOptions)

Applies a kaleidoscope effect to the sprite.

### createGlitchWaveEffect(imageBuffer, options)

Creates a glitch wave effect animation for the sprite.

### createDisplacementEffect(imageBuffer, displacementOptions)

Applies a displacement effect to the sprite.

### createWeatherEffect(imageBuffer, weatherOptions)

Generates weather effects (rain, snow, etc.) on top of the sprite.

## Usage

These utility functions can be used in combination with the main sprite generation functions to create complex and dynamic sprite effects. For example:

```javascript
const baseSprite = await sprite.generatePixelArt("character");
const rotatedSprite = await rotateSpritesheet(baseSprite, 45);
const tintedSprite = await tintSprite(rotatedSprite, { r: 255, g: 0, b: 0 });
const withParticles = await createParticleEffect(tintedSprite, 20);
```

This would generate a pixel art character, rotate it 45 degrees, apply a red tint, and then create a particle effect based on the resulting sprite.