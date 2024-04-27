
import Home from "../Pages/Home/Home";
import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Root from "../Root/Root";
import AddCraft from "../Pages/AddCraft/AddCraft";




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
        // {
        //     path: '/details/:id',
        //     element: <PrivateRoute>
        //       <CardDetails />
        //     </PrivateRoute>,
        //     loader: ()=> fetch('/card.json')
        // },
        // {
        //     path: '/login',
        //     element: <Login></Login>
            
        // },
        // {
        //     path: '/register',
        //     element: <Register></Register>
            
        // },
        {
            path: '/addCraft',
            element: <AddCraft/>,
            loader: () => fetch('http://localhost:5000/addCraft')
                
        },
        // {
        //     path: '/unique',
        //     element: <PrivateRoute>
        //       <Unique></Unique>
        //     </PrivateRoute>    
        // },
      ]
    },

  ]);

  export default routes;