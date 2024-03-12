import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import Layout from './layout'
import Home from './components/home/Home'
import About from './components/about/About'
import Contact from './components/contactus/Contactus'
import User from './components/user/user'
import Github from './components/github/Github'
const router =createBrowserRouter([
  {
    path:'/',
    element:<Layout/>,
    children:[{
      path:'',
      element:<Home/>
    },
    {
      path:"about",
      element:<About/>

    },
  {path:'contactus',
element:<Contact/>},
{path:'user/:id',
element:<User/>},
{path:'github',
element:<Github/>}
  ]

  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
