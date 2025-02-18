# Sprite Generation Guide

This guide provides detailed instructions on how to use the sprite generation features in our library. It covers basic sprite creation, applying effects, and creating animated sprites.

## Table of Contents
1. Basic Sprite Generation
2. Applying Effects
3. Creating Animated Sprites
4. Customization Options

## 1. Basic Sprite Generation

To generate a basic sprite, use the `generateSprite` function:

```javascript
const result = await sprite.generateSprite("red car", {size: "256x256"});
```

This will return an object containing the generated sprite image and associated metadata.

## 2. Applying Effects

The library offers various effects you can apply to sprites:

### Add Outline
```javascript
const result = await sprite.addOutline("red car", {color: {r: 255, g: 0, b: 0, alpha: 255}, thickness: 2});
```

### Create Glitch Art
```javascript
const result = await sprite.createGlitchArt("red car", {sortMode: "brightness", noiseAmount: 15});
```

### Add Shadow
```javascript
const result = await sprite.addShadow("red car", {opacity: 0.5, blur: 5});
```

## 3. Creating Animated Sprites

To create animated sprites, use the following functions:

### Generate Spritesheet
```javascript
const result = await sprite.generateCharacterSpritesheet("warrior", {
  states: ['idle', 'walk', 'attack'],
  framesPerState: 4
});
```

### Create Color Cycling Animation
```javascript
const result = await sprite.createColorCycle("glowing orb");
```

## 4. Customization Options

Most functions accept an `options` object that allows for customization. Common options include:

- `size`: Specify the output size (e.g., "256x256")
- `style`: Set the art style (e.g., "pixel-art", "cartoon")
- `save`: Boolean to save the generated image to disk
- `tint`: Apply a color tint to the sprite
- `rotate`: Rotate the sprite by a specified angle
- `scale`: Scale the sprite up or down

Example with custom options:
```javascript
const result = await sprite.generatePixelArt("space ship", {
  size: "64x64",
  style: "retro",
  save: true,
  tint: {r: 100, g: 150, b: 255}
});
```

Refer to the specific function documentation for detailed information on available options and their effects.