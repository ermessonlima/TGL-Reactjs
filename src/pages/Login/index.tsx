import React from "react";
import Authentication from "../../components/Authentication/auth";
import Footer from "../../components/Footer";
import Register from "../../components/Authentication/register";
import { Container, Title } from "./styles";
import Header from "../../components/Header";

const Login = () => {
    return (
            <Container>
                <Title>
                    <h2>The Greatest App</h2>
                    <div>for</div>
                    <h1>LOTTERY</h1>
                </Title>
                <Register />
            </Container>
    );
};

export default Login;
