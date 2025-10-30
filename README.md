# Task List App

A tiny React app that displays a list of projects/tasks, supports search/filtering, and shows a details view for each project. Built with **React 18**, **Vite**, and a custom hook for local data access.

The app demonstrates modern React practices: functional components, hooks, routing, controlled inputs, and basic accessibility.

### Disclaimer

This application is a *test project* created as part of a coding assignment.  
It is not a production-ready or real-world application.  
The purpose of this project is to demonstrate React, routing, hooks, and basic frontend skills.

## Features

- Functional components + hooks
- Custom hook `useProjects()` for local data
- Search/filter input
- Project list with clickable links
- Responsive design for mobile and desktop
- Basic testing with **Vitest** and **Testing Library**
- CSS variables for theming and global styles

## Getting Started

### 1. Clone the repository

`git clone https://github.com/yourusername/project-list.git
cd project-list`

### 2. Install dependencies
`npm install`

### 3. Run the development server
`npm run dev`

Open http://localhost:5173 in your browser to view the app.

### 4. Run tests
`npm test`

---

### Dependencies

react & react-dom — UI library

react-router-dom — Routing

vitest — Testing framework

@testing-library/react — Testing utilities

@vitejs/plugin-react — React plugin for Vite

typescript — Type checking

---

### CSS / Styling

Global variables in index.css for colors, fonts, and theme

Fixed-width container for consistent layout

Responsive design with media queries

---

### Search input styled with:

Lavender background

Purple border

Dark purple user text

Purple placeholder text

Titles and project names are styled with appropriate font sizes and color contrast

---

## Notes

All project data is mocked locally in src/data/data.ts.

Routing: / → project list, /projects/:id → project details.

The UI is responsive and supports mobile screens.

Placeholder colors, fonts, and container width can be easily adjusted via CSS variables.