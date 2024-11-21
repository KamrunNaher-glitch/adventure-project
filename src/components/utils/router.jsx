import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Home/Home";
import About from "../About/About";
import AlllBlogs from "../AllBlogs/AlllBlogs";
import Profile from "../Profile/Profile";
import Details from "../Details/Details";
import Login from "../Login/Login";

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
            },
            {
                path:"/Details/:id",
                element: <Details></Details>,
                loader: async ({params}) => {
                    const res = await fetch ("/adventure.json")
                    const data = await res.json()
                    const singleData = data.find (d => d.id == params.id)
                    return singleData
                }
            },
            {
                path:"/login",
                element: <Login></Login>
            }
        ]
    }
])

export default router ;


