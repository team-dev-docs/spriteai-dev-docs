# Design System Overview

This document provides a comprehensive overview of our design system, including color palette, typography, and component styles.

## Color Palette

Our color palette consists of primary and secondary colors, with variations for each:

### Primary Colors
- Primary: `#313032` (dark gray)
- Secondary: `#A2A1A5` (light gray)
- Accent: `#0D0D0D` (near black)

### Secondary Colors
- Pink/Magenta: `rgba(199, 21, 133, 1)`
- Blue: `rgba(30, 144, 255, 1)`
- Brown/Terra Cotta: `rgba(160, 79, 49, 1)`

Each color has 12 variations, ranging from lightest (1) to darkest (12).

## Typography

We use a clean, modern sans-serif font throughout the design system:

- Headings: Bold weight, sizes ranging from 16px to 60px
- Body text: Regular weight, 16px
- Code: Monospace font, 14px

## Component Styles

### Cards
- General Card: Clean design with subtle border and box shadow
- Glass Card: Frosted glass effect with backdrop filter
- Gradient Hover Card: Gradient background on hover

### Buttons
- Primary Button: Solid background with rounded corners
- Gradient Button: Gradient background with hover effect
- Border Button: Transparent background with colored border

### Navigation
- Navbar: Fixed-top design with blur effect background
- Sidebar: Collapsible menu with active state highlighting
- Breadcrumbs: Simple text-based navigation path

### Content
- Table of Contents: Sticky sidebar with collapsible sections
- Code Blocks: Syntax highlighting and copy button
- Images: Responsive sizing with optional captions

### Layout
- Grid System: Flexible grid for responsive layouts
- Containers: Max-width containers for content alignment

## Responsive Design

The design system includes responsive breakpoints for:
- Mobile: Up to 767px
- Tablet: 768px to 1023px
- Desktop: 1024px and above

Components and layouts adjust automatically for optimal viewing on different devices.

## Themes

The design system supports both light and dark themes, with color variables that adjust automatically based on the selected theme.

## Customization

To customize the design system:
1. Modify color variables in `secondaryColors.scss`
2. Adjust typography in `root-and-body.scss`
3. Customize component styles in their respective SCSS files (e.g., `cards.scss`, `buttons.scss`)
4. Update responsive breakpoints in `custom.scss`

Always test changes across different themes and screen sizes to ensure consistency.