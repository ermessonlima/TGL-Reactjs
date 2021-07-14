import React from "react";
import {
    Container,
    Form,
    Input,
    SubmitButton,
    HandleButton,
} from "./styles";
import {Link} from 'react-router-dom';
import {  FiArrowRight } from "react-icons/fi";

const Authentication = () => {
    return (
            <Container>
                <h1>Registration</h1>
                <Form >
                    <Input
                        placeholder="Username"
                        id="username"
                        type="username"
                    />
                    <Input
                        placeholder="Email"
                        type="email"
                        id="email"
                    />
                    <Input
                        placeholder="Password"
                        type="password"
                        id="password"
                    />
                    <SubmitButton type="submit">
                        Register <FiArrowRight />
                    </SubmitButton>
                </Form>
                <HandleButton >
                <Link to="/"> Back </ Link>
                </HandleButton>
            </Container>
    );
};

export default Authentication;
