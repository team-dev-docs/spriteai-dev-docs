# Custom Components Styling Guide

This guide will help you create and style custom components within the Dev-Docs framework.

## Creating Custom Components

1. Define your component in a new JavaScript or TypeScript file.

2. Use React to create your component structure.

3. Import and use your component in your Docusaurus pages or documents.

## Styling Custom Components!!!

### Using SCSS

1. Create a new SCSS file for your component in the `src/css` directory!!!!!!

2. Use the BEM (Block Element Modifier) methodology for naming your classes.

3. Import your SCSS file in the `src/css/custom.scss` file.

Example:

```scss
// src/css/my-component.scss
.my-component {
  &__header {
    font-size: 24px;
    color: var(--ifm-color-primary);
  }

  &__content {
    margin-top: 1rem;
  }
}

// src/css/custom.scss
@import './my-component.scss';
```

### Using CSS Modules

1. Create a CSS module file with the `.module.css` extension.

2. Import the styles in your component file and use them as JavaScript objects.

Example:

```css
/* MyComponent.module.css */
.container {
  padding: 1rem;
  border: 1px solid var(--ifm-color-primary);
}

.title {
  font-size: 20px;
  color: var(--ifm-color-primary);
}
```

```jsx
// MyComponent.js
import React from 'react';
import styles from './MyComponent.module.css';

const MyComponent = () => (
  <div className={styles.container}>
    <h2 className={styles.title}>My Custom Component</h2>
  </div>
);

export default MyComponent;
```

### Theming

To ensure your custom components work with both light and dark themes:

1. Use CSS variables defined in `src/css/custom.scss` for colors and other theme-specific properties.

2. Create theme-specific styles using the `[data-theme='dark']` and `[data-theme='light']` selectors.

Example:

```scss
.my-component {
  background-color: var(--ifm-background-color);
  color: var(--ifm-font-color-base);

  [data-theme='dark'] & {
    border-color: var(--ifm-color-primary-dark);
  }

  [data-theme='light'] & {
    border-color: var(--ifm-color-primary-light);
  }
}
```

### Responsive Design

To make your custom components responsive:

1. Use flexbox or CSS Grid for layout.

2. Utilize media queries to adjust styles for different screen sizes.

3. Consider using Docusaurus' built-in responsive classes.

Example:

```scss
.my-component {
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
  }
}
```

By following these guidelines, you can create and style custom components that integrate seamlessly with the Dev-Docs framework and maintain consistency across your documentation site.
