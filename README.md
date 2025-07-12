
## React + Vite Project

This project was built following a tutorial by Master JS to practice my skills with React, Vite, and TailwindCSS. The goal was to learn how to create modern, visually appealing user interfaces (UI/UX) and enhance them with fun animations like Parallax effects that respond to scrolling and mouse movements.

## Features

- Parallax Animations: Fun scrolling and mouse-driven effects for an engaging experience.

- Complex UI Geometry: Learned to create interesting shapes and grid patterns using Tailwind CSS.

- Latest UI Trends: Included trendy frontend design patterns such as Bento grids.

- Responsive Design: Made sure the site looks great and works smoothly on all device types.

- Interactive AI Chat: Try out the chat feature powered by my own backend service integrated with GPT-3.5.

## Frontend Deployment

The frontend is deployed as a static website using Hostinger.

- Backend: Journal Insights Service

The backend service is a simple AI chat feature built using GPT-3.5. This addition serves as a small enhancement—like adding a little flower—to complement my frontend-focused learning project.

## Tech Stack

Framework: FastAPI

Language: Python

AI Integration: OpenAI API (GPT-3.5)

Installation

Navigate into the backend directory:

```
cd backend


#Create and activate a virtual environment:

python -m venv .venv
source .venv/bin/activate  # Windows: .venv\Scripts\activate

#Install dependencies:

pip install -r requirements.txt

#Set up your environment:

#Create a .env file at the root of your backend project and add your OpenAI API key:

OPENAI_API_KEY=your_openai_api_key_here

#Running the Backend Application

#Start your FastAPI server locally:

uvicorn app.main:app --reload
```

Visit your API at http://localhost:8000.

## API Documentation

FastAPI automatically provides interactive documentation:

Swagger UI: http://localhost:8000/docs

ReDoc UI: http://localhost:8000/redoc

## Backend Deployment

The recommended platform for deploying the backend is Render (render.com)
