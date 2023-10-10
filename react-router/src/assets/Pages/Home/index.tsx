import {Link} from 'react-router-dom'
import { Header } from '../../../Components/Header'

export function Home(){
    return(
        <div>
            <Header/>
            <h1> Bem vindo a página Home!</h1>
            <span>Essa é nossa primeira página com navegação</span>
            <br/>
            <Link to="/sobre">Sobre</Link>
            <Link to="/contato">Contatos</Link>
        </div>
    )


}