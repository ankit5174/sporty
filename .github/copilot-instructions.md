# Copilot Instructions for the Sporty Codebase

## Overview
This project is a modern, full-stack React application utilizing React Router. It supports server-side rendering, hot module replacement, and is styled with Tailwind CSS. The application is built with TypeScript and optimized for production.

## Architecture
- **Major Components**: The application is structured into several key directories:
  - `app/`: Contains the main application code, including routes and components.
  - `public/`: Holds static assets.
  - `Dockerfile`: Used for containerization.
  
- **Data Flow**: The application uses React Router for navigation and data loading, ensuring a seamless user experience.

## Developer Workflows
- **Installation**: Run `npm install` to install dependencies.
- **Development**: Start the development server with `npm run dev`. The application will be available at `http://localhost:5173`.
- **Building for Production**: Use `npm run build` to create a production build.
- **Docker Deployment**: Build and run the application using Docker:
  ```bash
  docker build -t my-app .
  docker run -p 3000:3000 my-app
  ```

## Project-Specific Conventions
- **Styling**: Tailwind CSS is configured by default. Developers can use any CSS framework as needed.
- **File Structure**: Follow the established directory structure for components and assets to maintain organization.

## Integration Points
- **External Dependencies**: The project relies on React Router for routing and Tailwind CSS for styling.
- **Cross-Component Communication**: Utilize React's context API or props for communication between components.

## Examples
- **Routing**: Check `app/routes.ts` for route definitions and how components are rendered based on the URL.
- **State Management**: Use React's built-in state management or context API for managing application state.

---

This document serves as a guide for AI coding agents to understand the structure and workflows of the Sporty codebase effectively.
