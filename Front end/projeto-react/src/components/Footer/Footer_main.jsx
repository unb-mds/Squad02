import { Container } from "./Footer"
import imagem from "../../../assets/images/unb_image.png";



function Footer() {
  return (
    <Container>
        <footer >
          <div className="rodape">
            <p className="texto1">
            Projeto criado por alunos da Universidade de Brasília na disciplina de Métodos de Desenvolvimento de Software ensinada pela docente Carla Rocha.
            </p>
            <p className ='texto2'>
            Desenvolvido por: André Maia, Isabelle Costa, José Vinicius, Pedro Faria, Pedro Goiz, Enrico Zoratto e Mateus Cavalcante.
            </p>
            <img src={imagem} alt="Descrição da imagem" className="imagem"/>
            <br/>
          </div>
        </footer>
    </Container>
  );
}

export default Footer;