

  # Sprite Object API Reference

## Sprite Generation

### generateSprite(description, options)

Generates a sprite based on the given description.

- **Parameters:**
  - `description` (string): Description of the sprite to generate.
  - `options` (object, optional): Configuration options.
    - `size` (string, optional): Size of the generated image. Default: "1024x1024".
    - `save` (boolean, optional): Whether to save the generated image. Default: false.
    - `rotate` (number, optional): Rotation angle in degrees. Default: 0.
    - `tint` (object, optional): Color tint to apply.
    - `scale` (number, optional): Scale factor. Default: 1.0.
    - `generateMetadata` (boolean, optional): Whether to generate metadata. Default: false.

- **Returns:** Object containing the generated sprite information.

**Example:**
```javascript
const result = await sprite.generateSprite("A cute pixel art cat", { size: "512x512", save: true });
```

### generatePixelArt(description, options)

Generates pixel art based on the given description.

- **Parameters:**
  - `description` (string): Description of the pixel art to generate.
  - `options` (object, optional): Configuration options (same as `generateSprite`).

- **Returns:** Object containing the generated pixel art information.

**Example:**
```javascript
const pixelArt = await sprite.generatePixelArt("A retro spaceship", { size: "256x256" });
```

### generateIsometric(description, options)

Generates an isometric sprite based on the given description.

- **Parameters:**
  - `description` (string): Description of the isometric sprite to generate.
  - `options` (object, optional): Configuration options (same as `generateSprite`).

- **Returns:** Object containing the generated isometric sprite information.

**Example:**
```javascript
const isoSprite = await sprite.generateIsometric("A medieval castle", { size: "512x512" });
```

### generateAnimatedEmoji(description, options)

Generates a 4-frame animated emoji based on the given description.

- **Parameters:**
  - `description` (string): Description of the animated emoji to generate.
  - `options` (object, optional): Configuration options (same as `generateSprite`).

- **Returns:** Object containing the generated animated emoji information.

**Example:**
```javascript
const animatedEmoji = await sprite.generateAnimatedEmoji("A laughing face", { size: "128x128" });
```

### generateRetroConsole(description, consoleType, options)

Generates a sprite in the style of a specific retro console.

- **Parameters:**
  - `description` (string): Description of the sprite to generate.
  - `consoleType` (string): Type of retro console (e.g., "genesis", "msx", "commodore64").
  - `options` (object, optional): Configuration options (same as `generateSprite`).

- **Returns:** Object containing the generated retro console sprite information.

**Example:**
```javascript
const retroSprite = await sprite.generateRetroConsole("A sidescrolling platformer hero", "genesis", { size: "320x224" });
```

## Effects

### addOutline(description, outlineOptions, options)

Adds an outline to a generated sprite.

- **Parameters:**
  - `description` (string): Description of the base sprite.
  - `outlineOptions` (object): Outline configuration.
    - `color` (object, optional): Outline color (RGBA). Default: { r: 0, g: 0, b: 0, alpha: 255 }.
    - `thickness` (number, optional): Outline thickness. Default: 1.
  - `options` (object, optional): Sprite generation options.

- **Returns:** Object containing the original and outlined sprite images.

**Example:**
```javascript
const outlinedSprite = await sprite.addOutline("A simple tree", { color: { r: 255, g: 0, b: 0, alpha: 255 }, thickness: 2 });
```

### createGlitchArt(description, glitchOptions, options)

Creates a glitch art effect on a generated sprite.

- **Parameters:**
  - `description` (string): Description of the base sprite.
  - `glitchOptions` (object): Glitch effect configuration.
    - `sortMode` (string, optional): Pixel sorting mode. Default: 'brightness'.
    - `noiseAmount` (number, optional): Amount of noise to add. Default: 10.
  - `options` (object, optional): Sprite generation options.

- **Returns:** Object containing the original and glitched sprite images.

**Example:**
```javascript
const glitchedSprite = await sprite.createGlitchArt("A cyberpunk character", { sortMode: 'brightness', noiseAmount: 15 });
```

### addShadow(description, shadowOptions, options)

Adds a shadow effect to a generated sprite.

- **Parameters:**
  - `description` (string): Description of the base sprite.
  - `shadowOptions` (object): Shadow configuration.
    - `opacity` (number, optional): Shadow opacity. Default: 0.5.
    - `blur` (number, optional): Shadow blur amount. Default: 3.
    - `offsetX` (number, optional): Shadow X offset. Default: 5.
    - `offsetY` (number, optional): Shadow Y offset. Default: 5.
    - `color` (object, optional): Shadow color (RGB). Default: { r: 0, g: 0, b: 0 }.
  - `options` (object, optional): Sprite generation options.

- **Returns:** Object containing the original and shadowed sprite images.

**Example:**
```javascript
const shadowedSprite = await sprite.addShadow("A floating island", { opacity: 0.7, blur: 5, offsetX: 10, offsetY: 10 });
```

### addReflectionEffect(description, reflectionOptions, options)

Adds a reflection effect to a generated sprite.

- **Parameters:**
  - `description` (string): Description of the base sprite.
  - `reflectionOptions` (object): Reflection configuration.
    - `opacity` (number, optional): Reflection opacity. Default: 0.3.
    - `fade` (boolean, optional): Whether to fade the reflection. Default: true.
    - `flipY` (boolean, optional): Whether to flip the reflection vertically. Default: true.
    - `height` (number, optional): Reflection height as a percentage of original height. Default: 0.5.
    - `offset` (number, optional): Vertical offset of the reflection. Default: 0.
  - `options` (object, optional): Sprite generation options.

- **Returns:** Object containing the original and reflected sprite images.

**Example:**
```javascript
const reflectedSprite = await sprite.addReflectionEffect("A crystal gem", { opacity: 0.5, height: 0.7 });
```

## Animations

### createColorCycle(description, options)

Creates a color cycling animation for a generated sprite.

- **Parameters:**
  - `description` (string): Description of the base sprite.
  - `options` (object, optional): Sprite generation and animation options.

- **Returns:** Object containing the base sprite and color cycling animation frames.

**Example:**
```javascript
const colorCycle = await sprite.createColorCycle("A magical orb");
```

### createWaveEffect(description, waveOptions, options)

Applies a wave distortion effect to a generated sprite.

- **Parameters:**
  - `description` (string): Description of the base sprite.
  - `waveOptions` (object): Wave effect configuration.
    - `amplitude` (number, optional): Wave amplitude. Default: 10.
    - `frequency` (number, optional): Wave frequency. Default: 0.1.
    - `phase` (number, optional): Wave phase. Default: 0.
    - `direction` (string, optional): Wave direction ('horizontal' or 'vertical'). Default: 'horizontal'.
    - `animationFrames` (number, optional): Number of animation frames. Default: 1.
  - `options` (object, optional): Sprite generation options.

- **Returns:** Object containing the original sprite and wave effect frames.

**Example:**
```javascript
const waveSprite = await sprite.createWaveEffect("An ocean wave", { amplitude: 15, frequency: 0.2, animationFrames: 10 });
```

### createSpriteAnimation(description, frameCount, options)

Creates an animated sprite with interpolated frames.

- **Parameters:**
  - `description` (string): Description of the sprite to animate.
  - `frameCount` (number): Number of key frames to generate.
  - `options` (object, optional): Animation options.
    - `steps` (number, optional): Number of interpolation steps between key frames. Default: 3.

- **Returns:** Object containing original frames, interpolated frames, and total frame count.

**Example:**
```javascript
const animatedSprite = await sprite.createSpriteAnimation("A walking robot", 4, { steps: 5 });
```

## Utility Functions

### splitSpriteSheet(imageBuffer, columns, rows, options)

Splits a spritesheet into individual frames.

- **Parameters:**
  - `imageBuffer` (Buffer): Buffer containing the spritesheet image data.
  - `columns` (number): Number of columns in the spritesheet.
  - `rows` (number): Number of rows in the spritesheet.
  - `options` (object, optional): Additional options.

- **Returns:** Object containing individual frame buffers and metadata.

**Example:**
```javascript
const sheet = await sprite.generateSprite("A character spritesheet");
const frames = await sprite.splitSpriteSheet(Buffer.from(sheet.image.split(',')[1], 'base64'), 4, 2);
```

### optimizePalette(description, maxColors, options)

Optimizes the color palette of a generated sprite.

- **Parameters:**
  - `description` (string): Description of the sprite to generate.
  - `maxColors` (number): Maximum number of colors in the optimized palette.
  - `options` (object, optional): Sprite generation options.

- **Returns:** Object containing the original sprite, optimized palette, and palette size.

**Example:**
```javascript
const optimizedSprite = await sprite.optimizePalette("A colorful landscape", 16);
```

### createPixelPerfect(description, scale, options)

Creates a pixel-perfect scaled version of a generated sprite.

- **Parameters:**
  - `description` (string): Description of the sprite to generate.
  - `scale` (number): Scale factor for pixel-perfect scaling.
  - `options` (object, optional): Sprite generation options.

- **Returns:** Object containing the original and scaled sprite images.

**Example:**
```javascript
const pixelPerfectSprite = await sprite.createPixelPerfect("A tiny pixel art character", 4);
```

This API reference covers the main functionalities of the sprite object, including sprite generation, effects, animations, and utility functions. Each method is documented with its parameters, return values, and an example of usage.

  