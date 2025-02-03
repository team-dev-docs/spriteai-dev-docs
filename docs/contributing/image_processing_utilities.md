

  # Image Processing Utility Functions

This page documents the various utility functions available for image processing, sprite generation, and manipulation. These functions can be used to enhance and modify sprites in various ways.

## removeBackgroundColor

Removes a specified background color from an image.

### Parameters:
- `inputPath`: Path to the input image file
- `outputPath`: Path to save the processed image
- `targetColor`: Color to be removed (e.g., '#FFFFFF' for white)
- `colorThreshold`: Tolerance for color matching (default: 0)
- `options`: Additional options (optional)

### Usage:
```javascript
await removeBackgroundColor('input.png', 'output.png', '#FFFFFF', 10);
```

## rotateSpritesheet

Rotates a spritesheet by a specified number of degrees.

### Parameters:
- `inputBuffer`: Buffer containing the image data
- `degrees`: Number of degrees to rotate

### Usage:
```javascript
const rotatedBuffer = await rotateSpritesheet(imageBuffer, 90);
```

## tintSprite

Applies a color tint to a sprite.

### Parameters:
- `inputBuffer`: Buffer containing the image data
- `color`: Color to tint the sprite with

### Usage:
```javascript
const tintedBuffer = await tintSprite(imageBuffer, { r: 255, g: 0, b: 0 });
```

## createParticleEffect

Generates particle effects from a sprite.

### Parameters:
- `imageBuffer`: Buffer containing the sprite image
- `particleCount`: Number of particles to generate (default: 10)

### Usage:
```javascript
const particles = await createParticleEffect(spriteBuffer, 20);
```

## createColorCyclingAnimation

Creates a color cycling animation from a sprite.

### Parameters:
- `imageBuffer`: Buffer containing the sprite image
- `colorShift`: Amount of color shift per frame (default: 30)

### Usage:
```javascript
const animationFrames = await createColorCyclingAnimation(spriteBuffer, 45);
```

## combineSprites

Combines two sprites into a single image.

### Parameters:
- `spriteBufferA`: Buffer of the first sprite
- `spriteBufferB`: Buffer of the second sprite
- `position`: How to combine the sprites ('overlay', 'side-by-side', or 'stacked')

### Usage:
```javascript
const combinedBuffer = await combineSprites(spriteA, spriteB, 'side-by-side');
```

## generateOutline

Generates an outline around a sprite.

### Parameters:
- `imageBuffer`: Buffer containing the sprite image
- `outlineColor`: Color of the outline (default: black)
- `thickness`: Thickness of the outline (default: 1)

### Usage:
```javascript
const outlinedBuffer = await generateOutline(spriteBuffer, { r: 255, g: 0, b: 0 }, 2);
```

## pixelSort

Applies a pixel sorting effect to an image.

### Parameters:
- `imageBuffer`: Buffer containing the image data
- `sortMode`: Sorting mode ('brightness' or 'red')

### Usage:
```javascript
const sortedBuffer = await pixelSort(imageBuffer, 'brightness');
```

## addNoise

Adds random noise to an image.

### Parameters:
- `imageBuffer`: Buffer containing the image data
- `noiseAmount`: Intensity of the noise (default: 10)

### Usage:
```javascript
const noisyBuffer = await addNoise(imageBuffer, 15);
```

## extractPalette

Extracts a color palette from an image.

### Parameters:
- `imageBuffer`: Buffer containing the image data
- `maxColors`: Maximum number of colors to extract (default: 16)

### Usage:
```javascript
const palette = await extractPalette(imageBuffer, 32);
```

## pixelPerfectScale

Scales an image using nearest-neighbor interpolation for pixel-perfect results.

### Parameters:
- `imageBuffer`: Buffer containing the image data
- `scale`: Scaling factor (default: 2)

### Usage:
```javascript
const scaledBuffer = await pixelPerfectScale(imageBuffer, 3);
```

## generateShadow

Generates a shadow effect for a sprite.

### Parameters:
- `imageBuffer`: Buffer containing the sprite image
- `shadowOptions`: Options for shadow generation (opacity, blur, offset, etc.)

### Usage:
```javascript
const shadowBuffer = await generateShadow(spriteBuffer, { opacity: 0.5, blur: 5 });
```

## createMirrorEffect

Creates a mirrored version of a sprite.

### Parameters:
- `imageBuffer`: Buffer containing the sprite image
- `direction`: Direction of mirroring ('horizontal' or 'vertical')
- `fade`: Whether to fade the mirrored part (boolean)

### Usage:
```javascript
const mirroredBuffer = await createMirrorEffect(spriteBuffer, 'horizontal', true);
```

## interpolateFrames

Generates intermediate frames between two images for smoother animations.

### Parameters:
- `frame1Buffer`: Buffer of the first frame
- `frame2Buffer`: Buffer of the second frame
- `steps`: Number of intermediate frames to generate

### Usage:
```javascript
const tweenFrames = await interpolateFrames(frame1, frame2, 5);
```

These utility functions provide a wide range of image processing capabilities for sprite generation and manipulation. They can be used individually or combined to create complex effects and animations for game development and other graphical applications.

  