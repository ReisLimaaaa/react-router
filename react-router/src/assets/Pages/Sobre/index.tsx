import { Link } from 'react-router-dom'
import { Header } from '../../../Components/Header'

export function Sobre(){
    
    return (
        <div>
            <Header/>
            <h1>Bem-vindo à página Sobre!</h1>
            <Link to = "/contato">Contatos</Link>
        </div>
    )
}