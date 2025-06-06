# Changelog

## [Unreleased] - 2025-04-18

### Added
- New convenience functions for generating specific character types:
  - `generateNinja()`: Creates a ninja character spritesheet
  - `generateSpaceman()`: Creates an astronaut character spritesheet
  - `generateRobot()`: Creates a robot character spritesheet

### Changed
- Enhanced `generateCharacterSpritesheet()` function to support new character types

### Details

#### New Character Generation Functions

Three new functions have been added to simplify the creation of specific character types:

1. `generateNinja(options = {})`
   - Default animation states: idle, walk, run, attack, sneak
   - Generates a ninja character with a black outfit and mask

2. `generateSpaceman(options = {})`
   - Default animation states: idle, walk, run, float
   - Generates an astronaut character with a space suit and helmet

3. `generateRobot(options = {})`
   - Default animation states: idle, walk, run, attack, power-up
   - Generates a robot character with mechanical limbs and glowing eyes

Each function uses the `generateCharacterSpritesheet()` internally with pre-configured options suitable for the specific character type. Users can customize these options by passing an `options` object to the functions.

#### Usage Example

```javascript
import { generateNinja, generateSpaceman, generateRobot } from 'spriteAI';

// Generate a ninja character spritesheet
const ninjaSprite = await generateNinja();

// Generate a spaceman character spritesheet with custom options
const spacemanSprite = await generateSpaceman({
  framesPerState: 8,
  style: 'vector'
});

// Generate a robot character spritesheet
const robotSprite = await generateRobot();
```

These new functions aim to streamline the character creation process for common game character types, enhancing developer productivity and maintaining consistency across sprite generations.