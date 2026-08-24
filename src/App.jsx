import React from 'react'
import  router from './routes/router'
import { RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import ThemeToggle from './components/ThemeToggle'

const App = () => {
  return (
  <>
  <RouterProvider router={router}/>
  <ToastContainer
          position="top-right"
          autoClose={3000}
          newestOnTop
          closeOnClick
          draggable={true}
        />
  </>
  )
}

export default App