import React from "react";
import {
    Container,
    Form,
    Input,
    SubmitButton,
    HandleButton,
} from "./styles";

const Authentication = () => {
    return (
            <Container>
                <h1>Reset password</h1>
                <Form >
                    <Input
                        placeholder="Email"
                        id="email"
                        type="email"
                    />
                    <SubmitButton type="submit">
                        Send link
                    </SubmitButton>
                </Form>
                <HandleButton >
                    Back
                </HandleButton>
            </Container>
    );
};

export default Authentication;
