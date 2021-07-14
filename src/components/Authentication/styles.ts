import styled from "styled-components";


export const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
margin: 0 25px 0 15px;

h1 {
    font-size: 32px;
    color: #707070;
}

@media (max-width: 991px) {
    h1 {
        font-size: 24px;
    }
}
`;

export const Form = styled.form`
margin-top: 26px;

border: 1px solid #dddddd;
border-radius: 14px;
width: 352px;
display: flex;
flex-direction: column;
background-color: #ffffff;

@media (max-width: 991px) {
    width: 285px;
}
`;

export const Input = styled.input`
background-color: transparent;
border: none;
border-bottom: 2px solid #ebebeb;
border-radius: 14px 14px 0 0;
padding: 30px 0 30px 30px;
font-size: 17px;
font-style: italic;
outline: none;
::placeholder {
    color: #9d9d9d;
    font-size: 17px;
    font-weight: bold;
}

@media (max-width: 991px) {
    padding: 20px 0 20px 20px;
    font-size: 13px;
    ::placeholder {
        font-size: 13px;
    }
}
`;

export const RecoverButton = styled.div`
margin-top: 26px;
background-color: #ffffff;
border: none;
font-size: 17px;
color: #c1c1c1;
margin-left: 160px;
margin-bottom: 44px;
cursor: pointer;
outline: none;

@media (max-width: 991px) {
    font-size: 13px;
    margin-left: 140px;
    margin-bottom: 22px;
}

a {
    outline: none;
    cursor: pointer;
    font-style: italic;
    background-color: #ffffff;
    text-decoration: none;
    color: #C1C1C1;
}
`;

export const SubmitButton = styled.button`
min-width: fit-content;
height: 96px;
border: none;
border-radius: 0 0 10px 10px;
opacity: 1;
color: #b5c401;
font-size: 35px;
font-weight: bold;
display: flex;
align-items: center;
justify-content: center;
outline: none;
cursor: pointer;
font-style: italic;
background-color: #ffffff;

@media (max-width: 991px) {
    height: 48px;
    margin-bottom: 8px;
    font-size: 32px;
    display: flex;
    flex-direction: row;
}

a {
    display: flex;
    align-items: center;
    justify-content: center;
    outline: none;
    cursor: pointer;
    font-style: italic;
    cursor: pointer;
    text-decoration: none;
    color: #b5c401;
    background-color: #ffffff;
}


`;

export const HandleButton = styled.button`
margin-top: 30px;
background-color: transparent;
border: none;
font-size: 35px;
font-weight: bold;
color: #707070;
display: flex;
align-items: center;
justify-content: center;


@media (max-width: 991px) {
    height: 48px;
    margin-bottom: 8px;
    font-size: 32px;
    display: flex;
    flex-direction: row;
}

a {
    display: flex;
    align-items: center;
    justify-content: center;
    outline: none;
    cursor: pointer;
    font-style: italic;
    cursor: pointer;
    text-decoration: none;
    color: #707070;
}

`;
