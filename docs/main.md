
  
  # Dev-Docs VS Code Extension Quickstart Guide

Welcome to the Dev-Docs VS Code Extension! This guide will help you get started with using the extension to generate and manage documentation for your projects.

## Installation

1. Open Visual Studio Code.
2. Go to the Extensions view by clicking on the square icon in the left sidebar or pressing `Ctrl+Shift+X`.
3. Search for "Dev-Docs" in the Extensions marketplace.
4. Click on the "Install" button next to the Dev-Docs extension.

## Getting Started

1. Open a project folder in VS Code where you want to generate documentation.

2. Create a new file named `dev-docs.json` in the root of your project.

3. In the `dev-docs.json` file, configure your documentation settings. Here's a basic example:

   ```json
   {
     "name": "My Project",
     "version": "1.0.0",
     "description": "A brief description of your project",
     "docsFolder": "docs"
   }
   ```

4. Save the `dev-docs.json` file.

## Generating Documentation

1. Open the Command Palette in VS Code by pressing `Ctrl+Shift+P` (Windows/Linux) or `Cmd+Shift+P` (Mac).

2. Type "Dev-Docs: Generate Documentation" and select the command.

3. The extension will analyze your project and generate documentation in the folder specified in your `dev-docs.json` file.

## Viewing Generated Documentation

1. After generation, you can find your documentation in the specified `docsFolder` (e.g., "docs").

2. Open the generated Markdown files to view the documentation for your project's components, functions, and modules.

## Customizing Documentation

1. You can customize the documentation output by modifying the `dev-docs.json` file. Add more configuration options as needed.

2. To exclude certain files or folders from documentation, add an `ignore` array to your `dev-docs.json`:

   ```json
   {
     ...
     "ignore": ["node_modules", "test", "*.spec.js"]
   }
   ```

## Updating Documentation

1. As you make changes to your project, you can regenerate the documentation by running the "Dev-docs: Generate Documentation" command again.

2. The extension will update existing documentation files and create new ones as necessary.

## Getting Help

- If you encounter any issues or have questions, please refer to the extension's documentation or submit an issue on the GitHub repository.

Happy documenting with Dev-Docs!
  
  