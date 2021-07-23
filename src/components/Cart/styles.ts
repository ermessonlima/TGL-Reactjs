import styled from "styled-components";

export const CartContainer = styled.div`
    max-width: 317px;
    background-color: #fff;
    padding: 32px 19px 0 19px;
    color: #707070;
    margin-left: 75px;
    border: 1px solid #e2e2e2;
    border-radius: 10px;
 
    h1 {
        font-size: 24px;
        font-weight: lighter;
    }


    @media (max-width: 991px) {
        margin-left: 0px;

 }
 
`;

export const BetArea = styled.div`
    padding-top: 0;
    padding-right: 6px;
    max-height: 450px;
    height: fit-content;
    overflow-x: hidden;
    overflow-y: auto;
    margin: 20px 0;
`;

export const BetsList = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 35px;
`;

export const BetInfo = styled.div`
    margin-left: 10px;
    border-left: 4px solid #868686;
    width: 240px;
    padding-left: 10px;
    border-radius: 4px 0 0 4px;
    word-wrap: break-word;
    border-left: 4px solid ${(props) => props.color};

    h3 {
        font-style: italic;
        font-weight: bold;
        word-wrap: break-word;
        max-width: 313px;
        margin-bottom: 6px;
        font-size: 15px;
        color: #868686;
    
    }

    section {
        display: flex;
        color: #868686;
        font-weight: normal;
        font-style: normal;
        align-items: center;
        font-size: 16px;
     

        h1 {
            font-style: italic;
            font-weight: bold;
            font-size: 16px;

            color: ${(props) => props.color};
            margin-right: 15px;
        }
    }
`;

export const Save = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 96px;
    font-size: 35px;
    font-weight: bold;
    text-decoration: none;
    margin-left: -20px;
    margin-top: 20px;
    width: 355px;
    border-radius: 0 0 10px 10px;
    cursor: pointer;
    border: 1px solid #e2e2e2;
 
`;

export const EmptyCart = styled.div`
    display: flex;
    align-items: center;
    font-size: 32px;
    color: #27c383;
    justify-content: center;
    margin: 45px;

`;
