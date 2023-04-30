import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main/Main";
import News from "../pages/News";
import Destination from "../pages/Destination";
import Blog from "../pages/Blog";
import Contact from "../pages/Contact";
import Login from "../pages/Login";
import Home from "../pages/Home";
import LoginLayout from "../layout/LoginLayout/LoginLayout";
import HomeContainer from "../pages/HomeContainer";
import BookingLayout from "../layout/BookingLayout/BookingLayout";
import Booking from "../pages/Booking"
import Register from "../pages/Register";
import Checkout from "../pages/Checkout";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <HomeContainer></HomeContainer>,
            },
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
            
          
        ]
       
    },
    {
        path: '/auth_user',
        element: <LoginLayout></LoginLayout>,
        children: [
            {
                path: '/auth_user',
                element: <Login></Login>
            },
            {
                path: '/auth_user/register',
                element: <Register></Register>
            }
        ]
    },
    {
        path: '/booking',
        element: <BookingLayout></BookingLayout>,
       
        children: [
            {
                path: ':id',
                element: <Booking></Booking>,
                loader: ({params}) => fetch(`http://localhost:5000/booking/${params.id}`),
            },
            
            {
                path: 'checkout',
                element: <Checkout></Checkout>
            }
        ]
        
    }

]);

export default router;