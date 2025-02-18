# Sprite Generation Guide

This guide provides instructions on how to use the sprite generation features of the spriteAI library.

## Basic Sprite Generation

To generate a basic sprite:

```javascript
const result = await sprite.generateSprite("a cute cat");
```

This will return an object containing:
- `messages`: Metadata about the generated sprite
- `image`: The sprite image as a base64-encoded data URL

## Applying Effects

### Adding an Outline

```javascript 
const result = await sprite.addOutline("a cute cat", 
  { color: { r: 255, g: 0, b: 0, alpha: 255 }, thickness: 2 });
```

This will generate a sprite with a red outline 2 pixels thick.

### Adding a Shadow

```javascript
const result = await sprite.addShadow("a cute cat", 
  { opacity: 0.5, blur: 5, offsetX: 5, offsetY: 5 });
```

This generates a sprite with a semi-transparent shadow.

### Adding Weather Effects

```javascript
const result = await sprite.addWeatherEffect("a landscape", 
  { type: "rain", intensity: 0.7, frames: 10 });
```

This creates an animated rainy effect over the sprite.

## Creating Animated Sprites

### Generating a Spritesheet

```javascript
const result = await sprite.generateCharacterSpritesheet("a knight character", {
  states: ["idle", "walk", "attack"],
  framesPerState: 4,
  size: "1024x1024" 
});
```

This generates a full character spritesheet with multiple animation states.

### Creating a Simple Animation

```javascript
const result = await sprite.createSpriteAnimation("a bouncing ball", 
  4, { steps: 3 });
```

This creates 4 keyframes of a bouncing ball animation, with 3 interpolated frames between each keyframe.

## Customization Options

Most functions accept an `options` object that can include:

- `size`: Output image size (e.g. "1024x1024")
- `style`: Art style (e.g. "pixel-art", "cartoon")
- `save`: Boolean to save the image to disk
- `iterations`: Number of sprites to generate

Specific effects may have additional options, like `intensity`, `color`, or `frames` for animations.

Refer to the individual function documentation for full details on available options.