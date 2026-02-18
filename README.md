## Getting Started

### Installation

Install the dependencies:

```bash
npm install
```

### Development

Start the development server with HMR:

```bash
npm run dev
```

Your application will be available at `http://localhost:5173`.

## Building for Production

Create a production build:

```bash
npm run build
```

## App Link

https://sporty-hazel.vercel.app/

## Overview

This project was implemented as part of task defined


The focus was on:

1. Component-based architecture

    UI components:
    * Pure rendering
    * Receive props only
    * No API calls

    Container components:
    * Handle React Query
    * Manage filtering state
    * Orchestrate data flow

    This improves:
    * Testability
    * Reusability
    * Maintainability

2. State management & API integration & Caching and performance

    * Server state → Managed with React Query
    * UI state → Managed locally with useState
    * Derived state → Memoized via custom hooks

    Why React Query?
    * Built-in caching
    * Reduced manual state handling
        
3. Product logic clarity
4. Clean, scalable structure


## AI Tool Usage

ChatGPT was used to:

* Generate initial component structure
* Suggest improvements for React Query configuration
* Suggest responsive grid implementation

All generated code was:

* Reviewed manually
* Refactored for clarity
* Adjusted to align with project requirements
* Tested locally