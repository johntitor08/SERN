# React Full-Stack Application with Supabase

A modern full-stack web application built with React frontend, Express.js backend, and Supabase as the database. Features user authentication, protected routes, and a responsive design.

## 🚀 Features

### Frontend

- **React** with functional components and hooks
- **React Router** for navigation and protected routes
- **Responsive Design** with mobile-friendly navbar
- **User Authentication** (Login/Register/Logout)
- **Protected Routes** for authenticated users
- **User Profile** management
- **Modern UI** with CSS animations and gradients

### Backend

- **Express.js** RESTful API
- **Supabase** as the PostgreSQL database
- **JWT-ready** authentication system
- **Password hashing** with bcryptjs
- **CORS-enabled** for frontend communication
- **Environment variables** for configuration

## 🛠 Tech Stack

Frontend:

- React 18
- React Router DOM
- CSS3 with Flexbox/Grid
- Local Storage for auth state

Backend:

- Node.js
- Express.js
- Supabase (PostgreSQL)
- bcryptjs for password hashing
- dotenv for environment management

## 📋 Prerequisites

Before running this project, make sure you have installed:

- **Node.js** (version 14 or higher)
- **npm** or **yarn**
- **Supabase** account

## 🚀 Quick Start

### 1. Clone the Repository

```bash
git clone <your-repository-url>
cd <project-directory>

Backend Setup:

# Navigate to backend directory
cd server

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env


Edit the .env file with your Supabase credentials:

SUPABASE_URL=https://your-project-ref.supabase.co
SUPABASE_ANON_KEY=your-anon-key
PORT=5000


3. Frontend Setup:

# Navigate to frontend directory (if separate)
cd client

# Install dependencies
npm install

# Start the development server
npm start


4. Database Setup:

Go to your Supabase Dashboard

Navigate to your project

Run the following SQL in the SQL Editor:

-- Create users table
CREATE TABLE users (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL,
  user_type VARCHAR(50) DEFAULT 'user' CHECK (user_type IN ('admin', 'user')),
  avatar TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create indexes for better performance
CREATE INDEX idx_users_email ON users(email);
CREATE INDEX idx_users_created_at ON users(created_at);

-- Optional: Enable Row Level Security
ALTER TABLE users ENABLE ROW LEVEL SECURITY;

-- Create updated_at trigger
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_users_updated_at 
    BEFORE UPDATE ON users 
    FOR EACH ROW 
    EXECUTE FUNCTION update_updated_at_column();


```

## 📁 Project Structure

project-root/
├── backend/
│   ├── config/
│   │   └── supabaseClient.js
│   ├── model/
│   │   └── userModel.js
│   ├── router/
│   │   └── userRouter.js
│   ├── .env
│   ├── package.json
│   └── server.js
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.js
│   │   │   ├── Navbar.css
│   │   │   └── ProtectedRoute.js
│   │   ├── pages/
│   │   │   ├── Home.js
│   │   │   ├── About.js
│   │   │   ├── Services.js
│   │   │   ├── Contact.js
│   │   │   ├── Login.js
│   │   │   ├── Register.js
│   │   │   ├── Profile.js
│   │   │   ├── Auth.css
│   │   │   └── Profile.css
│   │   ├── App.js
│   │   ├── App.css
│   │   └── index.js
│   ├── package.json
└── README.md
└── .gitignore

## 🎯 API Endpoints

Authentication Routes
Method Endpoint Description Body
POST /api/users/signup User registration { name, email, password }
POST /api/users/signin User login { email, password }
User Routes
Method Endpoint Description Auth Required
GET /api/users/getAll Get all users No
GET /api/users/:id Get user by ID No
PUT /api/users/:id Update user No

### Example API Usage

User Registration:

curl -X POST <http://localhost:5000/api/users/signup> \
  -H "Content-Type: application/json" \
  -d '{"name":"John Doe","email":"<john@example.com>","password":"password123"}'

User Login:

curl -X POST <http://localhost:5000/api/users/signin> \
  -H "Content-Type: application/json" \
  -d '{"email":"<john@example.com>","password":"password123"}'

### 🏃‍♂️ Running the Application

Development Mode:

Backend:

cd server
npm run dev

Frontend:

cd client
npm start

### Production Build:

Frontend:

cd client
npm run build

### ⚙️ Environment Variables

Backend (.env):

SUPABASE_URL=your_supabase_project_url
SUPABASE_ANON_KEY=your_supabase_anon_key
PORT=5000

Frontend (.env):

REACT_APP_API_URL=<http://localhost:5000/api>

### 🔒 Authentication Flow

Registration: User signs up with email and password

Login: User signs in and receives authentication status

Protected Routes: Authenticated users can access profile and dashboard

Logout: Clears local storage and redirects to home

### 🎨 Customization

Styling:

Modify CSS files in src/components/ and src/pages/

Update color scheme in CSS variables

Add new components in src/components/

Database:

Add new tables in Supabase SQL editor

Update user model for additional fields

Modify API endpoints in router/userRouter.js

### 🐛 Troubleshooting

Common Issues:

Supabase Connection Error

Verify your Supabase URL and API key

Check if the users table exists

CORS Issues

Ensure backend is running on port 5000

Check frontend API calls are to correct endpoint

Authentication Problems

Clear browser local storage

Check if user exists in Supabase database

### Debug Mode

Enable debug logging by adding to your backend .env:

DEBUG=true

### 🤝 Contributing

Fork the repository

Create a feature branch (git checkout -b feature/amazing-feature)

Commit your changes (git commit -m 'Add some amazing feature')

Push to the branch (git push origin feature/amazing-feature)

Open a Pull Request

### 🙏 Acknowledgments

React for the frontend framework

Supabase for the backend-as-a-service

Express.js for the server framework

bcryptjs for password hashing

### 📞 Support

If you have any questions or run into issues, please:

Check the troubleshooting section

Search existing GitHub issues

Create a new issue with detailed information
