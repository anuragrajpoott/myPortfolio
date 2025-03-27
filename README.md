# Portfolio Website (MERN Stack)

This repository contains the code for a portfolio website built using the MERN stack (MongoDB, Express, React, Node.js). It serves as a personal portfolio to showcase projects, skills, and experience, demonstrating full-stack development capabilities using modern technologies.

## Live Demo

You can view the live portfolio website here: [My Portfolio](https://my-portfolio-delta-nine-61.vercel.app/)

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)

## Overview

This portfolio website is designed to present a personal profile, including details such as:

- Introduction and bio
- Projects showcase with descriptions and links
- Skills and technologies expertise
- Contact form with basic user interaction

The site is fully functional and deployable, providing a simple and interactive user interface along with a backend to store and retrieve user interactions.

## Features

- **Home Page**: Displays an introduction and highlights key projects.
- **Projects Section**: Lists personal projects, descriptions, and links.
- **Skills Section**: Showcases programming languages, tools, and technologies with visuals.
- **Contact Form**: Allows visitors to submit inquiries or messages.
- **Dynamic Content**: Content is fetched from a MongoDB database (e.g., projects, skills) and rendered in real time.

## Technologies Used

- **MongoDB**: NoSQL database to store project data, contact form submissions, and other dynamic content.
- **Express**: Backend web framework for handling HTTP requests and serving the API.
- **React**: Frontend library for building a dynamic and responsive user interface.
- **Node.js**: JavaScript runtime for executing server-side code and handling API requests.
- **JWT Authentication** (optional): For admin login to manage project or content updates.
- **Bootstrap / Material UI** (optional): For styling and responsive design.

## Getting Started

To run this portfolio website locally, follow the steps below:

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/try/download/community) or [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) for cloud database hosting

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/yourusername/portfolio-mern.git
    cd portfolio-mern
    ```

2. Install dependencies for both the frontend and backend:

    - For the backend (Node.js + Express):

      ```bash
      cd backend
      npm install
      ```

    - For the frontend (React):

      ```bash
      cd frontend
      npm install
      ```

3. Set up environment variables:

    - In the `backend` folder, create a `.env` file with the following variables:

      ```bash
      MONGO_URI=<your-mongodb-connection-string>
      JWT_SECRET=<your-jwt-secret-key> (if using JWT authentication)
      ```

4. Start the development server:

    - In the `backend` folder:

      ```bash
      npm start
      ```

    - In the `frontend` folder:

      ```bash
      npm start
      ```

5. Visit `http://localhost:3000` in your browser to view the portfolio website.
