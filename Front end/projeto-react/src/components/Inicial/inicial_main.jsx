import imagem from '../../../assets/images/Group 10.png';
import mulher from '../../../assets/images/mulher.png';
import fundo from '../../../assets/images/Component 7.png';
import { Container } from './inicial';
import { StyledLink } from "../navbar/navbar";

const Inicial = () => {
    return(
    <div className='div'>
        <Container>
        <img src={fundo} alt="fundo" className='fundo'/>
        <div className='conteudo'>
            <div>
                <img src={mulher} alt="mulher" className='mulher'/>
            </div>
            <div className='textos'>    
                <a className='principal_text'>Transparência cultural ao <br/>alcance de um clique.</a>
                <StyledLink to="/grafico" className='button'>clique aqui</StyledLink>
            </div>
        </div>
        </Container>
    </div>       
    )
}

export default Inicial;