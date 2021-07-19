import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-width: 1200px;
    height: 90vh;
    margin: 0 auto;
    font-style: italic;
    font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
    color: #707070;
 
    @media (max-width: 900px){
        flex-direction: column;
        max-width: 500px;
        justify-content: center;
    }
`;

