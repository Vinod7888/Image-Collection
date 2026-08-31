import React, { useEffect } from 'react'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Layout from './Pages/Layout';
import Home from './Pages/Home';





const router = createBrowserRouter([

  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />
      },



    ]
  }
])


const App = () => {
  useEffect(() => { document.title = "SPIDER MEN"; }, []);

  return (
    <>
     
      <div><Toaster /></div>
      <RouterProvider router={router} />

    </>
  )



};

export default App;
