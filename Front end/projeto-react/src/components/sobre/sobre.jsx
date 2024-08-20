import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 52vw;
    
    
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
        margin: 10vw 0;
        height: auto;
        
        
        
        .imagem_fundo{
            position: relative;
            display: block;
            height: auto;
            transform: translate(0,4vw);
        }
        .imagem{
            display: none;
        }
    }
    `

export const About = styled.div`
        .about_text_title{
        transform: translate(2.5vw, -36vw);
        font-family: poppins;
        position: absolute;
        font-weight: 700;
        font-size: 4.5vw;
        color: #B27100
        }

        .about_text{
        margin-top: 13vw;
        position: absolute;
        transform: translate(2.5vw, -43vw);
        width: 30vw;
        font-family: Poppins;
        font-weight: 400;
        font-size: 1.2vw;
        color: #B27100;
        text-align: justify;
        }

        @media (max-width: 700px) {
            max-width: fit-content;
            height: auto;
            .about_text_title{
                height: auto;
                transform: translate(16vw, -58vw);
                font-family: Poppins;
                font-weight: 700;
                font-size: 9.5vw;
                color: #B27100;
                
            }

            .about_text{
                transform: translate(16vw, -59vw);
                width: 64vw;
                font-family: Poppins;
                font-weight: 400;
                font-size: 2.5vw;
                color: #B27100;
                text-align: justify;
                height: auto;
            }

        }

    `