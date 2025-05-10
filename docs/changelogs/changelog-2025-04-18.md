# SpriteAI Changelog: April 18, 2025

## New Features and Improvements

### 1. Enhanced Character Spritesheet Generation

We're excited to announce significant improvements to our `generateCharacterSpritesheet` function:

- **Customizable Animation States**: Users can now specify custom animation states beyond the default ones (idle, walk, run, attack). This allows for more diverse and game-specific character animations.

- **Flexible Frame Count**: The number of frames per animation state is now customizable, allowing for smoother or more detailed animations as needed.

- **Multiple Style Options**: In addition to the classic pixel-art style, users can now generate spritesheets in various styles including vector, 3D, hand-drawn, and anime.

- **Directional Control**: A new option allows users to specify the direction the character should face in the spritesheet.

### 2. New Environment Sprite Generation

Introducing the `generateEnvironmentSprites` function:

- Create tileset-style environmental elements for game backgrounds and scenery.
- Customizable number of elements, style, and theme.
- Perfect for quickly generating cohesive game environments.

### 3. Item Sprite Generation

We've added the `generateItemSprites` function:

- Generate collections of item sprites for game inventories, pickups, and more.
- Customizable item count, style, and item type.
- Ideal for creating consistent item sets for your games.

### 4. New Utility Functions

To support these enhanced features, we've added two new utility functions:

- `fetchAvailableAnimationStates`: Retrieve a list of available animation states for character spritesheets.
- `fetchAvailableSpriteStyles`: Get a list of available sprite styles for all sprite generation functions.

## API Changes

### generateCharacterSpritesheet

```javascript
generateCharacterSpritesheet(description, options)
```

New options:
- `states`: Array of animation states (default: ['idle', 'walk', 'run', 'attack'])
- `framesPerState`: Number of frames per animation state (default: 6)
- `style`: Sprite style (default: 'pixel-art')
- `direction`: Character facing direction (default: 'right')

### generateEnvironmentSprites

```javascript
generateEnvironmentSprites(description, options)
```

Options:
- `elements`: Number of environment elements to generate (default: 4)
- `size`: Image size (default: '1024x1024')
- `style`: Sprite style (default: 'pixel-art')
- `padding`: Padding between elements (default: 1)
- `theme`: Environment theme (default: 'fantasy')

### generateItemSprites

```javascript
generateItemSprites(description, options)
```

Options:
- `itemCount`: Number of items to generate (default: 4)
- `size`: Image size (default: '1024x1024')
- `style`: Sprite style (default: 'pixel-art')
- `padding`: Padding between items (default: 1)
- `itemType`: Type of items to generate (default: 'equipment')
- `background`: Background color (default: 'white')

## Conclusion

These updates significantly expand the capabilities of our SpriteAI toolkit, offering game developers more flexibility and control over their sprite generation process. Whether you're creating characters, environments, or items, SpriteAI now provides a comprehensive suite of tools to bring your game assets to life.

We're excited to see what our users create with these new features. As always, we welcome your feedback and suggestions for future improvements!