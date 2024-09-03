import { Container } from "../licitacoes/licitacoes"
import licitacoes from "../../../assets/images/Group 13.png"
import fundo from "../../../assets/images/Component 11.png"

const Licitacoes = () => {
    return (
        <div id="Licitacoes">
            <Container className="inicio">
                <img className="image"src={licitacoes} alt="logo"/>
                <img src={fundo} alt="imagem de fundo" className="fundo"/>
                <p className="about_text_title">Licitações</p>
                <p className="about_text"><br/>Licitações são processos para selecionar fornecedores de bens e serviços, garantindo transparência e igualdade. A Cultura Transparente foca nas licitações de Niterói, Rio de Janeiro, Nova Iguaçu e São João de Meriti.</p>
            </Container>
        </div>
    )
}

export default Licitacoes;
