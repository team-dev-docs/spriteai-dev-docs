# Great Functions in SpriteAI

This document outlines the key functions available in the SpriteAI library, their purposes, and how to use them.

## Table of Contents

1. generateCharacterSpritesheet

2. generateEnvironmentSprites

3. generateItemSprites

4. fetchAvailableAnimationStates

5. fetchAvailableSpriteStyles

## generateCharacterSpritesheet

This function generates a character spritesheet based on a given description and options.

### Usage

```javascript
const result = await generateCharacterSpritesheet(description, options);
```

### Parameters

* `description` (string): A description of the character to generate.

* `options` (object, optional): Configuration options for the spritesheet generation.

  * `states` (array of strings): Animation states to generate. Default: `['idle', 'walk', 'run', 'attack']`

  * `framesPerState` (number): Number of frames per animation state. Default: `6`

  * `size` (string): Output size of the image. Default: `'1024x1024'`

  * `style` (string): Art style of the spritesheet. Default: `'pixel-art'`

  * `padding` (number): Padding between sprites. Default: `1`

  * `direction` (string): Base direction of the character. Default: `'right'`

  * `save` (boolean): Whether to save the generated image to disk.

### Return Value

The function returns an object containing:

* `original`: URL of the original generated image.

* `spritesheet`: Base64-encoded string of the processed spritesheet.

* `metadata`: Object containing information about the generated spritesheet.

## generateEnvironmentSprites

This function generates environment sprites based on a given description and options.

### Usage

```javascript
const result = await generateEnvironmentSprites(description, options);
```

### Parameters

* `description` (string): A description of the environment to generate.

* `options` (object, optional): Configuration options for the environment sprite generation.

  * `elements` (number): Number of different elements to generate. Default: `4`

  * `size` (string): Output size of the image. Default: `'1024x1024'`

  * `style` (string): Art style of the sprites. Default: `'pixel-art'`

  * `padding` (number): Padding between sprites. Default: `1`

  * `theme` (string): Theme of the environment. Default: `'fantasy'`

  * `save` (boolean): Whether to save the generated image to disk.

### Return Value

The function returns an object containing:

* `original`: URL of the original generated image.

* `tileset`: Base64-encoded string of the processed tileset.

* `metadata`: Object containing information about the generated environment sprites.

## generateItemSprites

This function generates item sprites based on a given description and options.

### Usage

```javascript
const result = await generateItemSprites(description, options);
```

### Parameters

* `description` (string): A description of the items to generate.

* `options` (object, optional): Configuration options for the item sprite generation.

  * `itemCount` (number): Number of different items to generate. Default: `4`

  * `size` (string): Output size of the image. Default: `'1024x1024'`

  * `style` (string): Art style of the sprites. Default: `'pixel-art'`

  * `padding` (number): Padding between sprites. Default: `1`

  * `itemType` (string): Type of items to generate. Default: `'equipment'`

  * `background` (string): Background color of the spritesheet. Default: `'white'`

  * `save` (boolean): Whether to save the generated image to disk.

### Return Value

The function returns an object containing:

* `original`: URL of the original generated image.

* `itemSheet`: Base64-encoded string of the processed item sheet.

* `metadata`: Object containing information about the generated item sprites.

## fetchAvailableAnimationStates

This function returns an array of available animation states that can be used in the `generateCharacterSpritesheet` function.

### Usage

```javascript
const states = await fetchAvailableAnimationStates();
```

### Return Value

An array of strings representing available animation states, e.g., `['idle', 'walk', 'run', 'attack', 'jump', 'fall', 'hurt', 'die']`.

## fetchAvailableSpriteStyles

This function returns an array of available sprite styles that can be used in various sprite generation functions.

### Usage

```javascript
const styles = await fetchAvailableSpriteStyles();
```

### Return Value

An array of strings representing available sprite styles, e.g., `['pixel-art', 'vector', '3d', 'hand-drawn', 'anime']`.

***

These functions provide a powerful set of tools for generating game assets programmatically. By leveraging AI-generated images and automated processing, you can quickly create character spritesheets, environment tiles, and item sprites for your game development projects.
