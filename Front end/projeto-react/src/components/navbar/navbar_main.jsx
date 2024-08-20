import { Container } from "../navbar/navbar";
import Button_search from '../main_button/button_main';
import { NavBar, StyledLink } from "../navbar/navbar";
import React, { useRef } from 'react';

const Navbar = () => {

    const scrollToPosition = (percentage) => {
        const pageHeight = document.documentElement.scrollHeight;
        const scrollTo = (pageHeight * percentage) / 100;
        window.scrollTo({
          top: scrollTo,
          behavior: 'smooth', // Para uma rolagem suave
        });
      };

    return (
        <div>
            <Container className="inicio">
                <Button_search />
                <NavBar>
                    <button className="b1" onClick={() => scrollToPosition(30)}>Sobre</button>
                    <button className="b2" onClick={() => scrollToPosition(61)}>Informações</button>
                    <StyledLink to="/integrantes" className="b3">Equipe</StyledLink>
                    <StyledLink to="/grafico" className="b4">Licitações</StyledLink>
                </NavBar>
            </Container>
        </div>
    );
};

export default Navbar;
