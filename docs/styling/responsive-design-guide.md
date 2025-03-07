# Responsive Design Guide

This guide outlines the responsive design principles used in the Dev-Docs template to ensure optimal viewing across various devices and screen sizes.

## Key Principles

1. Mobile-first approach
2. Fluid grids and layouts
3. Flexible images and media
4. CSS media queries
5. Breakpoints for different device sizes

## Breakpoints

The template uses the following main breakpoints:

- Mobile: Up to 767px
- Tablet: 768px - 991px
- Desktop: 992px and above

## Responsive Techniques

### Fluid Grids

We use percentage-based widths and Flexbox/CSS Grid for layout to create fluid, adaptable designs.

```scss
.container {
  display: flex;
  flex-wrap: wrap;
}

.column {
  flex: 1 1 100%;
  
  @media (min-width: 768px) {
    flex: 1 1 50%;
  }
  
  @media (min-width: 992px) {
    flex: 1 1 33.333%;
  }
}
```

### Flexible Images

Images are made responsive using max-width:

```scss
img {
  max-width: 100%;
  height: auto;
}
```

### Media Queries

Media queries are used extensively to adjust layouts and styling based on screen size:

```scss
@media (max-width: 767px) {
  // Mobile styles
}

@media (min-width: 768px) and (max-width: 991px) {
  // Tablet styles
}

@media (min-width: 992px) {
  // Desktop styles
}
```

### Typography

Font sizes are set using relative units (rem) and adjusted for different screen sizes:

```scss
html {
  font-size: 16px;
}

@media (min-width: 768px) {
  html {
    font-size: 18px;
  }
}

h1 {
  font-size: 2rem;
  
  @media (min-width: 992px) {
    font-size: 2.5rem;
  }
}
```

## Component-Specific Responsiveness

### Navbar

The navbar collapses into a mobile menu on smaller screens:

```scss
.navbar {
  @media (max-width: 767px) {
    .navbar__items {
      display: none;
    }
    
    .navbar__toggle {
      display: block;
    }
  }
}
```

### Sidebar

The sidebar becomes a collapsible menu on mobile:

```scss
.sidebar {
  @media (max-width: 767px) {
    position: fixed;
    transform: translateX(-100%);
    transition: transform 0.3s ease;
    
    &.sidebar--open {
      transform: translateX(0);
    }
  }
}
```

### Cards and Grids

Card layouts adjust their column count based on screen size:

```scss
.card-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (min-width: 992px) {
    grid-template-columns: repeat(3, 1fr);
  }
}
```

By following these responsive design principles, the Dev-Docs template ensures a consistent and optimal user experience across all devices and screen sizes.