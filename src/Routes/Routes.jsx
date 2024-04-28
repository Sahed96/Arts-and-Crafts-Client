
import Home from "../Pages/Home/Home";
import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Root from "../Root/Root";
import AddCraft from "../Pages/AddCraft/AddCraft";
import Login from "../Pages/LoginPage/Login"
import Register from "../Pages/RegisterPage/Register";
import ViewDetails from "../Pages/ViewDetails/ViewDetails";
import MyCraft from "../Pages/MyCraftList/MyCraft";




const routes = createBrowserRouter([
    {
      path: "/",
      element: <Root/>,
      errorElement: <ErrorPage/>,
      children: [
        {
            path: '/',
            element: <Home></Home>,
            loader: () => fetch('http://localhost:5000/addCraft')
            
        },
        {
            path: '/details/:_id',
            element: 
              <ViewDetails />,
            
            loader: () => fetch('http://localhost:5000/addCraft')
        },
        {
            path: '/login',
            element: <Login />
            
        },
        {
            path: '/register',
            element: <Register></Register>
            
        },
        {
            path: '/addCraft',
            element: <AddCraft/>,
            loader: () => fetch('http://localhost:5000/addCraft')
                
        },
        {
            path: '/myCraft',
            element: <MyCraft/>    
        },
      ]
    },

  ]);

  export default routes;