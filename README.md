# Food Delivery Website

A full-stack food delivery website featuring a user interface for customers, an admin panel for managing orders and products, and a backend for handling API requests. This project is organized into three main directories: `frontend`, `backend`, and `admin`.

## Table of Contents
- [Features](#features)
- [Technologies](#technologies)
- [Installation](#installation)
- [Running the Project](#running-the-project)
- [Folder Structure](#folder-structure)
- [Contributing](#contributing)
- [License](#license)

## Features
- User-friendly interface for browsing and ordering food
- Admin panel for managing food items and orders
- Secure backend for handling requests and data
- Responsive design for optimal viewing on different devices

## Technologies
- **Frontend**: React.js, Redux, CSS
- **Backend**: Node.js, Express.js, MongoDB
- **Admin**: React.js, Redux, CSS
- **Others**: Axios, Toastify, Mongoose

## Installation

To clone and set up the project, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/Uber-eats.git
   ```

2. Navigate into the project directory:
   ```bash
   cd Uber-eats
   ```

3. Install dependencies for each part of the application:
   - For the **frontend**:
     ```bash
     cd frontend
     npm install
     ```

   - For the **backend**:
     ```bash
     cd ../backend
     npm install
     ```

   - For the **admin**:
     ```bash
     cd ../admin
     npm install
     ```

## Running the Project

### Frontend
To run the frontend part of the application, navigate to the `frontend` directory and run:
```bash
npm run dev
```

### Backend
To run the backend server, navigate to the `backend` directory and run:
```bash
npm run server
```

### Admin
To run the admin part of the application, navigate to the `admin` directory and run:
```bash
npm run dev
```

## Folder Structure

```
Uber-eats/
│
├── frontend/        # User-facing frontend application
│   ├── src/        # Source code for the frontend
│   ├── package.json
│   └── ...
│
├── backend/        # Server-side application
│   ├── models/     # MongoDB models
│   ├── routes/     # API routes
│   ├── controllers/# API controllers
│   ├── config/     # Configuration files
│   ├── package.json
│   └── ...
│
└── admin/          # Admin panel for managing orders and products
    ├── src/       # Source code for the admin panel
    ├── package.json
    └── ...
```

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue for any suggestions or improvements.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.
