# Pro Shop Frontend

A modern React-based frontend for the Pro Shop e-commerce platform.

## Overview

This frontend provides a responsive and interactive user interface for the Pro Shop e-commerce application. It connects to the Django backend API to display products, handle user authentication, manage shopping carts, and process orders.

## Technology Stack

- **React 17**: UI library
- **Redux**: State management
- **React Router**: Navigation
- **React Bootstrap**: UI components
- **Axios**: API requests

## Project Structure

- `src/`
  - `actions/`: Redux action creators
  - `components/`: Reusable UI components
  - `constants/`: Application constants
  - `reducers/`: Redux reducers
  - `screens/`: Page components
  - `App.js`: Main application component
  - `store.js`: Redux store configuration

## Features

- Product browsing and search
- Product details view
- User authentication (login/register)
- Shopping cart functionality
- Checkout process
- Order history
- Admin product management

## Setup and Installation

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation Steps

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd pro-shop-frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Start the development server:
   ```bash
   npm start
   # or
   yarn start
   ```

The application will be available at `http://localhost:3000/`.

## Available Scripts

- `npm start`: Run the development server
- `npm test`: Run tests
- `npm run build`: Build for production
- `npm run eject`: Eject from Create React App

## Backend Connection

The application is configured to connect to the Django backend at `http://127.0.0.1:8000/` through the proxy setting in `package.json`.

## Development

### Adding New Features

1. Create new components in the `components/` directory
2. Add new screens in the `screens/` directory
3. Define new actions in the `actions/` directory
4. Update reducers in the `reducers/` directory
5. Update routes in `App.js`

## Deployment

For production deployment:

1. Build the application: `npm run build`
2. Deploy the contents of the `build` directory to your web server
3. Ensure the backend API is properly configured and accessible

## License

[MIT License](LICENSE)
