# 🍔 Food Ordering App

This project was bootstrapped with **Create React App**.

The **Food Ordering App** is a simple React-based shopping cart application that allows users to browse different food items, add or remove them from the cart, and view the total amount in real time.

## 🍕 Food Items
- Pizza
- Manchurian
- Paneer Chilli
- Noodles
- Vada Pav
- Grill Paneer Chilli

---

# 🚀 Available Scripts

In the project directory, you can run:

## `npm start`

Runs the app in development mode.

Open **http://localhost:3000** in your browser to view the application.

- The page reloads automatically when changes are made.
- Any lint errors will be displayed in the console.

---

## `npm test`

Launches the test runner in interactive watch mode.

The default Create React App test has been updated to verify that the **Shopping Cart** heading is rendered.

Example test:

```javascript
test('renders shopping cart text', () => {
  render(<App />);
  const cartElement = screen.getByText(/Shopping cart/i);
  expect(cartElement).toBeInTheDocument();
});
```

---

## `npm run build`

Builds the application for production in the `build` folder.

The production build:

- Optimizes the application for better performance.
- Minifies JavaScript and CSS files.
- Generates hashed filenames for efficient caching.

Your application is then ready for deployment.

---

## `npm run eject`

> **Note:** This is a one-way operation.

Running this command copies all build configuration files (Webpack, Babel, ESLint, etc.) into your project, allowing complete customization of the build setup.

---

# 🛒 Features

- Browse a list of delicious food items.
- View food images, names, and prices.
- Add items to the shopping cart.
- Remove items from the shopping cart.
- Live update of cart item count.
- Automatically calculates the **Grand Total**.
- Clean and responsive user interface using custom CSS.

---

# 🛠️ Technologies Used

- React.js
- JavaScript (ES6)
- HTML5
- CSS3
- Create React App

---

# 📚 Learn More

For more information, refer to the official documentation:

- **React Documentation:** https://react.dev/
- **Create React App Documentation:** https://create-react-app.dev/

---

## 👨‍💻 Project Summary

The Food Ordering App demonstrates the fundamentals of React, including:

- Functional Components
- Props
- State Management
- Event Handling
- Conditional Rendering
- Dynamic UI Updates

It is a beginner-friendly project designed to understand how a shopping cart works using React.