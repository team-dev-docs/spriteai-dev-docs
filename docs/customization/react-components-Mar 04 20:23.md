# Customizing React Components

Dev-Docs uses React components to build its user interface. While we don't provide extensive documentation on customizing individual components, there are a few ways you can integrate custom React components into your Dev-Docs site:

## Using MDX

Dev-Docs supports MDX, which allows you to embed React components directly in your Markdown files. To use a custom component:

1. Create your React component in a separate file
2. Import it at the top of your MDX file
3. Use the component in your MDX content

For example:

```jsx
import MyCustomComponent from '@site/src/components/MyCustomComponent';

# My Page Title

Here is my custom component:

<MyCustomComponent />
```

## Swizzling

For more advanced customization, you can use Docusaurus' "swizzling" feature to override default theme components with your own versions. See the [Docusaurus documentation on swizzling](https://docusaurus.io/docs/swizzling) for more details.

## Theme Components

Dev-Docs exposes some theme components that you can import and use in your custom React components:

```jsx
import {useThemeConfig} from '@docusaurus/theme-common';
```

Refer to the [Docusaurus Theme API documentation](https://docusaurus.io/docs/api/themes/configuration) for more information on available theme components and hooks.

While we don't provide extensive documentation on customizing React components, these methods should allow you to integrate custom components into your Dev-Docs site. For more advanced customization needs, you may need to refer to the Docusaurus documentation or explore the Dev-Docs source code.