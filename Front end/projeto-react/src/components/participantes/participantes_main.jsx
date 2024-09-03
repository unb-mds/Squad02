import { Container } from "./participantes.jsx"
import png_github from "../../../assets/images/github.png"

const Participantes = () => {
    return (
        <div id="Participantes">
            <Container className="inicio">
                <div>
                    <div className="equipe1">
                        <div className='quadrado1'>
                            <p className="nome1">André <br/>Maia</p>
                            <a href="//github.com/andre-maia51" target="_blank" className="ancora">
                                <img className="imagem1" src="https://avatars.githubusercontent.com/u/76632983?v=4"/>
                            </a>
                            <br/>
                            <img className="github_png" src={png_github}/>
                            <p className='githubname1'>Andre-maia51</p>
                            <p className='function1'>Scrum Master</p>
                        </div>

                        <div className="quadrado2">
                            <p className="nome2">Mateus<br/>Cavalcante</p>
                            <a href="//github.com/mateuscavati" target="_blank" className="ancora">
                                <img className="imagem2" src="https://avatars.githubusercontent.com/u/117764744?v=4"/>
                            </a>
                            <br/>
                            <img className="github_png" src={png_github}/>
                            <p className='githubname2'>Mateuscavati</p>
                            <p className='function2'>Project Owner</p>
                        </div>

                        <div className="quadrado3">
                            <p className="nome3">Pedro<br/>Goiz</p>
                            <a href="//github.com/Goizzz" target="_blank" className="ancora">
                                <img className="imagem3" src="https://avatars.githubusercontent.com/u/111159833?v=4"/>
                            </a>
                            <br/>
                            <img className="github_png1" src={png_github}/>
                            <p className='githubname3'>Goizzz</p>
                            <p className='function3'>Desenvolvedor</p>
                            <p className='function3_1'>Front-end</p>
                        </div>

                        <div className="quadrado4">
                            <p className="nome4">Isabelle<br/>Costa</p>
                            <a href="//github.com/isacostaf" target="_blank" className="ancora">
                                <img className="imagem4" src="https://avatars.githubusercontent.com/u/139937524?v=4"/>
                            </a>
                            <br/>
                            <img className="github_png" src={png_github}/>
                            <p className='githubname4'>Isabelle Costa</p>
                            <p className='function4'>Desenvolvedor</p>
                            <p className='function3_1'>Front-end</p>
                        </div>

                        <br/>

                    </div>


                    <div className="equipe2">

                        <div className="quadrado5">
                            <p className="nome5">José<br/>Vinicius</p>
                            <a href="//github.com/JoseViniciusQueiroz" target="_blank" className="ancora">
                                <img className="imagem5" src="https://avatars.githubusercontent.com/u/125223478?v=4"/>
                            </a>
                            <br/>
                            <img className="github_png2" src={png_github}/>
                            <p className='githubname5'>JoseViniciusQueiroz</p>
                            <p className='function5'>Desenvolvedor</p>
                            <p className='function3_1'>Back-End</p>
                        </div>

                        <div className="quadrado6">
                            <p className="nome6">Pedro<br/>Faria</p>
                            <a href="//github.com/PhFariaa" target="_blank" className="ancora2">
                                <img className="imagem6" src="https://avatars.githubusercontent.com/u/126727677?v=4"/>
                            </a>
                            <br/>
                            <img className="github_png3" src={png_github}/>
                            <p className='githubname6'>PhFariaa</p>
                            <p className='function6'>Front-End</p>
                            <p className='function3_12'>DevOps</p>
                        </div>

                        <div className="quadrado7">
                            <p className="nome7">Enrico<br/>Zoratto</p>
                            <a href="//github.com/sidts" target="_blank" className="ancora2">
                                <img className="imagem7" src="https://avatars.githubusercontent.com/u/122989369?v=4"/>
                            </a>
                            <br/>
                            <img className="github_png3" src={png_github}/>
                            <p className='githubname7'>Sidts</p>
                            <p className='function7'>Desenvolvedor</p>
                            <p className='function3_1'>Back-End</p>
                        </div>

                        <div className="quadrado8">
                            <p className="alunos">Alunos</p>
                            <p className='faculdade'>UNB</p>
                            <p className='function8'>Disciplina: Métodos de Desenvolvimento de Software</p>
                        </div>

                        <br/>
                    </div>

                    <div className="equipe3">
                        

                    </div>

                </div>
            </Container>
        </div>
    )
}

export default Participantes;