
  
  # **internalTypeFilters Configuration**

**High-Level Overview**

The `internalTypeFilters` is a configuration array that specifies the types of elements to include or exclude during the documentation generation process. It is typically used in the project configuration file (e.g., `dev-docs.json`) to control the scope of the documentation.

**Why should I use this configuration?**

The `internalTypeFilters` configuration allows you to tailor the documentation output to your specific needs. By including or excluding certain types of elements, you can create a more focused and relevant documentation set. This can be particularly useful when working with large codebases or when you want to highlight specific aspects of your project.

**What are the parameters or arguments required?**

The `internalTypeFilters` array expects a list of string values representing the types of elements to include or exclude. The available types are:

- `file`
- `module`
- `namespace`
- `package`
- `class`
- `method`
- `property`
- `field`
- `constructor`
- `enum`
- `interface`
- `function`
- `variable`
- `constant`
- `string`
- `number`
- `boolean`
- `array`
- `object`
- `key`
- `null`
- `enummember`
- `struct`
- `event`
- `operator`
- `typeParameter`

**Prerequisites**

Before using the `internalTypeFilters` configuration, ensure that you have:

1. A project configuration file (e.g., `dev-docs.json`) in your project's root directory.
2. Familiarity with the structure and elements of your codebase.

**How do I use this configuration?**

1. Open your project configuration file (e.g., `dev-docs.json`).
2. Locate the `internalTypeFilters` array in the configuration object.
3. Add or remove the string values representing the types of elements you want to include or exclude from the documentation.
4. Save the configuration file.

For example, if you want to include only classes, methods, and properties in your documentation, your `internalTypeFilters` array might look like this:

```json
"internalTypeFilters": [
  "class",
  "method",
  "property"
]
```

By configuring the `internalTypeFilters` array, you can control the granularity and focus of your documentation, making it easier for users to navigate and understand the relevant aspects of your codebase.
  
  