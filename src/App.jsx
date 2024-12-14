import { useState } from 'react'
import './App.css'
import Login from './components/Login/Login.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import Agents from './components/Agents/Agents.jsx'
import Layout from './components/Layout/Layout.jsx'
import Register from './components/Register/Register.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import RoutesGuard from './components/RoutesGuard/RoutesGuard.jsx'

function App() {
  let routes = createBrowserRouter(
    [
      {
        path: "",
        element: <Layout />,
        children: [
          { path: "login", element: <Login /> },
          { path: "register", element: <Register /> },
          { path: "about", element:<RoutesGuard><About /></RoutesGuard> },
          { path: "contact", element: <Contact /> },
          { path: "agents", element: <Agents /> },
          { index: true, element: <Register /> },
          { path: "home", element: <Home /> },
        ]
      }
    ],
    {
      basename: "/Realstate"

    }
  );

  return (<>
    <RouterProvider router={routes}></RouterProvider>

  </>
  )
}

export default App
