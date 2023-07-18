import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Routes, Route, RouterProvider, createBrowserRouter} from 'react-router-dom'
import Home from './components/home.jsx'
import About from './components/about.jsx'
import Services from './components/services.jsx'
import Portfolio from './components/portfolio.jsx'
import Contact from './components/form.jsx'
import Root from './routes/root.jsx'
import ErrorPage from './components/error-page.jsx'

const router = createBrowserRouter([
  {path: '/',
  element: <Root></Root>,
  errorElement: <ErrorPage />,
  children: [
    {
      path: '/home',
      element: <Home></Home>
    },
    {
      path: '/about',
      element: <About></About>
    },
    {
      path: '/services',
      element: <Services />
    },
    {
      path: '/portfolio',
      element: <Portfolio />
    },
    {
      path: '/contact',
      element: <Contact />
    },
    
  ]
}
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
)
