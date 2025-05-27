# SpriteAI Overview: Your Sizzling AI Game Asset Generator! 🔥🎮

SpriteAI isn't just a library - it's your secret weapon for cooking up mouth-watering game assets using the hottest AI tech! Get ready to spice up your game development with these flavor-packed features and functions. 🌶️

## 🌟 Key Features (Now with Extra Zing!)

* Generate character spritesheets that'll make your players drool 🤤
* Whip up environment sprites so tasty, you'll want to live in them 🏞️
* Produce item sprites that'll have players begging for more loot 💎
* Fetch available animation states and sprite styles faster than you can say "pixel perfect" 🏃‍♂️💨

## 🍳 Main Functions (Where the Magic Happens)

### generateCharacterSpritesheet

This function is the master chef of character creation. Give it a description, and watch it cook up a character spritesheet that'll make your game sizzle!

```javascript
const result = await generateCharacterSpritesheet(description, options);
```

#### Returns:

A delicious object containing:

* `original`: URL of the freshly generated image, hot off the press!
* `spritesheet`: Base64-encoded PNG of the processed spritesheet, perfectly seasoned and ready to serve
* `metadata`: The secret recipe (detailed information) about your spritesheet

### generateEnvironmentSprites

Want to create an environment so immersive, players will forget they're not really there? This function has got you covered!

```javascript
const result = await generateEnvironmentSprites(description, options);
```

#### Parameters:

* `description`: A string describing your dream environment (e.g., "A neon-lit cyberpunk alley with hovering ads")
* `options`: An object to customize your environment to perfection:
  * `elements`: Number of environment elements to generate (default: 4)
  * `size`: Image size for that pixel-perfect look (default: '1024x1024')
  * `style`: Art style to make your environment pop (default: 'pixel-art')
  * `padding`: Padding between elements for that clean finish (default: 1)
  * `theme`: Set the mood with an environment theme (default: 'fantasy')

#### Returns:

A scrumptious object containing:

* `original`: URL of the original generated image, fresh from the oven
* `tileset`: Base64-encoded PNG of the processed tileset, ready to build worlds
* `metadata`: The blueprint of your environment (detailed information about the tileset)

### generateItemSprites

Need items that'll make your players' eyes pop? This function is your personal loot generator!

```javascript
const result = await generateItemSprites(description, options);
```

#### Parameters:

* `description`: A string describing your dream items (e.g., "Glowing magical artifacts from an ancient civilization")
* `options`: An object to fine-tune your item creation:
  * `itemCount`: Number of items to generate (default: 4)
  * `size`: Image size for that crisp look (default: '1024x1024')
  * `style`: Art style to make your items legendary (default: 'pixel-art')
  * `padding`: Padding between items for easy separation (default: 1)
  * `itemType`: Type of items to generate (default: 'equipment')
  * `background`: Background color to make your items pop (default: 'white')

#### Returns:

A treasure chest of an object containing:

* `original`: URL of the original generated image, straight from the item forge
* `itemSheet`: Base64-encoded PNG of the processed item sheet, ready for inventory
* `metadata`: The appraisal of your items (detailed information about the item sheet)

### fetchAvailableAnimationStates

Need to know what moves your sprites can bust? This function's got the 411 on all available animation states!

```javascript
const states = await fetchAvailableAnimationStates();
```

#### Returns:

An array of strings representing available animation states. It's like a dance move list for your sprites!

### fetchAvailableSpriteStyles

Want to switch up your game's look? This function will tell you all the hot styles your sprites can rock!

```javascript
const styles = await fetchAvailableSpriteStyles();
```

#### Returns:

An array of strings representing available sprite styles. It's a fashion catalog for your game assets!

## 🛠️ Utility Functions

### removeBackgroundColor

This sneaky internal function removes a specific background color from an image. It's like a green screen for your sprites!

## 🚀 Getting Started

Ready to add some AI spice to your game development kitchen? Here's how to import the secret ingredients:

```javascript
import { 
  generateCharacterSpritesheet, 
  generateEnvironmentSprites, 
  generateItemSprites, 
  fetchAvailableAnimationStates, 
  fetchAvailableSpriteStyles 
} from 'spriteAI';
```

Now you're ready to start cooking up some seriously tasty game assets! Just call the functions with your desired parameters and watch the magic happen.

For the full recipe book on each function and its usage, check out the specific function documentation. Happy cooking, game dev chefs! 👨‍🍳👩‍🍳🎮

Remember, with SpriteAI, your game assets will be so hot, you'll need oven mitts to handle them! 🔥🧤
