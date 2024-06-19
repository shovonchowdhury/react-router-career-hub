import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root/Root';
import Home from './Components/Home/Home';
import Statistics from './Components/Statistics/Statistics';
import AppliedJobs from './Components/AppliedJobs/AppliedJobs';
import Jobs from './Components/Jobs/Jobs';
import JobDetails from './Components/JobDetails/JobDetails';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
      {
        path:"/",
        element: <Home></Home>
      },
      {
        path:"/statistics",
        element:<Statistics></Statistics>
      },
      {
        path:"/applied",
        element:<AppliedJobs></AppliedJobs>,
        loader:()=>fetch('/jobs.json')
      },
      {
        path:"/jobs",
        element:<Jobs></Jobs>
      },
      {
        path:"/job/:id",
        element:<JobDetails></JobDetails>,
        loader:()=> fetch('/jobs.json')

      }
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
