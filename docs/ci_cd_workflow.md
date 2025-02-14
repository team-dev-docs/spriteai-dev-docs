# CI/CD Workflow Documentation

This document explains the Continuous Integration and Continuous Deployment (CI/CD) workflow set up for the spriteAI project.

## GitHub Actions Workflow: Generate Internal Docs

### Trigger
The workflow is triggered on every push to the `main` branch, specifically when changes are made to any JavaScript files in the repository.

### Workflow Steps

1. **Checkout Repository**
   - Uses the `actions/checkout@v2` action to clone the repository into the GitHub Actions runner.

2. **Send Update to DevDocs**
   - This step sends an update to the DevDocs application to generate internal documentation.
   - It performs the following actions:
     a. Generates a timestamp in UTC format.
     b. Retrieves necessary secrets and environment variables:
        - API_KEY
        - REPO_GH_PAT (GitHub Personal Access Token)
        - GITHUB_REPOSITORY
        - GITHUB_ACTOR (user who triggered the workflow)
     c. Sends a POST request to the DevDocs API endpoint:
        - URL: https://api.devdocsapp.com/company/spriteai/generate_internal_docs
        - Headers:
          - Content-Type: application/json
          - X-API-KEY: [API_KEY value]
        - Payload:
          - apiKey
          - repo_gh_pat
          - timestamp
          - githubRepository
          - githubActor

### Security Considerations
- The workflow uses GitHub Secrets to securely store and access sensitive information such as API keys and Personal Access Tokens.

### Purpose
This workflow automates the process of generating internal documentation whenever changes are pushed to the main branch of the repository. It ensures that the documentation is always up-to-date with the latest code changes.