# Generate Robot

`generateRobot` is a function that creates robot or mecha-style sprite variations of existing sprites. This feature is part of the sprite generation toolkit that can transform regular sprites into mechanized versions.

## Basic Usage

```javascript
const robotSprite = await sprite.generateRobot({
  description: "Small cute robot",
  armorLevel: "medium",
  colorScheme: "blue and silver",
  techLevel: "advanced"  
});
```

## Options

The `generateRobot` function accepts the following options:

| Parameter | Type | Description | Default |
|-----------|------|-------------|--------|
| `description` | String | Description of the robot to generate | Required |
| `armorLevel` | String | Level of armor: "light", "medium", or "heavy" | "medium" |
| `colorScheme` | String | Colors to use for the robot | "gray and silver" |
| `techLevel` | String | Technology level: "basic", "advanced", or "futuristic" | "advanced" |

## Return Value

The function returns a Promise that resolves to an object with the following properties:

```javascript
{
  originalSprite: "data:image/png;base64,...", // Base64-encoded original sprite
  robotSprite: "data:image/png;base64,...", // Base64-encoded robot sprite
  settings: {  // The settings that were applied
    armorLevel: "medium",
    colorScheme: "blue and silver",
    techLevel: "advanced"
  }
}
```

## How It Works

The `generateRobot` function uses the `createMechaSpriteVariation` method internally to transform a standard sprite into a robotic version. It applies various transformations including:

1. Color manipulation for a mechanical appearance
2. Adding metallic highlights and shadows
3. Applying detail enhancement based on the armor level
4. Adjusting color scheme based on the provided colors
5. Adding tech-appropriate details based on the technology level

## Examples

### Basic Robot

```javascript
const robotSprite = await sprite.generateRobot({
  description: "Robot warrior",
  armorLevel: "light",
  colorScheme: "red and gray",
  techLevel: "basic"
});
```

### Heavy Mecha

```javascript
const mechaSprite = await sprite.generateRobot({
  description: "Battle mecha",
  armorLevel: "heavy",
  colorScheme: "military green and black",
  techLevel: "futuristic"
});
```

### Colorful Robot

```javascript
const colorfulBot = await sprite.generateRobot({
  description: "Helper robot",
  armorLevel: "medium",
  colorScheme: "bright yellow and white",
  techLevel: "advanced"
});
```

## Tips

- For best results, start with a clear, distinct sprite that has well-defined features
- Experiment with different color schemes to achieve various aesthetics
- The "heavy" armor level will create more bulky, tank-like robots
- The "futuristic" tech level will add more glowing and advanced-looking details