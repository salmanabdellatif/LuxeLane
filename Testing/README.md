# Testing

This folder contains all the test files for the Luxelane project. The tests are organized into different subfolders based on the part of the application they are testing (e.g., controllers, models, routes, components, pages).

## Table of Contents

- [Testing Tools](#testing-tools)
- [Test Structure](#test-structure)
- [Running Tests](#running-tests)
- [Writing Tests](#writing-tests)
- [Examples](#examples)

## Testing Tools

The Luxelane project uses the following tools for testing:

- **Jest**: A JavaScript testing framework.
- **Supertest**: A library for testing Node.js HTTP servers.
- **React Testing Library**: A library for testing React components.

## Test Structure

The test files are organized as follows:

```plaintext
luxelane/
├── backend/
│   ├── tests/
│   │   ├── controllers/
│   │   │   ├── productController.test.js
│   │   │   ├── userController.test.js
│   │   │   └── ...
│   │   ├── models/
│   │   │   ├── productModel.test.js
│   │   │   ├── userModel.test.js
│   │   │   └── ...
│   │   ├── routes/
│   │   │   ├── productRoutes.test.js
│   │   │   ├── userRoutes.test.js
│   │   │   └── ...
│   │   ├── utils/
│   │   │   ├── auth.test.js
│   │   │   └── ...
│   │   └── ...
├── frontend/
│   ├── tests/
│   │   ├── components/
│   │   │   ├── ProductList.test.js
│   │   │   ├── ProductDetails.test.js
│   │   │   └── ...
│   │   ├── pages/
│   │   │   ├── HomePage.test.js
│   │   │   ├── ProductPage.test.js
│   │   │   └── ...
│   │   ├── App.test.js
│   │   ├── index.test.js
│   │   └── ...
└── README.md
```

## Running Tests

### Backend Tests

To run the backend tests:

1. Navigate to the `backend` directory:

   ```bash
   cd backend
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

3. Run the tests:
   ```bash
   npm test
   ```

### Frontend Tests

To run the frontend tests:

1. Navigate to the `frontend` directory:

   ```bash
   cd frontend
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

3. Run the tests:
   ```bash
   npm test
   ```
