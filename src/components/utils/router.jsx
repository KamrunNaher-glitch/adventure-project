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
                element:<Home></Home>,
                loader:async ()=>{
                    const adventuresRes = await fetch("/adventure.json");
                    const adventuresData = await adventuresRes.json()

                    const feedBackRes = await fetch ("/happyclients.json");
                    const feedBackData = await feedBackRes.json() 
                    return {adventuresData,feedBackData}
                     
                }
            },
            {
                path: "/AllBlogs",
                element:<AlllBlogs></AlllBlogs>,
                loader:()=>fetch("/adventure.json")
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


