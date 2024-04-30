
import Home from "../Pages/Home/Home";
import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Root from "../Root/Root";
import AddCraft from "../Pages/AddCraft/AddCraft";
import Login from "../Pages/LoginPage/Login"
import Register from "../Pages/RegisterPage/Register";
import ViewDetails from "../Pages/ViewDetails/ViewDetails";
import MyCraft from "../Pages/MyCraftList/MyCraft";
import AllCrafts from "../Pages/AllCrafts/AllCrafts";
import UpdateDetails from "../Pages/UpdateDetails/UpdateDetails";
import Category from "../Components/Category/Category";
import CategoryCard from "../Components/Category/CategoryCard";
import PrivateRoute from "./Private/PrivateRoute";




const routes = createBrowserRouter([
    {
      path: "/",
      element: <Root/>,
      errorElement: <ErrorPage/>,
      children: [
        {
            path: '/',
            element: <Home></Home>,
            loader: () => fetch('https://art-and-craft-eight.vercel.app')
            
        },
        {
            path: '/details/:_id',
            element: 
              <PrivateRoute>
                <ViewDetails />
            </PrivateRoute>
              ,
              loader: () => fetch('https://art-and-craft-eight.vercel.app')
            
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
            element: 
            <PrivateRoute>
                <AddCraft/>
            </PrivateRoute>
            ,
            loader: () => fetch('https://art-and-craft-eight.vercel.app')
                
        },
        {
            path: '/allCraft',
            element: 
            <PrivateRoute>
                <AllCrafts />
            </PrivateRoute>
            ,
            loader: () => fetch('https://art-and-craft-eight.vercel.app')
                
        },
        {
            path: '/myCraft',
            element: 
            <PrivateRoute>
                <MyCraft/>
            </PrivateRoute>
            
        },
        {
            path: '/categoryCraft',
            element: <Category/>   
        },
        {
            path: '/categoryCard',
            element: <CategoryCard/>   
        },
        {
            path: '/update/:id',
            element: 
            <PrivateRoute>
                <UpdateDetails/>
            </PrivateRoute>
            ,
            loader: ({params}) => fetch(`https://art-and-craft-eight.vercel.app/${params.id}`)
            
        },
      ]
    },

  ]);

  export default routes;