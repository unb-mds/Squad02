import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .textos{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

    }

    .about_text_title{
        padding-top: 0%; 
        font-weight: 700;
        font-size: 2.5rem;
        color: white;
        font-family: Poppins;
        padding-bottom: 0;
    }

    .about_text{
        padding-top: 0; 
        font-weight: 300;
        font-size: 1rem;
        color: white;
        font-family: Poppins;
        text-align: center;
        max-width: 70%;
        padding-bottom: 5%;
    }

    .firstline{
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        width: 100%;
    }

    .fifthline{
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        width: 100%;
        margin-bottom: 5%;
    }

    .imagem1_0 {
        border-radius: 50%;
        width: 70px;
        height: 70px;
        align-items: center;
        margin: auto;
        margin-left: 2%;
    }

    .imagem1_2 {
        border-radius: 50%;
        width: 70px;
        height: 70px;
        align-items: center;
        margin: auto;
        margin-left: 15%;
        margin-top: 1.5%;
    }

    .imagem1_3 {
        border-radius: 50%;
        width: 70px;
        height: 70px;
        align-items: center;
        margin: auto;
        margin-left: 15%;
        margin-top: 2%;
    }

    .imagem1_4 {
        border-radius: 50%;
        width: 70px;
        height: 70px;
        align-items: center;
        margin: auto;
        margin-left: 15%;
        margin-top: 1.5%;
    }

    .secondline{
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        width: 100%;
        margin-top: 0%;
    }

    .fourthline{
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        width: 100%;
        margin-top: 0%;
        
    }

    .imagem2_0 {
        border-radius: 50%;
        width: 70px;
        height: 70px;
        align-items: center;
        margin: auto;
        margin-left: 15%;
        margin-top: 2%;
    }

    .imagem2_2 {
        border-radius: 50%;
        width: 70px;
        height: 70px;
        align-items: center;
        margin: auto;
        margin-left: 5%;
        margin-top: 1.5%;
    }

    .imagem2_3 {
        border-radius: 50%;
        width: 70px;
        height: 70px;
        align-items: center;
        margin: auto;
        margin-left: 7%;
        margin-top: 1.5%;
    }

    .centerline{
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        width: 100%;
        margin-top: 2%;
    }

    .esquerda{

        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        width: 100%;
        margin-top: 0%;
        
    }

    .direita{

        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        width: 100%;
        margin-top: 2%;
        
    }

    .imagem3_0 {
        border-radius: 50%;
        width: 70px;
        height: 70px;
        align-items: center;
        margin: auto;
        margin-left: 20%;
        margin-top: 0%;
    }

    .imagem3_1 {
        border-radius: 50%;
        width: 70px;
        height: 70px;
        align-items: center;
        margin: auto;
        margin-left: 45%;
        margin-top: 25%;
    }

    .imagem3_2 {
        border-radius: 50%;
        width: 70px;
        height: 70px;
        align-items: center;
        margin-right: 1%
        margin-top: -100%;
    }

    .imagem3_3 {
        border-radius: 50%;
        width: 70px;
        height: 70px;
        align-items: center;
        margin: auto;
        margin-left: 35%;
        margin-top: -2%;
    }

    @media (max-width: 700px){
        overflow-x: hidden;
        .about_text_title{
            overflow-x: hidden;
            all: unset;
            
            font-weight: 700;
            font-size: 8vw;
            color: white;
            font-family: Poppins;
            
            
        }

        .about_text{
            overflow-x: hidden;
            all: unset;
            font-weight: 300;
            font-size: 4vw;
            color: white;
            font-family: Poppins;
            
            text-justify

            margin: auto;
            width: 30vw;
        }
        .textos{
            overflow-x: hidden;
            all: unset;
            width: 70vw;
            margin:0 auto;
            
        }
        .imagem1_0,.imagem1_2, .imagem1_3,.imagem1_4, .fourthline, .imagem2_0 , .imagem2_2 , .imagem2_3 , .esquerda,  .direita,.imagem3_1,  .imagem3_2 ,.imagem3_3{
            display: none;
        }

    }

`