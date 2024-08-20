import styled from 'styled-components'

export const Container = styled.div` 
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 50vw;

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
    `