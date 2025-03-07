# Responsive Design Guide

This guide outlines the responsive design principles used in the Dev-Docs Docusaurus template.

## Breakpoints

The template uses the following main breakpoints:

- Mobile: < 768px 
- Tablet: 768px - 996px
- Desktop: > 996px

Media queries are used throughout the SCSS files to apply different styles at these breakpoints.

## Fluid Typography

Font sizes are set using relative units (rem) and scale fluidly between breakpoints using CSS clamp(). This ensures text remains readable across device sizes.

## Flexible Layouts 

Flexbox and CSS Grid are used extensively to create flexible, responsive layouts:

- The main content area uses a CSS Grid layout that adjusts columns based on screen size
- The navbar and sidebar use Flexbox to reflow content on smaller screens

## Responsive Images

Images use max-width: 100% to scale down proportionally on smaller screens. The srcset attribute is used for art direction and serving appropriately sized images.

## Mobile-First Approach

Styles are written mobile-first, with media queries used to progressively enhance the layout for larger screens.

## Touch-Friendly UI

Interactive elements like buttons and navigation have increased touch target sizes on mobile to improve usability.

## Testing

Responsive behavior is tested across a range of devices and browsers to ensure a consistent experience. The Chrome DevTools device toolbar is used extensively during development.

By following these principles, the template provides an optimal viewing experience across a wide range of devices.