# Test Execution Guide

## Overview

This guide explains how to execute the unit tests for the **Movie App Fu** project.

## Prerequisites

Before running tests, ensure you have the following installed on your local machine:

- **Node.js** (v18 or higher)
- **npm** or **yarn**
- **Git**

### Setting up the Project Locally

To run the tests, you'll need to set up the project on your local machine. Follow these steps:

1. **Clone the repository:**

   If you haven’t already cloned the project, do so by running:

   ```bash
   git clone https://github.com/javierpaez/movie-app-fu.git
   ```

2. **Navigate into the project directory:**

   ```bash
   cd movie-app-fu
   ```

3. **Install dependencies:**

   Run the following command to install the required dependencies:

   ```bash
   npm install
   ```

   Or, if you prefer using Yarn:

   ```bash
   yarn install
   ```

4. **Set up the environment:**

   If the project requires any specific environment variables, ensure you set them up in a `.env` file. Refer to the project's documentation or `.env.example` for a list of required variables.

---

## Running Unit Tests

Once you have set up the project locally, you can execute the unit tests.

### 1. Run Tests using npm:

```bash
npm test
```

Or using Yarn:

```bash
yarn test
```

This will run the test suite using Jest (assuming the project uses Jest for testing). Jest will look for test files in the `/src` directory, typically in files named `*.test.js` or `*.spec.js`.

### 2. Running Tests with Coverage Mode:

```bash
npm run test:coverage
```

Or with Yarn:

```bash
yarn test:coverage
```

---

## Expected Outcomes for Each Test Suite

Here’s an overview of the expected results when running each test suite.

### **1. Components Tests**

- **Description**: Tests for individual components to ensure they render correctly with the expected props and handle state and events as expected.
- **Expected Outcome**: All component tests should pass without errors.

### **2. Hooks Tests**

- **Description**: Tests for Hooks to check if they handle state transitions correctly.
- **Expected Outcome**: Hooks should return the expected behaiviour.

---

## Troubleshooting

### Common Issues

1. **Tests Fail Due to Missing Dependencies:**

   - If you encounter errors regarding missing packages, run `npm install` or `yarn install` again to ensure all dependencies are installed.

2. **Tests Not Running:**
   - Ensure that your test files are in the correct directory and named with the `.test.ts` or `.test.tsx` suffix.
