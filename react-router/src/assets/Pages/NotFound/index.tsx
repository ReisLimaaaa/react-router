import { Link } from "react-router-dom"
import { Header } from '../../../Components/Header'

export function NotFound(){
    return(
        <div>

            <h1>Desculpe,essa página não existe!</h1>
            <Link to = "/">Acessar página Home</Link>

        </div>
    )
}