import mulher from '../../../assets/images/mulher.png';
import mulher2 from '../../../assets/images/mulher2.png';
import { Container } from './inicial';
import { StyledLink } from "../navbar/navbar";
import fundo from '../../../assets/images/Component 7.png'
import fundo2 from '../../../assets/images/Component 6.png'


const Inicial = () => {
    return(
    <div>
        <Container className='container'>
        <img src={fundo} alt="" className='fundo'/>
        <img src={fundo2} alt="" className='fundo2'/>
        <div className='conteudo'>
            <div>
                <img src={mulher2} alt="mulher" className='mulher'/>
            </div>
            <div className='textos'>    
                <a className='principal_text'>Transparência cultural ao <br/>alcance de um clique.</a>
                <StyledLink to="/grafico" className='button'>clique aqui</StyledLink>
            </div>
            <div>
                <img src={mulher} alt="mulher" className='mulher2'/>
            </div>
        </div>
        </Container>
    </div>       
    )
}

export default Inicial;