
  
  # Dev-Docs VS Code Extension Quickstart Guide

Welcome to the Dev-Docs VS Code Extension! This guide will help you get started quickly with using this powerful documentation tool.

## Installation

1. Open Visual Studio Code
2. Go to the Extensions view (Ctrl+Shift+X)
3. Search for "Dev-Docs"
4. Click "Install" to add the extension to your VS Code

## Quickstart

1. Open your project folder in VS Code

2. Create a new file called `dev-docs.json` in your project root

3. Add the following configuration to `dev-docs.json`:
   ```json
   {
     "outputDir": "docs",
     "includePatterns": ["**/*.js", "**/*.ts"],
     "excludePatterns": ["**/node_modules/**", "**/test/**"],
     "templates": {
       "function": "templates/function.md",
       "class": "templates/class.md"
     }
   }
   ```

4. Create a `templates` folder in your project root

5. Add `function.md` and `class.md` template files to the `templates` folder

6. Open the Command Palette (Ctrl+Shift+P)

7. Type "Dev-Docs: Generate Documentation" and press Enter

8. The extension will analyze your code and generate documentation in the specified `outputDir`

9. Review the generated documentation in the `docs` folder

## Customization

- Modify the `dev-docs.json` file to adjust include/exclude patterns or change the output directory
- Edit the template files in the `templates` folder to customize the documentation format
- Use JSDoc comments in your code for more detailed documentation generation

## Support

If you encounter any issues or have questions, please visit our GitHub repository or contact our support team.

Happy documenting!
  
  