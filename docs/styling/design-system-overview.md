# Design System Overview

Our design system provides a comprehensive set of styles and components to ensure consistency across the Dev-Docs platform. This overview covers the key aspects of our design system, including color palette, typography, and component styles.

## Color Palette

Our color palette consists of primary and secondary colors, with variations for light and dark themes:

### Primary Colors
- Primary: `$color-1` (with 12 variations from lightest to darkest)

### Secondary Colors  
- Pink/Magenta: `$color-2` (with 12 variations)
- Blue: `$color-3` (with 12 variations)  
- Brown/Terra Cotta: `$color-4` (with 12 variations)
- Blue: `$color-5` (identical to color-3, with 12 variations)

Colors are defined using RGBA values and have corresponding hex codes for each variation. The color system is designed to be flexible and easily customizable.

## Typography

Our typography system uses a consistent set of styles for headings, paragraphs, and other text elements:

- Font Family: System fonts with fallbacks
- Headings: H1 to H6 with decreasing font sizes
- Body Text: 16px base size
- Line Heights: 1.5 for body text, adjusted for headings
- Font Weights: Regular (400), Medium (500), Bold (700)

## Component Styles

Key components in our design system include:

### Cards
- General Card
- Glass Card
- Gradient Hover Card

### Buttons
- Primary Button
- Secondary Button
- Gradient Button

### Navigation
- Navbar
- Sidebar
- Footer

### Content
- Table of Contents
- Code Blocks
- Blockquotes
- Tables

Components are styled using a combination of custom CSS and Tailwind utility classes, allowing for flexibility and consistency across the platform.

## Responsive Design

Our design system includes responsive breakpoints and styles to ensure a seamless experience across devices:

- Mobile: < 768px
- Tablet: 768px - 1023px
- Desktop: > 1024px

Media queries and flexible layouts are used to adapt components and typography for different screen sizes.

## Themes

The design system supports both light and dark themes, with color variables and styles adjusted accordingly. Theme toggling is handled via CSS custom properties and data attributes.

## Customization

To customize the design system:

1. Modify color variables in `secondaryColors.scss` and `design-preferences.scss`
2. Adjust typography styles in `headings-and-paragraphs.scss`
3. Customize component styles in their respective SCSS files (e.g., `cards.scss`, `buttons.scss`)
4. Extend or override Tailwind classes in `custom.scss`

Always test changes across different themes and screen sizes to ensure consistency and accessibility.