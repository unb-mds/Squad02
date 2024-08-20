import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../../../assets/images/Logo-cabecalho.png";
import logo2 from "../../../assets/images/icon.png"
import { Container } from "../main_button/button"; // Importação do Container que contém os estilos

const ButtonSearch = () => {
    return (
        <Container>
            <Link to="/">
                <button id="logo" className="b">
                    <img src={logo} alt="logo" className="logo" />
                    <img src={logo2} alt="logo2" />
                </button>
            </Link>
        </Container>
    )
}

export default ButtonSearch;
