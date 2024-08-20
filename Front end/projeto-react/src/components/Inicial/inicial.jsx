import styled from "styled-components";

export const Container = styled.div`
    position: relative;
    width: 80vw;
    height: 650px;
    margin-bottom: 10%;
    margin-left: 10%;
    
    @media only screen and (max-width: 600px) {
    .fundo {
        display: none;

    }
}

    .conteudo{
        position: absolute;
        margin-top: 0px;
        
        width: 70vw;
        height: auto;
        margin-left: 7vw;
        display: flex;
        flex-direction: row;
        
    }
    
    .textos{
        height: 500px;
        width: 500px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column-reverse;
        margin-top: 70px;
        position: absolute;
        
    }

    .fundo {
    width: 100%;
    min-width: 1200px;
    height: 100%;
    object-fit: cover; /* Ajusta a imagem ao tamanho do container */
    position: absolute; /* Permite que outros elementos sejam sobrepostos */
    margin-top: 50px;
    z-index: 1;

    margin-right: 5vw;
    border-radius: 20px;
    }

    .mulher, .principal_text, .button {
    position: absolute; /* Sobrepõe esses elementos na imagem de fundo */
    z-index: 2; /* Garante que estes estejam acima da imagem de fundo */
    }

    .mulher{
        position: absolute;
        width: 700px;
        height: auto;
        margin-left: 40%;
        margin-top: 173px;
            
    }

    .principal_text {
        font-size: 2vw;
        weight: 400;
        text-align: center;
        height: auto;
        font-family: Newake;
        color: #FFFFFF;
        width: 30vw;
        
    }

    .button {
        cursor: pointer;
        border: none;
        color: #7A41C9;
        background-color: #FFCA00;
        font-family: Poppins;
        font-size: 2vw;
        text-align: center;
        line-height: 40.61px;
        font-weight: 700;
        border-radius: 10px;
        width: 15vw;
        margin-top: 190px;
    }
`;