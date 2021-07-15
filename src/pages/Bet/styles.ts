import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    margin: 75px 130px;
    color: #707070;
    font-weight: lighter;
    flex-direction: row;
    align-items: flex-start;


    @media (max-width: 991px) {
        margin: 15px 100px;
        align-items: center;
        justify-content: center
    }

    @media (max-width: 991px) {
        width: 100%;
        display: flex;
        flex-direction: column;
    }

`;

export const Content = styled.div`
    width: 60%;
    flex-direction: column;
    padding-left: 0;
    display: flex;


    h1 {
        font-weight: lighter;
    }

    @media (max-width: 991px) {
        width: 100%;
        display: flex;
        flex-direction: column;

        h1{
            font-size: 18px;
            margin-bottom: 20px;
        }

        p{
            font-size: 12px;
        }

    }
`;

export const ButtonTypes = styled.div`
    margin: 5px 0 25px 0;
    display: flex;
    max-width: 50%;
`;

export const ButtonType = styled.div`
    margin: 5px 0 25px 0;
    display: flex;
    max-width: 50%;
`;

export const ButtonOptions = styled.div`
    display: flex;
    align-items: flex-end;
    margin-bottom: 25px;
    flex-direction: row;



`;
export const OutlineButton = styled.div`
    padding: 17px 22px;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
    color: #27c383;
    border: 1px solid #27c383;
    border-radius: 10px;
    background-color: transparent;
    margin-top: 44px;
    margin-right: 25px;

    &:hover {
        color: #fff;
        background-color: #27c383;
        transition: 0.5s;
    }

    @media (max-width: 991px) {
        padding: 8px 11px;
    }
`;

export const AddToCart = styled.div`
    flex-direction: row;
    align-items: center;
    margin-left: 200px;
    display: flex;
    font-size: 16px;
    font-weight: bold;
    margin-right: 36px;
    cursor: point;
    padding: 17px 22px;
    color: #fff;
    border: 1px solid #27c383;
    border-radius: 10px;
    background-color: #27c383;

    &:hover {
        opacity: 0.8;
        transition: 0.5s;
    }
`;

export const GameOption = styled.div<any>`
display: flex;
justify-content: center;
align-items: center;
min-width: 113px;
padding: 9px 27px;
border-radius: 30px;
border: 2px solid;
font-size: 14px;
font-weight: bold;
cursor: pointer;
background-color: ${(props) => props.backgroundColor};
color: ${(props) => props.fontColor};
border-color: ${(props) => props.borderColor};

& + & {
    margin-left: 30px;
}
`;

export const Balls = styled.div`
    display: flex;
    flex-wrap: wrap;
    max-width: 80%;
    margin-top: 20px;

    @media (max-width: 991px) {
        width: 100%;
        flex-direction: row;
    }
`;

export const Ball = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 65px;
    height: 65px;
    color: #fff;
    background-color: ${(props) => props.color};
    border: none;
    border-radius: 50%;
    margin-right: 12px;
    margin-bottom: 20px;
    font-size: 20px;
    cursor: pointer;

    :hover {
        opacity: 0.8;
    }

    @media (max-width: 991px) {
        width: 32px;
        height: 32px;
        margin-right: 6px;
        margin-bottom: 10px;
        font-size: 10px;
    }
`;