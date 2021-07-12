import React from "react";
import {
    Container,
    Form,
    Input,
    RecoverButton,
    SubmitButton,
    HandleButton,
} from "./styles";

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
                    I forgot my password
                </RecoverButton>
                <SubmitButton type="submit">
                    Log In 
                </SubmitButton>
            </Form>
            <HandleButton >
                Sign Up 
            </HandleButton>
        </Container>
);
};

export default Authentication;
