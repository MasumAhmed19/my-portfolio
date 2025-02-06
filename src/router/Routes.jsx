import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import MainLayout from "../Layout/MainLayout";
import ErrorPage1 from "../Pages/Error/ErrorPage1";

export const router = createBrowserRouter([
    {
        path:'/',
        element: <MainLayout />,
        errorElement: <ErrorPage1 />,
        children:[
            {
                path:'/',
                element: <Home />,
            }
        ]
    }
])