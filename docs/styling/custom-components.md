# Custom Components Styling Guide

This guide will help you create and style custom components within the Dev-Docs framework.

## Creating a Custom Component

1. Create a new file in the `src/components` directory with a `.js` or `.jsx` extension.
2. Define your component using React syntax.
3. Export your component at the end of the file.

Example:

```jsx
import React from 'react';

const CustomButton = ({ text, onClick }) => {
  return (
    <button className="custom-button" onClick={onClick}>
      {text}
    </button>
  );
};

export default CustomButton;
```

## Styling Your Custom Component

1. Create a new SCSS file in the `src/css` directory for your component.
2. Import the SCSS file in your component file.
3. Use BEM methodology for naming your classes.

Example:

```scss
// src/css/CustomButton.scss

.custom-button {
  padding: 10px 20px;
  background-color: var(--ifm-color-primary);
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: var(--ifm-color-primary-dark);
  }
}
```

## Using Tailwind CSS

Dev-Docs supports Tailwind CSS. You can use Tailwind utility classes directly in your components:

```jsx
const CustomCard = ({ title, content }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-xl font-bold mb-4">{title}</h2>
      <p className="text-gray-600">{content}</p>
    </div>
  );
};
```

## Theming

To support both light and dark themes:

1. Use CSS variables defined in `src/css/custom.scss`.
2. Add theme-specific styles using the `[data-theme='dark']` selector.

Example:

```scss
.custom-component {
  background-color: var(--ifm-background-color);
  color: var(--ifm-font-color-base);

  [data-theme='dark'] & {
    background-color: var(--ifm-color-gray-900);
  }
}
```

## Best Practices

1. Keep components modular and reusable.
2. Use consistent naming conventions for your components and styles.
3. Leverage existing Dev-Docs styles and components when possible.
4. Test your components in both light and dark themes.
5. Ensure your components are responsive and work well on different screen sizes.

By following these guidelines, you can create custom components that integrate seamlessly with the Dev-Docs framework and maintain a consistent look and feel across your documentation site.