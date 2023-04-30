import { createBrowserRouter } from "react-router-dom";
import Booking from "../pages/Booking";
import Main from "../layout/Main/Main";
import News from "../pages/News";
import Destination from "../pages/Destination";
import Blog from "../pages/Blog";
import Contact from "../pages/Contact";
import Login from "../pages/Login";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: 'news',
                element: <News></News>
            },
            {
                path: 'destination',
                element: <Destination></Destination>
            },
            {
                path: 'blog',
                element: <Blog></Blog>,
            },
            {
                path: 'contact',
                element: <Contact></Contact>
            },
            {
                path: 'login',
                element: <Login></Login>
            }
        ]
       
    },

]);

export default router;