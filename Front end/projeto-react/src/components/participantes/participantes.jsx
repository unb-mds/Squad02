import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .titulo{
        font-weight: 700;
        color: white;
        font-family: Poppins;
        padding-bottom: 5%;
    }

    .equipe1 {
        display: grid;
        grid-template-columns: 20vw 20vw 20vw 20vw;
        gap: 1vw;
        .quadrado1, .quadrado2, .quadrado3, .quadrado4{
            width: 18vw;
            height: 24.4vw;
            border-radius: 10%;
        }
        
        .quadrado1 {
            background-color: #93CDAD;
            
        }

        .nome1,.nome2,.nome3,.nome4{
            font-family: Poppins;
            text-align: center;
            margin-top: 1.5vw;
            font-weight: 700;
            font-size: 1.5vw;
        }

        .imagem1,.imagem2,.imagem3,.imagem4 {
            border-radius: 50%;
            width: 9vw;
            height: auto;
            align-items: center;
            margin: auto;
            margin-left: 4.5vw;
            margin-top: 1.1vw;
        }

        .github_png {
            width: 1.3vw;
            height: auto;
            margin-left: 4vw;
            margin-top: 1vw;
        }

        .githubname1,.githubname2,.githubname3,.githubname4{
            font-family: Poppins;
            font-weight: 600;
            height: 1.3vw;
            font-size: 1vw;
            transform: translate(6vw, -1.4vw);
        }

        .function1,.function2,.function3,.function4{
            font-family: Poppins;
            font-weight: 400;
            font-style: italic;
            font-size: 0.8vw;
            transform: translate(6vw, -1.2vw);
        }

        .quadrado2 {
            background-color: #874FD4;
            

        }

        .imagem2{
            border-radius: 50%;
            width: 9vw;
            height: auto;
            align-items: center;
            margin: auto;
            margin-left: 4.5vw;
            margin-top: 1.1vw; 
        }

        

        

        .quadrado3{
            background-color: #FFCA00;
            
        }
        

        

        .github_png1 {
            width: 1.3vw;
            height: auto;
            margin-left: 4vw;
            margin-top: 1vw;
        }

        

        
        .function3_1{
            font-family: Poppins;
            font-weight: 400;
            font-style: italic;
            font-size: 0.8vw;
            transform: translate(6vw, -1.2vw);
        }

        .quadrado4 {
            background-color: #FFEFD6;
            
        }

    

        

        .github_png2 {
            width: 1.3vw;
            height: auto;
            margin-left: 4vw;
            margin-top: 1vw;
        }

        
        }

        

    
    
    .equipe2 {
        display: grid;
        grid-template-columns: 20vw 20vw 20vw 20vw;
        gap: 1vw;

        .quadrado5, .quadrado6, .quadrado7, .quadrado8{
            background-color: #FFCA00;
            width: 18vw;
            height: 24.4vw;
            border-radius: 10%;
            
        }

        .nome5,.nome6,.nome7 {
            font-family: Poppins;
            text-align: center;
            margin-top: 1.5vw;
            font-weight: 700;
            font-size: 1.5vw;
        }

        .imagem5,.imagem6,.imagem7 {
            border-radius: 50%;
            width: 9vw;
            height: auto;
            align-items: center;
            margin: auto;
            margin-left: 4.5vw;
            margin-top: 1.1vw;
        }

        .github_png2 {
            width: 1.3vw;
            height: auto;
            margin-left: 4vw;
            margin-top: 1vw;
        }

        .githubname5,.githubname6,.githubname7 {
            font-family: Poppins;
            font-weight: 600;
            height: 1.3vw;
            font-size: 1vw;
            transform: translate(6vw, -1.4vw);
        }

        .function5,.function6,.function7 {
            font-family: Poppins;
            font-weight: 400;
            font-style: italic;
            font-size: 0.8vw;
            transform: translate(6vw, -1.2vw);
        }

        .function3_1 {
            font-family: Poppins;
            font-weight: 400;
            font-style: italic;
            font-size: 0.8vw;
            transform: translate(6vw, -1.2vw);
        }

        .quadrado6 {
            background-color: #FFEFD6;
            
        }


        .github_png3 {
            width: 1.3vw;
            height: auto;
            margin-left: 4vw;
            margin-top: 1vw;
        }

        

        .function3_12 {
            font-family: Poppins;
            font-weight: 400;
            font-style: italic;
            font-size: 0.8vw;
            transform: translate(6vw, -1.2vw);
        }

        .quadrado7 {
            background-color: #874FD4;
            
        }
    

        .function3_1 {
            font-family: Poppins;
            font-weight: 400;
            font-style: italic;
            font-size: 0.8vw;
            transform: translate(6vw, -1.2vw);
        }

        .quadrado8 {
            background-color: #874FD4;
            
       }

       .alunos {
            font-family: Poppins;
            text-align: center;
            margin-top: 4.5vw;
            font-weight: 700;
            font-size: 0.8vw;
            display: flex;
            transform: translate(7.5vw, 1.5vw);
            font-style: italic;

        }


        .faculdade {
            font-family: Poppins;
            text-align: center;
            font-weight: 600;
            height: 4vw;
            font-size: 2vw;
            transform: translate(0, 1vw);
        }

        .function8 {
            font-family: Poppins;
            text-align: center;
            font-weight: 400;
            font-size: 1vw;
            width: 12;vw;
            transform: translate(0vw, 2vw);


    }

        @media (max-width:700px){
            overflow-x: hidden;
            .equipe1{
                display: flex;
                flex-direction: column;
                align-items: center;
            }
            .equipe2{
                display: flex;
                flex-direction: column;
                align-items: center;
            }
            
                
            }
        
`