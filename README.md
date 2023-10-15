dressStore Application

Welcome to the dressStore application, a simple product management API built with Node.js, Express, and MongoDB.

Description
    This application provides CRUD operations for products in a dress store. Users can add, update, retrieve, and delete products. Additionally, there's functionality to search for products by their names.

Features
    CRUD Operations: The main highlight of this application is to provide full CRUD (Create, Read, Update, Delete) operations for products.

    Product Search: Users can search for products based on the product name, which helps in quickly locating specific products.

U   ser Management: Basic user management routes are also provided, allowing for future expansion into user-specific features.

API Endpoints

            Get All Products:
            Method: GET
            Endpoint: /api/products

            Get Product by ID:
            Method: GET
            Endpoint: /api/products/:id

            Create a Product:
            Method: POST
            Endpoint: /api/products

            Update a Product:
            Method: PUT
            Endpoint: /api/products/:id

            Delete a Product:
            Method: DELETE
            Endpoint: /api/products/:id

            Remove All Products:
            Method: DELETE
            Endpoint: /api/products

            Search Products by Name:
            Method: GET
            Endpoint: /api/products/search/:kw



Dependencies
    Express: The main framework for building the web application.
    Mongoose: Used for defining models and handling database operations with MongoDB.
    MongoDB: The main database used for storing product details.
    EJS: A potential view engine if views are to be implemented in the future.
    Dotenv: Used for handling environment variables.

Development Dependencies
    Nodemon: Utility that monitors for any changes in the source and automatically restarts the server.

Author
    Elena Ogneva
