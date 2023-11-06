import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from './Pages/Layout/Layout';
import Home from './Pages/Home/Home';
import Register from './Pages/Register/Register';
import Login from './Pages/Login/Login';
import AuthProvider from './providers/AuthProvider';
import AllService from './components/AllService/AllService';
import Details from './components/Details/Details';
import Error from './components/Error/Error';
import AddService from './components/AddService/AddService';
import Manage from './Pages/ManageService/Manage';
import PrivetRoute from './PrivetRoutes/PrivetRoute';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    errorElement: <Error/>,
    children: [
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "/register",
        element: <Register/>,
      },
      {
        path: "/login",
        element: <Login/>,
      },
      {
        path: "/AllService",
        element: <AllService/>,
      },
      {
        path: "/addservice",
        element: <PrivetRoute><AddService/></PrivetRoute>,
      },
      {
        path: "/manage",
        loader: () => fetch('http://localhost:5000/readAddedService'),
        element: <PrivetRoute><Manage/></PrivetRoute>,
      },
      {
        path: "/details/:id",
        loader: ({params}) => fetch(`http://localhost:5000/details/${params.id}`),
        element: <Details/>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
