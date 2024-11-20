import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Home/Home";
import About from "../About/About";
import AlllBlogs from "../AllBlogs/AlllBlogs";
import Profile from "../Profile/Profile";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children:[
            {
                path: "/",
                element:<Home></Home>
            },
            {
                path: "/AllBlogs",
                element:<AlllBlogs></AlllBlogs>
            },
            {
                path: "/Profile",
                element:<Profile></Profile>
            },
            {
                path: "/About",
                element:<About></About>
            }
        ]
    }
])

export default router ;