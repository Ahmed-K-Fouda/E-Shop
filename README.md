# E-Commerce Project

This is a fully functional e-commerce project developed using **React**, **Redux**, **TailwindCSS**, and **Vite**. The project includes essential e-commerce features like product listing, user authentication, a cart system, and order processing. This project is built with a modern tech stack that focuses on performance, modularity, and scalability.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Usage](#usage)
- [Scripts](#scripts)
- [Components](#components)
- [Redux Slices](#redux-slices)
- [Contact](#contact)

---

## Features

- **User Authentication**: Login, logout, and registration using a basic authentication setup with localStorage.
- **Product Listing and Filtering**: A fully dynamic product listing page with filtering capabilities.
- **Cart Management**: Add, remove, increase, and decrease quantities of items in the cart.
- **Order Summary**: A summary page to review orders before checking out.
- **Responsive Design**: Tailored for mobile, tablet, and desktop using TailwindCSS.
- **Toast Notifications**: Instant feedback for user actions (e.g., product added to cart).
- **Persistent Data**: Cart items, user info, and order data are stored in localStorage.

---

## Technologies Used

- **React**: Front-end library used for building the user interface.
- **Redux Toolkit**: State management for handling cart, products, and user authentication.
- **React Router**: For managing routing within the application.
- **TailwindCSS**: Utility-first CSS framework for responsive design.
- **Vite**: Fast development build tool and server.
- **ESLint**: Linter to maintain code quality.
- **EmailJS**: To handle email notifications.
- **React Toastify**: For toast notifications.

---

## Project Structure

```plaintext
src
├── Components
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   ├── ProductCard.jsx
│   └── ... (other components)
├── Pages
│   ├── Home.jsx
│   ├── Shop.jsx
│   ├── Cart.jsx
│   ├── Checkout.jsx
│   ├── OrderSummary.jsx
│   ├── Register.jsx
│   ├── Login.jsx
│   ├── FilteredProducts.jsx
│   ├── ProductDetails.jsx
│   ├── About.jsx
│   └── Contact.jsx
├── Redux
│   ├── cartSlice.js
│   ├── productSlice.js
│   └── userSlice.js
└── App.jsx
└── main.jsx
└── index.css

## Usage

- **Home Page**: Displays featured products, promotions, and categories.
- **Shop Page**: View all products with the option to filter by categories.
- **Product Details**: Detailed view of each product with an option to add to cart.
- **Cart**: View all items in the cart, modify quantities, and proceed to checkout.
- **Order Summary**: Confirm order details before completing purchase.
- **Authentication**: Register as a new user or log in to an existing account.

---

## Scripts

- **`npm run dev`**: Starts the development server with Vite.
- **`npm run build`**: Builds the project for production.
- **`npm run preview`**: Previews the production build.
- **`npm run lint`**: Lints the codebase with ESLint.

---

## Components

- **Navbar**: Displays links to navigate through the site and a cart summary.
- **Footer**: Contains site information and useful links.
- **ProductCard**: Displays individual product details with an option to add to the cart.
- **Toast Notifications**: Uses `react-toastify` to notify users of important actions like adding items to the cart.

---

## Redux Slices

### `cartSlice.js`
Manages the shopping cart state:
- **addToCart**: Adds items to the cart and updates quantities.
- **removeFromCart**: Removes specific items from the cart.
- **increaseQuantity / decreaseQuantity**: Adjusts item quantities.
- **clearCart**: Clears all items in the cart.

### `productSlice.js`
Handles product data:
- **setProducts**: Sets products from a fetched list.
- **setSearchTerm**: Filters products based on the search term.

### `userSlice.js`
Manages user authentication:
- **register**: Registers a new user and saves user data.
- **login**: Logs in a user by verifying credentials.
- **logout**: Logs out the user and clears user data.

---

## Contact

For questions or feedback, please contact:
- **Name**: Ahmed Khaled Fouda
- **Email**: ahmedfoudahany@example.com
```
