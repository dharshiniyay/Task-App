import { useState } from 'react'
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import Home from './pages/Home'
import Create from './pages/Create'
import Delete from './pages/Delete'
import Edit from './pages/Edit'
import Home2 from './pages/Home2'
import './App.css'

function App() {
  var [task, setTask]=useState([
   {
        id: 1,
        taskname: "React Project Setup",
        detail: "Initialize a new React project using Vite and configure routing.",
    },
    {
        id: 2,
        taskname: "HTML/CSS Layout",
        detail: "Finalize the main structural HTML and apply responsive CSS styles.",
    },
    {
        id: 3,
        taskname: "Implement Task Creation",
        detail: "Complete the logic and form validation for adding new tasks (Create.jsx).",
    },
    {
        id: 4,
        taskname: "Setup Task List (Home)",
        detail: "Display the task data in a clean, functional table format on the homepage.",
    },
    {
        id: 5,
        taskname: "Add Delete Functionality",
        detail: "Implement the handleDelete logic to remove tasks from the global state.",
    },
    {
        id: 6,
        taskname: "Implement Edit Logic",
        detail: "Develop the component logic for finding and updating an existing task.",
    },
    {
        id: 7,
        taskname: "Add Pagination & Search",
        detail: "Integrate filter and pagination to manage large datasets in Home.jsx.",
    },
    {
        id: 8,
        taskname: "Database Connection Mockup",
        detail: "Mock API calls (fetch/axios) to simulate saving and loading data.",
    },
    {
        id: 9,
        taskname: "Accessibility Audit",
        detail: "Review all form controls and buttons for proper ARIA attributes and focus management.",
    },
    {
        id: 10,
        taskname: "Final Deployment Prep",
        detail: "Optimize build size and deploy the application to a hosting service (e.g., Netlify/Vercel).",
    }
  ] ) 

  return (
    <>
      <BrowserRouter> 
        <Routes>
          <Route path="/home" element={<Home2 task={task} setTask={setTask}/>}/>
          <Route path="/create" element={<Create task={task} setTask={setTask}/>}/>
          <Route path="/edit/:id" element={<Edit task={task} setTask={setTask}/>}/> 

          <Route path="*" element={<Navigate to ="/home" replace/>}/>
        </Routes>
      </BrowserRouter>
      
    </>
  )
}

export default App
