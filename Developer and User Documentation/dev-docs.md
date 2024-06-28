# Luxelane Developer Documentation

Welcome to the Luxelane developer documentation. This guide provides detailed information on how to set up, develop, and deploy the Luxelane project.

## Table of Contents

- [Project Overview](#project-overview)
- [System Requirements](#system-requirements)
- [Installation](#installation)
- [Project Structure](#project-structure)
- [API Documentation](#api-documentation)
  - [Products API](#products-api)
  - [Authentication API](#authentication-api)
- [Frontend Development](#frontend-development)
  - [React Components](#react-components)
  - [State Management](#state-management)
  - [Styling](#styling)
- [Backend Development](#backend-development)
  - [Express Server](#express-server)
  - [Database](#database)
  - [File Uploads](#file-uploads)
- [Deployment](#deployment)
  - [Vercel Deployment](#vercel-deployment)
  - [Backend Deployment](#backend-deployment)
- [Testing](#testing)
- [Contact and Support](#contact-and-support)

## Project Overview

Luxelane is an e-commerce platform for luxury fashion and accessories. It allows users to browse, search, and purchase products. Admins can manage product listings, categories, and orders.

## System Requirements

- Node.js v14 or higher
- npm v6 or higher
- MongoDB v4 or higher
- Modern web browser (Chrome, Firefox, Safari)

## Installation

### Backend

1. Clone the repository:

   ```bash
   git clone https://github.com/salmanabdellatif/luxelane.git
   cd luxelane
   ```

2. Install backend dependencies:

   ```bash
   cd ./backend
   npm install
   ```

3. Create a `.env` file in the `backend` directory with the following variables:

   ```plaintext
   PORT=5000
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   ```

4. Start the backend server:
   ```bash
   npm start
   ```

### Frontend

1. Navigate to the `frontend` directory:

   ```bash
   cd ./frontend
   ```

2. Install frontend dependencies:

   ```bash
   npm install
   ```

3. Start the React development server:

   ```bash
   npm start
   ```

4. Open your browser and navigate to `http://localhost:3000`.

## API Documentation

### Authentication API

#### Register User

- **Endpoint:** `POST /api/auth/register`
- **Description:** Registers a new user.
- **Request Body:**
  ```json
  {
    "name": "User Name",
    "email": "user@example.com",
    "password": "password123"
  }
  ```
- **Response:**
  ```json
  {
    "message": "User registered successfully",
    "user": {
      "_id": "60d...8e",
      "name": "User Name",
      "email": "user@example.com",
      ...
    }
  }
  ```

#### Login User

- **Endpoint:** `POST /api/auth/login`
- **Description:** Logs in a user.
- **Request Body:**
  ```json
  {
    "email": "user@example.com",
    "password": "password123"
  }
  ```
- **Response:**
  ```json
  {
    "message": "User logged in successfully",
    "token": "jwt_token",
    "user": {
      "_id": "60d...8e",
      "name": "User Name",
      "email": "user@example.com",
      ...
    }
  }
  ```

### Products API

#### Get All Products

- **Endpoint:** `GET /api/products`
- **Description:** Retrieves a list of all products.
- **Response:**
  ```json
  [
    {
      "_id": "60d...8e",
      "name": "Product Name",
      "desc": "Product Description",
      "mainPrice": 100,
      "category": "Category Name",
      "inStockQty": 10,
      "productImgs": ["img1.jpg", "img2.jpg"],
      ...
    },
    ...
  ]
  ```

#### Get Single Product

- **Endpoint:** `GET /api/products/:id`
- **Description:** Retrieves a single product by its ID.
- **Response:**
  ```json
  {
    "_id": "60d...8e",
    "name": "Product Name",
    "desc": "Product Description",
    "mainPrice": 100,
    "category": "Category Name",
    "inStockQty": 10,
    "productImgs": ["img1.jpg", "img2.jpg"],
    ...
  }
  ```

#### Create a Product

- **Endpoint:** `POST /api/products`
- **Description:** Creates a new product.
- **Request Body:**
  ```json
  {
    "name": "Product Name",
    "desc": "Product Description",
    "mainPrice": 100,
    "category": "Category Name",
    "inStockQty": 10,
    "productImgs": ["img1.jpg", "img2.jpg"]
  }
  ```
- **Response:**
  ```json
  {
    "message": "Product created successfully",
    "product": {
      "_id": "60d...8e",
      "name": "Product Name",
      "desc": "Product Description",
      "mainPrice": 100,
      "category": "Category Name",
      "inStockQty": 10,
      "productImgs": ["img1.jpg", "img2.jpg"],
      ...
    }
  }
  ```

#### Update a Product

- **Endpoint:** `PUT /api/products/:id`
- **Description:** Updates an existing product.
- **Request Body:**
  ```json
  {
    "name": "Updated Product Name",
    "desc": "Updated Product Description",
    "mainPrice": 120,
    "category": "Updated Category Name",
    "inStockQty": 8,
    "productImgs": ["updated_img1.jpg", "updated_img2.jpg"]
  }
  ```
- **Response:**
  ```json
  {
    "message": "Product updated successfully",
    "product": {
      "_id": "60d...8e",
      "name": "Updated Product Name",
      "desc": "Updated Product Description",
      "mainPrice": 120,
      "category": "Updated Category Name",
      "inStockQty": 8,
      "productImgs": ["updated_img1.jpg", "updated_img2.jpg"],
      ...
    }
  }
  ```

#### Delete a Product

- **Endpoint:** `DELETE /api/products/:id`
- **Description:** Deletes a product by its ID.
- **Response:**
  ```json
  {
    "message": "Product deleted successfully"
  }
  ```

### Categories API

#### Get All Categories

- **Endpoint:** `GET /api/categories`
- **Description:** Retrieves a list of all categories.
- **Response:**
  ```json
  [
    {
      "_id": "60d...8e",
      "name": "Category Name",
      ...
    },
    ...
  ]
  ```

#### Create a Category

- **Endpoint:** `POST /api/categories`
- **Description:** Creates a new category.
- **Request Body:**
  ```json
  {
    "name": "Category Name"
  }
  ```
- **Response:**
  ```json
  {
    "message": "Category created successfully",
    "category": {
      "_id": "60d...8e",
      "name": "Category Name",
      ...
    }
  }
  ```

#### Update a Category

- **Endpoint:** `PUT /api/categories/:id`
- **Description:** Updates an existing category.
- **Request Body:**
  ```json
  {
    "name": "Updated Category Name"
  }
  ```
- **Response:**
  ```json
  {
    "message": "Category updated successfully",
    "category": {
      "_id": "60d...8e",
      "name": "Updated Category Name",
      ...
    }
  }
  ```

#### Delete a Category

- **Endpoint:** `DELETE /api/categories/:id`
- **Description:** Deletes a category by its ID.
- **Response:**
  ```json
  {
    "message": "Category deleted successfully"
  }
  ```

### Orders API

#### Get All Orders

- **Endpoint:** `GET /api/orders`
- **Description:** Retrieves a list of all orders.
- **Response:**
  ```json
  [
    {
      "_id": "60d...8e",
      "user": "60d...8e",
      "products": [
        {
          "product": "60d...8e",
          "quantity": 2
        },
        ...
      ],
      "totalPrice": 200,
      "status": "Pending",
      ...
    },
    ...
  ]
  ```

#### Get Single Order

- **Endpoint:** `GET /api/orders/:id`
- **Description:** Retrieves a single order by its ID.
- **Response:**
  ```json
  {
    "_id": "60d...8e",
    "user": "60d...8e",
    "products": [
      {
        "product": "60d...8e",
        "quantity": 2
      },
      ...
    ],
    "totalPrice": 200,
    "status": "Pending",
    ...
  }
  ```

#### Create an Order

- **Endpoint:** `POST /api/orders`
- **Description:** Creates a new order.
- **Request Body:**
  ```json
  {
    "user": "60d...8e",
    "products": [
      {
        "product": "60d...8e",
        "quantity": 2
      },
      ...
    ],
    "totalPrice": 200,
    "status": "Pending"
  }
  ```
- **Response:**
  ```json
  {
    "message": "Order created successfully",
    "order": {
      "_id": "60d...8e",
      "user": "60d...8e",
      "products": [
        {
          "product": "60d...8e",
          "quantity": 2
        },
        ...
      ],
      "totalPrice": 200,
      "status": "Pending",
      ...
    }
  }
  ```

#### Update an Order

- **Endpoint:** `PUT /api/orders/:id`
- **Description:** Updates an existing order.
- **Request Body:**
  ```json
  {
    "status": "Shipped"
  }
  ```
- **Response:**
  ```json
  {
    "message": "Order updated successfully",
    "order": {
      "_id": "60d...8e",
      "user": "60d...8e",
      "products": [
        {
          "product": "60d...8e",
          "quantity": 2
        },
        ...
      ],
      "totalPrice": 200,
      "status": "Shipped",
      ...
    }
  }
  ```

#### Delete an Order

- **Endpoint:** `DELETE /api/orders/:id`
- **Description:** Deletes an order by its ID.
- **Response:**
  ```json
  {
    "message": "Order deleted successfully"
  }
  ```

### Users API

#### Get All Users

- **Endpoint:** `GET /api/users`
- **Description:** Retrieves a list of all users.
- **Response:**
  ```json
  [
    {
      "_id": "60d...8e",
      "name": "User Name",
      "email": "user@example.com",
      ...
    },
    ...
  ]
  ```

#### Get Single User

- **Endpoint:** `GET /api/users/:id`
- **Description:** Retrieves a single user by their ID.
- **Response:**
  ```json
  {
    "_id": "60d...8e",
    "name": "User Name",
    "email": "user@example.com",
    ...
  }
  ```

#### Update User

- **Endpoint:** `PUT /api/users/:id`
- **Description:** Updates an existing user.
- **Request Body:**
  ```json
  {
    "name": "Updated User Name",
    "email": "updated_user@example.com",
    "password": "updated_password123"
  }
  ```
- **Response:**
  ```json
  {
    "message": "User updated successfully",
    "user": {
      "_id": "60d...8e",
      "name": "Updated User Name",
      "email": "updated_user@example.com",
      ...
    }
  }
  ```

#### Delete User

- **Endpoint:** `DELETE /api/users/:id`
- **Description:** Deletes a user by their ID.
- **Response:**
  ```json
  {
    "message": "User deleted successfully"
  }
  ```

### Reviews API

#### Get All Reviews

- **Endpoint:** `GET /api/reviews`
- **Description:** Retrieves a list of all reviews.
- **Response:**
  ```json
  [
    {
      "_id": "60d...8e",
      "product": "60d...8e",
      "user": "60d...8e",
      "rating": 5,
      "comment": "Great product!",
      ...
    },
    ...
  ]
  ```

#### Get Reviews for a Product

- **Endpoint:** `GET /api/reviews/product/:productId`
- **Description:** Retrieves reviews for a specific product.
- **Response:**
  ```json
  [
    {
      "_id": "60d...8e",
      "product": "60d...8e",
      "user": "60d...8e",
      "rating": 5,
      "comment": "Great product!",
      ...
    },
    ...
  ]
  ```

#### Create a Review

- **Endpoint:** `POST /api/reviews`
- **Description:** Creates a new review.
- **Request Body:**
  ```json
  {
    "product": "60d...8e",
    "user": "60d...8e",
    "rating": 5,
    "comment": "Great product!"
  }
  ```
- **Response:**
  ```json
  {
    "message": "Review created successfully",
    "review": {
      "_id": "60d...8e",
      "product": "60d...8e",
      "user": "60d...8e",
      "rating": 5,
      "comment": "Great product!",
      ...
    }
  }
  ```

#### Update a Review

- **Endpoint:** `PUT /api/reviews/:id`
- **Description:** Updates an existing review.
- **Request Body:**
  ```json
  {
    "rating": 4,
    "comment": "Updated comment"
  }
  ```
- **Response:**
  ```json
  {
    "message": "Review updated successfully",
    "review": {
      "_id": "60d...8e",
      "product": "60d...8e",
      "user": "60d...8e",
      "rating": 4,
      "comment": "Updated comment",
      ...
    }
  }
  ```

#### Delete a Review

- **Endpoint:** `DELETE /api/reviews/:id`
- **Description:** Deletes a review by its ID.
- **Response:**
  ```json
  {
    "message": "Review deleted successfully"
  }
  ```

### Cart API

#### Get Cart for User

- **Endpoint:** `GET /api/cart`
- **Description:** Retrieves the cart for the logged-in user.
- **Response:**
  ```json
  {
    "user": "60d...8e",
    "products": [
      {
        "product": "60d...8e",
        "quantity": 2
      },
      ...
    ],
    "totalPrice": 200,
    ...
  }
  ```

#### Add to Cart

- **Endpoint:** `POST /api/cart`
- **Description:** Adds a product to the cart.
- **Request Body:**
  ```json
  {
    "product": "60d...8e",
    "quantity": 2
  }
  ```
- **Response:**
  ```json
  {
    "message": "Product added to cart successfully",
    "cart": {
      "user": "60d...8e",
      "products": [
        {
          "product": "60d...8e",
          "quantity": 2
        },
        ...
      ],
      "totalPrice": 200,
      ...
    }
  }
  ```

#### Update Cart Item

- **Endpoint:** `PUT /api/cart/:productId`
- **Description:** Updates the quantity of a product in the cart.
- **Request Body:**
  ```json
  {
    "quantity": 3
  }
  ```
- **Response:**
  ```json
  {
    "message": "Cart updated successfully",
    "cart": {
      "user": "60d...8e",
      "products": [
        {
          "product": "60d...8e",
          "quantity": 3
        },
        ...
      ],
      "totalPrice": 300,
      ...
    }
  }
  ```

#### Remove from Cart

- **Endpoint:** `DELETE /api/cart/:productId`
- **Description:** Removes a product from the cart.
- **Response:**
  ```json
  {
    "message": "Product removed from cart successfully",
    "cart": {
      "user": "60d...8e",
      "products": [
        ...
      ],
      "totalPrice": 150,
      ...
    }
  }
  ```

---

This comprehensive documentation outlines all the available API endpoints for the Luxelane project, detailing their purposes, request and response formats. Adjust the content as necessary to fit the specifics of your Luxelane project.

## Frontend Development

### React Components

- **ProductsComponent**: Fetches and displays products.
- **ProductForm**: Form for adding/editing products.
- **Navbar**: Navigation bar component.

### State Management

State is managed using React's `useState` and `useEffect` hooks. For more complex state management, consider using Context API or Redux.

### Styling

Styling is done using CSS modules. Each component has a corresponding CSS file.

## Backend Development

### Express Server

The backend server is built with Express.js. It handles API requests and serves static files.

### Database

MongoDB is used as the database. Mongoose is used for object data modeling (ODM).

### File Uploads

Files are uploaded using `multer`. Images are stored in the `uploads` directory.

## Deployment

### Vercel Deployment

1. Push your frontend code to a GitHub repository.
2. Connect the repository to Vercel.
3. Vercel will automatically deploy your frontend.

### Backend Deployment

1. Deploy your backend on a hosting service like Heroku, AWS, or DigitalOcean.
2. Set the environment variables in your hosting service.

## Testing

Testing is done using Jest for unit tests and Cypress for end-to-end tests.

### Running Tests

- **Unit Tests:**

  ```bash
  npm test
  ```

- **End-to-End Tests:**
  ```bash
  npx cypress open
  ```

## Contact and Support

For further assistance, please contact our support team at [support@luxelane.com](mailto:support@luxelane.com).

---

Thank you for contributing to Luxelane! If you have any questions or need further assistance, please don't hesitate to contact us.
