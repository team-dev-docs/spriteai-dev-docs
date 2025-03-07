# Custom Components Styling Guide

This guide explains how to create and style custom components within the Dev-Docs framework.

## Creating Custom Components

To create a custom component:

1. Create a new React component file in the `src/components` directory
2. Import and use the component in your markdown files using MDX syntax

Example:

```jsx
// src/components/MyCustomComponent.js
import React from 'react';

export default function MyCustomComponent({children}) {
  return (
    <div className="my-custom-component">
      {children}
    </div>
  );
}

// Usage in markdown:
import MyCustomComponent from '@site/src/components/MyCustomComponent';

<MyCustomComponent>
  Custom component content
</MyCustomComponent>
```

## Styling Custom Components

There are a few ways to style custom components:

### 1. CSS Modules

Create a CSS module file alongside your component:

```css
/* MyCustomComponent.module.css */
.wrapper {
  background-color: #f0f0f0;
  padding: 20px;
  border-radius: 4px;
}
```

Import and use in your component:

```jsx
import styles from './MyCustomComponent.module.css';

export default function MyCustomComponent({children}) {
  return (
    <div className={styles.wrapper}>
      {children}
    </div>
  );
}
```

### 2. Global SCSS

Add styles to `src/css/custom.scss`:

```scss
.my-custom-component {
  background-color: #f0f0f0;
  padding: 20px;
  border-radius: 4px;
}
```

Use the class in your component:

```jsx
export default function MyCustomComponent({children}) {
  return (
    <div className="my-custom-component">
      {children}
    </div>
  );
}
```

### 3. Inline Styles

Use inline styles for dynamic styling:

```jsx
export default function MyCustomComponent({children, bgColor}) {
  return (
    <div style={{backgroundColor: bgColor, padding: '20px', borderRadius: '4px'}}>
      {children}
    </div>
  );
}
```

## Theming

To support both light and dark themes:

1. Use CSS custom properties defined in `src/css/custom.scss`
2. Use the `data-theme` attribute for theme-specific styles

Example:

```scss
/* In src/css/custom.scss */
:root {
  --custom-component-bg: #f0f0f0;
}

[data-theme='dark'] {
  --custom-component-bg: #333;
}

.my-custom-component {
  background-color: var(--custom-component-bg);
}
```

This ensures your custom components adapt to the selected theme.

## Best Practices

1. Use consistent naming conventions for your components and styles
2. Leverage existing utility classes from the Dev-Docs framework when possible
3. Keep components modular and reusable
4. Test your components in both light and dark themes
5. Ensure responsive design by using flexible layouts and media queries

By following these guidelines, you can create and style custom components that integrate seamlessly with the Dev-Docs framework.