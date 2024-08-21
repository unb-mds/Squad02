import styled from "styled-components";


export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 52vw;
    margin-top: 4vw;

.fundo{
    position: absolute;
    margin: 0 auto;
    
    height: 36.4vw;
}
.fundo2{
    display: none;
}

    .conteudo{
        margin: 4vw auto 0 auto;
        display: flex;
        justify-content: center;
        flex-direction: row-reverse;
        height: 45vw;
        width: 70%;
        
        
        
    }
    .textos{
        position: relative;
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
        position: relative;
        margin: 9.8vw auto;
        width: 30vw;
        height: auto;

        
    }
    
    .mulher2{
        display: none;
    }
    @media (max-width:700px){
        margin-top: 30vw;
        margin-bottom: 90vw;
        .fundo{
            display: none;
        }
        .fundo2{
            display: block;
            position: absolute;
            margin: 0 auto 40vw auto;
            height: 91vw;

        }
        

        .conteudo{
            all: unset;
            margin: 1.2vw auto;
            display: flex;
            flex-direction: column;
            align-items: center;
            position: relative;
        }

        .textos{
        
        all: unset;
        position: relative;
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
            position: relative;
            display: block;
            width: 45vw;
            height: auto;
        }
    }

`;