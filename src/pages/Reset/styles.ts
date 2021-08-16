import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
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

export const Title = styled.div`
    display: flex;
    text-align: center;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 30px;
    font-weight: bold;

    h2 {
        font-size: 65px;
        flex-wrap: wrap;
        width: 244px;
        color:#707070;
    }
    div {
        padding: 7px 57px;
        background-color: #b5c401;
        color: #fff;
        border-radius: 100px;
        font-size: 22px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 30px 0 20px 0;
    }
    h1 {
        font-size: 83px;
    }

    @media (max-width: 900px) {
        padding-bottom: 30px;
        width: 100%;

        h2 {
            font-size: 20px;
            width: 122px;
        }

        div {
            padding: 3.5px 28.5px;
            font-size: 11px;
            margin: 15px 0 10px 0;
        }
        
        h1 {
            font-size: 30px;
        }
    }
`;
