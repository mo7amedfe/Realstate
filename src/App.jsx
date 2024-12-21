import { useState } from 'react'
import './App.css'
import Login from './components/Login/Login.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import SpecificAdd from './components/SpecificAdd/SpecificAdd.jsx'
import Admin from './components/Admin/Admin.jsx'
import Layout from './components/Layout/Layout.jsx'
import Register from './components/Register/Register.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import RoutesGuard from './components/RoutesGuard/RoutesGuard.jsx'
import Sell from './components/Sell/Sell.jsx'
import Profile from './components/Profile/Profile.jsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'


function App() {

  const queryClient = new QueryClient()


  let routes = createBrowserRouter(
    [
      {

        path: "",
        element: <Layout />, children: [
          { path: "login", element: <Login /> },
          { path: "register", element: <Register /> },
          { path: "about", element: <RoutesGuard><About /></RoutesGuard> },
          { path: "specificadd/:id", element: <SpecificAdd /> },
          { path: "admin", element: <Admin/> },
          { index: true, element: <Register /> },
          { path: "home", element: <Home /> },
          { path: "sell", element: <Sell /> },
          { path: "profile", element: <Profile /> },

        ]
      }
    ],
    {
      basename: "/Realstate"

    }
  );

  return (<>
    <QueryClientProvider client={queryClient}>
      
      <RouterProvider router={routes}></RouterProvider>

    </QueryClientProvider>

  </>
  )
}

export default App
