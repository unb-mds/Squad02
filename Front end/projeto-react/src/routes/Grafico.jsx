import React from 'react';
import { Link } from 'react-router-dom';
import Button_search from '../components/main_button/button_main';
import Chart from '../components/apexchart/chart_main';
import imagem from "../../assets/images/unb_image.png";
import { Container } from "../components/apexchart/chart"
import Navbar from "../components/navbar/navbar_main"

const Grafico = () => {
    return (
        <div>
            <Navbar/>
            <Chart />
            
            <p style={{ textAlign: 'center', marginTop: '20px', fontSize: '1vw', fontFamily: 'Poppins', color: '#fff',}} className='t1'>
                Projeto criado por alunos da Universidade de Brasília na disciplina de Métodos de Desenvolvimento de Software ensinada pela docente Carla Rocha.
            </p>
            <p style={{ textAlign: 'center', marginTop: '5px', fontSize: '1vw', fontFamily: 'Poppins', color: '#fff' }}className='t2'>
                Desenvolvido por: André Maia, Isabelle Costa, José Vinicius, Pedro Faria, Pedro Goiz, Enrico Zoratto e Mateus Cavalcante.
            </p>
            <img src={imagem} alt="Descrição da imagem" style={{ maxWidth: '10%', height: 'auto', display: 'block', margin: 'auto', marginTop: '20px' }} className='img'/>
        </div>
    );
};

export default Grafico;
