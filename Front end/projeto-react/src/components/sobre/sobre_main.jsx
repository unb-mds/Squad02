import { Container, About } from "./sobre"
import image from "../../../assets/images/Group 14.png"
import fundo from "../../../assets/images/Component 8.png"


const Sobre = () => {
    return (
        <div id="Sobre">
            <Container className="inicio">
                <img src={image} alt="header" className="imagem" />
                <img src={fundo} alt="fundo responsivo" className="imagem_fundo"/>
                <About>
                    <p className="about_text_title">Sobre</p>
                    <p className="about_text">A Cultura Transparente é uma ferramenta desenvolvida no curso de Métodos de Desenvolvimento de Software da Universidade de Brasília para simplificar a extração de dados de licitações do Diário Oficial do Estado do Rio de Janeiro.</p>
                </About>
            </Container>
        </div>
    )
}

export default Sobre;
