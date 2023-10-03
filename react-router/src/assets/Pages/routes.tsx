import { createBrowserRouter } from "react-router-dom";

import { Home } from "./Home/index";
import { Sobre } from "./Sobre/index";

const router = createBrowserRouter ([
    {
        path:"/",
        element: <Home/>
    },
    {
        path:"/",
        element: <Sobre/>
    }
]) 
export {router};