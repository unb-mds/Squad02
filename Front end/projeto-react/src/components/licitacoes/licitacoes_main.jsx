import { Container } from "../licitacoes/licitacoes"
import licitacoes from "../../../assets/images/Group 13.png"

const Licitacoes = () => {
    return (
        <div id="Licitacoes">
            <Container className="inicio">
                <img className="image"src={licitacoes} alt="logo"/>
                <p className="about_text_title">Licitações</p>
                <p className="about_text"><br/>Licitações são procedimentos administrativos utilizados pelos órgãos públicos para selecionar a melhor proposta entre os interessados em fornecer bens, serviços ou obras. Elas seguem regras pré-determinadas, visando garantir a transparência, a igualdade de condições entre os concorrentes e a obtenção da melhor relação custo-benefício para o poder público. Geralmente, as licitações envolvem etapas como a divulgação do edital, a habilitação dos participantes, a análise das propostas e a escolha da melhor oferta, conforme os critérios estabelecidos.</p>
            </Container>
        </div>
    )
}

export default Licitacoes;
