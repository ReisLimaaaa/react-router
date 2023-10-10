import { Link  } from "react-router-dom"
import './header.css'

export function Header(){
    return(
        <header>
            <Header/>
            <h2>Empresa</h2>

            <div>
                <Link to = "/">Home</Link>
                <Link to = "/sobre">Sobre</Link>
                <Link to = "/contato">Contato</Link>
            </div>
        </header>
    )
}