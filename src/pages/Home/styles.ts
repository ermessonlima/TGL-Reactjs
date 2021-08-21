import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 75px 130px;

    h1 {
        font-size: 24px;
        color: #707070;
        margin-right: 45px;
    }

    p {
        font-size: 17px;
        color: #868686;
        margin-right: 15px;
    }

    .pagination {
        display: flex;
        list-style: none;
        margin-top: 15px;
        margin-bottom: 100px;
    }

    .pagination li + li {
        margin-left: 1rem;
        border: none;
        width: 25px;

    }

    .pagination__item--active {
        border: '#7EBCDD';
        font-weight: bold;
        font-size:25px;
        width: 35px;
        height: 30px;
        margin-top: -90px;
        cursor: pointer;
        border-radius: 5px;
        padding: -24px;
        background-color:'#7EBCDD';
    }

    .no_active {
        cursor: pointer;
        border: '#7EBCDD';
        width: 30px;
        font-weight: bold;
        height: 20px;
        border-radius: 5px;
        background-color:'#7EBCDD';
        font-size:15px;

    }
    .pagination__item--active:focus {
        outline: none;
        cursor: pointer;
    }

    .btn-primary {
        cursor: pointer;
        border: '#7EBCDD';
        width: 80px;
        font-weight: bold;
        height: 20px;
        border-radius: 5px;
        background-color:'#7EBCDD';
        font-size:15px;
    }

    @media (max-width: 900px) {
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 10px 30px;
        h1 {
            font-size: 12px;
            margin-bottom: 22px;
            margin-right: 0;
        }
        p {
            font-size: 8px;
            margin-bottom: 15px;
        }
    }
`;

export const Content = styled.div`
    display: flex;
    flex-direction: row;

    @media (max-width: 900px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

`;

export const BetOptions = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;

    div {
        margin-right: 25px;
    }

    a {
        display: flex;
        align-items: center;
        border: none;
        font-size: 24px;
        font-weight: bold;
        color: #b5c401;
        text-decoration: none;
        margin-left: 340px;
    }
    

    @media (max-width: 900px) {
        display: flex;
        flex-direction: column;

        div {
            margin-bottom: 12px;
        }
        a {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            font-size: 12px;
            margin-left: -10px;
        }
    }
`;

export const GameButton = styled.div<any>`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    border: 2px solid;
    padding: 9px 27px;
    min-width: 34px;
    font-size: 14px;
    font-weight: bold;
    cursor: pointer;
    background-color: ${(props) => props.backgroundColor};
    color: ${(props) => props.fontColor};
    border-color: ${(props) => props.borderColor};
`;

export const GamesContainer = styled.div`
    width: 60%;
    height: 60vh;
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    margin: 25px 0;

    @media (max-width: 900px) {
        margin: 25px 10px;
    }
`;

export const Game = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    margin-top: 30px;
    margin-right: 15px;
    color: #868686;

    span {
        width: 6px;
        height: 94px;
        background-color: ${(props) => props.color};
        border-radius: 100px;
        margin-right: 15px;
    }

    div {
        flex-direction: column;
    }

    h1 {
        font-size: 20px;
        margin: 2px 0;
    }

    p {
        font-size: 17px;
        margin: 12px 0;
    }

    h4 {
        font-size: 20px;
        margin: 12px 0;
        color: ${(props) => props.color};
    }

    @media (max-width: 900px) {
        h1 {
            font-size: 12px;
        }
        p {
            font-size: 8px;
        }
        h4 {
            font-size: 12px;
        }
    }
`;
