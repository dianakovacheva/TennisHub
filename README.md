# TennisHub

## React Project

TennisHub is a web application built with React (client-side), Node.js (server-side) and MongoDB (database management system).
It allows tennis enthusiasts to explore tennis clubs, join theme, browse available courts, select preferred time slots, and secure their reservations with just a few clicks.

**<a href="https://tennishub-5978b.web.app/" target="_blank">🌐 Live preview</a>**

### Test user

- Email: petrov@gmail.com
- Password: 12345678

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Access the application](#access-the-application)

## Features

The application have:

- **Public Part** (accessible without authentication)
- **Private Part** (available for registered users only)

### Public Part

- **Home Page**: All users are able to see the home page.
- **Tennis Clubs Catalog**: Users can browse through a vast collection of tennis clubs.
- **Club Details Page**: All users can see the details page of a club.
- **Club Searching**: All users can search for tennis clubs by name, summary and address.
- **Register Page**: Users can create accounts.
- **Log In Page**: Users can login with their email and passowrd.

### Private Part (authenticated users only)

#### User Profile Page

- **Personal Information**: Users can see their profile information like their first name, last name and their email address. Additionally an avatar including their initials is shown next to their personal information.
- **My Bookings**: List of all courts booked by the user. The user can edit and delete his bookings.
- **Created Tennis Clubs**: List of all tennis clubs the user has created. The user is able to remove created clubs from this list.
- **Comments**: List of all comments written by the user. The club comments are shown on club's details page and user's profile page. By deleting the comments from user's profile page, the comments will be automatically removed from both pages.

#### Create Club

- **Create Club Form**: Users can create and submit their own club.
- **Edit Club Form**: Users can edit their own clubs.
- **Delete Club** Users can delete their own clubs.
- **Join Clubs**: Users can join clubs.
- **Comment Club**: Users can comment clubs.

#### Book court

- **Book Court Form**: Users can book court at preferred time slot if it is available for booking.
- **Edit Court Booking**: Users can edit their own bookings.
- **Delete Court Booking**: Users can delete their own bookings.

#### UI notifications for successful or failed operations

## Tech Stack

- **React**
- **Vite**
- **React Router**
- **MUI** (Material UI component library)
- **React Big Calendar**
- **Node.js**
- **Express**
- **MongoDB (Mongoose)**
- **Moment.js**

## Deployment

- **Firebase Hosting**
- **Firebase Functions**
- **MongoDB Atlas**

## Installation

To run TennisHub locally on your machine, follow these steps:

### Start Backend Server

- **Clone the Backend Repository**: git clone https://github.com/dianakovacheva/TennisHub-Backend
- **Navigate to the project directory**: cd TennisHub-Backend
- **Install the required dependencies**: npm install
- **Start the server**: npm start

### Start Frontend Server

- **Clone the Repository**: git clone https://github.com/dianakovacheva/TennisHub
- **Navigate to the project directory**: cd TennisHub
- **Install the required dependencies**: npm install
- **Start the server**: npm run dev

## Access the Application

- **Client-side**: Open your web browser and navigate to http://localhost:5173/ to access the client-side application.
- **Server-side**: The server-side API endpoints will be available at http://localhost:3000/api
