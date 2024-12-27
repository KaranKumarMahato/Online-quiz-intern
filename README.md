Online Quiz Maker

Overview

The Online Quiz Maker is a platform that allows users to create and take quizzes with an interactive and user-friendly interface. The application facilitates users to input questions, provide multiple-choice answers, specify the correct answer, and share quizzes with other users. Participants can take the quizzes and receive immediate feedback on their scores, along with a review of correct and incorrect answers.

Features

Core Functionality

Quiz Creation:

Input questions with multiple-choice answers.

Specify the correct answer for each question.

Save quizzes to the database.

Quiz Participation:

Users can take quizzes created by others.

Immediate feedback on scores upon quiz completion.

Review of correct and incorrect answers.

User Authentication:

Secure login and registration for users.

Only authenticated users can create quizzes.

Quiz Management:

Store and manage quiz data in a database (MongoDB or PostgreSQL).

Track user scores and interactions.

Additional Features

Intuitive and responsive UI for both desktop and mobile users.

API endpoints for quiz creation, participation, and result fetching.

Secure backend implementation to manage user interactions and data.

Technology Stack

Frontend

React.js:

Interactive and dynamic user interface.

State management using hooks or Redux.

Responsive design using CSS or frameworks like Material-UI or Bootstrap.

Backend

Node.js & Express.js:

RESTful API implementation for managing quizzes and user data.

Middleware for authentication and request validation.

Database

MongoDB or PostgreSQL:

Persistent storage for quizzes, questions, answers, and user scores.

Schema design for efficient query and data retrieval.

Authentication

JWT (JSON Web Tokens):

Secure token-based authentication for users.

Setup Instructions

Prerequisites

Node.js (v14 or higher)

MongoDB/PostgreSQL installed and running

Git

Backend Setup

Clone the repository:

git clone https://github.com/your-repo/online-quiz-maker.git
cd online-quiz-maker/backend

Install dependencies:

npm install

Configure environment variables:
Create a .env file in the backend directory and add:

PORT=5000
DB_URI=your_database_uri
JWT_SECRET=your_jwt_secret

Start the backend server:

npm start

Frontend Setup

Navigate to the frontend directory:

cd ../frontend

Install dependencies:

npm install

Start the development server:

npm start

Database Configuration

For MongoDB: Ensure your MongoDB instance is running, and update the DB_URI in .env.

For PostgreSQL: Update the database connection string and use an ORM like Sequelize for schema migrations.

Project Structure

Backend

backend/
├── controllers/
├── models/
├── routes/
├── middleware/
├── utils/
├── .env
├── server.js

Frontend

frontend/
├── src/
│   ├── components/
│   ├── pages/
│   ├── services/
│   ├── App.js
│   ├── index.js
├── public/

API Endpoints

Authentication

POST /api/auth/register: Register a new user.

POST /api/auth/login: Authenticate a user and return a JWT.

Quizzes

POST /api/quizzes: Create a new quiz (authenticated).

GET /api/quizzes: Fetch all available quizzes.

GET /api/quizzes/:id: Fetch a specific quiz by ID.

POST /api/quizzes/:id/submit: Submit quiz answers and calculate scores.

Evaluation Criteria

Functionality:

Complete implementation of core features.

Smooth user experience for both quiz creation and participation.

User Interface Design:

Interactive, responsive, and intuitive UI.

Code Quality:

Clear and modular codebase.

Proper use of version control.

Database Management:

Efficient schema design and queries.
