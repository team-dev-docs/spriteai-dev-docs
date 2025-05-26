# Sprite Test Documentation

## Overview

This document provides an overview of the test suite for the SpriteAI library, specifically focusing on the `tests/sprite.test.js` file. These tests ensure the proper functionality of various sprite generation and manipulation features.

## Test Structure

The test file is organized into several describe blocks, each focusing on a specific function or feature of the SpriteAI library.

### Sprite Generation Tests

```javascript
describe('sprite', () => {
  describe('generateSprite', () => {
    // Tests for generateSprite function
  });

  describe('generateHouseAsset', () => {
    // Tests for generateHouseAsset function
  });
});
```

These tests cover the core sprite generation functionality, including character sprites and house assets.

### Environment Sprite Generation Tests

```javascript
describe('generateEnvironmentSprites', () => {
  // Tests for generateEnvironmentSprites function
});
```

This section tests the generation of environment sprites, such as tilesets for game backgrounds.

### Item Sprite Generation Tests

```javascript
describe('generateItemSprites', () => {
  // Tests for generateItemSprites function
});
```

These tests focus on the generation of item sprites, which can be used for in-game objects or inventory items.

### Animation State and Style Tests

```javascript
describe('fetchAvailableAnimationStates', () => {
  // Tests for fetchAvailableAnimationStates function
});

describe('fetchAvailableSpriteStyles', () => {
  // Tests for fetchAvailableSpriteStyles function
});
```

These tests ensure that the functions for fetching available animation states and sprite styles work correctly.

## Key Test Cases

### Generate Sprite Test

```javascript
it('should generate a sprite with the correct frame dimensions', async () => {
  const description = 'knight';
  const options = { iterations: 1 };
  const result = await sprite.generateSprite(description, options);

  expect(result).toBeDefined();
  expect(result.length).toBe(1);

  const { messages, image } = result[0];
  expect(messages).toBeDefined();
  expect(image).toBeDefined();

  const frameInfo = JSON.parse(messages.content);
  expect(frameInfo).toHaveProperty('frameWidth');
  expect(frameInfo).toHaveProperty('frameHeight');

  const buffer = Buffer.from(image.split(',')[1], 'base64');
  const imageData = await sharp(buffer).metadata();
  expect(imageData.width).toBe(1024);
  expect(imageData.height).toBe(1024);
});
```

This test case verifies that the `generateSprite` function produces a sprite with the correct dimensions and properties.

### Generate Environment Sprites Test

```javascript
it('should generate environment sprites with the correct dimensions', async () => {
  const description = 'a fantasy forest';
  const options = {
    elements: 6,
    size: '1024x1024',
    style: 'pixel-art',
    padding: 2,
    theme: 'fantasy',
    save: false
  };
  const result = await generateEnvironmentSprites(description, options);

  expect(result).toBeDefined();
  expect(result.tileset).toBeDefined();
  expect(result.metadata).toBeDefined();
  expect(result.metadata.elements).toBe(options.elements);
  expect(result.metadata.theme).toBe(options.theme);
});
```

This test ensures that the `generateEnvironmentSprites` function creates environment sprites with the specified options and correct metadata.

## Running the Tests

To run these tests, ensure you have the necessary dependencies installed and use a testing framework compatible with Jest. You can typically run the tests using a command like:

```bash
npm test tests/sprite.test.js
```

## Conclusion

The `tests/sprite.test.js` file contains comprehensive tests for the SpriteAI library's core functionalities. These tests cover sprite generation, environment and item sprite creation, and utility functions for animation states and styles. By maintaining and expanding these tests, you can ensure the reliability and correctness of the SpriteAI library as it evolves.