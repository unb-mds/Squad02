import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavBar = styled.div`
    background-color: #7A41C9;
    width: 100%;
    max-width: 931px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0px;
    border-radius: 70px;
    color: white;
    padding: 0 20px;
    margin: auto;

    .b1, .b2, .b3 {
        cursor: pointer;
        background-color: #7A41C9;
        color: #ffffff;
        font-size: 20px;
        padding: 10px;
        border: none;
        font-family: Poppins;
        font-weight: 600;
        flex: 1; /* Allow the buttons to grow and shrink */
        text-align: center; /* Center the text inside the buttons */
        margin: 0 10px; /* Add margin between buttons */
    }
    @media (max-width: 700px){
        .b1, .b2{
                display: none;
        }
        .b3, .b4{
            
        }
    }
`;

export const Container = styled.div`
    margin-top: 32px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #252424;
    height: 70.5px;
    width: 100%;
    padding: 0 20px; 

    .b {
        cursor: pointer;
        font-family: Poppins;
        font-size: 20px;
        font-weight: 600;
        background-color: #252424;
        border: none;
    }
`;

export const StyledLink = styled(Link)`
    background-color: #7A41C9;
    color: #ffffff;
    font-size: 20px;
    padding: 10px;
    border: none;
    font-family: Poppins;
    font-weight: 600;
    flex: 1; 
    text-align: center; 
    margin: 0 10px; 
    text-decoration: none; 

    @media (max-width: 700px){
        
    }
`;
