import styled from 'styled-components'

export const Container = styled.div` 
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 50vw;
    .fundo{
        display: none;
    }

    .image{
        width: 70vw;
    }

    .about_text_title{
        transform: translate(-22vw, -34vw);
        display: flex;
        font-family: Poppins;
        font-weight: 700;
        font-size: 4.3vw;
        color: #1E503F;
    }

    .about_text{
        transform: translate(-18.4vw, -36.5vw);
        width: 30vw;
        font-family: Poppins;
        font-weight: 400;
        font-size: 1.15vw;
        color: #1E503F;
        text-align: justify;   
    }
    @media (max-width: 700px) {
        
        all: unset;
        display: flex;
        flex-direction: column;
        height: auto;
        width: auto;

        .image{
            display: none;
        }
        .fundo{
            display: block;
            position: relative;
        }

        .about_text_title{
            position: absolute;
        transform: translate(15vw, -62vw);
        display: flex;
        font-family: Poppins;
        font-weight: 700;
        font-size: 9.5vw;
        color: #1E503F;
        margin-top: 82vw;
    }
    .about_text{
        position: absolute;
        transform: translate(15vw, -67vw);
        width: 65vw;
        font-family: Poppins;
        font-weight: 400;
        font-size: 2.4vw;
        color: #1E503F;
        text-align: justify;
        margin-top: 96vw;
    }
    `