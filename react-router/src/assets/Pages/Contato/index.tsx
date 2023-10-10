import { Link } from 'react-router-dom'
import { Header } from '../../../Components/Header'

export function Contato(){
    return(

        <div>
            <Header/>
            <h1>Bem vindo a página de contato</h1>
            <h3> Telefone: (xx) XXXX-XXXX</h3>
            <hr/>
            <Link to="/">Ir para Home</Link>
            <Link to="/sobre">Sobre</Link>

        </div>

    )

}