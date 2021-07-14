import React, {useState} from "react";
import Registration from "../../components/Authentication/register";
import { Container, Title } from "./styles";

const Register = () => {
    return (
            <Container>
                <Title>
                    <h2>The Greatest App</h2>
                    <div>for</div>
                    <h1>LOTTERY</h1>
                </Title>
                <Registration  />
            </Container>
    );
};

export default Register;
