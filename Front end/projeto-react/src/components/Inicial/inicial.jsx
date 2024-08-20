import styled from "styled-components";


export const Container = styled.div`
    .conteudo{
        margin: 4vw auto 0 auto;
        display: flex;
        justify-content: center;
        flex-direction: row-reverse;
        height: 45vw;
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
        height: 1vw;
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
        color: #7A41C9;
        background-color: #FFCA00;
        font-family: Poppins;
        font-size: 1.8vw;
        font-weight: 700;
        border-radius: 10px;
        width: 15vw;
        
        
    }
    
    .mulher{
        margin: 9.8vw auto;
        width: 30vw;
        height: auto;

        
    }
    
    .mulher2{
        display: none;
    }
    @media (max-width:700px){
        

        .conteudo{
            all: unset;
            margin: 2vw 0 0 0;
            display: flex;
            flex-direction: column;
            
            align-items: center;
            height: 91vw;
            width: auto;
            background-image: url('../../../assets/images/Component 6.png');
            background-size: cover;
            background-repeat: no-repeat;
        }

        .textos{
        
        all: unset;
        display: flex;
        flex-direction: column;
        align-items: center;
        }

        .principal_text{
            all: unset;
            font-size: 5.5vw;
            margin-top: 14vw;
            text-align: center;
            height: auto;
            font-family: Newake;
            color: #FFFFFF;
            width: 65vw;
        }

        .button{
        all: unset;
        cursor: pointer;
        border: none;
        color: #7A41C9;
        background-color: #FFCA00;
        font-family: Poppins;
        font-size: 4vw;
        text-align: center;
        height: 7vw;
        font-weight: 700;
        border-radius: 10px;
        width: 30vw
        
        }

        .mulher{
            display: none;
        
        }
        .mulher2{
            display: block;
            margin-top: 1vw;
            width: 45vw;
            height: auto;
        }
    }

`;