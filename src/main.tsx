import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import Layout from './app/Layout'
import './main.module.scss'



ReactDOM.createRoot(document.getElementById('root')!).render(

  <BrowserRouter>
    <React.StrictMode>
      <Layout />
    </React.StrictMode>
  </BrowserRouter>
)
