import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './components/home.jsx'
import About from './components/about.jsx'
import Services from './components/services.jsx'
import Portfolio from './components/portfolio.jsx'
import Contact from './components/form.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App/>}>
      <Route path='/home' element={<Home/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/services' element={<Services></Services>}></Route>
      <Route path='/portfolio' element={<Portfolio></Portfolio>}></Route>
      <Route path='/contact' element={<Contact></Contact>}></Route>
      </Route>
      
    </Routes>
  </BrowserRouter>
  </React.StrictMode>
)
