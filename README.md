# Food App API

A simple **MERN** stack application that serves a menu of dishes, allows user registration/login, manages a shopping cart, and processes orders. This repository includes the complete source code, a Postman collection for testing, and screenshots demonstrating each endpoint.

## Quick demo of the solution

https://www.loom.com/share/5ca5af1ed3a94768a2ddcaeb265dd58d?sid=38e3bdf8-2127-4d51-b763-a9610db81432

## API DOCUMETATION

The postman API collection file can be in the root directory of this project

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

## 📸 Postman collection Screenshots

Below are examples of requests and responses captured during testing directly from Postman.

### Register User (Returns 401 Unauthorized if the user already exists)

<img width="1600" height="1000" alt="image" src="https://github.com/user-attachments/assets/3faf0673-2935-48cf-837c-f516ebf6beaa" />



### Login User (Returns 401 Unauthorized if credentials are incorrect)

<img width="1600" height="1000" alt="image" src="https://github.com/user-attachments/assets/75ab81f4-8b40-4bb8-ad79-928277f918df" />



### Food List 

<img width="1600" height="1000" alt="image" src="https://github.com/user-attachments/assets/74181a19-55a6-49ca-867e-73143efdbbd8" />



### Get Cart

<img width="1600" height="1000" alt="image" src="https://github.com/user-attachments/assets/0672b7e7-129a-4927-8be9-3ded77f6a1f8" />


### Add to Cart

<img width="1600" height="1000" alt="image" src="https://github.com/user-attachments/assets/11ec437d-2fb0-4ea0-bc23-f10ebf3e969a" />


### Remove from Cart

<img width="1600" height="1000" alt="image" src="https://github.com/user-attachments/assets/6997538b-7e48-4143-96ad-d6163b21f079" />


### User Orders

<img width="1600" height="1000" alt="image" src="https://github.com/user-attachments/assets/01a36079-bee9-4b06-bb62-773853e28c54" />


