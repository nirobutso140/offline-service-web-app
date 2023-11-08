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
import MySchedules from './Pages/MySchedules/MySchedules';
import Edit from './components/Edit/Edit';

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
        path: "/myschedules",
        loader: () => fetch('http://localhost:5000/readBookService'),
        element: <PrivetRoute><MySchedules/></PrivetRoute>,
      },
      {
        path: "/details/:id",
        loader: ({params}) => fetch(`http://localhost:5000/details/${params.id}`),
        element: <PrivetRoute><Details/></PrivetRoute>,
      },
      {
        path: "/edit/:id",
        loader: ({params}) => fetch(`http://localhost:5000/edit/${params.id}`),
        element: <Edit/>
      }
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
