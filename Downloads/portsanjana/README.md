# Sanjana Rajbhar - Full Stack Portfolio

A modern, responsive portfolio website built with React, Node.js, and MongoDB.

## Project Structure

```
├── client/                 # React frontend
│   ├── public/
│   ├── src/
│   │   ├── components/    # React components
│   │   ├── App.js
│   │   ├── App.css
│   │   └── index.js
│   └── package.json
├── server/                # Node.js backend
│   ├── models/           # MongoDB schemas
│   ├── routes/           # API routes
│   ├── index.js
│   ├── .env
│   └── package.json
├── package.json          # Root package.json
└── README.md
```

## Features

- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Dynamic Projects**: Fetch projects from MongoDB
- **Contact Form**: Submit messages that are stored in MongoDB
- **Modern UI**: Clean and professional design with smooth animations
- **Full Stack**: React frontend, Express backend, MongoDB database

## Prerequisites

- Node.js (v14 or higher)
- MongoDB (local or Atlas)
- npm or yarn

## Installation

### 1. Clone the repository
```bash
git clone <repository-url>
cd sanjana-portfolio
```

### 2. Install root dependencies
```bash
npm install
```

### 3. Install server dependencies
```bash
cd server
npm install
cd ..
```

### 4. Install client dependencies
```bash
cd client
npm install
cd ..
```

### 5. Configure MongoDB

Update `server/.env` with your MongoDB connection string:
```
MONGODB_URI=mongodb://localhost:27017/sanjana-portfolio
PORT=5000
NODE_ENV=development
```

For MongoDB Atlas:
```
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/sanjana-portfolio
```

## Running the Application

### Development Mode (runs both server and client)
```bash
npm run dev
```

This will start:
- Backend server on `http://localhost:5000`
- Frontend on `http://localhost:3000`

### Production Build
```bash
npm run build
```

## API Endpoints

### Projects
- `GET /api/projects` - Get all projects
- `GET /api/projects/:id` - Get single project
- `POST /api/projects` - Create project
- `PUT /api/projects/:id` - Update project
- `DELETE /api/projects/:id` - Delete project

### Contact
- `POST /api/contact` - Submit contact form
- `GET /api/contact` - Get all messages (admin)

## Technologies Used

### Frontend
- React 18
- CSS3
- Axios
- Font Awesome Icons

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose

## Deployment

### Frontend (Netlify)
1. Build the client: `npm run build`
2. Deploy the `client/build` folder to Netlify

### Backend (Heroku/Railway)
1. Set environment variables
2. Deploy the `server` folder

## Contact

- Email: sanjana.rajbhar321@gmail.com
- Phone: +91-9891065976
- LinkedIn: linkedin.com/in/sanjana21
- GitHub: github.com/sanjana1-2

## License

This project is open source and available under the MIT License.
