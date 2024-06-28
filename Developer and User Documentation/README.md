# Luxelane

Welcome to Luxelane, an e-commerce platform designed for luxury goods.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Getting Started](#getting-started)
- [Documentation](#documentation)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

## Introduction

Luxelane is a comprehensive e-commerce platform tailored for luxury goods. It features a sleek and modern user interface, robust backend, and seamless user experience.

## Features

- User authentication (registration and login)
- Product management (create, read, update, delete)
- Category management
- Order management
- Cart functionality
- Reviews and ratings
- Image uploads

## Getting Started

To get started with Luxelane, navigate to [sdu-luxelane.vercel.app](https://sdu-luxelane.vercel.app/).

## Documentation

For detailed documentation, please refer to the following:

- [User Documentation](./user-docs.md)
- [Developer Documentation](./dev-docs.md)

## Project Structure

```plaintext
luxelane/
├── backend/
│   ├── controllers/      # Contains all the controller files
│   ├── models/           # Contains all the Mongoose models
│   ├── routes/           # Contains all the route files
│   ├── uploads/          # Directory where uploaded images are stored
│   ├── .env              # Environment variables
│   ├── server.js         # Entry point for the backend server
│   └── ...
├── frontend/
│   ├── public/           # Public assets
│   ├── src/
│   │   ├── components/   # Contains React components
│   │   ├── pages/        # Contains different pages for the application
│   │   ├── App.js        # Main App component
│   │   ├── index.js      # Entry point for the React application
│   │   └── ...
└── README.md             # Project documentation
```
