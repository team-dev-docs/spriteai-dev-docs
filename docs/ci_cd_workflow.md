# CI/CD Workflow Documentation

This document explains the Continuous Integration and Continuous Deployment (CI/CD) workflow set up in the project using GitHub Actions.

## Workflow Overview

The workflow is defined in the `.github/workflows/gen_docs.yml` file and is named "Generate Internal Docs". It is designed to automatically generate internal documentation for the project when specific conditions are met.

## Trigger

The workflow is triggered on:
- Push events to the `main` branch
- Only when changes are made to JavaScript files (files with the `.js` extension)

## Workflow Steps

The workflow consists of a single job named `dev-docs-app` that runs on the latest version of Ubuntu. Here are the detailed steps:

1. **Checkout Repository**
   - Uses the `actions/checkout@v2` action to clone the repository into the GitHub Actions runner.

2. **Send Update to DevDocs**
   - This step sends a POST request to the DevDocs API to generate internal documentation.
   - It includes the following information in the request:
     - Timestamp: Current UTC time
     - API Key: Stored as a secret in the repository
     - Repository GitHub Personal Access Token: Stored as a secret
     - GitHub Repository: The name of the current repository
     - GitHub Actor: The username of the person who triggered the workflow

## Environment Variables

The workflow uses the following environment variables, which are stored as secrets in the repository:
- `API_KEY`: Used for authentication with the DevDocs API
- `REPO_GH_PATH`: GitHub Personal Access Token for the repository

## Security Considerations

- Sensitive information such as API keys and tokens are stored as GitHub secrets and not exposed in the workflow file.
- The API endpoint is secured with HTTPS.

This CI/CD workflow ensures that the internal documentation is automatically updated whenever changes are pushed to the main branch, keeping the documentation in sync with the codebase.