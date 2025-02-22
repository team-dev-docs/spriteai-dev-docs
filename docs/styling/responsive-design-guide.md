# Responsive Design Guide

This guide outlines the responsive design principles used in the Dev-Docs Docusaurus template.

## Breakpoints

The template uses the following main breakpoints for responsive layouts:

- Mobile: Up to 600px
- Tablet: 601px - 996px 
- Desktop: 997px and above

Media queries are used throughout the SCSS files to apply different styles at these breakpoints.

## Fluid Typography

Font sizes are set using rem units and scale fluidly based on viewport width. This allows text to remain readable across devices without needing to set explicit font sizes for each breakpoint.

## Flexbox and Grid

Flexible box and CSS grid layouts are used extensively to create responsive page structures that reflow naturally on different screen sizes.

## Mobile-First Approach

Styles are generally written for mobile first, then progressively enhanced for larger screens using min-width media queries.

## Responsive Images

Images use max-width: 100% to scale down proportionally on smaller screens. Important images may have specific mobile/desktop versions.

## Collapsible Elements

The sidebar, table of contents, and other secondary content collapse into expandable menus on mobile for a cleaner interface.

## Key Responsive Components

- Navbar: Collapses to hamburger menu on mobile
- Sidebar: Becomes an off-canvas menu on mobile  
- Main content: Full width on mobile, constrained width on desktop
- Footer: Stacks vertically on mobile

## Testing Responsive Behavior

Always test the site thoroughly across devices and browsers to ensure a consistent experience at all screen sizes.