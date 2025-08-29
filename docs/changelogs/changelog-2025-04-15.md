# Changelog 2025-04-15

## [Unreleased]

### Added
- New convenience functions for generating specific character types:
  - `generateNinja()`: Creates a ninja character spritesheet
  - `generateSpaceman()`: Creates an astronaut character spritesheet
  - `generateRobot()`: Creates a robot character spritesheet

### Changed
- Enhanced the `generateCharacterSpritesheet()` function to support new character types

### Details

#### New Character Generation Functions

The SpriteAI library now includes three new convenience functions for generating specific character types:

1. `generateNinja(options = {})`
   - Creates a ninja character with default states: idle, walk, run, attack, and sneak
   - Customizable through options parameter

2. `generateSpaceman(options = {})`
   - Creates an astronaut character with default states: idle, walk, run, and float
   - Customizable through options parameter

3. `generateRobot(options = {})`
   - Creates a robot character with default states: idle, walk, run, attack, and power-up
   - Customizable through options parameter

Each function uses predefined settings tailored for its character type, simplifying the sprite generation process for common game character archetypes.

#### Enhanced `generateCharacterSpritesheet()`

The core `generateCharacterSpritesheet()` function has been updated to support the new character types. It now includes improved flexibility in handling different animation states and character descriptions.

### Usage Examples

```javascript
import { generateNinja, generateSpaceman, generateRobot } from 'spriteAI';

// Generate a ninja character sprite
const ninjaSprite = await generateNinja();

// Generate a spaceman character sprite with custom options
const spacemanSprite = await generateSpaceman({
  framesPerState: 8,
  style: 'vector'
});

// Generate a robot character sprite
const robotSprite = await generateRobot();
```

These new functions provide a streamlined way to create character sprites for common game archetypes, enhancing the ease of use of the SpriteAI library for game developers and designers.