# Documentation Site

Welcome to documentation site! This site is built for content management (using GitHub as the backend). Below is a guide for developers and contributors on how to set up, configure, and maintain the project.

## Table of Contents

- [Introduction](#introduction)
- [Technologies](#technologies)
- [Installation](#installation)
- [Configuration](#configuration)
  - [Docusaurus Setup](#docusaurus-setup)
  - [Decap CMS Configuration](#decap-cms-configuration)
  - [Auth0 Integration](#auth0-integration)
- [Development Workflow](#development-workflow)
- [Team](#team)

## Introduction

This project provides a documentation site, enabling easy access to guides, tutorials, and references. The website is built with **Docusaurus**, a static site generator optimized for documentation. We use **Decap CMS** as a user-friendly interface for non-technical users to manage content directly from the browser. Client authentication is handled by **Auth0**, providing secure access to this site.

### Environment

```
REACT_APP_AUTH0_DOMAIN=
REACT_APP_AUTH0_CLIENT_ID=
```

## Technologies

- **[Docusaurus](https://docusaurus.io/)**: Static site generator tailored for documentation.
- **[Decap CMS](https://decapcms.org/)**: Headless CMS for content management (formerly Netlify CMS).
- **[GitHub](https://github.com/)**: Used as the backend for version control and content management.
- **[Auth0](https://auth0.com/)**: Authentication and authorization service for user management and secure access.

## Installation

### Prerequisites

Make sure you have the following installed on your machine:

- **Node.js** (v18+ recommended)
- **Yarn** or **npm**
- **Git**

### Steps

1. **Clone the repository:**

   ```bash
   git clone https://github.com/QuangLiem59/BaseDocumentationSite.git
   cd BaseDocumentationSite
   ```
2. **Install dependencies:**
    Using Yarn:
    ```bash
    yarn install
    ```
    
    Or using npm:
    ```bash
    npm install
    ```
3. **Run the development server:**
   ```bash
   yarn start
   ```
    This will start the site locally at `http://localhost:3000`.

## Configuration

### Docusaurus Setup

The site structure and content are powered by Docusaurus. Most of the content is stored in Markdown files, organized under the `docs` and `blog` folders.

#### Key Docusaurus Configuration
- `docusaurus.config.js`: Contains the site’s main configuration, such as the title, URL, theme settings, and plugins.
- `sidebars.js`: Defines the sidebar structure for the documentation.

### Decap CMS Configuration

The CMS is configured to allow content editing directly from a browser. We use GitHub as the backend to store content and handle version control.

The CMS configuration is found in the `static/admin/config.yml` file.

Key settings:

- `Backend`: GitHub is used as the backend, allowing content updates to be stored as commits.
- `Media Library`: GitHub is configured as the media library for uploading images and assets.

### Auth0 Integration

Auth0 is used to secure the CMS access. The configuration involves creating an Auth0 application and setting up the required authentication endpoints.

#### Steps to Configure Auth0:

1. Create an Auth0 Application in your Auth0 dashboard.
2. Update the `REACT_APP_AUTH0_DOMAIN` and `REACT_APP_AUTH0_CLIENT_ID` in `.env`.

## Development Workflow

- Start the development server using `yarn start` or `npm start`.
- Edit Markdown files in the `docs` or `blog` directories to add or update content.
- Push changes to GitHub to trigger content updates.

### Using Decap CMS

1. Navigate to `/admin` to access the CMS.
2. Log in using your Github account.
3. Add, edit, or delete content via the CMS interface.

Changes made via Decap CMS are automatically committed to the repository.