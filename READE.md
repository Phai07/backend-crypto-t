
## Getting Started

### Prerequisites

- Node.js
- Docker

### Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/yourusername/crypto-exchange-backend.git
    cd crypto-exchange-backend
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

3. Create a [.env](http://_vscodecontentref_/9) file in the root directory and add the following environment variables:
    ```
    DB_HOST=postgres
    POSTGRES_USER=postgres
    POSTGRES_PASSWORD=postgres
    POSTGRES_DB=postgres
    JWT_SECRET=your_jwt_secret_key
    PORT=4000
    ```

4. Start the PostgreSQL database using Docker:
    ```sh
    docker-compose up -d
    ```

5. Start the application:
    ```sh
    npm run dev
    ```

## API Endpoints

### User Routes

- `POST /api/users/register` - Register a new user
- `POST /api/users/login` - Login a user

## Project Files

- **`src/app.js`**: Entry point of the application.
- **`src/config/config.js`**: Configuration file for environment variables.
- **`src/config/database.js`**: Database connection setup using `pg` module.
- **`src/controllers/userController.js`**: Controller functions for user registration and login.
- **`src/models/user.js`**: Database queries related to the user.
- **`src/routes/userRoutes.js`**: Routes for user-related endpoints.
- **`src/services/userService.js`**: Business logic for user registration and login.

## License

This project is licensed under the MIT License.