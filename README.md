# Food App API

A simple **MERN** stack application that serves a menu of dishes, allows user registration/login, manages a shopping cart, and processes orders. This repository includes the complete source code, a Postman collection for testing, and screenshots demonstrating each endpoint.

---

## 📝 Table of Contents

- [Food App API](#food-app-api)
  - [📝 Table of Contents](#-table-of-contents)
  - [🚀 Features](#-features)
  - [🛠️ Getting Started](#️-getting-started)
  - [📜 Available Scripts](#-available-scripts)
    - [Backend](#backend)
    - [Frontend](#frontend)
  - [📡 API Documentation](#-api-documentation)
  - [📂 Postman Collection](#-postman-collection)
  - [📸 Postman Screenshots](#-postman-screenshots)
    - [Register User](#register-user)
    - [Login User](#login-user)
    - [Food List](#food-list)
    - [Get My Cart](#get-my-cart)
    - [Add to Cart](#add-to-cart)
    - [Remove from Cart](#remove-from-cart)
    - [Create Order](#create-order)
    - [Get Order by ID](#get-order-by-id)

---

## 🚀 Features

* **User Authentication**: Register and login with secure JWT tokens.
* **Menu Items**: Browse all dishes 
* **Shopping Cart**: Add/remove items in a user-specific cart.
* **Orders**: Place orders based on cart contents.
* **Static Images**: Serve uploaded dish images via a static endpoint.

---

## 🛠️ Getting Started

1. **Clone the repository**

   ```bash
   git clone https://github.com/EBEN4REAL/mern-test.git
   cd food-app
   ```

2. **Install dependencies**

   ```bash
   # In the backend folder
   cd backend
   npm install

   # In the frontend folder (if applicable)
   cd ../frontend
   npm install
   ```

3. **Run the server**

   ```bash
   # From the backend folder
   npm run dev
   ```

4. **Run the client** (if a separate frontend)

   ```bash
   # From the frontend folder
   npm start
   ```

Your API will be available at `http://localhost:4000` by default.

---

---

## 📜 Available Scripts

### Backend

* `npm run dev` — start the Express server with nodemon

### Frontend

* `npm start` — start the React/Vite development server

---

## 📡 API Documentation

Each endpoint is described below with method, URL, parameters, and responses. For full details and examples, see the attached Postman collection.

| Route                   | Method | Description                                  |
| --------------------    | ------ | -------------------------------------------- |
| `/api/user/register`    | POST   | Register a new user                          |
| `/api/user/login`       | POST   | Authenticate and receive JWT                 |
| `api/food/list`         | GET    | List all the food menu items                 |
| `/api/cart`             | POST   | Retrieve current user's cart (Auth required) |
| `/api/cart/add`         | POST   | Add an item to the cart (Auth required)      |
| `/api/cart/remove`      | POST   | Remove an item from the cart (Auth required) |
| `/api/order/userorders` | POST   | List all orders for user (Auth required)     |


## 📂 Postman Collection

A Postman collection is included for easy API testing.

* **File:** [food-app.postman\_collection.json](./food-app.postman_collection.json)
* **Usage:**

  1. Import the JSON file into Postman.
  2. Select the **FoodApp Local** environment (with `baseUrl` and `token`).
  3. Run **Auth → Login** to set the JWT token.
  4. Explore all endpoints in sequence.

---

## 📸 Postman Screenshots

Below are examples of requests and responses captured directly from Postman.

### Register User

![Register](./postman-screenshots/register.png)

### Login User

![Login](./postman-screenshots/login.png)

### Food List

![Food List](./postman-screenshots/food-list.png)

### Get My Cart

![Get My Cart](./postman-screenshots/get-cart.png)

### Add to Cart

![Add to Cart](./postman-screenshots/add-cart.png)

### Remove from Cart

![Remove from Cart](./postman-screenshots/remove-cart.png)

### Create Order

![Create Order](./postman-screenshots/create-order.png)

### Get Order by ID

![Get Order](./postman-screenshots/get-order.png)
