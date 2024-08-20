import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 52vw;
    margin-top: 0vw;
    
    .imagem_fundo{
        display: none;
    }
    .imagem{
        width: 70vw;
    }
    
    @media (max-width: 700px) {
        all: unset;
        display: flex;
        flex-direction: column;
        margin-top: 10vw;
        height: auto;
        width: auto;
        .imagem_fundo{
            display: block;

        }
        .imagem{
            display: none;
        }
    }
    `

export const About = styled.div`
        .about_text_title{
        transform: translate(17.5vw, -35vw);
        font-family: Poppins;
        font-weight: 700;
        font-size: 4.5vw;
        color: #B27100
        }

        .about_text{
        transform: translate(17.5vw, -36vw);
        width: 30vw;
        font-family: Poppins;
        font-weight: 400;
        font-size: 1.2vw;
        color: #B27100;
        text-align: justify;
        }

        @media (max-width: 700px) {

            .about_text_title{
                transform: translate(16vw, -58vw);
                font-family: Poppins;
                font-weight: 700;
                font-size: 9.5vw;
                color: #B27100
            }

            .about_text{
                transform: translate(16vw, -59vw);
                width: 64vw;
                font-family: Poppins;
                font-weight: 400;
                font-size: 2.5vw;
                color: #B27100;
                text-align: justify;
            }

        }

    `