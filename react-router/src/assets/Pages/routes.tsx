import { createBrowserRouter } from "react-router-dom";

import { Home } from "./Home/index"
import { Sobre } from "./Sobre/index"
import {Contato } from "./Contato/index"
import { Produto } from "./Produtos/index"
import { NotFound } from "./NotFound"

const router = createBrowserRouter ([
    {
        path:"/",
        element:<Home/>
    },
    {
        path:"/sobre",
        element:<Sobre/>
    },
    {
        path:"/contato",
        element:<Contato/>
    },
    {
        path:"/produto/:id",
        element:<Produto/>
    },
    {
        path:"*",
        element:<NotFound/>
    }

])
export{router};