---
slug: /
sidebar_position: 1
---
# The Jolly Good generateSprite Documentation

Right then, let's have a chin-wag about this splendid `generateSprite` function, shall we?

## What's All This Then?
`generateSprite` is a rather clever bit of code that conjures up a sprite sheet image based on your description. It's like having a digital artist in your pocket, powered by some swanky AI wizardry!

## How to Give It a Go
To put this chap to work, you'll want to import it from the sprite module and give it a bell with a description of the character you fancy generating.

```javascript
import { sprite } from './path/to/sprite/module';

const result = await sprite.generateSprite(description, options);
```

## The Nitty-Gritty
- `description` (string, required): A jolly good explanation of the character you want to bring to life.
- `options` (object, optional):
  - `iterations` (number): How many times you want this function to have a crack at it.
  - `size` (string): How big you want your masterpiece (default: "1024x1024").
  - `save` (boolean): Fancy keeping it for posterity? Set this to true, mate.

## What You Get in Return
You'll receive a lovely package containing:
- `messages`: A JSON object with all the technical mumbo jumbo about frameHeight and frameWidth.
- `image`: A Base64-encoded image data URL of your spanking new sprite sheet.

## Show Me How It's Done, Gov

1. Whipping up a single sprite sheet:
```javascript
const result = await sprite.generateSprite("A dapper chap with a bowler hat");
console.log(result.messages);
console.log(result.image);
```

2. Going for multiple variations, because why not?
```javascript
const variations = await sprite.generateSprite("A cheeky bulldog in a Union Jack waistcoat", { iterations: 3 });
variations.forEach((variation, index) => {
  console.log(`Variation ${index + 1}:`, variation.messages);
});
```

## A Few Things to Keep in Mind, Old Chap
- This function relies on some rather posh AI models (DALL-E 3 and GPT), so results may vary. It's not an exact science, you know!
- The sprites are optimized for walking animations, arranged in a tidy 2x3 grid of 6 frames. Proper British efficiency, that.
- We convert images to grayscale because sometimes less is more, isn't it?
- When saving images, they're tucked away in an 'assets' folder, named after your description. How thoughtful!
- This might take a spot of time to finish, so pop the kettle on and have a cuppa while you wait.

Now off you go, have a jolly good time generating sprites!
