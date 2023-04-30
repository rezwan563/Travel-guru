import { createBrowserRouter } from "react-router-dom";
import Booking from "../pages/Booking";
import Main from "../layout/Main/Main";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
       
    },

]);

export default router;