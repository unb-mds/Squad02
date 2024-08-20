import styled from 'styled-components'

export const Container = styled.div` 

    .rodape{
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: center;
        background-color: #332e26;
        margin: 0 0 0 0;
    }

    .texto1{
        text-align: center;
        margin-Top: 1vw;
        padding-top: 1vw ;
        font-Size: 1vw;
        font-Family: Poppins;
        color: #fff;
    }

    .texto2{
        text-Align: center;
        font-Size: 1vw;
        font-Family: Poppins;
        color: #fff 
    }

    .imagem{
        max-Width: 5vw;
        height: auto;
        display: block;
        margin: auto;
        margin-Top: 0.7vw;
    }


    @media (max-width: 700px) {
    .texto1{
        
        width: 80vw;
        text-align: center;
        margin-Top: 1vw;
        padding-top: 1vw ;
        font-Size: 2vw;
        font-Family: Poppins;
        color: #fff;
        height: auto;
    }

    .texto2{
        text-Align: center;
        width: 80vw;
        font-Size: 2vw;
        font-Family: Poppins;
        color: #fff 
    }

    .imagem{
        max-Width: 8vw;
        height: auto;
        display: block;
        margin-bottom: 2vw;
        margin-Top: 0.7vw;
    }
    }
    `