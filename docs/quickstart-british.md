# Quickstart Guide for SpriteAI (British Edition)

Welcome, chaps! This guide will walk you through setting up and using SpriteAI in a jolly good manner. Let's get cracking!

## Prerequisites

Before we begin, ensure you have the following installed on your machine:

- Node.js (version 12 or higher, if you please)
- npm (typically bundled with Node.js, what luck!)

## Installation

Right then, let's install SpriteAI:

```bash
npm install spriteai
```

Splendid! That'll do the trick.

## Configuration

Now, let's set up your API key. You'll need to pop it into your environment variables or a `.env` file:

```bash
SPRITEAI_API_KEY=your_api_key_here
```

Don't forget to keep your API key under wraps, old chap!

## Usage

### Initialising the SpriteAI Client

First things first, let's initialise the SpriteAI client in your code:

```javascript
import { SpriteAI } from 'spriteai';

const spriteAI = new SpriteAI(process.env.SPRITEAI_API_KEY);
```

Jolly good! We're ready to go.

### Generating a Sprite

Now, let's generate a smashing sprite:

```javascript
const prompt = 'A dapper gentleman sipping tea';
const options = {
  style: 'pixel_art',
  size: '64x64'
};

try {
  const sprite = await spriteAI.generateSprite(prompt, options);
  console.log('Sprite generated successfully!');
  console.log(sprite.url);
} catch (error) {
  console.error('Oh dear, something went wrong:', error);
}
```

Marvellous! You've generated your first sprite.

### Customising Your Sprite

Fancy a bit more control? Not to worry, we've got you covered:

```javascript
const advancedOptions = {
  style: 'pixel_art',
  size: '128x128',
  colours: ['#FF0000', '#00FF00', '#0000FF'],
  background: 'transparent'
};

const customSprite = await spriteAI.generateSprite('A red London bus', advancedOptions);
```

That's the ticket! A perfectly customised sprite.

## Error Handling

Should things go pear-shaped, SpriteAI throws proper errors. It's good form to catch them:

```javascript
try {
  // Your SpriteAI code here
} catch (error) {
  if (error instanceof SpriteAIError) {
    console.error('SpriteAI Error:', error.message);
    // Handle SpriteAI-specific errors
  } else {
    console.error('An unexpected error occurred:', error);
    // Handle other errors
  }
}
```

## Wrapping Up

There you have it! You're now ready to create splendid sprites with SpriteAI. Remember to mind your API usage and keep your key safe. If you run into any hiccups, do check the full documentation or reach out to our support team.

Cheerio, and happy sprit... erm, coding!