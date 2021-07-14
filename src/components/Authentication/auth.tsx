import React from "react";
import {
    Container,
    Form,
    Input,
    RecoverButton,
    SubmitButton,
    HandleButton,
} from "./styles";
import { Link } from 'react-router-dom';
import { FiArrowRight } from "react-icons/fi";

const Authentication = () => {



    return (
        <Container>
            <h1>Authentication</h1>
            <Form onSubmit={() => { }}>
                <Input
                    placeholder="Email"
                    id="email"
                    type="email"
                />
                <Input
                    placeholder="Password"
                    id="password"
                    type="password"
                />
                <RecoverButton >
                    <Link to="/recover">  I forgot my password  </ Link>

                </RecoverButton>
                <SubmitButton type="submit">
                    <Link to="/home">
                        Log In
                        <FiArrowRight style={{ background: '#fff' }} />
                    </ Link>
                </SubmitButton>
            </Form>
            <HandleButton >
                <Link to="/register">
                    Sign Up
                    <FiArrowRight />
                </ Link>
            </HandleButton>
        </Container>
    );
};

export default Authentication;
