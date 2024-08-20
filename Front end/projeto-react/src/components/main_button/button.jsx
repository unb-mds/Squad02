import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: flex-start; /* Alinha o botão à esquerda */
    align-items: center;
    background-color: #252424;
    height: 100px; /* Aumentar a altura */
    padding: 20px; /* Adicionar padding ao container */
    margin-top: 20px; /* Adicionar margem superior */

    button {
        

        cursor: pointer;
        font-family: Poppins;
        font-size: 20px;
        font-weight: 600;
        background-color: #252424;
        border: none;

        .logo {
            height: 100%; /* Ajusta a altura da imagem para ocupar toda a altura do botão */
    
        }
        .logo2{
            display: none;
        }
    @media (max-width: 700px) {
        .logo{
            display: none;
        }

        .logo2{
            display: block;
        }

        
    }
    }
`;
