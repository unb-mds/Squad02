import styled from "styled-components";


export const Container = styled.div`
    
    
    display: flex;
    justify-content: center;
    .conteudo{
        margin: 4vw auto 10vw auto;
        display: flex;
        justify-content: center;
        flex-direction: row-reverse;
        height: 700px;
        width: 70%;
        background-image: url('../../../assets/images/Component 7.png');
        background-size: contain;
        background-repeat: no-repeat;
        
    }
    .textos{
        display: flex;
        flex-direction: column;
        margin-top: 13vw;
        align-items: center;
    }
    
    .principal_text{
        font-size: 2.5vw;
        text-align: center;
        height: auto;
        font-family: Newake;
        color: #FFFFFF;
        width: 30vw;
    }

    .button{
        cursor: pointer;
        border: none;
        color: #7A41C9;
        background-color: #FFCA00;
        font-family: Poppins;
        font-size: 1.8vw;
        text-align: center;
        line-height: 40.61px;
        font-weight: 700;
        border-radius: 10px;
        width: 15vw;
        max-height: 3.6vw;
        
    }
    
    .mulher{
        margin: 9.8vw auto;
        width: 30vw;
        height: auto;

        
    }

`;